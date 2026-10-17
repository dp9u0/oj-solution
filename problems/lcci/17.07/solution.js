/*
 * @lc app=leetcode.cn id=面试题 17.07 lang=javascript
 *
 * [面试题 17.07] 婴儿名字
 */

// @lc code=start
/**
 * @param {string[]} names
 * @param {string[]} synonyms
 * @return {string[]}
 */
var trulyMostPopular = function(names, synonyms) {
    // 并查集：根取组内字典序最小名
    const parent = new Map();
    const find = x => {
        if (!parent.has(x)) parent.set(x, x);
        let r = x;
        while (parent.get(r) !== r) r = parent.get(r);
        while (parent.get(x) !== r) {
            const next = parent.get(x);
            parent.set(x, r);
            x = next;
        }
        return r;
    };
    const freq = new Map();
    for (const entry of names) {
        const i = entry.indexOf('(');
        const name = entry.slice(0, i);
        const cnt = parseInt(entry.slice(i + 1), 10);
        find(name);
        freq.set(name, (freq.get(name) || 0) + cnt);
    }
    for (const pair of synonyms) {
        const [a, b] = pair.slice(1, -1).split(',');
        const ra = find(a);
        const rb = find(b);
        if (ra === rb) continue;
        // 字典序小者作根
        if (ra < rb) parent.set(rb, ra);
        else parent.set(ra, rb);
    }
    // 按根聚合频次，输出顺序为 names 中该组首次出现顺序
    const groupFreq = new Map();
    const order = [];
    for (const entry of names) {
        const i = entry.indexOf('(');
        const root = find(entry.slice(0, i));
        const cnt = parseInt(entry.slice(i + 1), 10);
        if (!groupFreq.has(root)) {
            groupFreq.set(root, 0);
            order.push(root);
        }
        groupFreq.set(root, groupFreq.get(root) + cnt);
    }
    return order.map(root => `${root}(${groupFreq.get(root)})`);
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(eq(
    trulyMostPopular(['John(15)', 'Jon(12)', 'Chris(13)', 'Kris(4)', 'Christopher(19)'],
        ['(Jon,John)', '(John,Johnny)', '(Chris,Kris)', '(Chris,Christopher)']),
    ['John(27)', 'Chris(36)']
));
console.log(eq(trulyMostPopular(['A(5)', 'B(3)'], []), ['A(5)', 'B(3)'])); // 无同义词
console.log(eq(trulyMostPopular(['Jon(12)', 'John(15)'], ['(Jon,John)']), ['John(27)'])); // 根为字典序小者
console.log(eq(trulyMostPopular(['A(1)'], ['(A,B)']), ['A(1)'])); // 同义词含未公布拼写
console.log(eq(trulyMostPopular(['B(2)', 'A(1)'], ['(A,B)']), ['A(3)'])); // 名取组内字典序最小
