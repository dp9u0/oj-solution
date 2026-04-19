/*
 * @lc app=leetcode id=468 lang=javascript
 *
 * [468] Validate IP Address
 */

// @lc code=start
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    if (queryIP.includes('.')) {
        const parts = queryIP.split('.');
        if (parts.length !== 4) return 'Neither';
        for (const p of parts) {
            if (p.length === 0 || p.length > 3) return 'Neither';
            if (!/^\d+$/.test(p)) return 'Neither';
            if (p.length > 1 && p[0] === '0') return 'Neither';
            const val = parseInt(p, 10);
            if (val < 0 || val > 255) return 'Neither';
        }
        return 'IPv4';
    }

    if (queryIP.includes(':')) {
        const parts = queryIP.split(':');
        if (parts.length !== 8) return 'Neither';
        for (const p of parts) {
            if (p.length === 0 || p.length > 4) return 'Neither';
            if (!/^[0-9a-fA-F]+$/.test(p)) return 'Neither';
        }
        return 'IPv6';
    }

    return 'Neither';
};
// @lc code=end

// TEST:
console.log(validIPAddress('172.16.254.1') === 'IPv4');
console.log(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334') === 'IPv6');
console.log(validIPAddress('256.256.256.256') === 'Neither');
console.log(validIPAddress('192.168.01.1') === 'Neither');
console.log(validIPAddress('2001:0db8:85a3::8A2E:0370:7334') === 'Neither');
console.log(validIPAddress('0.0.0.0') === 'IPv4');
console.log(validIPAddress('::1') === 'Neither');
console.log(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334:') === 'Neither');
