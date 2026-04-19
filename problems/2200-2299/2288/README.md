# [2288] Apply Discount to Prices

## Description

[LeetCode Problem Description](https://leetcode.com/problems/apply-discount-to-prices/description/)

* algorithms
* Medium (34.01%)
* Likes:    223
* Dislikes: 1130
* Testcase Example:  '"there are $1 $2 and 5$ candies in the shop"\n50'

```md
A sentence is a string of single-space separated words where each word can contain digits, lowercase letters, and the dollar sign &#39;$&#39;. A word represents a price if it is a sequence of digits preceded by a dollar sign.

For example, '$100', '$23', and '$6' represent prices while '100', '$', and '$1e5' do not.

You are given a string sentence representing a sentence and an integer discount. For each word representing a price, apply a discount of discount% on the price and update the word in the sentence. All updated prices should be represented with exactly two decimal places.
Return a string representing the modified sentence.
Note that all prices will contain at most 10 digits.

Example 1:

Input: sentence = 'there are $1 $2 and 5$ candies in the shop', discount = 50
Output: 'there are $0.50 $1.00 and 5$ candies in the shop'
Explanation:
The words which represent prices are '$1' and '$2'.
- A 50% discount on '$1' yields '$0.50', so '$1' is replaced by '$0.50'.
- A 50% discount on '$2' yields '$1'. Since we need to have exactly 2 decimal places after a price, we replace '$2' with '$1.00'.

Example 2:

Input: sentence = '1 2 $3 4 $5 $6 7 8$ $9 $10$', discount = 100
Output: '1 2 $0.00 4 $0.00 $0.00 7 8$ $0.00 $10$'
Explanation:
Applying a 100% discount on any price will result in 0.
The words representing prices are '$3', '$5', '$6', and '$9'.
Each of them is replaced by '$0.00'.


Constraints:

1 <= sentence.length <= 105
sentence consists of lowercase English letters, digits, &#39; &#39;, and &#39;$&#39;.
sentence does not have leading or trailing spaces.
All words in sentence are separated by a single space.
All prices will be positive numbers without leading zeros.
All prices will have at most 10 digits.
0 <= discount <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

句子中 $ 开头且后面全是数字的单词表示价格，对每个价格打 discount% 折扣，保留两位小数。返回修改后的句子。

## 解题思路

**Approach: 字符串分割 + 正则匹配**

1. 按空格分割句子为单词
2. 对每个单词，检查是否匹配价格格式（$ + 纯数字）
3. 若是价格，计算打折后的值，格式化为两位小数
4. 拼接返回
