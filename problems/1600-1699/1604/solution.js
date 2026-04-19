/*
 * @lc app=leetcode id=1604 lang=javascript
 *
 * [1604] Alert Using Same Key-Card Three or More Times in a One Hour Period
 */

// @lc code=start
/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
    const toMin = (t) => {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + m;
    };

    const map = new Map();
    for (let i = 0; i < keyName.length; i++) {
        if (!map.has(keyName[i])) map.set(keyName[i], []);
        map.get(keyName[i]).push(toMin(keyTime[i]));
    }

    const result = [];
    for (const [name, times] of map) {
        times.sort((a, b) => a - b);
        for (let i = 2; i < times.length; i++) {
            if (times[i] - times[i - 2] <= 60) {
                result.push(name);
                break;
            }
        }
    }

    return result.sort();
};
// @lc code=end

// TEST:
console.log(JSON.stringify(alertNames(['daniel','daniel','daniel','luis','luis','luis','luis'], ['10:00','10:40','11:00','09:00','11:00','13:00','15:00'])) === JSON.stringify(['daniel']));
console.log(JSON.stringify(alertNames(['alice','alice','alice','bob','bob','bob','bob'], ['12:01','12:00','18:00','21:00','21:20','21:30','23:00'])) === JSON.stringify(['bob']));
console.log(JSON.stringify(alertNames(['a','a','a'], ['01:00','02:00','03:00'])) === JSON.stringify([]));
console.log(JSON.stringify(alertNames(['a','a','a'], ['01:00','01:30','02:00'])) === JSON.stringify(['a']));
console.log(JSON.stringify(alertNames(['a','b','a','b','a','b'], ['01:00','01:00','01:30','01:30','02:00','02:00'])) === JSON.stringify(['a','b']));
