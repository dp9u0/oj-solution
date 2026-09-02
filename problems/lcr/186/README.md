# [LCR 186] 文物朝代判断

## Description


```md
https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/description/
* algorithms
* Easy (45.03%)
* Likes:    375
* Dislikes: -
* Testcase Example:  '[0,6,9,0,7]'
展览馆展出来自 13 个朝代的文物，每排展柜展出 5 个文物。某排文物的摆放情况记录于数组 places，其中 places[i] 表示处于第 i 位文物的所属朝代编号。其中，编号为 0 的朝代表示未知朝代。请判断并返回这排文物的所属朝代编号是否能够视为连续的五个朝代（如遇未知朝代可算作连续情况）。

示例 1：
输入：places = [0, 6, 9, 0, 7]
输出：True

示例 2：
输入：places = [7, 8, 9, 10, 11]
输出：True

提示：
places.length = 5
0 <= places[i] <= 13

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The exhibition hall displays artifacts from 13 dynasties; each row of cases displays 5 artifacts. The arrangement of one row is recorded in array `places`, where `places[i]` is the dynasty number of the i-th artifact. Dynasty number `0` means **unknown**. Determine and return whether the dynasty numbers of this row can be treated as **five consecutive dynasties** (unknown ones may count as filling gaps).

**Example 1:** `places = [0, 6, 9, 0, 7]` → `true`
**Example 2:** `places = [7, 8, 9, 10, 11]` → `true`

**Constraints:** `places.length = 5`, `0 <= places[i] <= 13`.

---

## Approach

The `0`s act as wildcards (unknown dynasties). Treat non-zero numbers as the actual dynasty numbers:

- A valid "straight" of 5 needs the non-zero numbers to be **distinct** (no duplicate dynasty) and the span `max - min + 1 <= 5` (the wildcards can fill any gaps).

If either condition fails, return `false`; otherwise `true`.

Complexity: `O(1)` (fixed 5 elements).
