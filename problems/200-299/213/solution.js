
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const length = nums.length;
    if (length === 0) { return 0; }
    if (length === 1) { return nums[0]; }
    const max = (array) => {
        let dp0 = 0;
        let dp1 = 0;
        for (let i = 0; i < array.length; i++) {
            [dp0, dp1] = [dp1, Math.max(dp0 + array[i], dp1)];
        }
        return dp1;
    }
    let rob1 = max(nums.slice(0, length - 1)); // 去掉最后一个
    let rob2 = max(nums.slice(1, length)); // 去掉第一个
    return Math.max(rob1, rob2);
};


// TEST:
console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]))