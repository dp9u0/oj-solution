/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function (rods) {
  let f = {
    '0': 0
  };
  for (let index = 0; index < rods.length; index++) {
    const x = rods[index];
    const fCopy = Object.assign({}, f);
    for (const key in fCopy) {
      const keyNum = Number(key);
      const value = fCopy[key];
      const diff1 = x + keyNum;
      const diff2 = Math.abs(x - keyNum);
      f[diff1] = Math.max(f[diff1] || 0, value); // 相加得到的
      f[diff2] = Math.max(f[diff2] || 0, value + Math.min(keyNum, x));
    }
  }
  return f[0];
};

//TEST:

let rods;

// rods = [1, 2, 3, 6]
// console.log(tallestBillboard(rods))

rods = [1, 2, 3, 4, 5, 6]
console.log(tallestBillboard(rods))

// rods = [1, 2]
// console.log(tallestBillboard(rods))