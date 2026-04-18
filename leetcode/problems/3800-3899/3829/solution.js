/*
 * @lc app=leetcode id=3829 lang=javascript
 *
 * [3829] Design Ride Sharing System
 */

// @lc code=start

var RideSharingSystem = function() {
    this.riders = [];
    this.drivers = [];
    this.riderSet = new Set();
};

RideSharingSystem.prototype.addRider = function(riderId) {
    this.riders.push(riderId);
    this.riderSet.add(riderId);
};

RideSharingSystem.prototype.addDriver = function(driverId) {
    this.drivers.push(driverId);
};

RideSharingSystem.prototype.matchDriverWithRider = function() {
    if (this.riders.length === 0 || this.drivers.length === 0) return [-1, -1];
    const driverId = this.drivers.shift();
    const riderId = this.riders.shift();
    this.riderSet.delete(riderId);
    return [driverId, riderId];
};

RideSharingSystem.prototype.cancelRider = function(riderId) {
    if (!this.riderSet.has(riderId)) return;
    this.riderSet.delete(riderId);
    const idx = this.riders.indexOf(riderId);
    if (idx !== -1) this.riders.splice(idx, 1);
};

/**
 * Your RideSharingSystem object will be instantiated and called as such:
 * var obj = new RideSharingSystem()
 * obj.addRider(riderId)
 * obj.addDriver(driverId)
 * var param_3 = obj.matchDriverWithRider()
 * obj.cancelRider(riderId)
 */
// @lc code=end

// TEST:
var obj = new RideSharingSystem();
obj.addRider(3);
obj.addDriver(2);
obj.addRider(1);
console.log(JSON.stringify(obj.matchDriverWithRider())); // [2,3]
obj.addDriver(5);
obj.cancelRider(3);
console.log(JSON.stringify(obj.matchDriverWithRider())); // [5,1]
console.log(JSON.stringify(obj.matchDriverWithRider())); // [-1,-1]

var obj2 = new RideSharingSystem();
obj2.addRider(8);
obj2.addDriver(8);
obj2.addDriver(6);
console.log(JSON.stringify(obj2.matchDriverWithRider())); // [8,8]
obj2.addRider(2);
obj2.cancelRider(2);
console.log(JSON.stringify(obj2.matchDriverWithRider())); // [-1,-1]

var obj3 = new RideSharingSystem();
obj3.addRider(1);
obj3.addRider(2);
obj3.cancelRider(1);
obj3.addDriver(3);
console.log(JSON.stringify(obj3.matchDriverWithRider())); // [3,2]
