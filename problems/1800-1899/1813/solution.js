/*
 * @lc app=leetcode id=1813 lang=javascript
 *
 * [1813] Sentence Similarity III
 */

// @lc code=start
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    const s1 = sentence1.split(' ');
    const s2 = sentence2.split(' ');

    let [longer, shorter] = s1.length >= s2.length ? [s1, s2] : [s2, s1];

    let left = 0;
    while (left < shorter.length && longer[left] === shorter[left]) {
        left++;
    }

    let right = 0;
    while (right < shorter.length - left && longer[longer.length - 1 - right] === shorter[shorter.length - 1 - right]) {
        right++;
    }

    return left + right >= shorter.length;
};
// @lc code=end

// TEST:
console.log(areSentencesSimilar('My name is Haley', 'My Haley')); // true
console.log(areSentencesSimilar('of', 'A lot of words')); // false
console.log(areSentencesSimilar('Eating right now', 'Eating')); // true
console.log(areSentencesSimilar('Frog cool', 'Frogs are cool')); // false
