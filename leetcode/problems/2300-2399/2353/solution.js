/*
 * @lc app=leetcode id=2353 lang=javascript
 *
 * [2353] Design a Food Rating System
 */

// @lc code=start
var MinHeap = function() {
    this.data = [];
};
MinHeap.prototype.push = function(val) {
    this.data.push(val);
    let i = this.data.length - 1;
    while (i > 0) {
        const p = (i - 1) >> 1;
        if (this._compare(this.data[i], this.data[p]) < 0) {
            [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
            i = p;
        } else break;
    }
};
MinHeap.prototype.peek = function() { return this.data[0]; };
MinHeap.prototype.pop = function() {
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
        this.data[0] = last;
        this._sinkDown(0);
    }
    return top;
};
MinHeap.prototype.size = function() { return this.data.length; };
MinHeap.prototype._compare = function(a, b) {
    if (a[0] !== b[0]) return a[0] < b[0] ? -1 : 1;
    return a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0);
};
MinHeap.prototype._sinkDown = function(i) {
    const n = this.data.length;
    while (true) {
        let s = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < n && this._compare(this.data[l], this.data[s]) < 0) s = l;
        if (r < n && this._compare(this.data[r], this.data[s]) < 0) s = r;
        if (s !== i) {
            [this.data[i], this.data[s]] = [this.data[s], this.data[i]];
            i = s;
        } else break;
    }
};

/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
    this.foodMap = new Map();
    this.cuisineHeaps = new Map();
    for (let i = 0; i < foods.length; i++) {
        const [food, cuisine, rating] = [foods[i], cuisines[i], ratings[i]];
        this.foodMap.set(food, { cuisine, rating });
        if (!this.cuisineHeaps.has(cuisine)) {
            this.cuisineHeaps.set(cuisine, new MinHeap());
        }
        this.cuisineHeaps.get(cuisine).push([-rating, food]);
    }
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    const info = this.foodMap.get(food);
    info.rating = newRating;
    this.cuisineHeaps.get(info.cuisine).push([-newRating, food]);
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    const heap = this.cuisineHeaps.get(cuisine);
    while (heap.size() > 0) {
        const [negRating, food] = heap.peek();
        if (this.foodMap.get(food).rating === -negRating) {
            return food;
        }
        heap.pop();
    }
    return '';
};
// @lc code=end

// TEST:
const fr = new FoodRatings(
    ["kimchi","miso","sushi","moussaka","ramen","bulgogi"],
    ["korean","japanese","japanese","greek","japanese","korean"],
    [9,12,8,15,14,7]
);
console.log(fr.highestRated("korean"));    // "kimchi"
console.log(fr.highestRated("japanese"));  // "ramen"
fr.changeRating("sushi", 16);
console.log(fr.highestRated("japanese"));  // "sushi"
fr.changeRating("ramen", 16);
console.log(fr.highestRated("japanese"));  // "ramen"

const fr2 = new FoodRatings(
    ["a","b","c"],
    ["x","x","x"],
    [5,5,5]
);
console.log(fr2.highestRated("x"));  // "a" (tie, lexicographically smallest)
fr2.changeRating("b", 10);
console.log(fr2.highestRated("x"));  // "b"
fr2.changeRating("c", 10);
console.log(fr2.highestRated("x"));  // "b" (tie between b and c, b is smaller)
