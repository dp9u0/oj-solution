/*
 * @lc app=leetcode id=1096 lang=javascript
 *
 * [1096] Brace Expansion II
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
    let pos = 0;
    const n = expression.length;

    const setUnion = (a, b) => {
        const result = new Set(a);
        for (const s of b) result.add(s);
        return result;
    };

    const setConcat = (a, b) => {
        const result = new Set();
        for (const sa of a) {
            for (const sb of b) {
                result.add(sa + sb);
            }
        }
        return result;
    };

    const parseExpr = () => parseUnion();

    const parseUnion = () => {
        let result = parseConcat();
        while (pos < n && expression[pos] === ',') {
            pos++;
            result = setUnion(result, parseConcat());
        }
        return result;
    };

    const parseConcat = () => {
        let result = new Set(['']);
        while (pos < n && expression[pos] !== ',' && expression[pos] !== '}') {
            result = setConcat(result, parseAtom());
        }
        return result;
    };

    const parseAtom = () => {
        if (expression[pos] === '{') {
            pos++;
            const result = parseUnion();
            pos++;
            return result;
        }
        return new Set([expression[pos++]]);
    };

    const resultSet = parseExpr();
    return [...resultSet].sort();
};
// @lc code=end

// TEST:
console.log(JSON.stringify(braceExpansionII("{a,b}{c,{d,e}}")));  // ["ac","ad","ae","bc","bd","be"]
console.log(JSON.stringify(braceExpansionII("{{a,z},a{b,c},{ab,z}}")));  // ["a","ab","ac","z"]
console.log(JSON.stringify(braceExpansionII("{a,b}")));  // ["a","b"]
console.log(JSON.stringify(braceExpansionII("ab")));  // ["ab"]
console.log(JSON.stringify(braceExpansionII("{{a,b},{b,c}}")));  // ["a","b","c"]
console.log(JSON.stringify(braceExpansionII("{a}{b}{c}")));  // ["abc"]
