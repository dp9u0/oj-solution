# [781] Rabbits in Forest

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rabbits-in-forest/description/)

* algorithms
* Medium (58.02%)
* Likes:    2146
* Dislikes: 991
* Testcase Example:  '[1,1,2]'

```md
There is a forest with an unknown number of rabbits. We asked n rabbits 'How many other rabbits have the same color as you?' and collected the answers in an integer array answers where answers[i] is the answer of the ith rabbit.
Given the array answers, return the minimum number of rabbits that could be in the forest.

Example 1:

Input: answers = [1,1,2]
Output: 5
Explanation:
The two rabbits that answered '1' could both be the same color, say red.
The rabbit that answered '2' can&#39;t be red or the answers would be inconsistent.
Say the rabbit that answered '2' was blue.
Then there should be 2 other blue rabbits in the forest that didn&#39;t answer into the array.
The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn&#39;t.

Example 2:

Input: answers = [10,10,10]
Output: 11


Constraints:

1 <= answers.length <= 1000
0 <= answers[i] < 1000


```

## 中文翻译

每只兔子回答"还有多少只和我同色"，给定回答数组，求森林中最少兔子数。

## 解题思路

回答 x 的兔子表示同色共有 x+1 只。用哈希表统计每种回答的次数。若 count[x] 只兔子回答 x，最少需要 ceil(count[x] / (x+1)) 组，每组 x+1 只。

## Solution

[SourceCode](./solution.js)
