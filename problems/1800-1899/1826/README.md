# [1826] 有缺陷的传感器

## Description


```md
https://leetcode.cn/problems/faulty-sensor/description/
* algorithms
* Easy (44.04%)
* Likes:    8
* Dislikes: -
* Testcase Example:  '[2,3,4,5]\n[2,1,3,4]'
实验室里正在进行一项实验。为了确保数据的准确性，同时使用 两个 传感器来采集数据。您将获得2个数组 sensor1 and sensor2，其中 sensor1[i] 和 sensor2[i] 分别是两个传感器对第 i 个数据点采集到的数据。
但是，这种类型的传感器有可能存在缺陷，它会导致 某一个 数据点采集的数据（掉落值）被丢弃。
数据被丢弃后，所有在其右侧的数据点采集的数据，都会被向左移动一个位置，最后一个数据点采集的数据会被一些随机值替换。可以保证此随机值不等于掉落值。
举个例子, 如果正确的数据是 [1,2,3,4,5] ， 此时 3 被丢弃了, 传感器会返回 [1,2,4,5,7] (最后的位置可以是任何值, 不仅仅是 7).
可以确定的是，最多有一个 传感器有缺陷。请返回这个有缺陷的传感器的编号 （1 或 2）。如果任一传感器 没有缺陷 ，或者 无法 确定有缺陷的传感器，则返回 -1 。

示例 1：
输入：sensor1 = [2,3,4,5], sensor2 = [2,1,3,4]
输出：1
解释：传感器 2 返回了所有正确的数据.
传感器2对第二个数据点采集的数据，被传感器1丢弃了，传感器1返回的最后一个数据被替换为 5 。
示例 2：
输入：sensor1 = [2,2,2,2,2], sensor2 = [2,2,2,2,5]
输出：-1
解释：无法判定哪个传感器是有缺陷的。
假设任一传感器丢弃的数据是最后一位，那么，另一个传感器就能给出与之对应的输出。
示例 3：
输入：sensor1 = [2,3,2,2,3,2], sensor2 = [2,3,2,3,2,7]
输出：2
解释：传感器 1 返回了所有正确的数据.
传感器 1 对第四个数据点的采集数据，被传感器2丢失了, 传感器 2 返回的最后一个数据被替换为 7 。

提示：
sensor1.length == sensor2.length
1 <= sensor1.length <= 100
1 <= sensor1[i], sensor2[i] <= 100
Hint 1: Check for a common prefix of the two arrays.
Hint 2: After this common prefix, there should be one array similar to the other but shifted by one.
Hint 3: If both arrays can be shifted, return -1.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Two sensors collect the same data. A defective sensor drops one data point: everything to its right shifts left by one, and the last position is replaced by a random value (guaranteed different from the dropped value). At most one sensor is defective. Given `sensor1` and `sensor2`, return 1 or 2 for the defective sensor, or -1 if neither is defective or it cannot be determined.

**Example:**
sensor1 = [2,3,4,5], sensor2 = [2,1,3,4] → 1 (sensor2 is correct; sensor1 dropped its 2nd point)

**Constraints:**
- sensor1.length == sensor2.length, 1 <= length <= 100

## Approach

设首个失配下标 i(完全相同则 -1)。若 sensor1 有缺陷,丢的是位置 ≥ i 的点,且前缀相同意味着恰好丢在 i:`sensor1[i..n-2] == sensor2[i+1..n-1]`;对称地验证 sensor2。恰好一个假设成立则返回对应编号;两个都成立(如全重复值)或都不成立返回 -1。

时间 O(n),空间 O(1)。
