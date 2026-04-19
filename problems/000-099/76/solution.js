/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let sLength = s.length;
    let tLength = t.length;
    let map = {}; // t 生成 map 用于几率 t 中单个字符还需要多少个才能覆盖
    for (let i = 0; i < tLength; i++) {
        let char = t[i];
        map[char] = (map[char] || 0) - 1;
    }
    let end = 0; // window end
    let start = 0;// window start
    let covers = 0;// 当前 window 覆盖了多少个 t 中的字符   
    let result = { window: "" };
    while (end <= sLength) {
        // 如果已经形成窗口了 缩小窗口
        if (covers === tLength) {
            let char = s[start];
            let needs = map[char];
            if (needs || needs === 0) {
                if (needs <= 0) covers--;
                map[char] = needs - 1; // 更新 还需要多少个覆盖
            }
            start++;
        }
        // 如果没有形成窗口增大窗口
        else {
            let char = s[end];
            let needs = map[char];
            if (needs || needs === 0) {
                if (needs < 0) covers++;
                map[char] = needs + 1;
            }
            end++;
        }
        if (covers === tLength) {
            let length = end - start;
            if (!result.window.length || length < result.window.length) {
                result = { window: s.slice(start, end) }
            }
        }
    }
    return result.window;
};

/**
// TEST:
console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC
console.log(minWindow("a", "aa")); // ""
console.log(minWindow("bba", "ab")); // "ba"

*/