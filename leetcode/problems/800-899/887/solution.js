const memo = new Map();
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
  const memoKey = N * 100 + K;
  let result = memo.get(memoKey);
  if (result === undefined || result === null) {
    if (N === 0) {
      result = 0;
    } else if (K === 1) {
      result = N;
    } else {
      let lo = 1, hi = N;
      while (lo + 1 < hi) {
        let middle = ~~((lo + hi) / 2);
        let t1 = superEggDrop(K - 1, middle - 1);
        let t2 = superEggDrop(K, N - middle);
        if (t1 < t2) {
          lo = middle;
        } else if (t1 > t2) {
          hi = middle;
        } else {
          lo = hi = middle;
        }
      }
      result = 1 + Math.min(Math.max(superEggDrop(K - 1, lo - 1), superEggDrop(K, N - lo)), Math.max(superEggDrop(K - 1, hi - 1), superEggDrop(K, N - hi)));
    }
    memo.set(memoKey, result);
  }
  return result;
};

// TEST:

let K, N, result;

K = 1, N = 2;
result = superEggDrop(K, N);
console.log(result)

K = 2, N = 6;
result = superEggDrop(K, N);
console.log(result)

K = 3, N = 14;
result = superEggDrop(K, N);
console.log(result)