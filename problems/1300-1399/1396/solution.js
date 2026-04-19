/*
 * @lc app=leetcode id=1396 lang=javascript
 *
 * [1396] Design Underground System
 */

// @lc code=start

var UndergroundSystem = function() {
    this.checkins = new Map(); // id -> {station, time}
    this.travels = new Map(); // "start→end" -> {total, count}
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkins.set(id, { station: stationName, time: t });
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const { station: startStation, time: startTime } = this.checkins.get(id);
    const key = startStation + '→' + stationName;
    const travel = this.travels.get(key) || { total: 0, count: 0 };
    travel.total += t - startTime;
    travel.count++;
    this.travels.set(key, travel);
    this.checkins.delete(id);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const key = startStation + '→' + endStation;
    const { total, count } = this.travels.get(key);
    return total / count;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
// @lc code=end

// TEST:
const sys = new UndergroundSystem();
sys.checkIn(45, "Leyton", 3);
sys.checkIn(32, "Paradise", 8);
sys.checkIn(27, "Leyton", 10);
sys.checkOut(45, "Waterloo", 15);
sys.checkOut(27, "Waterloo", 20);
sys.checkOut(32, "Cambridge", 22);
console.log(sys.getAverageTime("Paradise", "Cambridge")); // 14
console.log(sys.getAverageTime("Leyton", "Waterloo")); // 11
