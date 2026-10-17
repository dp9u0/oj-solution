/*
 * @lc app=leetcode.cn id=面试题 17.22 lang=javascript
 *
 * [面试题 17.22] 单词转换
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    // 通配符桶：b_ll → [ball, bell, ...]，扩展时只查 L 个桶
    const L = beginWord.length;
    const dict = new Set(wordList);
    const buckets = new Map();
    for (const w of dict) {
        for (let k = 0; k < L; k++) {
            const key = w.slice(0, k) + '*' + w.slice(k + 1);
            if (!buckets.has(key)) buckets.set(key, []);
            buckets.get(key).push(w);
        }
    }
    if (!dict.has(endWord)) return [];
    // BFS + 前驱表，首次触达 endWord 回溯路径
    const prev = new Map();
    prev.set(beginWord, null);
    const queue = [beginWord];
    for (let head = 0; head < queue.length; head++) {
        const cur = queue[head];
        if (cur === endWord) {
            const path = [];
            for (let w = cur; w !== null; w = prev.get(w)) path.unshift(w);
            return path;
        }
        for (let k = 0; k < L; k++) {
            const key = cur.slice(0, k) + '*' + cur.slice(k + 1);
            for (const next of buckets.get(key) || []) {
                if (!prev.has(next)) {
                    prev.set(next, cur);
                    queue.push(next);
                }
            }
        }
    }
    return [];
};
// @lc code=end

// TEST:
// 校验器：首尾正确、逐词恰差一位、中间词均在字典
const validPath = (begin, end, list, path) => {
    if (!path.length || path[0] !== begin || path[path.length - 1] !== end) return false;
    const set = new Set(list);
    for (let i = 1; i < path.length; i++) {
        const a = path[i - 1];
        const b = path[i];
        let diff = 0;
        for (let k = 0; k < a.length; k++) if (a[k] !== b[k]) diff++;
        if (diff !== 1 || (i < path.length - 1 && !set.has(b))) return false;
    }
    return true;
};
console.log(validPath('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'], findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])));
console.log(JSON.stringify(findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])) === '[]');
console.log(JSON.stringify(findLadders('hit', 'cog', [])) === '[]');
console.log(validPath('a', 'c', ['b', 'c'], findLadders('a', 'c', ['b', 'c'])));
console.log(validPath('same', 'same', ['same'], findLadders('same', 'same', ['same'])));
