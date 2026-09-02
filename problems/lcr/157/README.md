# [LCR 157] 套餐内商品的排列顺序

## Description


```md
https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/description/
* algorithms
* Medium (57.22%)
* Likes:    732
* Dislikes: -
* Testcase Example:  '"agew"'
某店铺将用于组成套餐的商品记作字符串 goods，其中 goods[i] 表示对应商品。请返回该套餐内所含商品的 全部排列方式 。
返回结果 无顺序要求，但不能含有重复的元素。

示例 1：
输入：goods = "agew"
输出：["aegw","aewg","agew","agwe","aweg","awge","eagw","eawg","egaw","egwa","ewag","ewga","gaew","gawe","geaw","gewa","gwae","gwea","waeg","wage","weag","wega","wgae","wgea"]

提示：
1 <= goods.length <= 8

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a string `goods` representing products, return all arrangements (permutations). No duplicate entries, any order.

**Example:** `"agew"` → 24 permutations.

**Constraints:** length ≤ 8.

---

## Approach

**Backtracking permutations** over characters. To avoid duplicates when letters repeat, sort the characters first and skip choosing a letter equal to the previously-skipped one at the same position (`used[i-1]` false).

Complexity: `O(n!)` distinct outputs (n ≤ 8).
