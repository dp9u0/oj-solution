/*
 * @lc app=leetcode.cn id=LCP 69 lang=javascript
 *
 * [LCP 69] Hello LeetCode!
 */

// @lc code=start
// target word "helloleetcode": e x4, l x3, o x2, h/t/c/d x1 (13 cards)
const TARGET = [
  { ch: 'e', cap: 4 },
  { ch: 'l', cap: 3 },
  { ch: 'o', cap: 2 },
  { ch: 'h', cap: 1 },
  { ch: 't', cap: 1 },
  { ch: 'c', cap: 1 },
  { ch: 'd', cap: 1 },
];
const K = TARGET.length;
const chToSlot = {};
for (let i = 0; i < K; i++) chToSlot[TARGET[i].ch] = i;
const capArr = TARGET.map(t => t.cap);

// mixed-radix encode of remaining counts (counts[i] in [0, capArr[i]])
const radix = capArr.map(c => c + 1);
const pow = new Array(K);
pow[0] = 1;
for (let i = 1; i < K; i++) pow[i] = pow[i - 1] * radix[i - 1];
const encode = (counts) => {
  let code = 0;
  for (let i = 0; i < K; i++) code += counts[i] * pow[i];
  return code;
};
const FULL = encode(capArr);
const EMPTY = 0;

/**
 * @param {string[]} words
 * @return {number}
 */
var Leetcode = function(words) {
  // For each word, enumerate every feasible extracted-subset:
  //   { counts (slot counts), minRemovalCost }
  const wordOptions = [];
  for (const w of words) {
    const L = w.length;
    const chars = w.split('');
    const size = 1 << L;
    // rm[mask] = min cost to extract exactly the positions in `mask`
    // (order matters: cost of removing position p = leftSurvivors * rightSurvivors)
    const rm = new Array(size).fill(Infinity);
    rm[0] = 0;
    for (let mask = 0; mask < size; mask++) {
      if (rm[mask] === Infinity) continue;
      const curLen = L - popcount(mask);
      for (let j = 0; j < L; j++) {
        if (mask & (1 << j)) continue;
        let leftRm = 0;
        for (let q = 0; q < j; q++) if (mask & (1 << q)) leftRm++;
        const left = j - leftRm;
        const right = curLen - 1 - left;
        const nxt = mask | (1 << j);
        const nc = rm[mask] + left * right;
        if (nc < rm[nxt]) rm[nxt] = nc;
      }
    }
    // build feasible options: only subsets whose letters are all target letters
    // and whose counts do not exceed the target counts
    const opts = [];
    for (let mask = 1; mask < size; mask++) {
      const counts = new Array(K).fill(0);
      let feasible = true;
      for (let j = 0; j < L; j++) {
        if (mask & (1 << j)) {
          const slot = chToSlot[chars[j]];
          if (slot === undefined || ++counts[slot] > capArr[slot]) { feasible = false; break; }
        }
      }
      if (feasible) opts.push({ counts, cost: rm[mask] });
    }
    wordOptions.push(opts);
  }

  // 0/1-style DP across words. state = remaining counts (encoded), value = min cost.
  let dp = new Map();
  dp.set(FULL, 0);
  for (const opts of wordOptions) {
    const ndp = new Map();
    const setMin = (m, code, cost) => {
      const prev = m.get(code);
      if (prev === undefined || cost < prev) m.set(code, cost);
    };
    for (const [code, cost] of dp) {
      setMin(ndp, code, cost); // extract nothing from this word
      // decode counts of current state once
      const cnt = new Array(K);
      for (let i = 0; i < K; i++) cnt[i] = Math.floor(code / pow[i]) % radix[i];
      for (const o of opts) {
        let ok = true;
        for (let i = 0; i < K; i++) if (cnt[i] < o.counts[i]) { ok = false; break; }
        if (!ok) continue;
        let nc = 0;
        for (let i = 0; i < K; i++) nc += (cnt[i] - o.counts[i]) * pow[i];
        setMin(ndp, nc, cost + o.cost);
      }
    }
    dp = ndp;
  }
  const res = dp.get(EMPTY);
  return res === undefined ? -1 : res;
};

function popcount(x) {
  let c = 0;
  while (x) { x &= x - 1; c++; }
  return c;
}
// @lc code=end

// TEST:
const assert = require('assert');

// brute reference: independent per-word removal cost by trying every order
// (permutations of extracted positions), plus recursive exact cover over words.
function brute(words) {
  const K = 7;
  const capArr = [4, 3, 2, 1, 1, 1, 1];
  const chToSlot = { e: 0, l: 1, o: 2, h: 3, t: 4, c: 5, d: 6 };

  function costExtract(word, selArr) {
    const L = word.length;
    const selSet = new Set(selArr);
    let best = Infinity;
    const nSel = selArr.length;
    const full = (1 << nSel) - 1;
    const rec = (used, survivors, acc) => {
      if (used === full) { if (acc < best) best = acc; return; }
      for (let i = 0; i < nSel; i++) {
        if (used & (1 << i)) continue;
        const orig = selArr[i];
        let leftCount = 0;
        for (const p of survivors) if (p < orig) leftCount++;
        const curLen = survivors.size;
        const cost = leftCount * (curLen - 1 - leftCount);
        const nn = new Set(survivors);
        nn.delete(orig);
        rec(used | (1 << i), nn, acc + cost);
      }
    };
    // survivors initially = every position; extracting deletes that position
    const all = new Set();
    for (let p = 0; p < L; p++) all.add(p);
    rec(0, all, 0);
    return best;
  }

  const wordOpts = [];
  for (const w of words) {
    const L = w.length;
    const opts = [];
    for (let mask = 0; mask < (1 << L); mask++) {
      const cnt = new Array(K).fill(0);
      const selArr = [];
      let ok = true;
      for (let j = 0; j < L; j++) {
        if (mask & (1 << j)) {
          const s = chToSlot[w[j]];
          if (s === undefined) { ok = false; break; }
          cnt[s]++; selArr.push(j);
          if (cnt[s] > capArr[s]) { ok = false; break; }
        }
      }
      if (!ok) continue;
      const cost = mask === 0 ? 0 : costExtract(w, selArr);
      opts.push({ cnt, cost });
    }
    wordOpts.push(opts);
  }

  let best = Infinity;
  function rec(i, need, acc) {
    if (i === wordOpts.length) {
      if (need.every(x => x === 0)) best = Math.min(best, acc);
      return;
    }
    for (const o of wordOpts[i]) {
      const ok = need.every((v, idx) => v >= o.cnt[idx]);
      if (!ok) continue;
      rec(i + 1, need.map((v, idx) => v - o.cnt[idx]), acc + o.cost);
    }
  }
  rec(0, capArr.slice(), 0);
  return best === Infinity ? -1 : best;
}

// LeetCode examples
assert.strictEqual(Leetcode(["hold", "engineer", "cost", "level"]), 5);
assert.strictEqual(Leetcode(["hello", "leetcode"]), 0);

// one word containing everything (extract all = free)
assert.strictEqual(Leetcode(["helloleetcode"]), 0);
// impossible cases
assert.strictEqual(Leetcode(["hi", "there"]), -1);
assert.strictEqual(Leetcode([]), -1);

// cross-check vs brute on the examples + random small instances
assert.strictEqual(Leetcode(["hold", "engineer", "cost", "level"]), brute(["hold", "engineer", "cost", "level"]));
assert.strictEqual(Leetcode(["hello", "leetcode"]), brute(["hello", "leetcode"]));

let seed = 777001;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
const alphabet = "hellotcde"; // biased to target letters + a few junk
for (let t = 0; t < 500; t++) {
  const nw = 1 + Math.floor(rnd() * 3);
  const words = [];
  for (let i = 0; i < nw; i++) {
    const L = 1 + Math.floor(rnd() * 4);
    let s = '';
    for (let j = 0; j < L; j++) s += alphabet[Math.floor(rnd() * alphabet.length)];
    words.push(s);
  }
  const got = Leetcode(words);
  const exp = brute(words);
  assert.strictEqual(got, exp, `mismatch words=${JSON.stringify(words)} got=${got} exp=${exp}`);
}

console.log('All tests passed!');
console.log('ex1 =', Leetcode(["hold", "engineer", "cost", "level"]));
console.log('ex2 =', Leetcode(["hello", "leetcode"]));
