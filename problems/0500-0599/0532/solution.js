/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (nums === null || nums.length === 0 || k < 0) return 0
  let map = {},
    count = 0
  nums.forEach(x => {
    map[x] = (map[x] || 0) + 1
  })
  if (k === 0) {
    Object.keys(map).forEach(key => {
      if (map[key] >= 2) count++
    })
  } else {
    Object.keys(map).forEach(key => {
      if (map[Number(key) + k]) count++
    })
  }
  return count
};