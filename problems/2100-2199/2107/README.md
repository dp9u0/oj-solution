# [2107] 分享 K 个糖果后独特口味的数量

## Description


```md
https://leetcode.cn/problems/number-of-unique-flavors-after-sharing-k-candies/description/
* algorithms
* Medium (51.59%)
* Likes:    16
* Dislikes: -
* Testcase Example:  '[1,2,2,3,4,3]\n3'
您将获得一个 从0开始的 整数数组 candies ，其中 candies[i] 表示第 i 个糖果的味道。你妈妈想让你和你妹妹分享这些糖果，给她 k 个 连续 的糖果，但你想保留尽可能多的糖果口味。
在与妹妹分享后，返回 最多 可保留的 独特 口味的糖果。

示例 1：
输入: candies = [1,2,2,3,4,3], k = 3
输出: 3
解释:
将[1,3]（含[2,2,3]）范围内的糖果加入[2,2,3]口味。
你可以吃各种口味的糖果[1,4,3]。
有3种独特的口味，所以返回3。
示例 2:
输入: candies = [2,2,2,2,3,3], k = 2
输出: 2
解释:
在[3,4]范围内（含[2,3]）的糖果中加入[2,3]口味。
你可以吃各种口味的糖果[2,2,2,3]。
有两种独特的口味，所以返回2。
请注意，你也可以分享口味为[2,2]的糖果，吃口味为[2,2,3,3]的糖果。
示例 3:
输入: candies = [2,4,5], k = 0
输出: 3
解释:
你不必给任何糖果。
你可以吃各种口味的糖果[2,4,5]。
有3种独特的口味，所以返回3。

提示:
0 <= candies.length <= 105
1 <= candies[i] <= 105
0 <= k <= candies.length
Hint 1: For every group of k consecutive candies, count the number of unique flavors not inside that group. Return the largest number of unique flavors.
Hint 2: When calculating an adjacent group of k consecutive candies, can you use some of your previous calculations?
Hint 3: Use a sliding window where the window is the group of k consecutive candies you are sharing. Use a hash map to store the number of candies of each type you can keep.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given a 0-indexed array `candies` where `candies[i]` is the flavor of candy i, you must give away `k` consecutive candies and keep the rest. Maximize the number of distinct flavors you keep; return that number.

Example 1:
Input: candies = [1,2,2,3,4,3], k = 3
Output: 3

Example 2:
Input: candies = [2,2,2,2,3,3], k = 2
Output: 2

Example 3:
Input: candies = [2,4,5], k = 0
Output: 3

Constraints: 0 <= candies.length <= 10^5, 1 <= candies[i] <= 10^5, 0 <= k <= candies.length.

## Approach

Fixed-size sliding window of the k given-away candies; maintain per-flavor counts of the remaining candies plus the number of flavors with a positive remaining count. Slide the window across the array, taking the maximum distinct count. Trivial cases: k = 0 keeps everything, k = n keeps nothing.

Time O(n).
