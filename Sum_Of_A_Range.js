const range = (start, end) => {
    const array = [];
    let i = 0;
    for (let elVal = start; elVal <= end; elVal++) {
        array[i] = elVal;
        i++;
    }
    return array;
}

const sum = array => array.reduce((total, currentValue) => total += currentValue, 0);

console.log(sum(range(1,10)));