/**
 * Given an array nums of integers, return how many of them contain an even number of digits.

 

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.
 

Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 105
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers =(nums)=> {
    let count=0
    nums.forEach(element => {
        if (isEven(element)) {
            count++
        }
    });
    return count
};
const isEven=(element)=>{
    if (element<0) {
        element*=-1
    }
    let count=element.toString().length
    // console.log(count)
    return count%2==0
}
console.log(findNumbers([555,901,482,-1771]))
// console.log(isEven(22))