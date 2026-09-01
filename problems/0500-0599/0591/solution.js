/*
 * @lc app=leetcode id=591 lang=javascript
 *
 * [591] Tag Validator
 */

// @lc code=start
/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
  const isValidTagName = (name) => /^[A-Z]{1,9}$/.test(name);

  // 必须整体被 <TAG> 包裹：第一个字符是 '<'，第二个字符必须是大写字母
  if (code[0] !== '<' || !/^[A-Z]/.test(code[1] || '')) return false;

  const stack = [];
  let i = 0;
  while (i < code.length) {
    // 顶层标签已闭合，后面不允许再有任何内容
    if (stack.length === 0 && i > 0) return false;

    if (code.startsWith('<![CDATA[', i)) {
      // cdata：内容到第一个 ]]> 为止，全部视为普通字符
      const end = code.indexOf(']]>', i + 9);
      if (end === -1) return false;
      i = end + 3;
    } else if (code.startsWith('</', i)) {
      // 结束标签：名字合法且必须与栈顶匹配
      const end = code.indexOf('>', i + 2);
      if (end === -1) return false;
      const name = code.slice(i + 2, end);
      if (!isValidTagName(name)) return false;
      if (stack.pop() !== name) return false;
      i = end + 1;
    } else if (code[i] === '<') {
      // 起始标签：'<' 到 '>' 之间的内容解析为 TAG_NAME
      const end = code.indexOf('>', i + 1);
      if (end === -1) return false;
      const name = code.slice(i + 1, end);
      if (!isValidTagName(name)) return false;
      stack.push(name);
      i = end + 1;
    } else {
      // 普通文本
      i++;
    }
  }
  return stack.length === 0;
};
// @lc code=end

// TEST:
console.log(isValid('<DIV>This is the first line <![CDATA[<div>]]></DIV>') === true); // example 1
console.log(isValid('<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>') === true); // example 2
console.log(isValid('<A>  <B> </A>   </B>') === false); // example 3 unbalanced
console.log(isValid('<DIV>  hello</DIV>') === true); // plain text only
console.log(isValid('<DIV> <DIV> </DIV> </DIV>') === true); // valid nesting
console.log(isValid('<DIV></DIV><DIV></DIV>') === false); // content after top-level close
console.log(isValid('<DIV></DIV> ') === false); // trailing text outside wrapper
console.log(isValid(' <DIV></DIV>') === false); // leading text outside wrapper
console.log(isValid('<DIV> unmatched <  </DIV>') === false); // unmatched < parsed as invalid tag name
console.log(isValid('<DIV><![CDATA[unclosed]]') === false); // unterminated cdata
console.log(isValid('<A><![CDATA[</A>]]><![CDATA[</A>]]></A>') === true); // cdata swallows tags
console.log(isValid('<ABCDEFGHI>text</ABCDEFGHI>') === true); // max name length 9
console.log(isValid('<ABCDEFGHIJ>text</ABCDEFGHIJ>') === false); // name length 10 invalid
console.log(isValid('<a></a>') === false); // lowercase name invalid
console.log(isValid('</A>') === false); // end tag without start
console.log(isValid('<A></A></A>') === false); // extra end tag
console.log(isValid('<DIV><></DIV>') === false); // empty tag name
