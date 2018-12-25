/**
 * Definition for isBadVersion()
 * 
 * @param {leteger} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {leteger} n Total versions
   * @return {leteger} The first bad version
   */
  return function (n) {
    let start = 0,
      end = n;
    while (end - start > 1) {
      let mid = start + ~~((end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid;
      }
    }
    return end;
  };
};