// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    const f = strs[0]
    let longestString = ''
    for(let i=0; i<f.length; i++){
        const newLongStr = longestString + f[i]
        const isTrue = strs.every((string) => string.slice(0, i+1).includes(newLongStr))

        if(isTrue){
            longestString = newLongStr;
            continue;
        } else {
            break;
        }
    }

    return longestString;
};