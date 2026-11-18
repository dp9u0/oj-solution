/*
 * @lc app=leetcode.cn id=362 lang=javascript
 *
 * [362] 敲击计数器
 */

// @lc code=start

var HitCounter = function() {
    // circular buckets: index = timestamp % 300
    this.times = new Array(300).fill(0); // bucket timestamp (0 = empty)
    this.hits = new Array(300).fill(0);  // hit count inside the bucket
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    const idx = timestamp % 300;
    if (this.times[idx] !== timestamp) {
        // stale bucket from >300s ago: reset
        this.times[idx] = timestamp;
        this.hits[idx] = 1;
    } else {
        this.hits[idx]++;
    }
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    let total = 0;
    for (let i = 0; i < 300; i++) {
        if (timestamp - this.times[i] < 300) total += this.hits[i];
    }
    return total;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
// @lc code=end

// TEST:
const c1 = new HitCounter();
c1.hit(1); c1.hit(2); c1.hit(3);
console.log(c1.getHits(4)); // 3
c1.hit(300);
console.log(c1.getHits(300)); // 4
console.log(c1.getHits(301)); // 3 (hit at 1 just expired)

const c2 = new HitCounter();
console.log(c2.getHits(1)); // 0 (no hits yet)

const c3 = new HitCounter();
c3.hit(1); c3.hit(1); c3.hit(1);
console.log(c3.getHits(300)); // 3 (burst at same second)
console.log(c3.getHits(301)); // 0

const c4 = new HitCounter();
c4.hit(1); c4.hit(301);
console.log(c4.getHits(600)); // 1 (only hit at 301 still in window)

const c5 = new HitCounter();
c5.hit(299); c5.hit(300);
console.log(c5.getHits(599)); // 1 (299 just expired: 599-299=300)
console.log(c5.getHits(600)); // 0 (both expired: lower bound is exclusive)
