/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = s => s.split(" ").filter(c => !!c.trim()).reverse().join(" ");

// TEST:
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world!  "));
console.log(reverseWords("a good   example"));