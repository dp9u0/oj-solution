/*
 * @lc app=leetcode id=1333 lang=javascript
 *
 * [1333] Filter Restaurants by Vegan-Friendly, Price and Distance
 */

// @lc code=start
/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    return restaurants
        .filter(r => {
            if (veganFriendly && !r[2]) return false;
            if (r[3] > maxPrice) return false;
            if (r[4] > maxDistance) return false;
            return true;
        })
        .sort((a, b) => b[1] - a[1] || b[0] - a[0])
        .map(r => r[0]);
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(result) === JSON.stringify(expected) ? 'OK' : 'FAIL expected ' + JSON.stringify(expected));
};
const R = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]];
test(filterRestaurants, [R, 1, 50, 10], [3,1,5]);
test(filterRestaurants, [R, 0, 50, 10], [4,3,2,1,5]);
test(filterRestaurants, [R, 0, 30, 3], [4,5]);
test(filterRestaurants, [[[1,1,0,1,1]], 0, 1, 1], [1]);
test(filterRestaurants, [[[1,1,0,1,1]], 1, 1, 1], []);
