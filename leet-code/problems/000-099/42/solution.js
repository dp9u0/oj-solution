/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMaxHeight = [];
    let length = height.length,
        leftMax = 0,
        rightMax = 0,
        trap = 0;
    // LeftMax For Each Element
    for (var leftIndex = 0; leftIndex < length; leftIndex++) {
        var element = height[leftIndex];
        leftMaxHeight[leftIndex] = leftMax;
        leftMax = Math.max(leftMax, element);
    }
    // RightMax For Each Element
    for (var rightIndex = length - 1; rightIndex >= 0; rightIndex--) {
        var element = height[rightIndex];
        currentTrap = Math.min(rightMax, leftMaxHeight[rightIndex]) - element;
        trap += currentTrap > 0 ? currentTrap : 0;
        rightMax = Math.max(rightMax, element);
    }
    return trap;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap2 = function(height) {
    let store = {};
    let length = height.length,
        leftMax = 0,
        trap = 0;
    // LeftMax For Each Element
    for (var index = 0; index < height.length; index++) {
        let currentHeight = height[index];
        let min = Math.min(leftMax, currentHeight);
        for (let h = min - 1; h >= 0; h--) {
            if (store[h]) {
                trap += (min - h) * store[h];
                store[min] = store[min] ? store[min] + store[h] : store[h];
                store[h] = 0;
            }
        }

        console.log(`--------------------------------------------`);
        console.log(`[${index}] Max: ${leftMax} Current: ${currentHeight} Min: ${min} Trap: ${trap}`);
        if (currentHeight >= leftMax) {
            leftMax = currentHeight;
            console.log('reset');
            store = {};
        } else {
            store[currentHeight] = store[currentHeight] ? store[currentHeight] + 1 : 1;
        }
        console.log(store);
    }
    return trap;
};

// TEST:
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));