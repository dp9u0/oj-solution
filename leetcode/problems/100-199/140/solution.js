/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  let cached = new Map(); // 用于缓存已经计算过的字串
  return backtrace(s, wordDict, cached);
};


/**
 * 
 * @param {string} s 
 * @param {string[]} wordDict 
 * @param {Map} cached 
 */
const backtrace = (s, wordDict, cached) => {
  if (s.length === 0) { return ['']; }
  let result = cached.get(s);
  if (result) { return result; }
  result = [];
  for (let i = 0; i < wordDict.length; i++) {
    const word = wordDict[i];
    const end = word.length;
    if (s.slice(0, end) === word) {
      backtrace(s.slice(end), wordDict, cached).forEach(sub => {
        result.push(sub ? word + " " + sub : word);
      });
    }
  }
  cached.set(s, result);
  return result;
}

// TEST:
let s = "leetcode", wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict))

s = "applepenapple", wordDict = ["apple", "pen"]
console.log(wordBreak(s, wordDict))

s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(s, wordDict));

s = "bb", wordDict = ["a", "b", "bbb", "bbbb"]
console.log(wordBreak(s, wordDict))

s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
  wordDict = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]
console.log(wordBreak(s, wordDict))

s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
console.log(wordBreak(s, wordDict))
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
console.log(wordBreak(s, wordDict))
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(s, wordDict))
