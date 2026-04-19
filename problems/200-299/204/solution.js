/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let isPrime = [];
  for (let i = 2; i < n; i++) {
    isPrime[i] = true;
  }
  // Loop's ending condition is i * i < n instead of i < sqrt(n)
  // to avoid repeatedly calling an expensive function sqrt().
  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }
  //count
  let count = 0;
  for (let i = 2; i < n; i++) {
    isPrime[i] && (count++);
  }
  return count;
};