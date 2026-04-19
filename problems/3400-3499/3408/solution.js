/*
 * @lc app=leetcode id=3408 lang=javascript
 *
 * [3408] Design Task Manager
 */

// @lc code=start
/**
 * @param {number[][]} tasks
 */
var TaskManager = function(tasks) {
    this.taskMap = new Map();
    this.heap = [];
    for (const [userId, taskId, priority] of tasks) {
        this.taskMap.set(taskId, { userId, priority });
        this._push([priority, taskId, userId]);
    }
};

TaskManager.prototype._push = function(entry) {
    this.heap.push(entry);
    let i = this.heap.length - 1;
    while (i > 0) {
        const p = (i - 1) >> 1;
        if (this._cmp(this.heap[i], this.heap[p]) > 0) {
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        } else break;
    }
};

TaskManager.prototype._pop = function() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
        this.heap[0] = last;
        let i = 0;
        while (true) {
            let mx = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < this.heap.length && this._cmp(this.heap[l], this.heap[mx]) > 0) mx = l;
            if (r < this.heap.length && this._cmp(this.heap[r], this.heap[mx]) > 0) mx = r;
            if (mx !== i) {
                [this.heap[i], this.heap[mx]] = [this.heap[mx], this.heap[i]];
                i = mx;
            } else break;
        }
    }
    return top;
};

TaskManager.prototype._cmp = (a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1];

/**
 * @param {number} userId
 * @param {number} taskId
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function(userId, taskId, priority) {
    this.taskMap.set(taskId, { userId, priority });
    this._push([priority, taskId, userId]);
};

/**
 * @param {number} taskId
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function(taskId, newPriority) {
    const info = this.taskMap.get(taskId);
    info.priority = newPriority;
    this._push([newPriority, taskId, info.userId]);
};

/**
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function(taskId) {
    this.taskMap.delete(taskId);
};

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function() {
    while (this.heap.length > 0) {
        const [priority, taskId] = this.heap[0];
        const info = this.taskMap.get(taskId);
        if (info && info.priority === priority) {
            this._pop();
            this.taskMap.delete(taskId);
            return info.userId;
        }
        this._pop();
    }
    return -1;
};

/**
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */
// @lc code=end

// TEST:
const tm = new TaskManager([[1, 101, 10], [2, 102, 20], [3, 103, 15]]);
tm.add(4, 104, 5);
tm.edit(102, 8);
console.log(tm.execTop()); // 3
tm.rmv(101);
tm.add(5, 105, 15);
console.log(tm.execTop()); // 5
console.log(tm.execTop()); // 2
console.log(tm.execTop()); // 4
console.log(tm.execTop()); // -1
