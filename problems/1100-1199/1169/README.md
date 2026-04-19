# [1169] Invalid Transactions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/invalid-transactions/description/)

* algorithms
* Medium (32.20%)
* Likes:    618
* Dislikes: 2440
* Testcase Example:  '["alice,20,800,mtv","alice,50,100,beijing"]'

```md
A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.

You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.
Return a list of transactions that are possibly invalid. You may return the answer in any order.

Example 1:

Input: transactions = ['alice,20,800,mtv','alice,50,100,beijing']
Output: ['alice,20,800,mtv','alice,50,100,beijing']
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
Example 2:

Input: transactions = ['alice,20,800,mtv','alice,50,1200,mtv']
Output: ['alice,50,1200,mtv']

Example 3:

Input: transactions = ['alice,20,800,mtv','bob,50,1200,mtv']
Output: ['bob,50,1200,mtv']


Constraints:

transactions.length <= 1000
Each transactions[i] takes the form '{name},{time},{amount},{city}'
Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
Each {time} consist of digits, and represent an integer between 0 and 1000.
Each {amount} consist of digits, and represent an integer between 0 and 2000.


```

## 中文翻译

给定交易数组（name,time,amount,city），交易无效的条件：金额超过1000，或与同名不同城市的交易在60分钟内。返回所有无效交易。

## 解题思路

按名字分组，每组内检查：金额>1000直接标记无效，否则检查同组内是否有时间差≤60且城市不同的交易。O(n²) 可行（n≤1000）。

## Solution

[SourceCode](./solution.js)
