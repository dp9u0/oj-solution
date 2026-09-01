/*
 * @lc app=leetcode id=609 lang=javascript
 *
 * [609] Find Duplicate File in System
 */

// @lc code=start
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const contentMap = new Map();

    for (const path of paths) {
        const parts = path.split(' ');
        const dir = parts[0];
        for (let i = 1; i < parts.length; i++) {
            const file = parts[i];
            const openParen = file.indexOf('(');
            const name = file.substring(0, openParen);
            const content = file.substring(openParen + 1, file.length - 1);
            const fullPath = dir + '/' + name;
            if (!contentMap.has(content)) contentMap.set(content, []);
            contentMap.get(content).push(fullPath);
        }
    }

    const result = [];
    for (const files of contentMap.values()) {
        if (files.length >= 2) result.push(files);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)")));
