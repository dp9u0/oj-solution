# [LCP 81] 与非的谜题

## Description


```md
https://leetcode.cn/problems/ryfUiz/description/
* algorithms
* Hard (47.68%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '3\n[1,2]\n[[1,2,3],[0,0,3],[1,2,2]]'
在永恒之森中，封存着有关万灵之树线索的卷轴，只要探险队通过最后的考验，便可以获取前往万灵之树的线索。
探险队需要从一段不断变化的谜题数组中找到最终的密码，初始的谜题为长度为 `n` 的数组 `arr`（下标从 0 开始），数组中的数字代表了 `k` 位二进制数。
破解谜题的过程中，需要使用 `与非（NAND）` 运算方式，`operations[i] = [type,x,y]` 表示第 `i` 次进行的谜题操作信息：
- 若 `type = 0`，表示修改操作，将谜题数组中下标 `x` 的数字变化为 `y`；
- 若 `type = 1`，表示运算操作，将数字 `y` 进行 `x*n` 次「与非」操作，第 `i` 次与非操作为 `y = y NAND arr[i%n]`；
> 运算操作结果即：`y NAND arr[0%n] NAND arr[1%n] NAND arr[2%n] ... NAND arr[(x*n-1)%n]`
最后，将所有运算操作的结果按顺序逐一进行 `异或（XOR）`运算，从而得到最终解开封印的密码。请返回最终解开封印的密码。
**注意:**
- 「与非」（NAND）的操作为：先进行 `与` 操作，后进行 `非` 操作。
> 例如：两个三位二进制数`2`和`3`，其与非结果为 `NOT ((010) AND (011)) = (101) = 5`
**示例 1：**
> 输入:
> `k = 3`
> `arr = [1,2]`
> `operations = [[1,2,3],[0,0,3],[1,2,2]]`
>
> 输出: `2`
>
> 解释：
> 初始的谜题数组为 [1,2]，二进制位数为 3，
> 第 0 次进行运算操作，将数字 3(011) 进行 2\*2 次「与非」运算，
> 运算操作结果为 `3 NAND 1 NAND 2 NAND 1 NAND 2 = 5`
> 第 1 次进行修改操作，谜题数组的第 `0` 个数字变化为 `3`，谜题变成 `[3,2]`
> 第 2 次进行运算操作，将数字 2(010) 进行 2\*2 次「与非」运算，
> 运算操作结果为 `2 NAND 3 NAND 2 NAND 3 NAND 2 = 7`
> 所有运算操作结果进行「异或」运算为 `5 XOR 7 = 2`
> 因此得到的最终密码为 `2`。
**示例 2：**
> 输入:
> `k = 4`
> `arr = [4,6,4,7,10,9,11]`
> `operations = [[1,5,7],[1,7,14],[0,6,7],[1,6,5]]`
> 输出: `9`
> 解释:
> 初始的谜题数组为 [4,6,4,7,10,9,11],
> 第 0 次进行运算操作，运算操作结果为 5；
> 第 1 次进行运算操作，运算操作结果为 5；
> 第 2 次进行修改操作，修改后谜题数组为 [4, 6, 4, 7, 10, 9, 7]；
> 第 3 次进行运算操作，运算操作结果为 9；
> 所有运算操作结果进行「异或」运算为 `5 XOR 5 XOR 9 = 9`；
> 因此得到的最终密码为 `9`。
**提示:**
- `1 <= arr.length, operations.length <= 10^4`
- `1 <= k <= 30`
- `0 <= arr[i] < 2^k`
- 若 `type = 0`，`0 <= x < arr.length` 且 `0 <= y < 2^k`
- 若 `type = 1`，`1 <= x < 10^9` 且 `0 <= y < 2^k`
- 保证存在 `type = 1` 的操作

```

## English Description

The expedition must extract the final password from an ever-changing puzzle array. The puzzle starts as an array `arr` of length `n` (0-indexed); each number represents a `k`-bit binary value. All operations use the **NAND** gate: `a NAND b = NOT(a AND b)`, computed on `k`-bit numbers.

`operations[i] = [type, x, y]`:
- `type = 0`: **update** — set `arr[x]` to `y`.
- `type = 1`: **compute** — apply `x·n` NAND operations: `y = y NAND arr[0%n] NAND arr[1%n] ... NAND arr[(x·n-1)%n]`.

The answer is the **XOR** of all type-1 results, in order. Return that final XOR value.

**Example:** `k=3, arr=[1,2], operations=[[1,2,3],[0,0,3],[1,2,2]]` → type-1 results `5` and `7`, XOR = `2`.

**Constraints:** `1 <= n, operations.length <= 10^4`, `1 <= k <= 30`, `0 <= arr[i] < 2^k`, and for type 1: `1 <= x < 10^9`.

## Approach

NAND is bitwise (`NOT`/`AND` act per bit), so every bit evolves **independently**. Look at a single bit with current value `s`, and a cycle bit `a`:
- if `a = 0`: `s' = NOT(s AND 0) = 1` — the state is **forced to 1**.
- if `a = 1`: `s' = NOT(s AND 1) = NOT s` — the state **flips**.

So along the full length-`x·n` sequence (the cycle repeated x times):
- **If some element of `arr` has this bit = 0:** the state is reset to 1 at the *last* such occurrence and afterwards only flips on the trailing 1s. Hence
  ```
  resultBit = 1 XOR ((n - 1 - lastZeroPos) mod 2)
  ```
  where `lastZeroPos` is the index of the last element in `arr` whose bit is 0 (0-indexed). This is **independent of x** (the last occurrence lies in the final repetition of the cycle).
- **If every element of `arr` has this bit = 1:** the state just flips once per step, so `resultBit = yBit XOR ((x·n) mod 2)`.

**Supporting updates.** A type-0 update changes one element, which can flip any of its k bits, so we need, per bit `b`, the *last index with bit `b` = 0* (or the fact that none exists). Maintain `k` Fenwick trees — tree `b` counts (1 at) the positions where bit `b` of `arr` is 0. Point update = add/remove one zero at that position; querying the last zero = finding the rightmost 1 in that Fenwick via binary lifting. Total per update: O(k log n); per type-1 query: O(k) plus O(log n) for the last-zero lookup.

**Complexity:** O((n + Q) · k · log n), well within limits for n,Q ≤ 10^4, k ≤ 30.

## Solution

[SourceCode](./solution.js)
