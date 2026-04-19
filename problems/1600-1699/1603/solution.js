/*
 * @lc app=leetcode id=1603 lang=javascript
 *
 * [1603] Design Parking System
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  this.slots = [0, big, medium, small];
};

ParkingSystem.prototype.addCar = function(carType) {
  if (this.slots[carType] > 0) {
    this.slots[carType]--;
    return true;
  }
  return false;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end

// TEST:
const ps = new ParkingSystem(1, 1, 0);
console.log(ps.addCar(1)); // true
console.log(ps.addCar(2)); // true
console.log(ps.addCar(3)); // false
console.log(ps.addCar(1)); // false
