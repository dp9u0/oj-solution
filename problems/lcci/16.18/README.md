# [面试题 16.18] 模式匹配

## Description


```md
https://leetcode.cn/problems/pattern-matching-lcci/description/
* lcci
* Medium (34.07%)
* Likes:    156
* Dislikes: -
* Testcase Example:  '"abba"\n"dogcatcatdog"'
你有两个字符串，即pattern和value。 pattern字符串由字母"a"和"b"组成，用于描述字符串中的模式。例如，字符串"catcatgocatgo"匹配模式"aabab"（其中"cat"是"a"，"go"是"b"），该字符串也匹配像"a"、"ab"和"b"这样的模式。但需注意"a"和"b"不能同时表示相同的字符串。编写一个方法判断value字符串是否匹配pattern字符串。
示例 1：
输入： pattern = "abba", value = "dogcatcatdog"
输出： true
示例 2：
输入： pattern = "abba", value = "dogcatcatfish"
输出： false
示例 3：
输入： pattern = "aaaa", value = "dogcatcatdog"
输出： false
示例 4：
输入： pattern = "abba", value = "dogdogdogdog"
输出： true
解释： "a"="dogdog",b=""，反之也符合规则
提示：
0 <= len(pattern) <= 1000
0 <= len(value) <= 1000
你可以假设pattern只包含字母"a"和"b"，value仅包含小写字母。
Hint 1: 从蛮力解法开始。你能试一下a和b的所有可能性吗?
Hint 2: 观察其中一个子字符串，a或b都可以，必须从字符串的开头开始。这减少了可能性的种类。
Hint 3: 不要忘记处理pattern中的第一个字符是b的可能性。
Hint 4: 谨慎地选择分析时间复杂度的方式。如果遍历O(n2)个子字符串，每个子字符串都进行O(n)次的字符串比较，那么总体运行时间为O(n3)。
Hint 5: 假设你确定了一个模式中“a”部分的值。b有多少种可能性?
Hint 6: 由于a的值决定b的值（反之亦然），并且a或b必须出现于值的起始处，所以你应该只有O(n)种可能来分解模式串。
Hint 7: 你应该能够有一个O(n2)的算法。

```

## Description (English)

You have two strings: pattern and value. pattern consists of letters 'a' and 'b' describing a pattern in the string. E.g. "catcatgocatgo" matches "aabab" (where "cat" is "a" and "go" is "b"); it also matches patterns like "a", "ab" and "b". Note that "a" and "b" must not represent the same string. Write a method to determine whether value matches pattern.

Example 1: pattern = "abba", value = "dogcatcatdog" → true
Example 2: pattern = "abba", value = "dogcatcatfish" → false
Example 3: pattern = "aaaa", value = "dogcatcatdog" → false
Example 4: pattern = "abba", value = "dogdogdogdog" → true (a="dogdog", b="", or vice versa)

Notes: 0 <= len(pattern) <= 1000; 0 <= len(value) <= 1000; pattern has only 'a'/'b'; value has only lowercase letters.

## 思路

枚举 a 长度 O(n²)：cntA/cntB 已知，选定 la 后 lb = (m − la·cntA)/cntB 唯一确定，非整除跳过。a、b 的内容由各自**首次出现**的位置截取，再沿 pattern 逐段 slice 比对。单独一类字符时按均匀段校验；两类并存时校验通过后还需 a ≠ b（题目约束，b 允许为空但不得与 a 相同）。

## Solution

[SourceCode](./solution.js)
