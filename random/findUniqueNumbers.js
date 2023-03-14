// Write a function in Vanilla JS that takes n number of arrays of integers and returns an array of distinct integers i.e the integers should appear only once among the input arrays. Example: [1,2,3], [2,3,4], [3,4,5] => [1,5]. Note: number of arrays can be n. The function should work when inputs are increased or decreased.

const findUniqueIntegers = (...args) => {
    let common = [];
    let uniqueIntegersArr = [];
    for(let i=0; i<args.length; i++){
        for(let j=0; j<args[i].length; j++){
            if(uniqueIntegersArr.includes(args[i][j])){
                const index = uniqueIntegersArr.indexOf(args[i][j])
                uniqueIntegersArr.splice(index, 1)
                common.push(args[i][j])
            }else if (!common.includes(args[i][j])) {
                uniqueIntegersArr.push(args[i][j])
            }
        }
    }
    return uniqueIntegersArr
}

console.log(findUniqueIntegers([1,2,3], [2,3,4]))