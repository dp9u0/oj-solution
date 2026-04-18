/*
 * @lc app=leetcode id=2193 lang=javascript
 *
 * [2193] Minimum Number of Moves to Make Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minMovesToMakePalindrome = function(s) {
  const arr = s.split('');
  let n = arr.length;
  let result = 0;

  let left = 0, right = n - 1;

  while (left < right) {
    // Find matching character from right
    let r = right;
    while (r > left && arr[r] !== arr[left]) r--;

    if (r === left) {
      // This character has odd count, swap it one step right
      [arr[left], arr[left + 1]] = [arr[left + 1], arr[left]];
      result++;
      continue;
    }

    // Move arr[r] to position right by swapping
    for (let i = r; i < right; i++) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      result++;
    }

    left++;
    right--;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(minMovesToMakePalindrome('aabb') === 2);
console.log(minMovesToMakePalindrome('letelt') === 2);
console.log(minMovesToMakePalindrome('a') === 0);
console.log(minMovesToMakePalindrome('aa') === 0);
console.log(minMovesToMakePalindrome('abab') === 1);
console.log(minMovesToMakePalindrome('abcdabcd') === 6);
