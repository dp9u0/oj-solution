/*
 * @lc app=leetcode id=2402 lang=javascript
 *
 * [2402] Meeting Rooms III
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    const count = new Int32Array(n);
    const freeAt = new Float64Array(n);

    for (const [start, end] of meetings) {
        const duration = end - start;
        let bestRoom = -1;

        // Find lowest-numbered free room
        for (let r = 0; r < n; r++) {
            if (freeAt[r] <= start) {
                bestRoom = r;
                break;
            }
        }

        if (bestRoom === -1) {
            // All busy: find room with earliest freeAt (lowest room for ties)
            let earliestTime = Infinity;
            for (let r = 0; r < n; r++) {
                if (freeAt[r] < earliestTime) {
                    earliestTime = freeAt[r];
                    bestRoom = r;
                }
            }
            freeAt[bestRoom] += duration;
        } else {
            freeAt[bestRoom] = start + duration;
        }
        count[bestRoom]++;
    }

    let maxCount = 0, result = 0;
    for (let i = 0; i < n; i++) {
        if (count[i] > maxCount) {
            maxCount = count[i];
            result = i;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(mostBooked(2, [[0,10],[1,5],[2,7],[3,4]])); // 0
console.log(mostBooked(3, [[1,20],[2,10],[3,5],[4,9],[6,8]])); // 1
console.log(mostBooked(1, [[0,1],[1,2],[2,3]])); // 0
console.log(mostBooked(2, [[0,1],[0,2],[1,3]])); // 0
console.log(mostBooked(4, [[18,19],[3,12],[17,19],[8,13],[13,15],[10,16]])); // ?
