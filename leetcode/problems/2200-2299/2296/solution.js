/*
 * @lc app=leetcode id=2296 lang=javascript
 *
 * [2296] Design a Text Editor
 */

// @lc code=start

var TextEditor = function() {
    this.left = [];
    this.right = [];
};

TextEditor.prototype.addText = function(text) {
    for (const ch of text) this.left.push(ch);
};

TextEditor.prototype.deleteText = function(k) {
    const cnt = Math.min(k, this.left.length);
    this.left.length -= cnt;
    return cnt;
};

TextEditor.prototype.cursorLeft = function(k) {
    const cnt = Math.min(k, this.left.length);
    for (let i = 0; i < cnt; i++) this.right.push(this.left.pop());
    return this.left.slice(-10).join('');
};

TextEditor.prototype.cursorRight = function(k) {
    const cnt = Math.min(k, this.right.length);
    for (let i = 0; i < cnt; i++) this.left.push(this.right.pop());
    return this.left.slice(-10).join('');
};
// @lc code=end

// TEST:
const te = new TextEditor();
te.addText('leetcode');
console.log(te.deleteText(4)); // 4
te.addText('practice');
console.log(te.cursorRight(3)); // 'etpractice'
console.log(te.cursorLeft(8)); // 'leet'
console.log(te.deleteText(10)); // 4
console.log(te.cursorLeft(2)); // ''
console.log(te.cursorRight(6)); // 'practi'
