/**
 * https://leetcode.com/problems/add-binary/
 * Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    const aDec = binToDec(a)
    const bDec = binToDec(b)
    const decSum=aDec+bDec
    const res= decToBin(decSum)
    return res
};

const binToDec = (a) => {
    let sum = 0, pro = 1, pow = 0
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        pow = index + 1
        pro = (2 ** ((a.length) - pow)) * element
        sum += pro
    }
    return sum
}

const decToBin=(a)=>{
    let rem='',r=0
    while (a>0) {
        r=a%10
        rem.concat(r)
        console.log(rem)
        a/=10
    }
}
console.log(addBinary("101", '111'))