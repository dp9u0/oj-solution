# [面试题 03.06] 动物收容所

## Description


```md
https://leetcode.cn/problems/animal-shelter-lcci/description/
* lcci
* Easy (58.74%)
* Likes:    58
* Dislikes: -
* Testcase Example:  '["AnimalShelf", "enqueue", "enqueue", "dequeueCat", "dequeueDog", "dequeueAny"]\n' +
'[[], [[0, 0]], [[1, 0]], [], [], []]'
动物收容所。有家动物收容所只收容狗与猫，且严格遵守“先进先出”的原则。在收养该收容所的动物时，收养人只能收养所有动物中“最老”（由其进入收容所的时间长短而定）的动物，或者可以挑选猫或狗（同时必须收养此类动物中“最老”的）。换言之，收养人不能自由挑选想收养的对象。请创建适用于这个系统的数据结构，实现各种操作方法，比如enqueue、dequeueAny、dequeueDog和dequeueCat。允许使用Java内置的LinkedList数据结构。
enqueue方法有一个animal参数，animal[0]代表动物编号，animal[1]代表动物种类，其中 0 代表猫，1 代表狗。
dequeue*方法返回一个列表[动物编号, 动物种类]，若没有可以收养的动物，则返回[-1,-1]。
示例 1：
输入：
["AnimalShelf", "enqueue", "enqueue", "dequeueCat", "dequeueDog", "dequeueAny"]
[[], [[0, 0]], [[1, 0]], [], [], []]
输出：
[null,null,null,[0,0],[-1,-1],[1,0]]
示例 2：
输入：
["AnimalShelf", "enqueue", "enqueue", "enqueue", "dequeueDog", "dequeueCat", "dequeueAny"]
[[], [[0, 0]], [[1, 0]], [[2, 1]], [], [], []]
输出：
[null,null,null,null,[2,1],[0,0],[1,0]]
说明:
收纳所的最大容量为20000
Hint 1: 让我们假设用不同的列表存储猫和狗。怎样才能找到所有物种中最老的动物呢？要有创意。
Hint 2: 可以考虑为狗和猫保留一个链表，然后遍历它找到第一只狗（或猫）。这样做的影响是什么？
Hint 3: 想想现实生活中你是怎么做的。你有一个按时间排序的狗列表和一个按时间排序的猫列表。你需要什么数据才能找到最老的动物？你将如何维护这些数据？

```

## Description (English)

Animal Shelter. A shelter houses only dogs and cats with strict FIFO rules. Adopters may take the oldest animal overall, or the oldest of a chosen species (cat or dog) — they cannot pick a specific animal. Implement enqueue, dequeueAny, dequeueDog and dequeueCat. `enqueue(animal)`: animal[0] is the animal number, animal[1] the species (0 = cat, 1 = dog). dequeue* returns [number, species], or [-1, -1] if no animal is available.

Example 1:
["AnimalShelf","enqueue","enqueue","dequeueCat","dequeueDog","dequeueAny"], [[],[[0,0]],[[1,0]],[],[],[]] → [null,null,null,[0,0],[-1,-1],[1,0]]

Example 2:
["AnimalShelf","enqueue","enqueue","enqueue","dequeueDog","dequeueCat","dequeueAny"], [[],[[0,0]],[[1,0]],[[2,1]],[],[],[]] → [null,null,null,null,[2,1],[0,0],[1,0]]

Note: maximum capacity 20000.

## 思路

猫、狗各一条 FIFO 队列 + 全局自增序号记录到达先后。dequeueAny 比较两队队首序号取更老者；用头下标代替 shift 避免数组搬移，各操作 O(1)。空队返回 [-1,-1]。

## Solution

[SourceCode](./solution.js)
