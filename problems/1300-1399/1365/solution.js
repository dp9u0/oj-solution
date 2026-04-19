/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const map = {}
  let max = 0; // 最小值是0
  let min = 100; // 最大值是100
  nums.forEach(num => {
    let v = map[num];
    if (!v) map[num] = v = { c: 0, b: 0 }
    v.c++;
    max = Math.max(num, max);
    min = Math.min(num, min);
  });
  for (let pre = min, c = min + 1; c <= max; c++) {
    const cValue = map[c];
    if (cValue) {
      const preValue = map[pre];
      cValue.b = preValue.c + preValue.b;
      pre = c;
    }
  }
  return nums.map(n => map[n].b)
};


// TEST:
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]))
console.log(smallerNumbersThanCurrent([7, 7, 7, 7,]))