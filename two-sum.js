//时间复杂度是o(N2)
function twoSum(arr, target) {
	let len = arr.length;
	for(let i=0;i<len-1; i++) {
	  for(let j=i+1;j<len; j++) {
	    if(arr[i] + arr [j] === target) {
	    	console.log(`position is ${i},another is ${j}`);
	    	//return [i,j];
	    }
	  }
	}
}
twoSum([1,3,5,6,4,2], 6);

// 时间复杂度是o(n);
function anotherTwoSum(arr, target) {
	let len = arr.length;
	let map = {};
	for(let i=0;i<len;i++) {
		let j = target-arr[i];
		if (map[j] !== undefined) {
			console.log(`position is ${i},another is ${map[j]}`);
			//return [i,map[j]];
		} else {
			map[arr[i]] = i;
		}
	}
}

anotherTwoSum([1,3,5,6,4,2], 6);
//时间换空间