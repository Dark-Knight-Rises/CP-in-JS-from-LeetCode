/**
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

Note that the letters wrap around.

For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Example 3:

Input: letters = ["c","f","j"], target = "d"
Output: "f"
 

Constraints:

2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
    let start = 0, end = letters.length - 1, mid = 0
    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        if (letters[mid] > target) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    if (start===letters.length) {
        return letters[0]
    }
    return letters[start]
};
console.log(nextGreatestLetter(["c", "f", "j"], "c"))