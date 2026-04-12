/*
 * @lc app=leetcode id=1233 lang=javascript
 *
 * [1233] Remove Sub-Folders from the Filesystem
 */

// @lc code=start
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort();
    const result = [folder[0]];
    for (let i = 1; i < folder.length; i++) {
        const prev = result[result.length - 1];
        if (!folder[i].startsWith(prev + '/')) {
            result.push(folder[i]);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(removeSubfolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'])));
// Expected: ["/a","/c/d","/c/f"]

console.log(JSON.stringify(removeSubfolders(['/a', '/a/b/c', '/a/b/d'])));
// Expected: ["/a"]

console.log(JSON.stringify(removeSubfolders(['/a/b/c', '/a/b/ca', '/a/b/d'])));
// Expected: ["/a/b/c","/a/b/ca","/a/b/d"]
