/*
 * @lc app=leetcode.cn id=642 lang=javascript
 *
 * [642] 设计搜索自动补全系统
 */

// @lc code=start
/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
    this.times = new Map();
    for (let i = 0; i < sentences.length; i++) {
        this.times.set(sentences[i], times[i]);
    }
    this.prefix = '';
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    if (c === '#') {
        this.times.set(this.prefix, (this.times.get(this.prefix) || 0) + 1);
        this.prefix = '';
        return [];
    }
    this.prefix += c;
    const hits = [];
    for (const [s, t] of this.times) {
        if (s.startsWith(this.prefix)) hits.push([s, t]);
    }
    hits.sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1));
    return hits.slice(0, 3).map(h => h[0]);
};
// @lc code=end

// TEST:
const sys = new AutocompleteSystem(["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]);
console.log(JSON.stringify(sys.input('i'))); // ["i love you","island","i love leetcode"]
console.log(JSON.stringify(sys.input(' '))); // ["i love you","i love leetcode"]
console.log(JSON.stringify(sys.input('a'))); // []
console.log(JSON.stringify(sys.input('#'))); // []

const sys2 = new AutocompleteSystem(["abc"], [2]);
sys2.input('a'); sys2.input('b'); sys2.input('c');
console.log(JSON.stringify(sys2.input('#'))); // []
console.log(JSON.stringify(sys2.input('a'))); // ["abc"] (count now 3, still top)

const sys3 = new AutocompleteSystem([], []);
console.log(JSON.stringify(sys3.input('x'))); // []
sys3.input('#');
console.log(JSON.stringify(sys3.input('x'))); // ["x"] (newly stored sentence)
