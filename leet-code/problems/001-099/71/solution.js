/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];
  let paths = path.split('/');
  for (let i = 0; i < paths.length; i++) {
    const element = paths[i];
    if (element === '..') {
      stack.pop();
    } else if (element && element !== '.') {
      stack.push(element);
    }
  }
  let result = '/';
  stack.forEach(element => {
    result += element + '/';
  })
  return result.length === 1 ? result : result.slice(0, result.length - 1);
};

console.log(simplifyPath('/home/'))
console.log(simplifyPath('/a/./b/../../c/'))
console.log(simplifyPath('/a/../../b/../c//.//'))
console.log(simplifyPath('/a//b////c/d//././/..'))
console.log(simplifyPath('/'))
console.log(simplifyPath('/'))
console.log(simplifyPath('/'))