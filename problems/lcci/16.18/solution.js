/*
 * @lc app=leetcode.cn id=面试题 16.18 lang=javascript
 *
 * [面试题 16.18] 模式匹配
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function(pattern, value) {
    const cntA = [...pattern].filter(c => c === 'a').length;
    const cntB = pattern.length - cntA;
    const m = value.length;

    // 给定 la/lb：a、b 取各自首次出现处截取，逐段比对；两类并存时须 a !== b
    const check = (la, lb) => {
        let a = '';
        let b = '';
        let pos = 0;
        for (const c of pattern) {
            if (c === 'a') {
                const seg = value.slice(pos, pos + la);
                if (!a) a = seg;
                else if (seg !== a) return false;
            } else {
                const seg = value.slice(pos, pos + lb);
                if (!b) b = seg;
                else if (seg !== b) return false;
            }
            pos += c === 'a' ? la : lb;
        }
        return cntA === 0 || cntB === 0 ? true : a !== b;
    };

    if (cntA === 0 && cntB === 0) return m === 0;
    if (cntA === 0) return m % cntB === 0 && check(0, m / cntB);
    if (cntB === 0) return m % cntA === 0 && check(m / cntA, 0);
    for (let la = 0; la * cntA <= m; la++) {
        const rem = m - la * cntA;
        if (rem % cntB !== 0) continue;
        if (check(la, rem / cntB)) return true;
    }
    return false;
};
// @lc code=end

// TEST:
console.log(patternMatching('abba', 'dogcatcatdog') === true);
console.log(patternMatching('abba', 'dogcatcatfish') === false);
console.log(patternMatching('aaaa', 'dogcatcatdog') === false);
console.log(patternMatching('abba', 'dogdogdogdog') === true); // b 为空
console.log(patternMatching('ab', 'xx') === true); // a=""/b="xx" 合法（la=0 分支先命中）
console.log(patternMatching('a', '') === true);
console.log(patternMatching('ab', '') === false); // a=b="" 违反约束
console.log(patternMatching('bb', 'gogogo') === false); // 单类字符不均分
console.log(patternMatching('bb', 'gogo') === true);
