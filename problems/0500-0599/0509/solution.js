/**
 * @param {number} N
 * @return {number}
 */
var fib = function (n, fib_pre_1 = 0, fib_pre_2 = 1) {
  if (n === 0) {
    return fib_pre_1;
  }
  return fib(n - 1, fib_pre_2, fib_pre_1 + fib_pre_2);
}