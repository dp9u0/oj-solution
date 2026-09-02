# [LCS 02] 完成一半题目

## Description


```md
https://leetcode.cn/problems/WqXACV/description/
* algorithms
* Easy (65.12%)
* Likes:    25
* Dislikes: -
* Testcase Example:  '[2,1,6,2]'
有 `N` 位扣友参加了微软与力扣举办了「以扣会友」线下活动。主办方提供了 `2*N` 道题目，整型数组 `questions` 中每个数字对应了每道题目所涉及的知识点类型。
若每位扣友选择不同的一题，请返回被选的 `N` 道题目至少包含多少种知识点类型。
**示例 1：**
>输入：`questions = [2,1,6,2]`
>
>输出：`1`
>
>解释：有 2 位扣友在 4 道题目中选择 2 题。
> 可选择完成知识点类型为 2 的题目时，此时仅一种知识点类型
> 因此至少包含 1 种知识点类型。
**示例 2：**
>输入：`questions = [1,5,1,3,4,5,2,5,3,3,8,6]`
>
>输出：`2`
>
>解释：有 6 位扣友在 12 道题目中选择题目，需要选择 6 题。
> 选择完成知识点类型为 3、5 的题目，因此至少包含 2 种知识点类型。
**提示：**
- `questions.length == 2*n`
- `2 <= questions.length <= 10^5`
- `1 <= questions[i] <= 1000`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

`N` friends attended an offline event co-hosted by Microsoft and LeetCode ("以扣会友"). The organizer provided `2*N` questions; each number in the integer array `questions` corresponds to the knowledge-point type of one question.

If each friend chooses a **different** question, return the **minimum** number of distinct knowledge-point types among the `N` selected questions.

**Example 1:**
> Input: `questions = [2,1,6,2]`
> Output: `1`
> Explanation: 2 friends pick 2 questions out of 4. They can pick both questions of type 2, covering only 1 type. So the answer is 1.

**Example 2:**
> Input: `questions = [1,5,1,3,4,5,2,5,3,3,8,6]`
> Output: `2`
> Explanation: 6 friends pick 6 questions out of 12. Choosing the type-3 and type-5 questions (6 in total) covers only 2 types.

**Constraints:**
- `questions.length == 2*n`
- `2 <= questions.length <= 10^5`
- `1 <= questions[i] <= 1000`

---

## Approach

We must pick exactly `N` questions (each friend picks a different one) so that the number of **distinct types** covered is minimized.

To cover as many chosen questions as possible with as few types as possible, prefer the types that appear most frequently — one type with frequency `f` contributes `f` questions for a single type. So:

1. Count the frequency of each knowledge type.
2. Sort frequencies in **descending** order.
3. Greedily take the most frequent types, accumulating their counts, until the running total reaches `N`.
4. The number of types consumed is the answer.

This is optimal because swapping any selected frequent type for a less frequent one can only cover fewer or equal questions per type.

Complexity: `O(n log n)` (sorting at most 1000 distinct frequencies), `O(1)` extra space.
