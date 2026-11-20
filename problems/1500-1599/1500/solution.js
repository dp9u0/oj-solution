/*
 * @lc app=leetcode.cn id=1500 lang=javascript
 *
 * [1500] 设计文件分享系统
 */

// @lc code=start
/**
 * @param {number} m
 */
var FileSharing = function(m) {
    this.userChunks = new Map(); // id -> Set of chunks
    this.chunkOwners = new Map(); // chunk -> Set of ids
    this.freed = []; // reusable ids, kept sorted ascending
    this.nextId = 1;
};

/**
 * @param {number[]} ownedChunks
 * @return {number}
 */
FileSharing.prototype.join = function(ownedChunks) {
    const id = this.freed.length ? this.freed.shift() : this.nextId++;
    this.userChunks.set(id, new Set(ownedChunks));
    for (const c of ownedChunks) {
        if (!this.chunkOwners.has(c)) this.chunkOwners.set(c, new Set());
        this.chunkOwners.get(c).add(id);
    }
    return id;
};

/**
 * @param {number} userID
 * @return {void}
 */
FileSharing.prototype.leave = function(userID) {
    for (const c of this.userChunks.get(userID)) {
        this.chunkOwners.get(c).delete(userID);
    }
    this.userChunks.delete(userID);
    let i = 0; // keep freed sorted so shift() yields the smallest
    while (i < this.freed.length && this.freed[i] < userID) i++;
    this.freed.splice(i, 0, userID);
};

/**
 * @param {number} userID
 * @param {number} chunkID
 * @return {number[]}
 */
FileSharing.prototype.request = function(userID, chunkID) {
    const owners = this.chunkOwners.get(chunkID);
    if (!owners || owners.size === 0) return [];
    const list = [...owners].sort((a, b) => a - b);
    owners.add(userID); // requester receives the chunk on success
    this.userChunks.get(userID).add(chunkID);
    return list;
};

/**
 * Your FileSharing object will be instantiated and called as such:
 * var obj = new FileSharing(m)
 * var param_1 = obj.join(ownedChunks)
 * obj.leave(userID)
 * var param_3 = obj.request(userID,chunkID)
 */
// @lc code=end

// TEST:
const fs = new FileSharing(4);
console.log(fs.join([1,2])); // 1
console.log(fs.join([2,3])); // 2
console.log(fs.join([4])); // 3
console.log(JSON.stringify(fs.request(1, 3))); // [2]
console.log(JSON.stringify(fs.request(2, 2))); // [1,2]
fs.leave(1);
console.log(JSON.stringify(fs.request(2, 1))); // []
fs.leave(2);
console.log(fs.join([])); // 1 (freed id reused)
