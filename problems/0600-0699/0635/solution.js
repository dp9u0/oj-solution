/*
 * @lc app=leetcode.cn id=635 lang=javascript
 *
 * [635] 设计日志存储系统
 */

// @lc code=start

var LogSystem = function() {
    this.logs = []; // [id, timestamp] in insertion order
    this.gra = { Year: 1, Month: 2, Day: 3, Hour: 4, Minute: 5, Second: 6 };
};

/**
 * @param {number} id
 * @param {string} timestamp
 * @return {void}
 */
LogSystem.prototype.put = function(id, timestamp) {
    this.logs.push([id, timestamp]);
};

/**
 * @param {string} start
 * @param {string} end
 * @param {string} granularity
 * @return {number[]}
 */
LogSystem.prototype.retrieve = function(start, end, granularity) {
    const k = this.gra[granularity];
    const trunc = ts => ts.split(':').slice(0, k).join(':'); // zero-padded -> string compare works
    const s = trunc(start), e = trunc(end);
    const res = [];
    for (let i = this.logs.length - 1; i >= 0; i--) {
        const [id, ts] = this.logs[i];
        const t = trunc(ts);
        if (t >= s && t <= e) res.push(id);
    }
    return res;
};

/**
 * Your LogSystem object will be instantiated and called as such:
 * var obj = new LogSystem()
 * obj.put(id,timestamp)
 * var param_2 = obj.retrieve(start,end,granularity)
 */
// @lc code=end

// TEST:
const log = new LogSystem();
log.put(1, '2017:01:01:23:59:59');
log.put(2, '2017:01:01:22:59:59');
log.put(3, '2016:01:01:00:00:00');
console.log(JSON.stringify(log.retrieve('2016:01:01:01:01:01', '2017:01:01:23:00:00', 'Year'))); // [3,2,1]
console.log(JSON.stringify(log.retrieve('2016:01:01:01:01:01', '2017:01:01:23:00:00', 'Hour'))); // [2,1]

const log2 = new LogSystem();
log2.put(9, '2017:06:15:10:30:00');
log2.put(7, '2017:06:16:10:30:00');
console.log(JSON.stringify(log2.retrieve('2017:06:01:00:00:00', '2017:06:30:23:59:59', 'Day'))); // [7,9]
console.log(JSON.stringify(log2.retrieve('2017:06:15:00:00:00', '2017:06:15:23:59:59', 'Second'))); // [9]
console.log(JSON.stringify(log2.retrieve('2018:01:01:00:00:00', '2018:12:31:23:59:59', 'Year'))); // []
