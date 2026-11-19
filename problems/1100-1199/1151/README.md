# [1151] 最少交换次数来组合所有的 1

## Description


```md
https://leetcode.cn/problems/minimum-swaps-to-group-all-1s-together/description/
* algorithms
* Medium (56.64%)
* Likes:    128
* Dislikes: -
* Testcase Example:  '[1,0,1,0,1]'
给出一个二进制数组 data，你需要通过交换位置，将数组中 任何位置 上的 1 组合到一起，并返回所有可能中所需 最少的交换次数。

示例 1:
输入: data = [1,0,1,0,1]
输出: 1
解释:
有三种可能的方法可以把所有的 1 组合在一起：
[1,1,1,0,0]，交换 1 次；
[0,1,1,1,0]，交换 2 次；
[0,0,1,1,1]，交换 1 次。
所以最少的交换次数为 1。
示例  2:
输入：data = [0,0,0,1,0]
输出：0
解释：
由于数组中只有一个 1，所以不需要交换。
示例 3:
输入：data = [1,0,1,0,1,0,0,1,1,0,1]
输出：3
解释：
交换 3 次，一种可行的只用 3 次交换的解决方案是 [0,0,0,0,0,1,1,1,1,1,1]。
示例 4:
输入: data = [1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1]
输出: 8

提示:
1 <= data.length <= 105
data[i] == 0 or 1.
Hint 1: How many 1's should be grouped together ? Is not a fixed number?
Hint 2: Yeah it's just the number of 1's the whole array has. Let's name this number as ones
Hint 3: Every subarray of size of ones, needs some number of swaps to reach, Can you find the number of swaps needed to group all 1's in this subarray?
Hint 4: It's the number of zeros in that subarray.
Hint 5: Do you need to count the number of zeros all over again for every position ?
Hint 6: Use Sliding Window technique.

```

## Solution

[SourceCode](./solution.js)

## Translation

Minimum number of swaps (any two positions) to gather all 1s into one contiguous block.

- Example: [1,0,1,0,1] → `1`

## Approach

**定长滑窗**。目标块长度 = 全数组 1 的个数 total;把所有 1 聚进某个长度为 total 的窗口,所需交换数 = 窗口内 0 的个数(窗口外 1 换进来)。滑一遍长度 total 的窗口取最少 0。O(n)。
