/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  let array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  return sortedArrayToBST(array);
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return arrayToBst(nums, 0, nums.length - 1);
};

function arrayToBst(nums, start, end) {
  if (start === end) {
    return {
      val: nums[start],
      left: null,
      right: null
    }
  }
  if (start > end) {
    return null;
  }
  let mid = ~~((start + end) / 2);
  return {
    val: nums[mid],
    left: arrayToBst(nums, start, mid - 1),
    right: arrayToBst(nums, mid + 1, end)
  };
}