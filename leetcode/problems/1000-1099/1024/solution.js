/*
 * @lc app=leetcode id=1024 lang=javascript
 *
 * [1024] Video Stitching
 */

// @lc code=start
/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
  clips.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let end = 0;
  let i = 0;
  const n = clips.length;

  while (end < time) {
    let maxEnd = end;
    while (i < n && clips[i][0] <= end) {
      maxEnd = Math.max(maxEnd, clips[i][1]);
      i++;
    }
    if (maxEnd === end) return -1;
    end = maxEnd;
    count++;
  }

  return count;
};
// @lc code=end

// TEST:
console.log(videoStitching([[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], 10)); // 3
console.log(videoStitching([[0,1],[1,2]], 5)); // -1
console.log(videoStitching([[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], 9)); // 3
