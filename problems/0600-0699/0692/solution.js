/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freq = new Map();
    for (const w of words) {
        freq.set(w, (freq.get(w) || 0) + 1);
    }

    const sorted = [...freq.keys()].sort((a, b) => {
        const diff = freq.get(b) - freq.get(a);
        return diff !== 0 ? diff : a.localeCompare(b);
    });

    return sorted.slice(0, k);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(topKFrequent(["i","love","leetcode","i","love","coding"], 2))); // ["i","love"]
console.log(JSON.stringify(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4))); // ["the","is","sunny","day"]
