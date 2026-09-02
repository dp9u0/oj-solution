/*
 * @lc app=leetcode.cn id=LCR 045 lang=javascript
 *
 * [LCR 045] 找树左下角的值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  // BFS level-order traversal, track the first node of each level.
  const queue = [root]
  let result = root.val

  while (queue.length) {
    const size = queue.length
    result = queue[0].val
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return result
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree')

function assertEqual(actual, expected, msg) {
  console.log(`${actual === expected ? 'PASS' : 'FAIL'} - ${msg}: ${actual}`)
}

assertEqual(findBottomLeftValue(arrayToTree([2, 1, 3])), 1, 'single level')
assertEqual(findBottomLeftValue(arrayToTree([1, 2, 3, 4, null, 5, 6, null, null, 7])), 7, 'multi level')
assertEqual(findBottomLeftValue(arrayToTree([1])), 1, 'single node')
assertEqual(findBottomLeftValue(arrayToTree([1, 2, 3, 4])), 4, 'leftmost of last level')
assertEqual(findBottomLeftValue(arrayToTree([1, null, 2, null, 3])), 3, 'right-leaning chain')
