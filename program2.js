function resverseArr (arr) {

    // console.log(startIndex)
    let swapNum = []
    let j = 0;

    for (let i = arr.length-1; i >= 0; i--) {

        swapNum[j] = arr[i];

        j++;
    }

    return swapNum

}

let arr = [1,2,3,4,5,6]
let resut = resverseArr(arr)
console.log(resut)