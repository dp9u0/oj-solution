/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    // 构建图，使用邻接表表示
    const graph = {};
    
    // 初始化图
    for (const [from, to] of tickets) {
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    }
    
    // 对每个出发点的目的地按字典序排序
    for (const from in graph) {
        graph[from].sort();
    }
    
    const result = [];
    
    // DFS函数
    function dfs(airport) {
        // 获取当前机场的所有目的地
        const destinations = graph[airport] || [];
        
        // 遍历所有目的地
        while (destinations.length > 0) {
            // 贪心策略：总是选择字典序最小的目的地
            const nextAirport = destinations.shift();
            dfs(nextAirport);
        }
        
        // 后序遍历：当无法继续前进时，将当前机场加入结果
        result.push(airport);
    }
    
    // 从JFK开始DFS
    dfs('JFK');
    
    // 由于是后序遍历，需要反转结果
    return result.reverse();
};
// @lc code=end
