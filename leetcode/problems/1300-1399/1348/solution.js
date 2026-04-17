/*
 * @lc app=leetcode id=1348 lang=javascript
 *
 * [1348] Tweet Counts Per Frequency
 */

// @lc code=start

var TweetCounts = function() {
    this.map = new Map();
};

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
    if (!this.map.has(tweetName)) this.map.set(tweetName, []);
    this.map.get(tweetName).push(time);
};

/**
 * @param {string} freq
 * @param {string} tweetName
 * @param {number} startTime
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
    const interval = freq === 'minute' ? 60 : freq === 'hour' ? 3600 : 86400;
    const tweets = this.map.get(tweetName) || [];
    const chunks = Math.ceil((endTime - startTime + 1) / interval);
    const result = new Array(chunks).fill(0);

    for (const t of tweets) {
        if (t >= startTime && t <= endTime) {
            result[Math.floor((t - startTime) / interval)]++;
        }
    }
    return result;
};

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
// @lc code=end

// TEST:
var obj = new TweetCounts();
obj.recordTweet("tweet3", 0);
obj.recordTweet("tweet3", 60);
obj.recordTweet("tweet3", 10);
console.log(obj.getTweetCountsPerFrequency("minute", "tweet3", 0, 59));   // [2]
console.log(obj.getTweetCountsPerFrequency("minute", "tweet3", 0, 60));   // [2,1]
obj.recordTweet("tweet3", 120);
console.log(obj.getTweetCountsPerFrequency("hour", "tweet3", 0, 210));    // [4]
console.log(obj.getTweetCountsPerFrequency("day", "tweet3", 0, 210));     // [4]
