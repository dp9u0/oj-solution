# [LCR 066]  键值映射

## Description


```md
https://leetcode.cn/problems/z1R5dt/description/
* algorithms
* Medium (64.76%)
* Likes:    33
* Dislikes: -
* Testcase Example:  '["MapSum", "insert", "sum", "insert", "sum"]\n' +
'[[], ["apple",3], ["ap"], ["app",2], ["ap"]]'
实现一个 MapSum 类，支持两个方法，insert 和 sum：
MapSum() 初始化 MapSum 对象
void insert(String key, int val) 插入 key-val 键值对，字符串表示键 key ，整数表示值 val 。如果键 key 已经存在，那么原来的键值对将被替代成新的键值对。
int sum(string prefix) 返回所有以该前缀 prefix 开头的键 key 的值的总和。

示例：
输入：
inputs = ["MapSum", "insert", "sum", "insert", "sum"]
inputs = [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
输出：
[null, null, 3, null, 5]
解释：
MapSum mapSum = new MapSum();
mapSum.insert("apple", 3);
mapSum.sum("ap");           // return 3 (apple = 3)
mapSum.insert("app", 2);
mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)

提示：
1 <= key.length, prefix.length <= 50
key 和 prefix 仅由小写英文字母组成
1 <= val <= 1000
最多调用 50 次 insert 和 sum

注意：本题与主站 677 题相同： https://leetcode.cn/problems/map-sum-pairs/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Implement `MapSum` with:
- `insert(key, val)`: store key→val (replace existing);
- `sum(prefix)`: return total value of all keys with that prefix.

**Example:** insert apple 3, sum "ap"→3; insert app 2, sum "ap"→5.

**Constraints:** ≤ 50 calls, key/prefix ≤ 50 chars. Note: same as LeetCode 677.

---

## Approach

With ≤ 50 operations, a **plain map + prefix scan** is sufficient: `sum` iterates keys and adds those `startsWith(prefix)`. (A trie with per-node prefix sums is the scalable alternative.)

Complexity: `O(#keys · |prefix|)` per sum.
