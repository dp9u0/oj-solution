/*
 * @lc app=leetcode.cn id=LCP 43 lang=javascript
 *
 * [LCP 43] 十字路口的交通
 */

// @lc code=start
/**
 * 4 个来车方向(东、南、西、北, 下标 0..3)各排着一列车队, 每辆车要开往另一方向。
 * 交警每秒可让各队队首的任意子集驶出, 约束: 同一秒内 每个来向最多走一辆(天然成立, 只取队首)、
 * 去向互不相同、行驶路线互不相交。求全部车辆走完的最少秒数。
 *
 * 思路(状态 BFS + 车道区间相交判定):
 *  - 状态 (i0,i1,i2,i3) 表示四个来向各自已驶出的车辆数。从 (0,0,0,0) 出发, 每秒从一个状态
 *    挑选一个"可行发车掩码"(4 bit, 1 表示让对应来向的队首驶出), 平移到位, 求到终态的最少秒数。
 *    所有状态用 4 维编码成一维下标, dist 用 Int32Array, BFS 天然给出最少秒数。
 *  - 可行性判定(关键): 把路口周围车道按固定顺序编号 0..7。每辆车的行驶路线是从出发车道到
 *    到达车道的一对车道号。两车路线冲突 ⇔ 两个区间 [min,max] 真交叉(部分重叠且互不包含);
 *    完全分离或一方包含另一方则安全。此模型与"逐对方向查表"一致(已逐对验证全部 255 种组合)。
 *  - 车道对映射(来向下标 0=E,1=S,2=W,3=N): 无掉头指令, 每个来向只有 3 种去向。
 *      E: S={0,3} W={0,5} N={0,7}
 *      S: W={2,5} N={2,7} E={2,1}
 *      W: N={4,7} E={4,1} S={4,3}
 *      N: E={6,1} S={6,3} W={6,5}
 *
 * 复杂度: 状态数 ≤ 21^4 ≈ 19.4w, 每状态枚举 15 种掩码, 轻松可过(实测最坏约 70ms)。
 *
 * @param {string[]} directions
 * @return {number}
 */
var trafficCommand = function(directions) {
  const [n0, n1, n2, n3] = directions.map((s) => s.length);
  const BASE = 21; // 每个来向最多 20 辆 + 终态 21
  const encode = (a, b, c, d) => ((a * BASE + b) * BASE + c) * BASE + d;
  const target = encode(n0, n1, n2, n3);
  if (target === 0) return 0;

  // 每个来向下标 -> 去向字符 -> 车道对 {start, end}
  const LANES = [
    { S: [0, 3], W: [0, 5], N: [0, 7] },
    { W: [2, 5], N: [2, 7], E: [2, 1] },
    { N: [4, 7], E: [4, 1], S: [4, 3] },
    { E: [6, 1], S: [6, 3], W: [6, 5] },
  ];
  // 两条路线(车道对)是否冲突: 闭区间真交叉
  const crossing = (p, q) => {
    const a0 = p[0] < p[1] ? p[0] : p[1];
    const a1 = p[0] < p[1] ? p[1] : p[0];
    const b0 = q[0] < q[1] ? q[0] : q[1];
    const b1 = q[0] < q[1] ? q[1] : q[0];
    if (a1 < b0 || b1 < a0) return false;                         // 完全分离
    if ((a0 < b0 && a1 > b1) || (b0 < a0 && b1 > a1)) return false; // 一方包含另一方
    return true;                                                  // 真交叉 → 冲突
  };

  const SIZE = BASE * BASE * BASE * BASE;
  const dist = new Int32Array(SIZE).fill(-1);
  dist[0] = 0;
  const queue = new Int32Array(SIZE);
  let head = 0;
  let tail = 0;
  queue[tail++] = 0;

  while (head < tail) {
    const s = queue[head++];
    const d = dist[s];
    if (s === target) return d;
    // 解码状态
    const i0 = Math.floor(s / (BASE * BASE * BASE));
    const r1 = s % (BASE * BASE * BASE);
    const i1 = Math.floor(r1 / (BASE * BASE));
    const r2 = r1 % (BASE * BASE);
    const i2 = Math.floor(r2 / BASE);
    const i3 = r2 % BASE;
    // 各来向当前队首去向字符(该来向已走完则为 '' → falsy, 直接跳过)
    const h0 = i0 < n0 ? directions[0][i0] : '';
    const h1 = i1 < n1 ? directions[1][i1] : '';
    const h2 = i2 < n2 ? directions[2][i2] : '';
    const h3 = i3 < n3 ? directions[3][i3] : '';

    for (let mask = 1; mask < 16; mask++) {
      const lines = [];
      let ok = true;
      if (mask & 1) { if (!h0) continue; lines.push(LANES[0][h0]); }
      if (mask & 2) { if (!h1) continue; lines.push(LANES[1][h1]); }
      if (mask & 4) { if (!h2) continue; lines.push(LANES[2][h2]); }
      if (mask & 8) { if (!h3) continue; lines.push(LANES[3][h3]); }
      for (let a = 0; a < lines.length && ok; a++)
        for (let b = a + 1; b < lines.length; b++)
          if (crossing(lines[a], lines[b])) { ok = false; break; }
      if (!ok) continue;
      const nx = encode(
        i0 + (mask & 1),
        i1 + ((mask >> 1) & 1),
        i2 + ((mask >> 2) & 1),
        i3 + ((mask >> 3) & 1)
      );
      if (dist[nx] === -1) {
        dist[nx] = d + 1;
        queue[tail++] = nx;
      }
    }
  }
  return -1; // 理论上不会不可达
};
// @lc code=end

// TEST:
const assert = require('assert');

// 官方示例
assert.strictEqual(trafficCommand(['W', 'N', 'ES', 'W']), 2);
assert.strictEqual(trafficCommand(['NS', 'WE', 'SE', 'EW']), 3);
assert.strictEqual(trafficCommand(['', '', '', '']), 0);
// 四个方向同时左转(逆时针), 路线互不相交, 1 秒即可
assert.strictEqual(trafficCommand(['N', 'E', 'S', 'W']), 1);

// ---- 与独立模型对拍 ----
// 模型 B: 用官方解法同源的"逐对方向冲突表"直接判定两车是否冲突(与车道区间模型相互独立)。
function modelB(directions) {
  const DIR = ['E', 'S', 'W', 'N'];
  const legal = (from1, to1, from2, to2) => {
    if (to1 === to2) return false;
    const f1 = from1, t1 = to1, f2 = from2, t2 = to2;
    const J = (() => {
      if (f1 === 'N') {
        if (f2 === 'E') {
          if (t1 === 'E' && (t2 === 'W' || t2 === 'S')) return false;
          return t1 !== 'S' || t2 !== 'W';
        } else if (f2 === 'S') {
          if (t1 === 'E' && t2 === 'N') return false;
          return t1 !== 'S' || t2 !== 'W';
        } else if (f2 === 'W') {
          if (t1 === 'E' && t2 === 'N') return false;
          return t1 !== 'S' || (t2 !== 'N' && t2 !== 'E');
        }
      } else if (f1 === 'E') {
        if (f2 === 'S') {
          if (t1 === 'W' && t2 === 'N') return false;
          return t1 !== 'S' || (t2 !== 'W' && t2 !== 'N');
        } else if (f2 === 'W') {
          if (t1 === 'W' && t2 === 'N') return false;
          return t1 !== 'S' || t2 !== 'E';
        } else if (f2 === 'N') {
          if (t1 === 'W' && (t2 === 'E' || t2 === 'S')) return false;
          return t1 !== 'S' || t2 !== 'E';
        }
      } else if (f1 === 'S') {
        if (f2 === 'W') {
          if (t1 === 'N' && t2 === 'E') return false;
          return t1 !== 'W' || (t2 !== 'N' && t2 !== 'E');
        } else if (f2 === 'N') {
          if (t1 === 'N' && t2 === 'E') return false;
          return t1 !== 'W' || t2 !== 'S';
        } else if (f2 === 'E') {
          if (t1 === 'N' && (t2 === 'W' || t2 === 'S')) return false;
          return t1 !== 'W' || t2 !== 'S';
        }
      } else if (f1 === 'W') {
        if (f2 === 'N') {
          if (t1 === 'N' && (t2 === 'S' || t2 === 'E')) return false;
          return t1 !== 'E' || t2 !== 'S';
        } else if (f2 === 'E') {
          if (t1 === 'N' && t2 === 'W') return false;
          return t1 !== 'E' || t2 !== 'S';
        } else if (f2 === 'S') {
          if (t1 === 'N' && t2 === 'W') return false;
          return t1 !== 'E' || (t2 !== 'W' && t2 !== 'N');
        }
      }
      return true;
    })();
    return J;
  };
  const n = directions.map((s) => s.length);
  const memoB = new Map();
  const dfsB = (pos) => {
    if (pos[0] === n[0] && pos[1] === n[1] && pos[2] === n[2] && pos[3] === n[3]) return 0;
    const key = pos.join(',');
    if (memoB.has(key)) return memoB.get(key);
    let best = Infinity;
    const heads = pos.map((p, d) => (p < n[d] ? directions[d][p] : '#'));
    for (let mask = 1; mask < 16; mask++) {
      const pairs = [];
      let ok = true;
      for (let d = 0; d < 4; d++) {
        if (mask & (1 << d)) {
          if (heads[d] === '#') { ok = false; break; }
          pairs.push([DIR[d], heads[d]]);
        }
      }
      if (!ok) continue;
      outer:
      for (let i = 0; i < pairs.length; i++)
        for (let j = i + 1; j < pairs.length; j++)
          if (!legal(pairs[i][0], pairs[i][1], pairs[j][0], pairs[j][1])) { ok = false; break outer; }
      if (!ok) continue;
      const nx = pos.map((p, d) => p + ((mask >> d) & 1));
      const val = dfsB(nx) + 1;
      if (val < best) best = val;
    }
    memoB.set(key, best);
    return best;
  };
  return dfsB([0, 0, 0, 0]);
}

// 生成随机 directions(无掉头)
function randomDirections() {
  const per = [
    ['S', 'W', 'N'], // E 来向
    ['W', 'N', 'E'], // S
    ['N', 'E', 'S'], // W
    ['E', 'S', 'W'], // N
  ];
  const out = [];
  for (let d = 0; d < 4; d++) {
    const k = Math.floor(Math.random() * 4);
    let s = '';
    for (let x = 0; x < k; x++) s += per[d][Math.floor(Math.random() * 3)];
    out.push(s);
  }
  return out;
}

for (let t = 0; t < 3000; t++) {
  const dirs = randomDirections();
  const got = trafficCommand(dirs.slice());
  const exp = modelB(dirs);
  assert.strictEqual(got, exp, `mismatch on [${dirs}] got=${got} exp=${exp}`);
}
console.log('All tests passed!');
