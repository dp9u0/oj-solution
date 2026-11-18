/*
 * @lc app=leetcode.cn id=431 lang=javascript
 *
 * [431] 将 N 叉树编码为二叉树
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class Codec {
  	constructor() {
    }

    /**
     * @param {_Node|null} root
     * @return {TreeNode|null}
     */
    // Encodes an n-ary tree to a binary tree.
    encode = function(root) {
        // first-child / next-sibling: left = first child, right = next sibling
        if (!root) return null;
        const bRoot = { val: root.val, left: null, right: null };
        let head = null, tail = null;
        for (const c of root.children || []) {
            const b = this.encode(c);
            if (!head) { head = b; } else { tail.right = b; }
            tail = b;
        }
        bRoot.left = head;
        return bRoot;
    };

    /**
     * @param {TreeNode|null} root
     * @return {_Node|null}
     */
    // Decodes your binary tree to an n-ary tree.
    decode = function(root) {
        if (!root) return null;
        const nRoot = { val: root.val, children: [] };
        let sib = root.left; // sibling chain = original children
        while (sib) {
            nRoot.children.push(this.decode(sib));
            sib = sib.right;
        }
        return nRoot;
    };
}

/*
* Your Codec object will be instantiated and called as such:
* codec = Codec()
* codec.decode(codec.encode(root))
*/
// @lc code=end

// TEST:
const N = (val, children = []) => ({ val, children });
const codec = new Codec();
const roundTrip = t => codec.decode(codec.encode(t));

const t1 = N(1, [N(3, [N(5), N(6)]), N(2), N(4)]);
console.log(JSON.stringify(roundTrip(t1)) === JSON.stringify(t1)); // true

const t2 = N(1, [N(3), N(2), N(4, [N(5), N(6)])]);
console.log(JSON.stringify(roundTrip(t2)) === JSON.stringify(t2)); // true

console.log(codec.encode(null)); // null
console.log(codec.decode(null)); // null

const t3 = N(7);
console.log(JSON.stringify(roundTrip(t3)) === JSON.stringify(t3)); // true

const t4 = N(1, [N(2, [N(3, [N(4)])])]); // chain
console.log(JSON.stringify(roundTrip(t4)) === JSON.stringify(t4)); // true

const t5 = N(0, [N(0)]); // val 0
console.log(JSON.stringify(roundTrip(t5)) === JSON.stringify(t5)); // true

// binary shape check: left = first child subtree, right = sibling chain
const b = codec.encode(t1);
console.log(b.val, b.left.val, b.left.right.val, b.left.right.right.val); // 1 3 2 4
console.log(b.left.left.val, b.left.left.right.val); // 5 6
