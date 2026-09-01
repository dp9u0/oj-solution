/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    const set = new Set();
    nums.forEach((num) => { set.add(num); });
    const distNums = Array.from(set).sort((a, b) => a - b);
    const idxMap = {}
    distNums.forEach((n, i) => idxMap[n] = (i + 1));
    const treeArray = new Array(distNums.length + 1).fill(0); // 树状数组是 1-base 的
    const results = new Array(distNums.length).fill(0);
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        const idx = idxMap[num];
        let count = 0;
        // query
        let pos = idx - 1;
        while (pos > 0) {
            count += treeArray[pos];
            pos -= (pos & (-pos)) // lowbit
        }
        results[i] = count;
        // update
        pos = idx;
        while (pos < treeArray.length) {
            treeArray[pos] += 1;
            pos += (pos & (-pos)); // lowbit
        }
    }
    return results;
};


// TEST:
console.log(countSmaller([5, 2, 6, 1]))
console.log(countSmaller([-1, -2]))