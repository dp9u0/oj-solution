/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  const length = mountainArr.length();
  return find(target, mountainArr, 0, length - 1)
};

/**
 * @param {number} target 
 * @param {MountainArray} mountainArr
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
const find = (target, mountainArr, start, end) => {
  if (start > end) return -1;
  if (start === end) return mountainArr.get(start) === target ? start : -1;
  if (start + 1 === end) return mountainArr.get(start) === target ? start : (mountainArr.get(end) === target ? end : -1);
  let middle = start + (~~((end - start) / 2));
  let middleValue = mountainArr.get(middle);
  let index = -1;
  if (middleValue > target) {
    let startValue = mountainArr.get(start);
    if (startValue === target) {
      index = start;
    } else if (startValue < target) {
      index = find(target, mountainArr, start + 1, middle - 1);
    }
    if (index === -1) {
      let endValue = mountainArr.get(end);
      if (endValue === target) {
        index = end;
      } else if (endValue < target) {
        index = find(target, mountainArr, middle + 1, end - 1);
      }
    }
  } else {
    let middlePreValue = mountainArr.get(middle - 1);
    if (middlePreValue === target) {
      index = middle - 1;
    } else if (middlePreValue > middleValue) {
      index = find(target, mountainArr, start, middle - 1);
    }
    if (index === -1) {
      let middleNextValue = mountainArr.get(middle + 1);
      if (middleNextValue === target) {
        index = middle + 1;
      } else if (middleNextValue > middleValue) {
        index = find(target, mountainArr, middle + 1, end);
      }
    }
  }
  if (middleValue === target) {
    index = index === -1 ? middle : Math.min(index, middle);
  }
  return index;
}

// TEST:
class MountainArray {
  constructor(array = []) {
    this.array = array;
  };
  get = (index) => {
    return this.array[index];
  };
  length = () => {
    return this.array.length;
  }
};

let array; let target; let result;
array = [1, 2, 3, 4, 5, 3, 1], target = 3;
result = findInMountainArray(target, new MountainArray(array))
console.log(result)

array = [0, 1, 2, 4, 2, 1], target = 3;
result = findInMountainArray(target, new MountainArray(array))
console.log(result)

array = [3, 5, 3, 2, 0], target = 3;
result = findInMountainArray(target, new MountainArray(array))
console.log(result)

array = [1, 2, 3, 4, 5, 3, 1], target = 2;
result = findInMountainArray(target, new MountainArray(array))
console.log(result)

array = [0, 5, 3, 1], target = 1;
result = findInMountainArray(target, new MountainArray(array))
console.log(result)

array = [1, 2, 3, 5, 3], target = 3;
result = findInMountainArray(target, new MountainArray(array))
console.log(result)