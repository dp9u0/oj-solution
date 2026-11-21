/*
 * @lc app=leetcode.cn id=2254 lang=javascript
 *
 * [2254] 设计视频共享平台
 */

// @lc code=start

var VideoSharingPlatform = function() {
    this.videos = new Map();
    this.freeIds = [];
    this.nextId = 0;
};

/**
 * @param {string} video
 * @return {number}
 */
VideoSharingPlatform.prototype.upload = function(video) {
    let id;
    if (this.freeIds.length) {
        // pop min from binary heap
        const heap = this.freeIds;
        id = heap[0];
        const last = heap.pop();
        if (heap.length) {
            heap[0] = last;
            let i = 0;
            while (true) {
                const l = 2 * i + 1, r = l + 1;
                let s = i;
                if (l < heap.length && heap[l] < heap[s]) s = l;
                if (r < heap.length && heap[r] < heap[s]) s = r;
                if (s === i) break;
                [heap[i], heap[s]] = [heap[s], heap[i]];
                i = s;
            }
        }
    } else {
        id = this.nextId++;
    }
    this.videos.set(id, { video, views: 0, likes: 0, dislikes: 0 });
    return id;
};

/**
 * @param {number} videoId
 * @return {void}
 */
VideoSharingPlatform.prototype.remove = function(videoId) {
    if (this.videos.has(videoId)) {
        this.videos.delete(videoId);
        const heap = this.freeIds;
        heap.push(videoId);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    }
};

/**
 * @param {number} videoId
 * @param {number} startMinute
 * @param {number} endMinute
 * @return {string}
 */
VideoSharingPlatform.prototype.watch = function(videoId, startMinute, endMinute) {
    const v = this.videos.get(videoId);
    if (!v) return "-1";
    v.views++;
    return v.video.slice(startMinute, Math.min(endMinute + 1, v.video.length));
};

/**
 * @param {number} videoId
 * @return {void}
 */
VideoSharingPlatform.prototype.like = function(videoId) {
    const v = this.videos.get(videoId);
    if (v) v.likes++;
};

/**
 * @param {number} videoId
 * @return {void}
 */
VideoSharingPlatform.prototype.dislike = function(videoId) {
    const v = this.videos.get(videoId);
    if (v) v.dislikes++;
};

/**
 * @param {number} videoId
 * @return {number[]}
 */
VideoSharingPlatform.prototype.getLikesAndDislikes = function(videoId) {
    const v = this.videos.get(videoId);
    return v ? [v.likes, v.dislikes] : [-1];
};

/**
 * @param {number} videoId
 * @return {number}
 */
VideoSharingPlatform.prototype.getViews = function(videoId) {
    const v = this.videos.get(videoId);
    return v ? v.views : -1;
};

/** 
 * Your VideoSharingPlatform object will be instantiated and called as such:
 * var obj = new VideoSharingPlatform()
 * var param_1 = obj.upload(video)
 * obj.remove(videoId)
 * var param_3 = obj.watch(videoId,startMinute,endMinute)
 * obj.like(videoId)
 * obj.dislike(videoId)
 * var param_6 = obj.getLikesAndDislikes(videoId)
 * var param_7 = obj.getViews(videoId)
 */
// @lc code=end

// TEST:
const p = new VideoSharingPlatform();
console.log(p.upload("123")); // 0
console.log(p.upload("456")); // 1
p.remove(4);
p.remove(0);
console.log(p.upload("789")); // 0
console.log(p.watch(1, 0, 5)); // "456"
console.log(p.watch(1, 0, 1)); // "45"
p.like(1);
p.dislike(1);
p.dislike(1);
console.log(JSON.stringify(p.getLikesAndDislikes(1))); // [1,2]
console.log(p.getViews(1)); // 2
const q = new VideoSharingPlatform();
console.log(q.watch(0, 0, 1)); // "-1"
console.log(JSON.stringify(q.getLikesAndDislikes(0))); // [-1]
console.log(q.getViews(0)); // -1
