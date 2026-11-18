/*
 * @lc app=leetcode.cn id=428 lang=javascript
 *
 * [428] 序列化和反序列化 N 叉树
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  	constructor() {

    }

    /**
     * @param {_Node|null} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function(root) {
        // preorder: each node -> "val,childCount", children follow recursively
        const out = [];
        const dfs = node => {
            if (!node) return;
            out.push(node.val, node.children ? node.children.length : 0);
            for (const c of node.children || []) dfs(c);
        };
        dfs(root);
        return out.join(',');
    };

    /**
     * @param {string} data
     * @return {_Node|null}
     */
    // Decodes your encoded data to tree.
    deserialize = function(data) {
        if (!data) return null;
        const tokens = data.split(',').map(Number);
        let idx = 0;
        const build = () => {
            const val = tokens[idx++];
            const cnt = tokens[idx++];
            const node = { val, children: [] };
            for (let i = 0; i < cnt; i++) node.children.push(build());
            return node;
        };
        return build();
    };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
// @lc code=end

// TEST:
const N = (val, children = []) => ({ val, children });
const codec = new Codec();
const roundTrip = t => codec.deserialize(codec.serialize(t));

const t1 = N(1, [N(3, [N(5), N(6)]), N(2), N(4)]);
console.log(codec.serialize(t1)); // 1,3,3,2,5,0,6,0,2,0,4,0
console.log(JSON.stringify(roundTrip(t1)) === JSON.stringify(t1)); // true

const t2 = N(1, [N(3), N(2), N(4, [N(5), N(6)])]);
console.log(JSON.stringify(roundTrip(t2)) === JSON.stringify(t2)); // true

console.log(codec.serialize(null)); // '' (empty tree)
console.log(codec.deserialize('')); // null

const t3 = N(7);
console.log(JSON.stringify(roundTrip(t3)) === JSON.stringify(t3)); // true (single node)

const t4 = N(1, [N(2, [N(3, [N(4)])])]); // chain, height 4
console.log(JSON.stringify(roundTrip(t4)) === JSON.stringify(t4)); // true

const t5 = N(0, [N(0), N(0)]); // val 0 must not be treated as falsy
console.log(codec.serialize(t5)); // 0,2,0,0,0,0
console.log(JSON.stringify(roundTrip(t5)) === JSON.stringify(t5)); // true
