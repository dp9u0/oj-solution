/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let res = '';
  let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let f = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  --k;
  for (let i = n; i >= 1; --i) {
    let j = ~~(k / f[i - 1]);
    res += nums[j];
    nums.splice(j, 1);
    k %= f[i - 1];
  }
  return res;
};


//TEST:
console.log(getPermutation(4, 2))