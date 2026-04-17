/*
 * @lc app=leetcode id=1912 lang=javascript
 *
 * [1912] Design Movie Rental System
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} entries
 */
var MovieRentingSystem = function(n, entries) {
    this.priceMap = new Map();
    this.rented = new Map();
    this.movieShops = new Map();
    for (const [shop, movie, price] of entries) {
        const key = shop * 10001 + movie;
        this.priceMap.set(key, price);
        if (!this.movieShops.has(movie)) this.movieShops.set(movie, []);
        this.movieShops.get(movie).push({ shop, price });
    }
    for (const [, arr] of this.movieShops) {
        arr.sort((a, b) => a.price - b.price || a.shop - b.shop);
    }
};

/**
 * @param {number} movie
 * @return {number[]}
 */
MovieRentingSystem.prototype.search = function(movie) {
    const shops = this.movieShops.get(movie);
    if (!shops) return [];
    const result = [];
    for (const { shop } of shops) {
        if (!this.rented.has(shop * 10001 + movie)) {
            result.push(shop);
            if (result.length === 5) break;
        }
    }
    return result;
};

/**
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.rent = function(shop, movie) {
    const key = shop * 10001 + movie;
    this.rented.set(key, [shop, movie, this.priceMap.get(key)]);
};

/**
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.drop = function(shop, movie) {
    this.rented.delete(shop * 10001 + movie);
};

/**
 * @return {number[][]}
 */
MovieRentingSystem.prototype.report = function() {
    const arr = [...this.rented.values()];
    arr.sort((a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1]);
    return arr.slice(0, 5).map(r => [r[0], r[1]]);
};

/**
 * Your MovieRentingSystem object will be instantiated and called as such:
 * var obj = new MovieRentingSystem(n, entries)
 * var param_1 = obj.search(movie)
 * obj.rent(shop,movie)
 * obj.drop(shop,movie)
 * var param_4 = obj.report()
 */
// @lc code=end

// TEST:
const mrs = new MovieRentingSystem(3, [[0,1,5],[0,2,6],[0,3,7],[1,1,4],[1,2,7],[2,1,5]]);
console.log(mrs.search(1));   // [1, 0, 2]
mrs.rent(0, 1);
mrs.rent(1, 2);
console.log(mrs.report());    // [[0, 1], [1, 2]]
mrs.drop(1, 2);
console.log(mrs.search(2));   // [0, 1]
console.log(mrs.search(3));   // [0]
console.log(mrs.report());    // [[0, 1]]
