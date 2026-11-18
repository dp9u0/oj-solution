# [379] 电话目录管理系统

## Description


```md
https://leetcode.cn/problems/design-phone-directory/description/
* algorithms
* Medium (58.46%)
* Likes:    47
* Dislikes: -
* Testcase Example:  '["PhoneDirectory","get","get","check","get","check","release","check"]\n' +
'[[3],[],[],[2],[],[2],[2],[2]]'
设计一个电话目录管理系统，一开始有 maxNumbers 个位置能够储存号码。系统应该存储号码，检查某个位置是否为空，并清空给定的位置。
实现 PhoneDirectory 类：
PhoneDirectory(int maxNumbers) 电话目录初始有 maxNumbers 个可用位置。
int get() 提供一个未分配给任何人的号码。如果没有可用号码则返回 -1。
bool check(int number) 如果位置 number 可用返回 true 否则返回 false。
void release(int number) 回收或释放位置 number。

示例 1：
输入：
["PhoneDirectory", "get", "get", "check", "get", "check", "release", "check"]
[[3], [], [], [2], [], [2], [2], [2]]
输出：
[null, 0, 1, true, 2, false, null, true]
解释：
PhoneDirectory phoneDirectory = new PhoneDirectory(3);
phoneDirectory.get();      // 它可以返回任意可用的数字。这里我们假设它返回 0。
phoneDirectory.get();      // 假设它返回 1。
phoneDirectory.check(2);   // 数字 2 可用，所以返回 true。
phoneDirectory.get();      // 返回剩下的唯一一个数字 2。
phoneDirectory.check(2);   // 数字 2 不再可用，所以返回 false。
phoneDirectory.release(2); // 将数字 2 释放回号码池。
phoneDirectory.check(2);   // 数字 2 重新可用，返回 true。

提示：
1 <= maxNumbers <= 104
0 <= number < maxNumbers
get，check 和 release 最多被调用 2 * 104 次。

```

## Solution

[SourceCode](./solution.js)

## Translation

Design a phone directory that initially has `maxNumbers` slots. Implement:

- `PhoneDirectory(maxNumbers)` — initializes with maxNumbers available slots.
- `get()` — provides a number not allocated to anyone; return -1 if none available.
- `check(number)` — return true if slot `number` is available.
- `release(number)` — recycle the slot.

Example: with maxNumbers=3, get→0, get→1, check(2)=true, get→2, check(2)=false, release(2), check(2)=true.

Constraints: `1 <= maxNumbers <= 10^4`; at most 2·10^4 calls.

## Approach

**Set(在池中成员判定)+ 索引队列(发放顺序)**:

- `get()`:队列头指针右移,跳过已不在池中的过期项;取出同时从 Set 删除。均摊 O(1)。
- `check(n)`:`Set.has`,O(1)。
- `release(n)`:若已在池中(重复释放)直接忽略;否则 Set 加回、队尾入队,O(1)。

避免 `queue.shift()` 的 O(n):用 head 指针滑过消费过的区段。
