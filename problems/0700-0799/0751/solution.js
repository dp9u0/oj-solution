/*
 * @lc app=leetcode.cn id=751 lang=javascript
 *
 * [751] IP 到 CIDR
 */

// @lc code=start
/**
 * @param {string} ip
 * @param {number} n
 * @return {string[]}
 */
var ipToCIDR = function(ip, n) {
    const toInt = (s) => {
        const [a, b, c, d] = s.split('.').map(Number);
        return (((a << 24) | (b << 16) | (c << 8) | d) >>> 0);
    };
    const toIp = (x) =>
        (x >>> 24) + '.' + ((x >>> 16) & 255) + '.' + ((x >>> 8) & 255) + '.' + (x & 255);

    let start = toInt(ip);
    const ans = [];
    while (n > 0) {
        // alignment limit: start === 0 means any power of two up to the whole space
        const align = start === 0 ? 4294967296 : ((start & -start) >>> 0);
        // count limit: largest power of two <= n
        let maxPow = 1;
        while (maxPow * 2 <= n) maxPow *= 2;
        const size = Math.min(align, maxPow);
        const prefix = 32 - Math.round(Math.log2(size));
        ans.push(toIp(start) + '/' + prefix);
        start = (start + size) >>> 0;
        n -= size;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(ipToCIDR("255.0.0.7", 10)); // ["255.0.0.7/32","255.0.0.8/29","255.0.0.16/32"]
console.log(ipToCIDR("117.145.102.62", 8)); // ["117.145.102.62/31","117.145.102.64/30","117.145.102.68/31"]
console.log(ipToCIDR("255.0.0.7", 1)); // ["255.0.0.7/32"]
console.log(ipToCIDR("0.0.0.0", 4)); // ["0.0.0.0/30"]
console.log(ipToCIDR("1.1.1.1", 3)); // ["1.1.1.1/32","1.1.1.2/31"]
console.log(ipToCIDR("192.168.1.0", 5)); // ["192.168.1.0/30","192.168.1.4/32"]
console.log(ipToCIDR("255.255.255.252", 4)); // ["255.255.255.252/30"]
