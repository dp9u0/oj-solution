var RandomizedCollection = function() {
    this.list = [];
    this.map = new Map(); // val -> Set of indices
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    let notPresent = false;
    if (!this.map.has(val) || this.map.get(val).size === 0) {
        notPresent = true;
    }
    
    if (!this.map.has(val)) {
        this.map.set(val, new Set());
    }
    
    this.list.push(val);
    this.map.get(val).add(this.list.length - 1);
    
    return notPresent;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if (!this.map.has(val) || this.map.get(val).size === 0) {
        return false;
    }
    
    const indicesSet = this.map.get(val);
    let removeIdx = -1;
    // Get an arbitrary index from the set
    for (let idx of indicesSet) {
        removeIdx = idx;
        break;
    }
    
    indicesSet.delete(removeIdx);
    
    const lastIdx = this.list.length - 1;
    const lastVal = this.list[lastIdx];
    
    if (removeIdx !== lastIdx) {
        // Swap with the last element
        this.list[removeIdx] = lastVal;
        
        // Update the index of lastVal in the map
        const lastValIndices = this.map.get(lastVal);
        lastValIndices.delete(lastIdx);
        lastValIndices.add(removeIdx);
    }
    
    // Remove the last element
    this.list.pop();
    
    return true;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    const randomIdx = Math.floor(Math.random() * this.list.length);
    return this.list[randomIdx];
};

module.exports = RandomizedCollection;

// TEST:
let collection = new RandomizedCollection();
console.log(collection.insert(1)); // true
console.log(collection.insert(1)); // false
console.log(collection.insert(2)); // true
console.log(collection.getRandom()); // 1 or 2
console.log(collection.remove(1)); // true
console.log(collection.getRandom()); // 1 or 2
