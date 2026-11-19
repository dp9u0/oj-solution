/*
 * @lc app=leetcode.cn id=1236 lang=javascript
 *
 * [1236] 网络爬虫
 */

// @lc code=start
/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
 */
var crawl = function(startUrl, htmlParser) {
    const hostOf = (url) => url.slice(7).split('/')[0]; // after 'http://'
    const host = hostOf(startUrl);
    const visited = new Set([startUrl]);
    const queue = [startUrl];
    while (queue.length) {
        const url = queue.shift();
        for (const next of htmlParser.getUrls(url)) {
            if (visited.has(next) || hostOf(next) !== host) continue;
            visited.add(next);
            queue.push(next);
        }
    }
    return [...visited];
};
// @lc code=end

// TEST:
const makeParser = (urls, edges) => {
    const map = new Map();
    for (const [from, to] of edges) {
        if (!map.has(urls[from])) map.set(urls[from], []);
        map.get(urls[from]).push(urls[to]);
    }
    return { getUrls: (url) => map.get(url) || [] };
};
const U1 = [
    "http://news.yahoo.com", "http://news.yahoo.com/news", "http://news.yahoo.com/news/topics/",
    "http://news.google.com", "http://news.yahoo.com/us",
];
const E1 = [[2,0],[2,1],[3,2],[3,1],[0,4]];
console.log(JSON.stringify(crawl(U1[2], makeParser(U1, E1)).sort())); // 4 yahoo urls
const U2 = ["http://news.yahoo.com","http://news.yahoo.com/news","http://news.yahoo.com/news/topics/","http://news.google.com"];
const E2 = [[0,2],[2,1],[3,2],[3,1],[3,0]];
console.log(JSON.stringify(crawl(U2[3], makeParser(U2, E2)))); // ["http://news.google.com"]
