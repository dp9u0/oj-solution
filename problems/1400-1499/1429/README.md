# [1429] 第一个唯一数字

## Description


```md
https://leetcode.cn/problems/first-unique-number/description/
* algorithms
* Medium (55.63%)
* Likes:    45
* Dislikes: -
* Testcase Example:  '["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]\n' +
'[[[2,3,5]],[],[5],[],[2],[],[3],[]]'
给定一系列整数，插入一个队列中，找出队列中第一个唯一整数。
实现 FirstUnique 类：
FirstUnique(int[] nums) 用数组里的数字初始化队列。
int showFirstUnique() 返回队列中的 第一个唯一 整数的值。如果没有唯一整数，返回 -1。（译者注：此方法不移除队列中的任何元素）
void add(int value) 将 value 插入队列中。

示例 1：
输入：
["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
[[[2,3,5]],[],[5],[],[2],[],[3],[]]
输出：
[null,2,null,2,null,3,null,-1]
解释：
FirstUnique firstUnique = new FirstUnique([2,3,5]);
firstUnique.showFirstUnique(); // 返回 2
firstUnique.add(5);            // 此时队列为 [2,3,5,5]
firstUnique.showFirstUnique(); // 返回 2
firstUnique.add(2);            // 此时队列为 [2,3,5,5,2]
firstUnique.showFirstUnique(); // 返回 3
firstUnique.add(3);            // 此时队列为 [2,3,5,5,2,3]
firstUnique.showFirstUnique(); // 返回 -1
示例 2：
输入：
["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
[[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
输出：
[null,-1,null,null,null,null,null,17]
解释：
FirstUnique firstUnique = new FirstUnique([7,7,7,7,7,7]);
firstUnique.showFirstUnique(); // 返回 -1
firstUnique.add(7);            // 此时队列为 [7,7,7,7,7,7,7]
firstUnique.add(3);            // 此时队列为 [7,7,7,7,7,7,7,3]
firstUnique.add(3);            // 此时队列为 [7,7,7,7,7,7,7,3,3]
firstUnique.add(7);            // 此时队列为 [7,7,7,7,7,7,7,3,3,7]
firstUnique.add(17);           // 此时队列为 [7,7,7,7,7,7,7,3,3,7,17]
firstUnique.showFirstUnique(); // 返回 17
示例 3：
输入：
["FirstUnique","showFirstUnique","add","showFirstUnique"]
[[[809]],[],[809],[]]
输出：
[null,809,null,-1]
解释：
FirstUnique firstUnique = new FirstUnique([809]);
firstUnique.showFirstUnique(); // 返回 809
firstUnique.add(809);          // 此时队列为 [809,809]
firstUnique.showFirstUnique(); // 返回 -1

提示：
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^8
1 <= value <= 10^8
最多调用 5000 次 showFirstUnique 和 add 。
Hint 1: Use doubly Linked list with hashmap of pointers to linked list nodes. add unique number to the linked list. When add is called check if the added number is unique then it have to be added to the linked list and if it is repeated remove it from the linked list if exists. When showFirstUnique is called retrieve the head of the linked list.
Hint 2: Use queue and check that first element of the queue is always unique.
Hint 3: Use set or heap to make running time of each function O(logn).

```

## Solution

[SourceCode](./solution.js)

## Translation

Design FirstUnique: init from nums; showFirstUnique() returns first still-unique inserted value (-1 if none); add(value) appends.

## Approach

**计数表 + 惰性队列**。count 表记出现次数,queue 按插入顺序保存所有值(含重复);showFirstUnique 用头指针 head 跳过 count>1 的前缀(每个元素至多被跳过一次,均摊 O(1)),head 处即第一个唯一值。add O(1)。
