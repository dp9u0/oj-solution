/*
 * @lc app=leetcode id=1169 lang=javascript
 *
 * [1169] Invalid Transactions
 */

// @lc code=start
/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const n = transactions.length;
    const parsed = transactions.map((t, i) => {
        const [name, time, amount, city] = t.split(',');
        return { name, time: +time, amount: +amount, city, idx: i };
    });
    const invalid = new Set();
    for (let i = 0; i < n; i++) {
        if (parsed[i].amount > 1000) {
            invalid.add(i);
            continue;
        }
        for (let j = 0; j < n; j++) {
            if (i !== j && parsed[i].name === parsed[j].name &&
                parsed[i].city !== parsed[j].city &&
                Math.abs(parsed[i].time - parsed[j].time) <= 60) {
                invalid.add(i);
                break;
            }
        }
    }
    return [...invalid].map(i => transactions[i]);
};
// @lc code=end

// TEST:
console.log(invalidTransactions(["alice,20,800,mtv","alice,50,100,beijing"])); // both
console.log(invalidTransactions(["alice,20,800,mtv","alice,50,1200,mtv"])); // ["alice,50,1200,mtv"]
console.log(invalidTransactions(["alice,20,800,mtv","bob,50,1200,mtv"])); // ["bob,50,1200,mtv"]
