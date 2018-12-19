# 41. First Missing Positive

## Description

Given an unsorted integer array, find the smallest missing positive integer.

Note: Your algorithm should run in O(n) time and uses constant extra space.

## Example

```javascript
Input: [1,2,0]
Output: 3
```

```javascript
Input: [3,4,-1,1]
Output: 2
```

```javascript
Input: [7,8,9,11,12]
Output: 1
```

## Solution

1. 大于数组length 的以及负数属于干扰项. 第一个不存在的正整数一定小于等于数组的length.
2. 可以考虑直接利用数组下标 index 记录 index + 1 这个数字是否存在
3. 设置 nums[index + 1] 的值时 需要注注意不能将nums[index + 1] 覆盖 这里可以考虑将目标值设置为负数等

[SourceCode](./solution.js)