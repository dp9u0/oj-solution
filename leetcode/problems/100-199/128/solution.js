/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let maxLength = 0;
  let map = new Map();
  for (const n of nums) {
    if (!map.has(n)) { // 避免重复更新
      let lLength = (map.get(n - 1) || 0);
      let rLength = (map.get(n + 1) || 0);
      let length = lLength + rLength + 1; // 当前所属连续区域的长度 左侧+右侧+1
      map.set(n, length);
      maxLength = Math.max(maxLength, length);
      map.set(n - lLength, length); // 更新最左侧
      map.set(n + rLength, length); // 更新最右侧
    }
  }
  return maxLength;
};

// TEST:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
