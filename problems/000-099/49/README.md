# 49. Group Anagrams

## Description

Given an array of strings, group anagrams together.

Note:

All inputs will be in lowercase.

The order of your output does not matter.

## Example

```javascript
Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

## Solution

hashing 存储相同key值.重点在于如何计算相同的key值,由于只有26个字母 因此可以mapping 到prime,然后计算乘积的方式

[SourceCode](./solution.js)