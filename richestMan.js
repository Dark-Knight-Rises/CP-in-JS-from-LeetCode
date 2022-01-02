/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let wealth=[],sum=0
    for(let i=0;i<accounts.length;i++){
        for(let j=0;j<accounts[i].length;j++){
            sum+=accounts[i][j]
        }
        console.log(sum)
        wealth.push(sum)
        sum=0
    }
    console.log(wealth)
    // console.log("sorted ",wealth.sort())
    // console.log("reverse",wealth.reverse())
    return Math.max(...wealth)
    
};
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))