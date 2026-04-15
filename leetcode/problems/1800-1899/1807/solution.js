/*
 * @lc app=leetcode id=1807 lang=javascript
 *
 * [1807] Evaluate the Bracket Pairs of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    const map = new Map(knowledge);
    let result = '';
    let i = 0;
    while (i < s.length) {
        if (s[i] === '(') {
            let key = '';
            i++;
            while (s[i] !== ')') {
                key += s[i++];
            }
            i++; // skip ')'
            result += map.has(key) ? map.get(key) : '?';
        } else {
            result += s[i++];
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(evaluate('(name)is(age)yearsold', [['name','bob'],['age','two']])); // 'bobistwoyearsold'
console.log(evaluate('hi(name)', [['a','b']]));                                // 'hi?'
console.log(evaluate('(a)(a)(a)aaa', [['a','yes']]));                          // 'yesyesyesaaa'
