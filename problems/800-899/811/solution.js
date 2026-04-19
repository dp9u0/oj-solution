/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let map = {};
  let results = [];
  for (let str of cpdomains) {
    let strs = str.split(" ");
    let num = parseInt(strs[0]);
    let domain = strs[1].split(".");
    let key = '';
    while (domain.length > 0) {
      key = domain.pop() + (key ? ("." + key) : '');
      map[key] = (map[key] || 0) + num
    }
  }
  for (let i in map) {
    results.push(map[i] + " " + i)
  }
  return results;
};