function maxSubSquSum4 (arr) {
    var sum= 0,maxsum = 0;
    var left=0,right=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum>maxsum){
            maxsum = sum;
            right = i;
        }else if(sum<0){//小于0则抛弃前面的重新计算
            sum = 0;
            left = i+1;
        }
    }
    if(left<=right){
        return arr.slice(left,right+1);
    }
}
maxSubSquSum4([-2, 1, -3, 4, -1, 2, 1, -5, 4]);