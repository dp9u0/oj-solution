# [2115] Find All Possible Recipes from Given Supplies

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/description/)

* algorithms
* Medium (56.86%)
* Likes:    2679
* Dislikes: 143
* Testcase Example:  '["bread"]\n[["yeast","flour"]]\n["yeast","flour","corn"]'

```md
You have information about n different recipes. You are given a string array recipes and a 2D string array ingredients. The ith recipe has the name recipes[i], and you can create it if you have all the needed ingredients from ingredients[i]. A recipe can also be an ingredient for other recipes, i.e., ingredients[i] may contain a string that is in recipes.
You are also given a string array supplies containing all the ingredients that you initially have, and you have an infinite supply of all of them.
Return a list of all the recipes that you can create. You may return the answer in any order.
Note that two recipes may contain each other in their ingredients.

Example 1:

Input: recipes = ['bread'], ingredients = [['yeast','flour']], supplies = ['yeast','flour','corn']
Output: ['bread']
Explanation:
We can create 'bread' since we have the ingredients 'yeast' and 'flour'.

Example 2:

Input: recipes = ['bread','sandwich'], ingredients = [['yeast','flour'],['bread','meat']], supplies = ['yeast','flour','meat']
Output: ['bread','sandwich']
Explanation:
We can create 'bread' since we have the ingredients 'yeast' and 'flour'.
We can create 'sandwich' since we have the ingredient 'meat' and can create the ingredient 'bread'.

Example 3:

Input: recipes = ['bread','sandwich','burger'], ingredients = [['yeast','flour'],['bread','meat'],['sandwich','meat','bread']], supplies = ['yeast','flour','meat']
Output: ['bread','sandwich','burger']
Explanation:
We can create 'bread' since we have the ingredients 'yeast' and 'flour'.
We can create 'sandwich' since we have the ingredient 'meat' and can create the ingredient 'bread'.
We can create 'burger' since we have the ingredient 'meat' and can create the ingredients 'bread' and 'sandwich'.


Constraints:

n == recipes.length == ingredients.length
1 <= n <= 100
1 <= ingredients[i].length, supplies.length <= 100
1 <= recipes[i].length, ingredients[i][j].length, supplies[k].length <= 10
recipes[i], ingredients[i][j], and supplies[k] consist only of lowercase English letters.
All the values of recipes and suppliescombined are unique.
Each ingredients[i] does not contain any duplicate values.


```

## 翻译

给定食谱列表 recipes、对应食材列表 ingredients 和初始供应 supplies。食谱可以作为其他食谱的食材。返回所有可以制作的食谱。

## 解题思路

拓扑排序 / BFS。将食谱和食材构建为有向图，食材为依赖。用 supplies 初始化可用的集合，然后用 BFS 逐步解锁所有食材已满足的食谱。每解锁一个食谱，将其加入可用集合，继续检查依赖它的食谱。时间复杂度 O(n * m)。

## Solution

[SourceCode](./solution.js)
