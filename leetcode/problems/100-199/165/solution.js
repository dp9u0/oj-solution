/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  var [v11 = 0, v12 = 0, v13 = 0, v14 = 0] = version1.split(".").map(v => Number(v));
  var [v21 = 0, v22 = 0, v23 = 0, v24 = 0] = version2.split(".").map(v => Number(v));
  if (Number(v11) !== Number(v21)) return v11 < v21 ? -1 : 1;
  if (Number(v12) !== Number(v22)) return v12 < v22 ? -1 : 1;
  if (Number(v13) !== Number(v23)) return v13 < v23 ? -1 : 1;
  if (Number(v14) !== Number(v24)) return v14 < v24 ? -1 : 1;
  return 0;
};

// TEST:
let version1 = "0.1", version2 = "1.1"
console.log(compareVersion(version1, version2))
version1 = "1.0.1", version2 = "1"
console.log(compareVersion(version1, version2))
version1 = "7.5.2.4", version2 = "7.5.3"
console.log(compareVersion(version1, version2))
version1 = "1.01", version2 = "1.001"
console.log(compareVersion(version1, version2))
version1 = "1.0", version2 = "1.0.0"
console.log(compareVersion(version1, version2))
version1 = "0", version2 = "1"
console.log(compareVersion(version1, version2))
