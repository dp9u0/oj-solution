/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let mask = ~0; // 11111111 11111111 11111111 11111111
  while (num & mask) mask <<= 1; // 11111111 11111111 11111100 00000000
  mask = ~mask; // 00000000 00000000 00000011 11111111
  return mask & ~num;
};