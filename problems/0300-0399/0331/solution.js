/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    // 初始槽位数为1（根节点的位置）
    let slots = 1;
    
    // 将字符串按逗号分割成数组
    const nodes = preorder.split(',');
    
    // 遍历每个节点
    for (let i = 0; i < nodes.length; i++) {
        // 每个节点都会消耗一个槽位
        slots--;
        
        // 如果在遍历过程中槽位数小于0，说明序列无效
        if (slots < 0) return false;
        
        // 如果当前节点不是'#'，说明是非空节点，会产生两个新的槽位
        if (nodes[i] !== '#') {
            slots += 2;
        }
    }
    
    // 遍历结束后，槽位数必须为0才是有效的序列
    return slots === 0;
};
// @lc code=end
