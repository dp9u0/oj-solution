/*
 * @lc app=leetcode.cn id=157 lang=javascript
 *
 * [157] 用 Read4 读取 N 个字符
 */

// @lc code=start
/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        const buf4 = [];
        let copied = 0;
        while (copied < n) {
            const got = read4(buf4);
            if (got === 0) break;
            const take = Math.min(got, n - copied);
            for (let i = 0; i < take; i++) buf[copied + i] = buf4[i];
            copied += take;
            if (got < 4) break; // EOF reached
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
const run = (file, n) => {
    const read = makeReader(file);
    const buf = [];
    const ret = read(buf, n);
    return [ret, buf.slice(0, ret).join("")];
};
console.log(run("abc", 5)); // [3, "abc"]
console.log(run("abcde", 5)); // [5, "abcde"]
console.log(run("abcdef", 3)); // [3, "abc"]
console.log(run("ab", 0)); // [0, ""]
console.log(run("", 4)); // [0, ""]
