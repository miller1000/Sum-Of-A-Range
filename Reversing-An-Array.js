const reverseArray = array => {
    const reversedArray = [];
    for (const el of array) {
        reversedArray.unshift(el);
    }
    return reversedArray;
}

const reverseArrayInPlace = array => array.sort((a, b) => b - a);

// console.log(reverseArray([1,2,3,4]));

console.log(reverseArrayInPlace([1,2,3,4]));