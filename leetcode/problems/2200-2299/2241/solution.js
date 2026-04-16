/*
 * @lc app=leetcode id=2241 lang=javascript
 *
 * [2241] Design an ATM Machine
 */

// @lc code=start

var ATM = function() {
    this.denominations = [20, 50, 100, 200, 500];
    this.count = new Array(5).fill(0);
};

/**
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function(banknotesCount) {
    for (let i = 0; i < 5; i++) this.count[i] += banknotesCount[i];
};

/**
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function(amount) {
    let used = new Array(5).fill(0);
    let remaining = amount;
    for (let i = 4; i >= 0; i--) {
        let need = Math.min(Math.floor(remaining / this.denominations[i]), this.count[i]);
        used[i] = need;
        remaining -= need * this.denominations[i];
    }
    if (remaining !== 0) return [-1];
    for (let i = 0; i < 5; i++) this.count[i] -= used[i];
    return used;
};

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
// @lc code=end

// TEST:
var atm = new ATM();
atm.deposit([0,0,1,2,1]);
console.log(JSON.stringify(atm.withdraw(600))); // [0,0,1,0,1]
atm.deposit([0,1,0,1,1]);
console.log(JSON.stringify(atm.withdraw(600))); // [-1]
console.log(JSON.stringify(atm.withdraw(550))); // [0,1,0,0,1]
