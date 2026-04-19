/*
 * @lc app=leetcode id=3761 lang=javascript
 *
 * [3761] Minimum Absolute Distance Between Mirror Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
  const lastSeen = new Map();
  let minDist = Infinity;

  for (let j = 0; j < nums.length; j++) {
    const rev = reverseNum(nums[j]);
    // Check if any previous element's reverse matches nums[j]
    // i.e., reverse(nums[i]) == nums[j] => nums[i] == reverse(nums[j])
    // So we look for reverse(nums[j]) in lastSeen? No...
    // We need reverse(nums[i]) == nums[j], so nums[i] == reverse(nums[j])
    // Wait: we need to find i < j where reverse(nums[i]) == nums[j]
    // That means nums[j] == reverse(nums[i])
    // Equivalently, reverse(nums[j]) == reverse(reverse(nums[i]))? No.
    // We need: for current j, find i where reverse(nums[i]) == nums[j]
    // So we store nums[i] in the map, and check if reverse(nums[j]) is in map? No.
    // reverse(nums[i]) == nums[j] means nums[j] is the reverse of nums[i].
    // So we should store reverse(nums[i]) in the map.
    // When we're at j, we check if nums[j] is in the map (i.e., nums[j] was previously seen as a reverse).

    if (lastSeen.has(nums[j])) {
      minDist = Math.min(minDist, j - lastSeen.get(nums[j]));
    }

    // Store reverse(nums[j]) for future lookups (always update to get closest index)
    lastSeen.set(rev, j);
  }

  return minDist === Infinity ? -1 : minDist;
};

function reverseNum(x) {
  let rev = 0;
  while (x > 0) {
    rev = rev * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return rev;
}
// @lc code=end

// TEST:
console.log(minMirrorPairDistance([12, 21, 45, 33, 54])); // 1
console.log(minMirrorPairDistance([120, 21])); // 1
console.log(minMirrorPairDistance([21, 120])); // -1
console.log(minMirrorPairDistance([1, 1])); // 1 (reverse(1)=1)
console.log(minMirrorPairDistance([10, 1])); // 1 (reverse(10)=1)
console.log(minMirrorPairDistance([1000, 100, 10, 1, 100, 10, 1])); // 1
