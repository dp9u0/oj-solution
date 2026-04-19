/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
  const n = nums.length;

  const heapify = (i, size) => {
    while (true) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < size && nums[left] > nums[largest]) largest = left;
      if (right < size && nums[right] > nums[largest]) largest = right;
      if (largest === i) break;
      [nums[i], nums[largest]] = [nums[largest], nums[i]];
      i = largest;
    }
  };

  // Build max heap
  for (let i = (n >> 1) - 1; i >= 0; i--) {
    heapify(i, n);
  }

  let score = 0;
  for (let i = 0; i < k; i++) {
    score += nums[0];
    nums[0] = Math.ceil(nums[0] / 3);
    heapify(0, n);
  }

  return score;
};

// TEST:
console.log(maxKelements([10, 10, 10, 10, 10], 5)); // 50
console.log(maxKelements([1, 10, 3, 3, 3], 3)); // 17
