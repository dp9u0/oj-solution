/*
 * @lc app=leetcode.cn id=358 lang=javascript
 *
 * [358] K 距离间隔重排字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function(s, k) {
    if (k <= 1) return s;

    const cnt = new Map();
    for (const c of s) cnt.set(c, (cnt.get(c) || 0) + 1);

    // max-heap substitute: sort keys by count each pop (alphabet <= 26, fine)
    let heap = [...cnt.keys()];
    const popMax = () => {
        let bi = 0;
        for (let i = 1; i < heap.length; i++) {
            if (cnt.get(heap[i]) > cnt.get(heap[bi])) bi = i;
        }
        return heap.splice(bi, 1)[0];
    };

    const cooldown = []; // [char, position when it may re-enter]
    const res = [];
    for (let i = 0; i < s.length; i++) {
        // expired cooldown chars re-enter the heap
        while (cooldown.length && cooldown[0][1] <= i) {
            heap.push(cooldown.shift()[0]);
        }
        if (!heap.length) return ''; // everything left is still cooling down
        const c = popMax();
        res.push(c);
        const v = cnt.get(c) - 1;
        cnt.set(c, v);
        if (v > 0) cooldown.push([c, i + k]);
    }
    return res.join('');
};
// @lc code=end


// @lc code=end

// TEST:
console.log(rearrangeString('aabbcc', 3).length > 0); // true
console.log(rearrangeString('aa', 2)); // '' (distance impossible)
console.log(rearrangeString('aaabc', 3)); // '' (three a's cannot fit distance 3 in length 5)
console.log(rearrangeString('', 2)); // ''
console.log(rearrangeString('aabbccdd', 2).length); // 8
