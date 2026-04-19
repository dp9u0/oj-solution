/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const count = words.length;
  const results = [];
  let start = end = 0;
  while (start < count) {
    let width = -1; // 第一个word前面不添加空格
    while (end < count && width + 1 + words[end].length <= maxWidth) {
      width += 1 + words[end++].length;
    }
    let sps = 1;
    let more = 0;
    // 一个word 或者最后一行是不需要空格的.
    if (end !== start + 1 && end !== count) {
      sps = ~~((maxWidth - width) / (end - 1 - start)) + 1;
      more = (maxWidth - width) % (end - 1 - start);
    }
    let line = words[start];
    for (let k = start + 1; k < end; k++, more--) {
      line += ' '.repeat(more > 0 ? sps + 1 : sps) + words[k];
    }
    // 补齐 一个word 或者最后一行的情况
    line += ' '.repeat(maxWidth - line.length);
    results.push(line);
    start = end;
  }
  return results;
};

/**
// TEST:
console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16))
// [ 'What  must  be  ', 'acknowledgment   ', 'shall be' ]
console.log(fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.",
  "Art", "is", "everything", "else", "we", "do"
], 20))
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
*/