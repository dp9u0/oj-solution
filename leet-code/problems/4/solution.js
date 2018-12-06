/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let total = nums1.length + nums2.length;
    let totalEven = total % 2 === 0;
    let medianIndex = Math.floor(total / 2);
    let currentIndex = 0,
        index1 = 0,
        index2 = 0,
        fstNum = 0,
        sndNum = 0;
    while (currentIndex <= medianIndex) {
        fstNum = sndNum;
        if (nums1[index1] < nums2[index2] || (nums2[index2] !== 0 && !nums2[index2])) {
            sndNum = nums1[index1];
            index1++;
        } else {
            sndNum = nums2[index2];
            index2++;
        }
        currentIndex++;
    }
    return totalEven ? (fstNum + sndNum) / 2 : sndNum;
};

//TEST:
console.log(findMedianSortedArrays([1, 2, 5, 10, 17, 18], [3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16]));
console.log(findMedianSortedArrays([1, 5, 10, 17, 18], [3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16]));
console.log(findMedianSortedArrays([1, 2, 5, 10, 17, 18], [3, 4, 6, 7, 8, 9, 12, 13, 14, 15, 16]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 2], [3, 4, 6]));
console.log(findMedianSortedArrays([], [3, 4, 6]));
console.log(findMedianSortedArrays([3, 4, 6], []));
console.log(findMedianSortedArrays([], [2]));
console.log(findMedianSortedArrays([2], []));
console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], [0, 6]));