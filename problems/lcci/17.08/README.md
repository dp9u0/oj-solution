# [面试题 17.08] 马戏团人塔

## Description


```md
https://leetcode.cn/problems/circus-tower-lcci/description/
* lcci
* Medium (28.61%)
* Likes:    120
* Dislikes: -
* Testcase Example:  '[65,70,56,75,60,68]\n[100,150,90,190,95,110]'
有个马戏团正在设计叠罗汉的表演节目，一个人要站在另一人的肩膀上。出于实际和美观的考虑，在上面的人要比下面的人矮一点且轻一点。已知马戏团每个人的身高和体重，请编写代码计算叠罗汉最多能叠几个人。
示例：
输入：height = [65,70,56,75,60,68] weight = [100,150,90,190,95,110]
输出：6
解释：从上往下数，叠罗汉最多能叠 6 层：(56,90), (60,95), (65,100), (68,110), (70,150), (75,190)
提示：
height.length == weight.length <= 10000
Hint 1: 这个问题要求我们找出可以构建的最长的序列对，使其每个序列都在不断增长。如果你只需要一个元素不断增长呢?
Hint 2: 如果你只需要序列对中的一个元素为递增序列，那么只对该序列排序就好了。你的最长序列实际上是所有序列对(而不是重复的序列，因为最长序列是需要严格递增的)。对于最初的问题，这说明了什么?
Hint 3: 如果你根据高度对值进行排序，那么这将告诉你最后序列对的排序。最长序列必定符合这个相对顺序(但不一定包含所有的序列对)。现在只需要找到权重尺度上的最长递增子序列，并保持这些项的相对顺序不变。这本质上与下面的问题相同:对于一个整数数组找到最长的序列(不重新排序)。
Hint 4: 尝试用递归方法来评估所有的可能性。
Hint 5: 另一种思考这个问题的方法是:如果有结束于 A[0]到 A[n-1]每个元素的最长序列，你能用它来找出结束于元素 A[n]的最长序列吗?

```

## Description (English)

A circus is designing a human tower act: one person stands on another's shoulders. For practicality and aesthetics, the person above must be strictly shorter AND strictly lighter than the one below. Given everyone's height and weight, compute the maximum number of people that can form the tower.

Example:
Input: height = [65,70,56,75,60,68], weight = [100,150,90,190,95,110]
Output: 6
Explanation: from top to bottom: (56,90), (60,95), (65,100), (68,110), (70,150), (75,190)

Note: height.length == weight.length <= 10000.

## 思路

二维偏序最长链 = 排序 + LIS，O(n log n)：

1. 按身高升序排序；**同身高按体重降序**——塔内要求严格更矮，同身高者最多选一人，降序排列后严格递增的体重子序列天然无法选中两人。
2. 对体重序列求严格 LIS：耐心排序（tails 数组 + 二分 lower_bound），tails[i] 为长度 i+1 的递增子序列最小结尾，遇到相等的体重则替换而非扩展（保证严格）。

## Solution

[SourceCode](./solution.js)
