/**
 * 并查集
 */
class DJSet {
  constructor() {
    this.map = new Map(); // 
  }
  /**
   * 查找 element 的 root
   * @param {*} element 
   */
  find(element) {
    let root = element;
    while (this.map.has(root)) {
      root = this.map.get(root);
    }
    return root;
  }

  /**
   * 合并两个 element
   * @param {*} p  element p 
   * @param {*} q  element q
   */
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP !== rootQ) {
      this.map.set(rootP, rootQ);
    }
  }
}

/**
* @param {string[][]} accounts
* @return {string[][]}
*/
var accountsMerge = function (accounts) {
  const djSet = new DJSet();
  const map = {}; // email => name
  for (const account of accounts) {
    const [name, ...emails] = account;
    for (let i = 0; i < emails.length; i++) {
      const email = emails[i];
      const nextEmail = emails[i + 1];
      map[email] = name;
      if (nextEmail) {
        djSet.union(email, nextEmail);
      }
    }
  }
  const map2 = {}; // key: string root email; value: string[] emails
  for (const email in map) {
    const root = djSet.find(email);
    let info = map2[root]
    if (!info) {
      info = map2[root] = [];
    }
    info.push(email);
  }
  const results = [];
  for (const root in map2) {
    map2[root].sort(); // 排序
    results.push([map[root], ...map2[root]]);
  }
  return results;
};

// TEST:
let accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
console.log(accountsMerge(accounts))

accounts = [["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["John", "johnsmith@mail.com", "john00@mail.com"], ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]];
console.log(accountsMerge(accounts))

accounts = [["David", "David0@m.co", "David1@m.co"], ["David", "David3@m.co", "David4@m.co"], ["David", "David4@m.co", "David5@m.co"], ["David", "David2@m.co", "David3@m.co"], ["David", "David1@m.co", "David2@m.co"]]
console.log(accountsMerge(accounts))
