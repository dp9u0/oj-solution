# [1418] Display Table of Food Orders in a Restaurant

## Description

[LeetCode Problem Description](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/description/)

* algorithms
* Medium (76.38%)
* Likes:    434
* Dislikes: 494
* Testcase Example:  '[["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]'

```md
Giventhe array orders, which represents the orders that customers have done in a restaurant. More specificallyorders[i]=[customerNamei,tableNumberi,foodItemi] where customerNamei is the name of the customer, tableNumberiis the table customer sit at, and foodItemiis the item customer orders.
Return the restaurant&#39;s &ldquo;display table&rdquo;. The &ldquo;display table&rdquo; is a table whose row entries denote how many of each food item each table ordered. The first column is the table number and the remaining columns correspond to each food item in alphabetical order. The first row should be a header whose first column is &ldquo;Table&rdquo;, followed by the names of the food items. Note that the customer names are not part of the table. Additionally, the rows should be sorted in numerically increasing order.

Example 1:

Input: orders = [['David','3','Ceviche'],['Corina','10','Beef Burrito'],['David','3','Fried Chicken'],['Carla','5','Water'],['Carla','5','Ceviche'],['Rous','3','Ceviche']]
Output: [['Table','Beef Burrito','Ceviche','Fried Chicken','Water'],['3','0','2','1','0'],['5','0','1','0','1'],['10','1','0','0','0']]
Explanation:
The displaying table looks like:
Table,Beef Burrito,Ceviche,Fried Chicken,Water
3    ,0           ,2      ,1            ,0
5    ,0           ,1      ,0            ,1
10   ,1           ,0      ,0            ,0
For the table 3: David orders 'Ceviche' and 'Fried Chicken', and Rous orders 'Ceviche'.
For the table 5: Carla orders 'Water' and 'Ceviche'.
For the table 10: Corina orders 'Beef Burrito'.

Example 2:

Input: orders = [['James','12','Fried Chicken'],['Ratesh','12','Fried Chicken'],['Amadeus','12','Fried Chicken'],['Adam','1','Canadian Waffles'],['Brianna','1','Canadian Waffles']]
Output: [['Table','Canadian Waffles','Fried Chicken'],['1','2','0'],['12','0','3']]
Explanation:
For the table 1: Adam and Brianna order 'Canadian Waffles'.
For the table 12: James, Ratesh and Amadeus order 'Fried Chicken'.

Example 3:

Input: orders = [['Laura','2','Bean Burrito'],['Jhon','2','Beef Burrito'],['Melissa','2','Soda']]
Output: [['Table','Bean Burrito','Beef Burrito','Soda'],['2','1','1','1']]


Constraints:

1 <=orders.length <= 5 * 10^4
orders[i].length == 3
1 <= customerNamei.length, foodItemi.length <= 20
customerNamei and foodItemi consist of lowercase and uppercase English letters and the space character.
tableNumberiis a valid integer between 1 and 500.


```

## 中文翻译

给定订单数组 orders，每个元素为 [顾客名, 桌号, 菜品]。返回展示表：第一行为表头 "Table" 加按字母排序的菜品名，后续每行为桌号加该桌每道菜品的订单数。桌号按数字升序排列。

## 解题思路

模拟题。用 Map 统计每个桌号每种菜品的数量，收集所有菜品名排序，收集所有桌号排序，然后构建结果二维数组。

时间复杂度：O(orders * log(orders))，空间复杂度：O(tables * items)

## Solution

[SourceCode](./solution.js)
