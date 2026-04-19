# [3653] XOR After Range Multiplication Queries I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/xor-after-range-multiplication-queries-i/description/)

* algorithms
* Medium (73.18%)
* Testcase Example:  '[1,1,1]\n[[0,2,1,4]]'

```md
You are given an integer array nums of length n and a 2D integer array queries of size q, where queries[i] = [li, ri, ki, vi].
For each query, you must apply the following operations in order:
Set idx = li.
While idx

Update: nums[idx] = (nums[idx] * vi) % (10^9 + 7)
Set idx += ki.


Return the bitwise XOR of all elements in nums after processing all queries.

Example 1:
Input: nums = [1,1,1], queries = [[0,2,1,4]]
Output: 4
Explanation:
A single query [0, 2, 1, 4] multiplies every element from index 0 through index 2 by 4.
The array changes from [1, 1, 1] to [4, 4, 4].
The XOR of all elements is 4 ^ 4 ^ 4 = 4.
Example 2:
Input: nums = [2,3,1,5,4], queries = [[1,4,2,3],[0,2,1,2]]
Output: 31
Explanation:
The first query [1, 4, 2, 3] multiplies the elements at indices 1 and 3 by 3, transforming the array to [2, 9, 1, 15, 4].
The second query [0, 2, 1, 2] multiplies the elements at indices 0, 1, and 2 by 2, resulting in [4, 18, 2, 15, 4].
Finally, the XOR of all elements is 4 ^ 18 ^ 2 ^ 15 ^ 4 = 31.​​​​​​​​​​​​​​

Constraints:
1
1
1
queries[i] = [li, ri, ki, vi]
0
1
1

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
给你一个长度为 `n` 的整数数组 `nums` 和一个大小为 `q` 的二维整数数组 `queries`，其中 `queries[i] = [li, ri, ki, vi]`。
对于每个查询，你必须按顺序执行以下操作：
设置 `idx = li`。
当 `idx <= ri` 时：
    更新：`nums[idx] = (nums[idx] * vi) % (10^9 + 7)`
    设置 `idx += ki`。

返回处理完所有查询后 `nums` 中所有元素的按位异或 (XOR) 的结果。

示例 1:
输入: nums = [1,1,1], queries = [[0,2,1,4]]
输出: 4
解释:
查询 [0, 2, 1, 4] 将索引 0 到 2 的每个元素乘以 4。
数组从 [1, 1, 1] 变为 [4, 4, 4]。
所有元素的异或为 4 ^ 4 ^ 4 = 4。

示例 2:
输入: nums = [2,3,1,5,4], queries = [[1,4,2,3],[0,2,1,2]]
输出: 31
解释:
第一个查询 [1, 4, 2, 3] 将索引 1 和 3 的元素乘以 3，数组变为 [2, 9, 1, 15, 4]。
第二个查询 [0, 2, 1, 2] 将索引 0、1 和 2 的元素乘以 2，结果为 [4, 18, 2, 15, 4]。
最后，所有元素的异或为 4 ^ 18 ^ 2 ^ 15 ^ 4 = 31。

约束条件：
1 <= n <= 10^5
1 <= nums[i] <= 10^5
1 <= q <= 10^5
queries[i] = [li, ri, ki, vi]
0 <= li <= ri < n
1 <= ki <= n
1 <= vi <= 10^5

### 解题思路 (Approach)
这是一道模拟题。但是数据范围比较大：
$n \le 10^5$, $q \le 10^5$。
最坏情况下每次查询都要遍历整个数组，时间复杂度为 $O(n \times q)$，会超时。

注意到约束条件：这不是一般的区间修改，而是带步长的区间修改，步长 $k_i \ge 1$。
我们需要更好的方式。因为这是I题，可能可以不优化直接过？注意：这是 LeetCode 上的题目。对于这类问题，我们可以用差分数组的思想，但这题的操作是乘法，而且带步长。

如果直接暴力模拟：
```javascript
const MOD = 1e9 + 7;
for (let query of queries) {
    let [l, r, k, v] = query;
    for (let j = l; j <= r; j += k) {
        nums[j] = Number((BigInt(nums[j]) * BigInt(v)) % BigInt(MOD));
    }
}
```
直接暴力模拟时间复杂度可能会达到 $O(q \times n)$，但是考虑到可能有优化？
仔细看题号：3653。可能需要优化。但是等一下，对于步长较小的查询（比如 $k \le \sqrt{n}$），我们可以使用分块或者延迟标记；对于步长较大的查询（$k > \sqrt{n}$），每次修改的元素个数不超过 $\sqrt{n}$，直接暴力更新即可。

但是，这题的名字是 "XOR After Range Multiplication Queries I"，这暗示可能有 II，而且 I 的数据范围可能允许某些做法。
让我们仔细看一下数据范围：`n <= 10^5`, `q <= 10^5`。直接双重循环可能超时。

Wait! 如果我们针对乘法进行延迟处理。
我们可以用一个差分数组或者类似思想？但是乘法是可以拆分的，这其实是可以计算每个位置最终要乘以哪些数的乘积。
设每个位置最终乘以 $M[i]$，那么最终的数字是 $(nums[i] * M[i]) \pmod{10^9+7}$。
$M[i]$ 就是所有满足条件的查询带来的乘积。

由于带有步长 $k$，且步长 $k$ 可以任意，这就让人联想到根号分治（Root-decomposition）：
1. 对于 $k > \sqrt{n}$ 的查询，直接暴力修改 $M[i]$。每次查询修改次数 $\le n / \sqrt{n} = \sqrt{n}$，总时间 $O(q \sqrt{n})$。
2. 对于 $k \le \sqrt{n}$ 的查询，我们维护一个二维差分数组 `diff[k][start]`。
   具体的，对于查询 `[l, r, k, v]`，我们可以看做是对一个等差数列的操作。
   对于每个固定的 $k$，我们可以把它按照对 $k$ 取模的余数分成 $k$ 个独立的数组。然后在这 $k$ 个数组上做普通的乘法差分！
   例如：`diff[k][l] = (diff[k][l] * v) % MOD`。
   然后 `diff[k][r + k]` 需要乘以 `v` 的逆元（或者用另外的方法处理，因为是乘法，差分需要在后面除以 `v`，这需要求逆元）。

具体做法：
令 $B \approx 316$。
对于 $k \ge B$ 的查询，直接暴力更新 `M[i]`。
对于 $k < B$ 的查询，我们有 `diff[k]` 数组。
由于要求逆元，我们可以用费马小定理：$v^{MOD-2} \pmod{MOD}$。
`diff[k][i]` 记录了步长为 `k` 的情况下，从位置 `i` 开始乘以某个因子。
对于查询 `[l, r, k, v]`：
在普通的加法差分中：
`A[l] += v`, `A[last + k] -= v` (其中 `last` 是不超过 `r` 的最后一个 `l + m * k`)。
在乘法中：
`M[l] = (M[l] * v) % MOD`
`M[last + k] = (M[last + k] * inv(v)) % MOD`

这里 `last = l + Math.floor((r - l) / k) * k`。
然后，在所有查询处理完之后，对于每个 $k \in [1, B-1]$：
我们要把 `diff[k]` 这个差分数组还原：
对于每个 `i` 从 0 到 `n-1`：
如果 `i >= k`：
`diff[k][i] = (diff[k][i] * diff[k][i - k]) % MOD`
这样 `diff[k][i]` 就成了在这个位置上，由于所有步长为 `k` 的查询累积带来的乘积因子。

然后对于每个位置 $i$，它的最终乘积因子是：
`total_factor = M[i]` （暴力更新得到的部分）
对于每个 $k \in [1, B-1]$，`total_factor = (total_factor * diff[k][i]) % MOD`。
最后结果就是所有 `(nums[i] * total_factor) % MOD` 的异或和。

这种方法的时间复杂度为 $O(q \sqrt{n} + n \sqrt{n} + q \log MOD)$，可以通过 $10^5$ 的数据。
$B$ 取 $\sqrt{10^5} \approx 316$。

逆元计算函数：
```javascript
function power(base, exp, mod) {
    let res = 1n;
    base = BigInt(base) % BigInt(mod);
    exp = BigInt(exp);
    let m = BigInt(mod);
    while (exp > 0n) {
        if (exp & 1n) res = (res * base) % m;
        base = (base * base) % m;
        exp >>= 1n;
    }
    return Number(res);
}
```

具体细节：
- `M` 初始为 `n` 个 `1`。
- `diff[k][i]` 初始为 `1`。二维数组大小：`B \times (n + B)`。
- 对于 `k >= B`：
  遍历 `j = l` 到 `r`，步长 `k`，`M[j] = Number((BigInt(M[j]) * BigInt(v)) % MOD)`。
- 对于 `k < B`：
  `last = l + Math.floor((r - l) / k) * k`
  `next = last + k`
  `diff[k][l] = Number((BigInt(diff[k][l]) * BigInt(v)) % MOD)`
  if (`next < n`)：
      `inv_v = power(v, MOD - 2, MOD)`
      `diff[k][next] = Number((BigInt(diff[k][next]) * BigInt(inv_v)) % MOD)`

处理完后：
```javascript
for (let k = 1; k < B; k++) {
    for (let i = 0; i < n; i++) {
        if (i >= k) {
            diff[k][i] = Number((BigInt(diff[k][i]) * BigInt(diff[k][i - k])) % MOD);
        }
    }
}
```
求最终结果：
```javascript
let ans = 0;
for (let i = 0; i < n; i++) {
    let factor = BigInt(M[i]);
    for (let k = 1; k < B; k++) {
        factor = (factor * BigInt(diff[k][i])) % MOD;
    }
    let final_val = Number((BigInt(nums[i]) * factor) % MOD);
    ans ^= final_val;
}
return ans;
```

因为 n=100000, $B=316$ 时，$n \times B \approx 3.16 \times 10^7$ 次计算，在 JavaScript 中需要注意常数优化，使用 1D typed arrays 或者 flat arrays 会更快。
我们可以使用 `Uint32Array` 来优化。
由于 MOD 是 `10^9+7`，适合放入 `Uint32Array` (最大值 `~4.29 \times 10^9`)，可以用来存 `diff`。
