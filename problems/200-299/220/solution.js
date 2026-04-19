/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    const map = nums
        .map((value, index) => ({ value, index }))
        .sort((a, b) => a.value - b.value)
    let l = 0;
    let r = 1;
    while (r < map.length) {
        const diff = Math.abs(map[r].value - map[l].value);
        const range = Math.abs(map[r].index - map[l].index);
        if (diff <= t && range <= k) { return true; }
        else if (diff > t) { l++; }
        else if (range > k) { r++; }
        if (l === r) { r++; }
    }
    return false;
};


// TEST:
let nums = [1, 2, 3, 1], k = 3, t = 0;
console.log(containsNearbyAlmostDuplicate(nums, k, t))

nums = [1, 0, 1, 1], k = 1, t = 2;
console.log(containsNearbyAlmostDuplicate(nums, k, t))

nums = [1, 5, 9, 1, 5, 9], k = 2, t = 3;
console.log(containsNearbyAlmostDuplicate(nums, k, t))