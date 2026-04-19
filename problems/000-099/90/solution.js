/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let results = [
    []
  ];
  let set = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let append = [];
    for (const result of results) {
      let r = [...result, nums[i]];
      let key = r.join(",");
      if (!set.has(key)) {
        set.add(key);
        append.push(r);
      }
    }
    results = results.concat(append);
  }
  return results;
};

/**
// TEST:
console.log(subsetsWithDup([1, 2, 2]));
*/