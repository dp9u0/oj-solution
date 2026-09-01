# [950] Reveal Cards In Increasing Order

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reveal-cards-in-increasing-order/description/)

* algorithms
* Medium (83.51%)
* Likes:    3701
* Dislikes: 714
* Testcase Example:  '[17,13,11,2,3,5,7]'

```md
You are given an integer array deck. There is a deck of cards where every card has a unique integer. The integer on the ith card is deck[i].
You can order the deck in any order you want. Initially, all the cards start face down (unrevealed) in one deck.
You will do the following steps repeatedly until all cards are revealed:

Take the top card of the deck, reveal it, and take it out of the deck.
If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.
If there are still unrevealed cards, go back to step 1. Otherwise, stop.

Return an ordering of the deck that would reveal the cards in increasing order.
Note that the first entry in the answer is considered to be the top of the deck.

Example 1:

Input: deck = [17,13,11,2,3,5,7]
Output: [2,13,3,11,5,17,7]
Explanation:
We get the deck in the order [17,13,11,2,3,5,7] (this order does not matter), and reorder it.
After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of the deck.
We reveal 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].
We reveal 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
We reveal 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
We reveal 7, and move 13 to the bottom.  The deck is now [11,17,13].
We reveal 11, and move 17 to the bottom.  The deck is now [13,17].
We reveal 13, and move 17 to the bottom.  The deck is now [17].
We reveal 17.
Since all the cards revealed are in increasing order, the answer is correct.

Example 2:

Input: deck = [1,1000]
Output: [1,1000]


Constraints:

1 <= deck.length <= 1000
1 <= deck[i] <= 106
All the values of deck are unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数数组 deck，每个数代表一张牌。操作规则是：翻出顶部的牌，然后把新的顶部牌放到牌堆底部，重复直到所有牌翻完。返回一个初始排列，使得翻出的牌按递增顺序出现。

**约束：** 1 <= deck.length <= 1000，所有牌值唯一

## 解题思路

**Approach: 反向模拟 + 双端队列**

1. 将 deck 排序（递增）
2. 从最大的牌开始反向操作：先把队列尾部移到头部（逆向的"放到底部"操作），再把当前牌放到头部（逆向的"翻出"操作）
3. 最终队列即为所求初始排列
4. 时间复杂度 O(n log n)，空间复杂度 O(n)
