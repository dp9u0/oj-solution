# 31. Next Permutation

## Description

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

## Example

```javascript
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
```

## Solution

排列组合已经有 `124[653]`  这样的形式, `[653]` 是已经排列过的元素,: 先恢复顺序[356],然后将这些元素中大于左边元素的且最小的`[5]`与这些元素左边的一个元素`[4]`交换.

[SourceCode](./solution.js)