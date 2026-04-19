/*
 * @lc app=leetcode id=1797 lang=javascript
 *
 * [1797] Design Authentication Manager
 */

// @lc code=start
/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
    this.ttl = timeToLive;
    this.tokens = new Map();
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
    this.tokens.set(tokenId, currentTime + this.ttl);
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
    if (this.tokens.has(tokenId) && this.tokens.get(tokenId) > currentTime) {
        this.tokens.set(tokenId, currentTime + this.ttl);
    }
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
    let count = 0;
    for (const expiry of this.tokens.values()) {
        if (expiry > currentTime) count++;
    }
    return count;
};

/** 
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
// @lc code=end

// TEST:
const am = new AuthenticationManager(5);
am.renew('aaa', 1);
am.generate('aaa', 2);
console.log(am.countUnexpiredTokens(6)); // 1
am.generate('bbb', 7);
am.renew('aaa', 8);
am.renew('bbb', 10);
console.log(am.countUnexpiredTokens(15)); // 0
