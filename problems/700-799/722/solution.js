/*
 * @lc app=leetcode id=722 lang=javascript
 *
 * [722] Remove Comments
 */

// @lc code=start
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    const result = [];
    let inBlock = false;
    let buf = '';

    for (const line of source) {
        if (!inBlock) buf = '';
        let i = 0;
        while (i < line.length) {
            if (!inBlock) {
                if (i + 1 < line.length && line[i] === '/' && line[i + 1] === '*') {
                    inBlock = true;
                    i += 2;
                } else if (i + 1 < line.length && line[i] === '/' && line[i + 1] === '/') {
                    break;
                } else {
                    buf += line[i];
                    i++;
                }
            } else {
                if (i + 1 < line.length && line[i] === '*' && line[i + 1] === '/') {
                    inBlock = false;
                    i += 2;
                } else {
                    i++;
                }
            }
        }
        if (!inBlock && buf.length > 0) result.push(buf);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(removeComments(['/*Test program */', 'int main()', '{ ', '  // variable declaration ', 'int a, b, c;', '/* This is a test', '   multiline  ', '   comment for ', '   testing */', 'a = b + c;', '}'])) === JSON.stringify(['int main()','{ ','  ','int a, b, c;','a = b + c;','}']));
console.log(JSON.stringify(removeComments(['a/*comment', 'line', 'more_comment*/b'])) === JSON.stringify(['ab']));
console.log(JSON.stringify(removeComments(['a//b', 'c'])) === JSON.stringify(['a','c']));
console.log(JSON.stringify(removeComments(['/*a*/b'])) === JSON.stringify(['b']));
console.log(JSON.stringify(removeComments(['a/*b', 'c*/d/*e', 'f*/g'])) === JSON.stringify(['adg']));
