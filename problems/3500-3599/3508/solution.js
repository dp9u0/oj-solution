/*
 * @lc app=leetcode id=3508 lang=javascript
 *
 * [3508] Implement Router
 */

// @lc code=start
/**
 * @param {number} memoryLimit
 */
var Router = function(memoryLimit) {
    this.limit = memoryLimit;
    this.queue = [];
    this.set = new Set();
    this.destMap = new Map();
};

/**
 * @param {number} source
 * @param {number} destination
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function(source, destination, timestamp) {
    let key = source + ',' + destination + ',' + timestamp;
    if (this.set.has(key)) return false;

    if (this.queue.length >= this.limit) {
        let old = this.queue.shift();
        let oldKey = old[0] + ',' + old[1] + ',' + old[2];
        this.set.delete(oldKey);
        let arr = this.destMap.get(old[1]);
        if (arr) arr.shift();
    }

    this.queue.push([source, destination, timestamp]);
    this.set.add(key);
    if (!this.destMap.has(destination)) this.destMap.set(destination, []);
    this.destMap.get(destination).push(timestamp);
    return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function() {
    if (this.queue.length === 0) return [];
    let pkt = this.queue.shift();
    let key = pkt[0] + ',' + pkt[1] + ',' + pkt[2];
    this.set.delete(key);
    let arr = this.destMap.get(pkt[1]);
    if (arr) arr.shift();
    return pkt;
};

/**
 * @param {number} destination
 * @param {number} startTime
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function(destination, startTime, endTime) {
    let arr = this.destMap.get(destination);
    if (!arr || arr.length === 0) return 0;
    let lo = lowerBound(arr, startTime);
    let hi = upperBound(arr, endTime);
    return hi - lo;
};

let lowerBound = (arr, target) => {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        let mid = (lo + hi) >> 1;
        if (arr[mid] < target) lo = mid + 1; else hi = mid;
    }
    return lo;
};

let upperBound = (arr, target) => {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        let mid = (lo + hi) >> 1;
        if (arr[mid] <= target) lo = mid + 1; else hi = mid;
    }
    return lo;
};
// @lc code=end

// TEST:
let router = new Router(3);
console.log(router.addPacket(1, 4, 90)); // true
console.log(router.addPacket(2, 5, 90)); // true
console.log(router.addPacket(1, 4, 90)); // false
console.log(router.addPacket(3, 5, 95)); // true
console.log(router.addPacket(4, 5, 105)); // true
console.log(router.forwardPacket()); // [2,5,90]
console.log(router.addPacket(5, 2, 110)); // true
console.log(router.getCount(5, 100, 110)); // 1

let router2 = new Router(2);
console.log(router2.addPacket(7, 4, 90)); // true
console.log(router2.forwardPacket()); // [7,4,90]
console.log(router2.forwardPacket()); // []
