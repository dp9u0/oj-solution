# [LCR 109] 打开转盘锁

## Description


```md
https://leetcode.cn/problems/zlDJc7/description/
* algorithms
* Medium (57.57%)
* Likes:    49
* Dislikes: -
* Testcase Example:  '["0201","0101","0102","1212","2002"]\n"0202"'
一个密码锁由 4 个环形拨轮组成，每个拨轮都有 10 个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
字符串 target 代表可以解锁的数字，请给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。

示例 1：
输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
输出：6
解释：
可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，因为当拨动到 "0102" 时这个锁就会被锁定。
示例 2：
输入: deadends = ["8888"], target = "0009"
输出：1
解释：
把最后一位反向旋转一次即可 "0000" -> "0009"。
示例 3：
输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
输出：-1
解释：
无法旋转到目标数字且不被锁定。
示例 4：
输入: deadends = ["0000"], target = "8888"
输出：-1

提示：
1 <= deadends.length <= 500
deadends[i].length == 4
target.length == 4
target 不在 deadends 之中
target 和 deadends[i] 仅由若干位数字组成

注意：本题与主站 752 题相同： https://leetcode.cn/problems/open-the-lock/

```

## English Description

You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: `'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'`. The wheels can rotate freely and wrap around: for example we can turn `'9'` to be `'0'`, or `'0'` to be `'9'`. Each move consists of turning one wheel one slot.

The lock initially starts at `'0000'`, a string representing the state of the 4 wheels.

You are given a list of `deadends` dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Given a `target` representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

**Example 1:**
Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6

**Example 2:**
Input: deadends = ["8888"], target = "0009"
Output: 1

**Example 3:**
Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
Output: -1

**Example 4:**
Input: deadends = ["0000"], target = "8888"
Output: -1

Constraints:
- 1 <= deadends.length <= 500
- deadends[i].length == 4
- target.length == 4
- target will not be in the list deadends
- target and deadends[i] consist of digits only

## Solution Approach

- 最短路径问题，状态是 4 位字符串（共 10^4 = 10000 个状态），每个状态有 8 个邻居（4 位 × 上下各转一次），非常适合 BFS 求最小步数。
- 将 deadends 全部放入 visited 集合（不可达），从 "0000" 开始层序遍历；若 "0000" 本身是死锁直接返回 -1。
- 每次出队一个状态，逐位生成向上/向下旋转后的邻居（'0' 向上是 '1'、'9' 是 '0'；处理环形用 (x+1)%10 与 (x+9)%10），若邻居未访问则入队，步数为当前 +1。
- 遇到 target 即返回当前步数（或扩展时遇到即返回 step+1）。
- 优化点：可加双向 BFS，但状态空间仅 1e4，普通 BFS 足够，代码更简洁清晰。

## Solution

[SourceCode](./solution.js)
