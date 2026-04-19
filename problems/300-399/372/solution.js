/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    const MOD = 1337;
    
    // Function to calculate (base^exp) % mod
    const modPow = function(base, exp) {
        let res = 1;
        base = base % MOD;
        while (exp > 0) {
            if (exp % 2 === 1) {
                res = (res * base) % MOD;
            }
            base = (base * base) % MOD;
            exp = Math.floor(exp / 2);
        }
        return res;
    };
    
    a = a % MOD;
    let result = 1;
    
    for (let i = 0; i < b.length; i++) {
        let d = b[i];
        // result = (result^10) * (a^d) % MOD
        result = (modPow(result, 10) * modPow(a, d)) % MOD;
    }
    
    return result;
};

module.exports = superPow;

// TEST:
console.log(superPow(2, [3])); // 8
console.log(superPow(2, [1,0])); // 1024
console.log(superPow(1, [4,3,3,8,5,2])); // 1
