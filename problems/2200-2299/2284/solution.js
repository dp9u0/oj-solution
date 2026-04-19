/*
 * @lc app=leetcode id=2284 lang=javascript
 *
 * [2284] Sender With Largest Word Count
 */

// @lc code=start
/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    const cnt = new Map();
    for (let i = 0; i < messages.length; i++) {
        const words = messages[i].split(' ').length;
        cnt.set(senders[i], (cnt.get(senders[i]) || 0) + words);
    }
    let best = '';
    let maxCnt = -1;
    for (const [name, c] of cnt) {
        if (c > maxCnt || (c === maxCnt && name > best)) {
            maxCnt = c;
            best = name;
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(largestWordCount(["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], ["Alice","userTwo","userThree","Alice"])); // "Alice"
console.log(largestWordCount(["How is leetcode for everyone","Leetcode is useful for practice"], ["Bob","Charlie"])); // "Charlie"
console.log(largestWordCount(["a"], ["Alice"])); // "Alice"
