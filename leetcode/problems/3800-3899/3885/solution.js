/*
 * @lc app=leetcode id=3885 lang=javascript
 *
 * [3885] Design Event Manager
 */

// @lc code=start
/**
 * @param {number[][]} events
 */
var EventManager = function(events) {
    this.heap = [];
    this.map = new Map();
    for (const [id, pri] of events) {
        this.map.set(id, pri);
        this._push(id, pri);
    }
};

EventManager.prototype._push = function(id, pri) {
    this.heap.push([id, pri]);
    let i = this.heap.length - 1;
    while (i > 0) {
        const p = (i - 1) >> 1;
        if (this._better(this.heap[i], this.heap[p])) {
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        } else break;
    }
};

EventManager.prototype._better = (a, b) => a[1] > b[1] || (a[1] === b[1] && a[0] < b[0]);

EventManager.prototype._pop = function() {
    const top = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let i = 0;
    while (true) {
        let best = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < this.heap.length && this._better(this.heap[l], this.heap[best])) best = l;
        if (r < this.heap.length && this._better(this.heap[r], this.heap[best])) best = r;
        if (best !== i) { [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]]; i = best; }
        else break;
    }
    return top;
};

EventManager.prototype.updatePriority = function(eventId, newPriority) {
    this.map.set(eventId, newPriority);
    this._push(eventId, newPriority);
};

EventManager.prototype.pollHighest = function() {
    while (this.heap.length > 0) {
        const [id, pri] = this.heap[0];
        if (this.map.has(id) && this.map.get(id) === pri) {
            this.map.delete(id);
            this._pop();
            return id;
        }
        this._pop();
    }
    return -1;
};

/**
 * Your EventManager object will be instantiated and called as such:
 * var obj = new EventManager(events)
 * obj.updatePriority(eventId,newPriority)
 * var param_2 = obj.pollHighest()
 */
// @lc code=end

// TEST:
var em1 = new EventManager([[5,7],[2,7],[9,4]]);
console.log(em1.pollHighest()); // 2
em1.updatePriority(9, 7);
console.log(em1.pollHighest()); // 5
console.log(em1.pollHighest()); // 9
console.log(em1.pollHighest()); // -1

var em2 = new EventManager([[4,1],[7,2]]);
console.log(em2.pollHighest()); // 7
console.log(em2.pollHighest()); // 4
console.log(em2.pollHighest()); // -1

var em3 = new EventManager([[1,10]]);
console.log(em3.pollHighest()); // 1
console.log(em3.pollHighest()); // -1
