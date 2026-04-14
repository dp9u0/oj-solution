# [1629] Slowest Key

## Description

[LeetCode Problem Description](https://leetcode.com/problems/slowest-key/description/)

* algorithms
* Easy (59.57%)
* Likes:    796
* Dislikes: 113
* Testcase Example:  '[9,29,49,50]\n"cbcd"'

```md
A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.
You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0,and every subsequent key was pressed at the exact time the previous key was released.
The tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].
Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration.
Return the key of the keypress that had the longest duration. If there are multiple such keypresses, return the lexicographically largest key of the keypresses.

Example 1:

Input: releaseTimes = [9,29,49,50], keysPressed = 'cbcd'
Output: 'c'
Explanation: The keypresses were as follows:
Keypress for &#39;c&#39; had a duration of 9 (pressed at time 0 and released at time 9).
Keypress for &#39;b&#39; had a duration of 29 - 9 = 20 (pressed at time 9 right after the release of the previous character and released at time 29).
Keypress for &#39;c&#39; had a duration of 49 - 29 = 20 (pressed at time 29 right after the release of the previous character and released at time 49).
Keypress for &#39;d&#39; had a duration of 50 - 49 = 1 (pressed at time 49 right after the release of the previous character and released at time 50).
The longest of these was the keypress for &#39;b&#39; and the second keypress for &#39;c&#39;, both with duration 20.
&#39;c&#39; is lexicographically larger than &#39;b&#39;, so the answer is &#39;c&#39;.

Example 2:

Input: releaseTimes = [12,23,36,46,62], keysPressed = 'spuda'
Output: 'a'
Explanation: The keypresses were as follows:
Keypress for &#39;s&#39; had a duration of 12.
Keypress for &#39;p&#39; had a duration of 23 - 12 = 11.
Keypress for &#39;u&#39; had a duration of 36 - 23 = 13.
Keypress for &#39;d&#39; had a duration of 46 - 36 = 10.
Keypress for &#39;a&#39; had a duration of 62 - 46 = 16.
The longest of these was the keypress for &#39;a&#39; with duration 16.

Constraints:

releaseTimes.length == n
keysPressed.length == n
2 <= n <= 1000
1 <= releaseTimes[i] <= 109
releaseTimes[i] < releaseTimes[i+1]
keysPressed contains only lowercase English letters.


```

## 翻译

给定按键释放时间数组和按键字符串，第 i 次按键持续时间为 releaseTimes[i] - releaseTimes[i-1]（第 0 次为 releaseTimes[0]）。返回持续时间最长的按键对应的字符，相同则返回字典序最大的。

## Approach

遍历计算每次按键持续时间，维护最大持续时间和对应字符。遇到更大持续时间更新，遇到相同持续时间取字典序更大的字符。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
