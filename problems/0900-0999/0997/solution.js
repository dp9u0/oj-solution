/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let trusted = { '1': 0 }; // 被信任的人(潜在的法官列表)
  let trusting = new Set(); // 信任别人的人
  trust.forEach(([from, to]) => {
    trusted[to] = (trusted[to] || 0) + from;
    trusting.add(from);
  });
  const total = (n + 1) * n / 2;
  for (const [key, value] of Object.entries(trusted)) {
    let index = Number(key);
    if (value === (total - index) && !trusting.has(index)) {
      return index;
    }
  }
  return -1;
};

// TEST:
let n, trust, result;

n = 2, trust = [[1, 2]];
result = findJudge(n, trust);
console.log(result);

n = 3, trust = [[1, 3], [2, 3]]
result = findJudge(n, trust);
console.log(result);

n = 3, trust = [[1, 3], [2, 3], [3, 1]]
result = findJudge(n, trust);
console.log(result);

n = 3, trust = [[1, 2], [2, 3]]
result = findJudge(n, trust);
console.log(result);

n = 4, trust = [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]
result = findJudge(n, trust);
console.log(result);

n = 1, trust = []
result = findJudge(n, trust);
console.log(result);