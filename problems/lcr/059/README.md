# [LCR 059] 数据流中的第 K 大元素

## Description


```md
https://leetcode.cn/problems/jBjn9C/description/
* algorithms
* Easy (62.28%)
* Likes:    64
* Dislikes: -
* Testcase Example:  '["KthLargest","add","add","add","add","add"]\n' +
'[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]'
设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。
请实现 KthLargest 类：
KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。

示例：
输入：
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
输出：
[null, 4, 5, 5, 8, 8]
解释：
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8

提示：
1 <= k <= 104
0 <= nums.length <= 104
-104 <= nums[i] <= 104
-104 <= val <= 104
最多调用 add 方法 104 次
题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素

注意：本题与主站 703 题相同： https://leetcode.cn/problems/kth-largest-element-in-a-stream/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Design a class to find the k-th largest element in a data stream. Note that this is the k-th largest element in sorted order, not the k-th distinct element.

Implement the `KthLargest` class:
- `KthLargest(int k, int[] nums)` initializes the object with the integer `k` and the integer stream `nums`.
- `int add(int val)` inserts `val` into the stream and returns the current k-th largest element.

**Example:** calls with `k=3, nums=[4,5,8,2]`, adds 3,5,10,9,4 → outputs `[null,4,5,5,8,8]`

**Constraints:** `1 <= k <= 10^4`, `0 <= nums.length <= 10^4`, values in `[-10^4, 10^4]`, at most `10^4` add calls, guarantee ≥ k elements when querying.

Note: same as LeetCode 703.

---

## Approach

Maintain a **min-heap of size exactly `k`**:

- The heap holds the k largest elements seen so far; its top (minimum) is exactly the k-th largest.
- In the constructor, push all initial `nums`, but whenever the heap size exceeds `k`, pop the smallest.
- `add(val)`: push `val`, pop if size exceeds `k`, then return the heap top.

Since only the k largest are retained, every later element that's too small to be in the top-k is ignored by the size cap.

Complexity: heap ops are `O(log k)`; overall `O(n log k + m log k)` for constructor + m adds.
