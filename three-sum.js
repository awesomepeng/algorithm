// three-sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// https://rohan-paul.github.io/javascript/2018/04/29/3-sum-with-JavaScript/
function threeSum(nums) {
//在进来的时候先对数组进行排序
// https://v8.dev/blog/array-sort  先了解下sort的底层的机制
	nums.sort((a, b)=> a - b);
	let len = nums.length;
	let res = [];
	for(let i=0;i<len;i++) {
		if(i && nums[i] === nums[i-1]) continue;
		let target = -nums[i];
		let [start, end] = [i+1, len-1];
		while(start < end) {
			let sum = nums[start] + nums[end];
			if (sum > target) {
				end--;
			}  else if (sum < target) {
				start++
			} else {
				res.push([nums[i], nums[start], nums[end]]);
				console.log([nums[i], nums[start], nums[end]]);
				while (nums[start] === nums[start + 1]) {
				start++
				}    
				while (nums[end] === nums[end - 1]) {
					end--
				}
				end--
				start++
			}
		}
	}
	return res;
}
threeSum([1,2,3,-1,0,-2,-3,-4]);
