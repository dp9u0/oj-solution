var RandomizedSet = function() {
    this.list = [];
    this.map = new Map(); // val -> index
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false;
    }
    
    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) {
        return false;
    }
    
    const idx = this.map.get(val);
    const lastVal = this.list[this.list.length - 1];
    
    // Swap the element to remove with the last element
    this.list[idx] = lastVal;
    this.map.set(lastVal, idx);
    
    // Remove the last element
    this.list.pop();
    this.map.delete(val);
    
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIdx = Math.floor(Math.random() * this.list.length);
    return this.list[randomIdx];
};

module.exports = RandomizedSet;

// TEST:
let randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // true
console.log(randomizedSet.remove(2)); // false
console.log(randomizedSet.insert(2)); // true
console.log(randomizedSet.getRandom()); // 1 or 2
console.log(randomizedSet.remove(1)); // true
console.log(randomizedSet.insert(2)); // false
console.log(randomizedSet.getRandom()); // 2
