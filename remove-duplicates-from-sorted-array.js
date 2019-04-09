// 对于已经排序的数组，过滤掉数组中重复的值，在找出数组的长度
// 快慢指针，时间复杂度O(n),空间复杂度O(1)
var removeDuplicates = function(nums) {
    const size = nums.length;
    let slowP = 0;
    for (let fastP = 0; fastP < size; fastP++) {
        if (nums[fastP] !== nums[slowP]) {
            slowP++;
            nums[slowP] = nums[fastP]
        }   
    }
    return slowP + 1;
};
console.log(removeDuplicates([1,1,2,3,3,4]));