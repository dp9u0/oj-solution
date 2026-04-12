/*
 * @lc app=leetcode id=1109 lang=javascript
 *
 * [1109] Corporate Flight Bookings
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const diff = new Array(n + 1).fill(0);

    for (const [first, last, seats] of bookings) {
        diff[first - 1] += seats;
        diff[last] -= seats;
    }

    const answer = new Array(n);
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += diff[i];
        answer[i] = sum;
    }

    return answer;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5))); // [10,55,45,25,25]
console.log(JSON.stringify(corpFlightBookings([[1,2,10],[2,2,15]], 2))); // [10,25]
console.log(JSON.stringify(corpFlightBookings([[1,1,5]], 1))); // [5]
