# [LCP 02] 分式化简

## Description


```md
https://leetcode.cn/problems/deep-dark-fraction/description/
* algorithms
* Easy (70.50%)
* Likes:    136
* Dislikes: -
* Testcase Example:  '[3, 2, 0, 2]'
有一个同学在学习分式。他需要将一个连分数化成最简分数，你能帮助他吗？
连分数是形如上图的分式。在本题中，所有系数都是大于等于0的整数。

输入的cont代表连分数的系数（cont[0]代表上图的a0，以此类推）。返回一个长度为2的数组[n, m]，使得连分数的值等于n / m，且n, m最大公约数为1。

示例 1：
输入：cont = [3, 2, 0, 2]
输出：[13, 4]
解释：原连分数等价于3 + (1 / (2 + (1 / (0 + 1 / 2))))。注意[26, 8], [-13, -4]都不是正确答案。
示例 2：
输入：cont = [0, 0, 3]
输出：[3, 1]
解释：如果答案是整数，令分母为1即可。
限制：
cont[i] >= 0
1 <= cont的长度 <= 10
cont最后一个元素不等于0
答案的n, m的取值都能被32位int整型存下（即不超过2 ^ 31 - 1）。

```

## English Translation

A student is learning about fractions. He needs to reduce a continued fraction to its simplest form. Can you help him?
A continued fraction has the form shown in the figure above. In this problem, all coefficients are integers greater than or equal to 0.

The input `cont` represents the coefficients of the continued fraction (`cont[0]` is `a0` in the figure, and so on). Return an array of length 2 `[n, m]` such that the value of the continued fraction equals `n / m`, and the greatest common divisor of `n` and `m` is 1.

Example 1:
Input: cont = [3, 2, 0, 2]
Output: [13, 4]
Explanation: The continued fraction is equivalent to 3 + (1 / (2 + (1 / (0 + 1 / 2)))). Note that [26, 8] and [-13, -4] are not correct answers.

Example 2:
Input: cont = [0, 0, 3]
Output: [3, 1]
Explanation: If the answer is an integer, let the denominator be 1.

Constraints:
- cont[i] >= 0
- 1 <= cont.length <= 10
- The last element of cont is not 0
- Both n and m can fit in a 32-bit signed integer (i.e., not exceed 2^31 - 1)

## Approach

The continued fraction value is: a0 + 1 / (a1 + 1 / (a2 + ... + 1 / a_{n-1})).

Evaluate from the innermost part (the end of the array) backwards, tracking the current fraction as numerator `curNum` and denominator `curDen`:

1. Initialize with the last coefficient: `curNum = cont[n-1]`, `curDen = 1`.
2. For `i` from `n-2` down to `0`:
   - `value = a_i + 1 / (curNum / curDen) = a_i + curDen / curNum`
   - So `newNum = a_i * curNum + curDen`, `newDen = curNum`.
3. After the loop, divide both `curNum` and `curDen` by their GCD to get the simplest fraction.

Time: O(n), Space: O(1).

## Solution

[SourceCode](./solution.js)
