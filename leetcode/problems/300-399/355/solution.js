var Twitter = function() {
    this.time = 0;
    this.tweets = new Map(); // userId -> Array of {tweetId, time}
    this.follows = new Map(); // userId -> Set of followeeId
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.tweets.has(userId)) {
        this.tweets.set(userId, []);
    }
    this.tweets.get(userId).push({ tweetId: tweetId, time: this.time++ });
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const candidates = [];
    
    // Add user's own tweets
    if (this.tweets.has(userId)) {
        const userTweets = this.tweets.get(userId);
        // Only need at most 10 recent tweets
        const recent = userTweets.slice(Math.max(userTweets.length - 10, 0));
        candidates.push(...recent);
    }
    
    // Add followees' tweets
    if (this.follows.has(userId)) {
        const followees = this.follows.get(userId);
        for (const followeeId of followees) {
            if (this.tweets.has(followeeId)) {
                const followeeTweets = this.tweets.get(followeeId);
                const recent = followeeTweets.slice(Math.max(followeeTweets.length - 10, 0));
                candidates.push(...recent);
            }
        }
    }
    
    // Sort candidates by time descending and take top 10
    candidates.sort((a, b) => b.time - a.time);
    
    return candidates.slice(0, 10).map(t => t.tweetId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (followerId === followeeId) return; // A user cannot follow himself
    
    if (!this.follows.has(followerId)) {
        this.follows.set(followerId, new Set());
    }
    this.follows.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.follows.has(followerId)) {
        this.follows.get(followerId).delete(followeeId);
    }
};

module.exports = Twitter;

// TEST:
let twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1)); // [5]
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1)); // [6, 5]
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1)); // [5]
