const reverseArray = array => {
    const reversedArray = [];
    for (const el of array) {
        reversedArray.unshift(el);
    }
    return reversedArray;
}

console.log(reverseArray([1,2,3,4]));