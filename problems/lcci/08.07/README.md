# [面试题 08.07] 无重复字符串的排列组合

## Description


```md
https://leetcode.cn/problems/permutation-i-lcci/description/
* lcci
* Medium (81.20%)
* Likes:    100
* Dislikes: -
* Testcase Example:  '"qwe"'
无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。
示例 1：
输入：S = "qwe"
输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
示例 2：
输入：S = "ab"
输出：["ab", "ba"]
提示：
字符都是英文字母。
字符串长度在[1, 9]之间。
Hint 1: 方法1：假设你有abc的所有排列。你怎么用它来得到abcd的所有排列？
Hint 2: 方法1：abc的排列组合表示abc的所有组合方式。现在，我们要创建abcd的所有组合方式。选择abcd的特定组合，如bdca。这个bdca字符串也代表abc的一种排列方式：删除d，你会得到bca。那么给定字符串bca，你是否可以创建包含d 的所有“相关”排列组合？
Hint 3: 方法1：给定一个字符串，比如bca，可以通过将d 插入到每个可能的位置：dbca、bdca、bcda、bcad，来创建abcd（其中abc顺序一定）的所有排列组合。给定abc的所有排列，你可以创建所有abcd的排列吗？
Hint 4: 方法1：你可以通过计算abc的所有排列，然后在每个可能的位置插入d，从而创建abcd的所有排列。
Hint 5: 方法2：如果你拥有两个字符所有排列的子串，可以生成三个字符全排列的子串吗？
Hint 6: 方法2：生成一个abcd的全排列，需要选择一个初始字符。它可以是a、b、c或d。然后你可以排列其余的字符。如何使用这种方法生成完整字符串的所有排列？
Hint 7: 方法 2：要生成abcd的所有排列组合，请选择每个字符（a、b、c、d）作为首字符。排列剩余的字符并追加首字符。如何排列剩余的字符？使用遵循相同逻辑的递归过程。
Hint 8: 方法 2：你可以通过让递归函数返回字符串列表来实现该方法，然后在它上面追加首字符。或者，你可以将前缀下推到递归调用中。

```

## Description (English)

Permutation without duplicates. Write a method to compute all permutations of a string in which every character is distinct.

Example 1:
Input: S = "qwe"
Output: ["qwe", "qew", "wqe", "weq", "ewq", "eqw"]

Example 2:
Input: S = "ab"
Output: ["ab", "ba"]

Notes: all characters are English letters; string length is in [1, 9].

## 思路

原地交换回溯 O(n·n!)：对位置 start，依次与 j ∈ [start, n) 交换后递归，回溯时换回。交换式生成的顺序恰与样例一致（第 0 位按 q→w→e 轮换时，剩余部分也随之整体轮换），无需再排序。n ≤ 9，最多 9! = 362880 个结果。

## Solution

[SourceCode](./solution.js)
