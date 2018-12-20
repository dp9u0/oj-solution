# 15. 3Sum

## Description

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

## Example

```javascript
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## Solution

首先排序

然后第一层遍历一个数字 `first`,然后在剩余的数字里面找相加等于 `0-first`的值.

可以使用 tow points,start end两个索引.

* 如果 num[start] + num[end] > target 说明 num[end] 过大,不可能存在有数字和num[end]相加等于target了 可以向后移动
* 同样 如果小于target  可以向前移动
  
同时需要注意跳过相同的数字:

* 第一层直接跳过
* 第二层 tow points 时,如果 num[start] + num[end] > target 需要跳过相同的  num[start] 和 num[end]

[SourceCode](./solution.js)