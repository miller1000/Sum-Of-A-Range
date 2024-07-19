const range = (start, end) => {
    const array = [];
    let i = 0;
    for (let elVal = start; elVal <= end; elVal++) {
        array[i] = elVal;
        i++;
    }
    return array;
}

console.log(range(3,11));