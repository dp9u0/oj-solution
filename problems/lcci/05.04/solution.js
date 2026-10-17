/*
 * @lc app=leetcode.cn id=面试题 05.04 lang=javascript
 *
 * [面试题 05.04] 下一个数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function(num) {
    // 下一个更大：翻转最右非拖尾 0（p = 拖尾0段c0 + 其上1段c1），低位补 c1-1 个 1
    const nextLarger = n => {
        let c = n;
        let c0 = 0;
        let c1 = 0;
        while ((c & 1) === 0 && c !== 0) {
            c0++;
            c >>= 1;
        }
        while ((c & 1) === 1) {
            c1++;
            c >>= 1;
        }
        if (c0 + c1 >= 31) return -1; // 无更高位可翻
        let r = n | (1 << (c0 + c1));
        r &= ~((1 << (c0 + c1)) - 1);
        r |= (1 << (c1 - 1)) - 1;
        return r;
    };
    // 下一个更小：1 全部垫底(形如 0b…0111)无解；否则翻转最右非拖尾 1，其下放 c1+1 个 1
    const nextSmaller = n => {
        if ((n & (n + 1)) === 0) return -1;
        let c = n;
        let c0 = 0;
        let c1 = 0;
        while ((c & 1) === 1) {
            c1++;
            c >>= 1;
        }
        while ((c & 1) === 0 && c !== 0) {
            c0++;
            c >>= 1;
        }
        let r = n & ~((1 << (c0 + c1 + 1)) - 1);
        r |= ((1 << (c1 + 1)) - 1) << (c0 - 1);
        return r;
    };
    return [nextLarger(num), nextSmaller(num)];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findClosedNumbers(2)) === '[4,1]');
console.log(JSON.stringify(findClosedNumbers(1)) === '[2,-1]');
console.log(JSON.stringify(findClosedNumbers(3)) === '[5,-1]'); // 0b11 → 0b101
console.log(JSON.stringify(findClosedNumbers(5)) === '[6,3]'); // 0b101
console.log(JSON.stringify(findClosedNumbers(6)) === '[9,5]'); // 0b110
console.log(JSON.stringify(findClosedNumbers(10)) === '[12,9]'); // 0b1010 → 0b1100 / 0b1001
console.log(JSON.stringify(findClosedNumbers(2147483647)) === '[-1,-1]'); // 31 个 1 已垫底（次高位无解，更高位为负）
