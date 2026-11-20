/*
 * @lc app=leetcode.cn id=1516 lang=javascript
 *
 * [1516] 移动 N 叉树的子树
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @param {Node} p
 * @param {Node} q
 * @return {Node}
 */
var moveSubTree = function(root, p, q) {
    let parentP = null, parentQ = null, qInP = false;
    const stack = [[root, null, false]]; // [node, parent, inside subtree of p]
    while (stack.length) {
        const [node, par, inP] = stack.pop();
        if (node === p) parentP = par;
        if (node === q) {
            parentQ = par;
            if (inP) qInP = true;
        }
        for (const c of node.children) stack.push([c, node, inP || node === p]);
    }

    if (parentP === q) return root; // p already a direct child of q

    let slot = -1;
    if (parentP) {
        slot = parentP.children.indexOf(p);
        parentP.children.splice(slot, 1); // detach p first
    }
    q.children.push(p); // p becomes q's last child
    if (!qInP) return root;

    // q lived inside p's subtree: it got detached along with p — re-anchor it
    parentQ.children.splice(parentQ.children.indexOf(q), 1);
    if (parentP) {
        parentP.children.splice(slot, 0, q); // q takes p's old slot
        return root;
    }
    return q; // p was the root: q becomes the new root
};
// @lc code=end

// TEST:
function Node(val, children) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
}
const dump = (node) => [node.val, ...node.children.map(dump)];

// example 1: 1->[2->[4->[7,8],5], 3->[6]]; move 4 under 1
const e1n1 = new Node(1), e1n2 = new Node(2), e1n3 = new Node(3);
const e1n4 = new Node(4), e1n5 = new Node(5), e1n6 = new Node(6);
const e1n7 = new Node(7), e1n8 = new Node(8);
e1n1.children = [e1n2, e1n3]; e1n2.children = [e1n4, e1n5]; e1n4.children = [e1n7, e1n8]; e1n3.children = [e1n6];
console.log(JSON.stringify(dump(moveSubTree(e1n1, e1n4, e1n1)))); // [1,[2,[5]],[3,[6]],[4,[7],[8]]]

// example 2: 7 already child of 4 -> unchanged
const e2 = moveSubTree(e1n1, e1n7, e1n4);
console.log(e2 === e1n1 && e1n4.children.length === 2 && e1n4.children[0] === e1n7); // true (no-op)

// example 3: move 3 under 8 (case 3)
const e3n1 = new Node(1), e3n2 = new Node(2), e3n3 = new Node(3);
const e3n4 = new Node(4), e3n5 = new Node(5), e3n6 = new Node(6);
const e3n7 = new Node(7), e3n8 = new Node(8);
e3n1.children = [e3n2, e3n3]; e3n2.children = [e3n4, e3n5]; e3n4.children = [e3n7, e3n8]; e3n3.children = [e3n6];
console.log(JSON.stringify(dump(moveSubTree(e3n1, e3n3, e3n8)))); // [1,[2,[4,[7],[8,[3,[6]]]],5]]

// example 4: p is root, q inside -> new root q
const e4n1 = new Node(1), e4n2 = new Node(2), e4n3 = new Node(3), e4n4 = new Node(4);
e4n1.children = [e4n2, e4n3]; e4n2.children = [e4n4];
const e4r = moveSubTree(e4n1, e4n1, e4n4);
console.log(e4r === e4n4 && JSON.stringify(dump(e4r))); // [4,[1,[2],[3]]]

// case 1, non-root p: q direct child of p -> rewire without cycle
const cn1 = new Node(1), cn2 = new Node(2), cn3 = new Node(3), cn5 = new Node(5);
cn1.children = [cn2, cn5]; cn2.children = [cn3];
const cnr = moveSubTree(cn1, cn2, cn3);
console.log(JSON.stringify(dump(cnr))); // [1,[3,[2]],[5]]
