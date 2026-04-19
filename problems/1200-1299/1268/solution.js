/*
 * @lc app=leetcode id=1268 lang=javascript
 *
 * [1268] Search Suggestions System
 */

// @lc code=start
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    const result = [];
    let prefix = '';
    let start = 0;

    for (const ch of searchWord) {
        prefix += ch;
        // binary search for the first product >= prefix
        let lo = start, hi = products.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (products[mid] < prefix) lo = mid + 1;
            else hi = mid;
        }
        start = lo;
        const suggestions = [];
        for (let i = lo; i < Math.min(lo + 3, products.length); i++) {
            if (products[i].startsWith(prefix)) {
                suggestions.push(products[i]);
            }
        }
        result.push(suggestions);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(suggestedProducts(['mobile','mouse','moneypot','monitor','mousepad'], 'mouse')));
// [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
console.log(JSON.stringify(suggestedProducts(['havana'], 'havana')));
// [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
console.log(JSON.stringify(suggestedProducts(['bags','baggage','banner','box','cloths'], 'bags')));
// [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
console.log(JSON.stringify(suggestedProducts(['abc','abc','abc'], 'abc'))); // no duplicates per constraint
console.log(JSON.stringify(suggestedProducts(['a'], 'a')));  // [["a"]]
console.log(JSON.stringify(suggestedProducts(['x','y','z'], 'xyz')));  // [[],[],[]]
