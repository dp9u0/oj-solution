/*
 * @lc app=leetcode.cn id=418 lang=javascript
 *
 * [418] 屏幕可显示句子的数量
 */

// @lc code=start
/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
    const k = sentence.length;
    // a word longer than a line can never be placed
    if (Math.max(...sentence.map(w => w.length)) > cols) return 0;

    // a line starting at word i always evolves identically:
    // next[i] = word index starting the next line, times[i] = sentences finished on this line
    const next = new Array(k), times = new Array(k);
    for (let i = 0; i < k; i++) {
        let remain = cols, j = i, cnt = 0;
        while (sentence[j].length <= remain) {
            remain -= sentence[j].length + 1; // word + one space
            j++;
            if (j === k) { j = 0; cnt++; }
        }
        next[i] = j;
        times[i] = cnt;
    }

    let start = 0, ans = 0;
    for (let r = 0; r < rows; r++) {
        ans += times[start];
        start = next[start];
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(wordsTyping(["hello", "world"], 2, 8)); // 1
console.log(wordsTyping(["a", "bcd", "e"], 3, 6)); // 2
console.log(wordsTyping(["i", "had", "apple", "pie"], 4, 5)); // 1
console.log(wordsTyping(["abc"], 3, 2)); // 0 (word longer than line)
console.log(wordsTyping(["a"], 4, 20000)); // 40000 (10000 per line)
console.log(wordsTyping(["f", "p", "a"], 8, 7)); // 10
