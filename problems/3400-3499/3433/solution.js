/*
 * @lc app=leetcode id=3433 lang=javascript
 *
 * [3433] Count Mentions Per User
 */

// @lc code=start
/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function(numberOfUsers, events) {
    const mentions = new Array(numberOfUsers).fill(0);
    const onlineTime = new Array(numberOfUsers).fill(0);

    const parsed = events.map(e => ({
        type: e[0],
        time: parseInt(e[1]),
        data: e[2],
        sortKey: e[0] === 'OFFLINE' ? 0 : 1
    }));
    parsed.sort((a, b) => a.time - b.time || a.sortKey - b.sortKey);

    for (const ev of parsed) {
        if (ev.type === 'OFFLINE') {
            const uid = parseInt(ev.data);
            onlineTime[uid] = ev.time + 60;
        } else {
            if (ev.data === 'ALL') {
                for (let i = 0; i < numberOfUsers; i++) {
                    mentions[i]++;
                }
            } else if (ev.data === 'HERE') {
                for (let i = 0; i < numberOfUsers; i++) {
                    if (ev.time >= onlineTime[i]) {
                        mentions[i]++;
                    }
                }
            } else {
                const tokens = ev.data.split(' ');
                for (const token of tokens) {
                    const uid = parseInt(token.slice(2));
                    mentions[uid]++;
                }
            }
        }
    }

    return mentions;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countMentions(2, [['MESSAGE','10','id1 id0'],['OFFLINE','11','0'],['MESSAGE','71','HERE']]))); // [2,2]
console.log(JSON.stringify(countMentions(2, [['MESSAGE','10','id1 id0'],['OFFLINE','11','0'],['MESSAGE','12','ALL']]))); // [2,2]
console.log(JSON.stringify(countMentions(2, [['OFFLINE','10','0'],['MESSAGE','12','HERE']]))); // [0,1]
