/*
 * @lc app=leetcode id=2288 lang=javascript
 *
 * [2288] Apply Discount to Prices
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
    const factor = (100 - discount) / 100;
    const isPrice = (word) => word.length > 1 && word[0] === '$' && /^\d+$/.test(word.slice(1));

    return sentence.split(' ').map(word => {
        if (isPrice(word)) {
            const price = Number(word.slice(1)) * factor;
            return '$' + price.toFixed(2);
        }
        return word;
    }).join(' ');
};
// @lc code=end

// TEST:
console.log(discountPrices("there are $1 $2 and 5$ candies in the shop", 50)); // "there are $0.50 $1.00 and 5$ candies in the shop"
console.log(discountPrices("1 2 $3 4 $5 $6 7 8$ $9 $10$", 100)); // "1 2 $0.00 4 $0.00 $0.00 7 8$ $0.00 $10$"
