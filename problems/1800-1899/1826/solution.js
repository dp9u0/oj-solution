/*
 * @lc app=leetcode.cn id=1826 lang=javascript
 *
 * [1826] 有缺陷的传感器
 */

// @lc code=start
/**
 * @param {number[]} sensor1
 * @param {number[]} sensor2
 * @return {number}
 */
var badSensor = function(sensor1, sensor2) {
    const n = sensor1.length;
    let i = 0;
    while (i < n && sensor1[i] === sensor2[i]) i++;
    if (i === n) return -1; // identical: nothing to conclude

    // A: sensor1 defective -> sensor1[i..n-2] == sensor2[i+1..n-1]
    // B: sensor2 defective -> sensor2[i..n-2] == sensor1[i+1..n-1]
    let a = true, b = true;
    for (let j = i; j < n - 1; j++) {
        if (sensor1[j] !== sensor2[j + 1]) a = false;
        if (sensor2[j] !== sensor1[j + 1]) b = false;
    }
    if (a && !b) return 1;
    if (b && !a) return 2;
    return -1;
};
// @lc code=end

// TEST:
console.log(badSensor([2, 3, 4, 5], [2, 1, 3, 4])); // 1
console.log(badSensor([2, 2, 2, 2, 2], [2, 2, 2, 2, 5])); // -1
console.log(badSensor([2, 3, 2, 2, 3, 2], [2, 3, 2, 3, 2, 7])); // 2
console.log(badSensor([1, 2, 3], [1, 2, 3])); // -1 (identical)
console.log(badSensor([1, 2, 3], [1, 3, 4])); // 2
console.log(badSensor([1, 3, 4], [1, 2, 3])); // 1
