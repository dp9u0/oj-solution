/*
 * @lc app=leetcode.cn id=158 lang=javascript
 *
 * [158] 用 Read4 读取 N 个字符 II - 多次调用
 */

// @lc code=start
/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    // leftover characters from a previous read4 call survive across calls
    let buf4 = [];

    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let copied = 0;
        while (copied < n) {
            if (buf4.length === 0) {
                const chunk = [];
                const got = read4(chunk);
                if (got === 0) break;
                for (let i = 0; i < got; i++) buf4.push(chunk[i]);
            }
            const take = Math.min(buf4.length, n - copied);
            for (let i = 0; i < take; i++) buf[copied++] = buf4.shift();
        }
        return copied;
    };
};
// @lc code=end

// TEST:
const makeReader = file => {
    let pos = 0;
    return solution(buf4 => {
        let c = 0;
        while (c < 4 && pos < file.length) buf4[c++] = file[pos++];
        return c;
    });
};
const seq = (file, ns) => {
    const read = makeReader(file);
    return ns.map(n => {
        const buf = [];
        const ret = read(buf, n);
        return buf.slice(0, ret).join("");
    });
};
console.log(seq("abcde", [1, 2, 5])); // ["a","bc","de"] (leftover reuse)
console.log(seq("abc", [4, 4])); // ["abc",""]
console.log(seq("abc", [1, 1, 1])); // ["a","b","c"]
console.log(seq("ab", [0, 2])); // ["","ab"]
console.log(seq("", [3])); // [""]
