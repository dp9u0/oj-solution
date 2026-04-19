/*
 * @lc app=leetcode id=1487 lang=javascript
 *
 * [1487] Making File Names Unique
 */

// @lc code=start
/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
    const map = new Map();
    const result = [];
    for (const name of names) {
        if (!map.has(name)) {
            result.push(name);
            map.set(name, 1);
        } else {
            let k = map.get(name);
            let newName;
            do {
                newName = `${name}(${k})`;
                k++;
            } while (map.has(newName));
            result.push(newName);
            map.set(name, k);
            map.set(newName, 1);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(getFolderNames(["pes","fifa","gta","pes(2019)"]));
console.log(getFolderNames(["gta","gta(1)","gta","avalon"]));
console.log(getFolderNames(["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece"]));
