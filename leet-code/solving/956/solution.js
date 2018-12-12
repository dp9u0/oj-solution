/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function (rods) {
  let f = {};
  f[0] = 0;
  for (let i = 0; i < rods.length; i++) {
    let fCopy = Object.assign({}, f);
    const x = rods[i];
    console.log(`${x}:`);
    const keys = Object.keys(fCopy);
    for (const key in keys) {
      const diff = Number(key);
      const diff1 = Math.abs(x - diff);
      const diff2 = x + diff;
      //TODO:
      f[diff1] = Math.max(diff1, f[diff1] || 0);
      f[diff2] = Math.max(diff2, f[diff2] || 0);
    }
    console.log(fCopy);
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