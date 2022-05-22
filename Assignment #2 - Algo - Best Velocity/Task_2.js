

let newarr = [];
const triple = 3;

function maxSubArraySum(nums , triple){
    let currSum = 0;
    let maxSumSeen = -Infinity;
    
    for(let i = 0; i < nums.length; i++){
        currSum += nums[i]; 
        if(i >= triple - 1){
            if(currSum >= maxSumSeen){
                maxSumSeen = currSum;
                newarr[0] = nums[i - 2];
                newarr[1] = nums[i - 1];
                newarr[2] = nums[i];
            }
            currSum -= nums[i - (triple - 1)];
        }
    }
    return maxSumSeen;

}

function print(){
    for(let i = 0; i < newarr.length; i++){
        console.log( newarr[i] );
    }
}

//EXAMPLE 1
const arr1 = [12,9,1,5,11,5];

//EXAMPLE 2
// const arr2 = [76,80,81,77,83,78,80];

//EXAMPLE 3
// const arr3 = [11,14,10,12];

//LARGEST SUBSET VALUE
console.log(maxSubArraySum(arr1 , triple));

//PRINTING THE SUBSET WITH THE LARGEST VALUE
print();
