# 11. Container With Most Water

## Description

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

## Example

```javascript
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
```

## Solution

可以考虑从最左侧和最右侧的两个点开始,向中间聚拢,首先需要明确的是,越向里 r - l 越小,也就需要 a[l] 或者 a[r] 比之前更大能得到更大的面积

[SourceCode](./solution.js)