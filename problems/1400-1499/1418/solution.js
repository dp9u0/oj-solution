/*
 * @lc app=leetcode id=1418 lang=javascript
 *
 * [1418] Display Table of Food Orders in a Restaurant
 */

// @lc code=start
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    const count = {};
    const foodSet = new Set();
    const tableSet = new Set();
    for (const [_, table, food] of orders) {
        foodSet.add(food);
        tableSet.add(table);
        const key = table + ',' + food;
        count[key] = (count[key] || 0) + 1;
    }
    const foods = [...foodSet].sort();
    const tables = [...tableSet].sort((a, b) => Number(a) - Number(b));
    const res = [['Table', ...foods]];
    for (const t of tables) {
        const row = [t];
        for (const f of foods) {
            row.push(String(count[t + ',' + f] || 0));
        }
        res.push(row);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]));
// [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]]
