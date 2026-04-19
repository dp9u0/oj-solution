/*
 * @lc app=leetcode id=1410 lang=javascript
 *
 * [1410] HTML Entity Parser
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    const entities = [
        ['&quot;', '"'],
        ['&apos;', "'"],
        ['&gt;', '>'],
        ['&lt;', '<'],
        ['&frasl;', '/'],
        ['&amp;', '&'],
    ];
    let result = text;
    for (const [entity, char] of entities) {
        result = result.split(entity).join(char);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(entityParser('&amp; is an HTML entity but &ambassador; is not.')); // '& is an HTML entity but &ambassador; is not.'
console.log(entityParser('and I quote: &quot;...&quot;')); // 'and I quote: "..."'
console.log(entityParser('x &gt; y &amp; y &lt; z')); // 'x > y & y < z'
