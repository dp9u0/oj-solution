/*
 * @lc app=leetcode id=2043 lang=javascript
 *
 * [2043] Simple Bank System
 */

// @lc code=start
/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.balance = balance;
    this.n = balance.length;
};

Bank.prototype.transfer = function(account1, account2, money) {
    if (account1 < 1 || account1 > this.n || account2 < 1 || account2 > this.n) return false;
    if (this.balance[account1 - 1] < money) return false;
    this.balance[account1 - 1] -= money;
    this.balance[account2 - 1] += money;
    return true;
};

Bank.prototype.deposit = function(account, money) {
    if (account < 1 || account > this.n) return false;
    this.balance[account - 1] += money;
    return true;
};

Bank.prototype.withdraw = function(account, money) {
    if (account < 1 || account > this.n) return false;
    if (this.balance[account - 1] < money) return false;
    this.balance[account - 1] -= money;
    return true;
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
// @lc code=end

// TEST:
const bank = new Bank([10, 100, 20, 50, 30]);
console.log(bank.withdraw(3, 10));
console.log(bank.transfer(5, 1, 20));
console.log(bank.deposit(5, 20));
console.log(bank.transfer(3, 4, 15));
console.log(bank.withdraw(10, 50));
