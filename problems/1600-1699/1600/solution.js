/*
 * @lc app=leetcode id=1600 lang=javascript
 *
 * [1600] Throne Inheritance
 */

// @lc code=start
/**
 * @param {string} kingName
 */
var ThroneInheritance = function(kingName) {
    this.king = kingName;
    this.children = new Map();
    this.dead = new Set();
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
    if (!this.children.has(parentName)) {
        this.children.set(parentName, []);
    }
    this.children.get(parentName).push(childName);
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
    this.dead.add(name);
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
    const order = [];
    const dfs = (name) => {
        if (!this.dead.has(name)) order.push(name);
        const kids = this.children.get(name);
        if (kids) {
            for (const child of kids) {
                dfs(child);
            }
        }
    };
    dfs(this.king);
    return order;
};

/** 
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
// @lc code=end

// TEST:
const t = new ThroneInheritance('king');
t.birth('king', 'andy');
t.birth('king', 'bob');
t.birth('king', 'catherine');
t.birth('andy', 'matthew');
t.birth('bob', 'alex');
t.birth('bob', 'asha');
console.log(JSON.stringify(t.getInheritanceOrder())); // ["king","andy","matthew","bob","alex","asha","catherine"]
t.death('bob');
console.log(JSON.stringify(t.getInheritanceOrder())); // ["king","andy","matthew","alex","asha","catherine"]
t.death('king');
console.log(JSON.stringify(t.getInheritanceOrder())); // ["andy","matthew","alex","asha","catherine"]
const t2 = new ThroneInheritance('a');
t2.birth('a', 'b');
t2.birth('a', 'c');
t2.birth('b', 'd');
console.log(JSON.stringify(t2.getInheritanceOrder())); // ["a","b","d","c"]
t2.death('b');
console.log(JSON.stringify(t2.getInheritanceOrder())); // ["a","d","c"]
