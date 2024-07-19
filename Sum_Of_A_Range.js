const range = (start, end, step = 1) => {
    const arrayLength = Math.ceil((Math.abs(end - start) + 1) / Math.abs(step));
    const array = new Array(arrayLength);
    let value = start;
    for (let el = 0; el < array.length; el++) {
        array[el] = value;
        value += step;
    }
    return array;
}

const sum = array => array.reduce((total, currentValue) => total += currentValue, 0);

console.log(range(1, 10)); // Get a range without stepping over values
console.log(sum(range(1, 10))); // Sum a range that was created without stepping over values
console.log(range(1, 10, 2)); // Get a range using a step value to step over values
console.log(sum(range(1, 10, 2))); // Sum a range that was created using a step value to step over values
console.log(range(5, 2, -1)); // Get a range using a negative step value to step over values backwards
console.log(sum(range(5, 2, -1))); // Sum a range that was created using a negative step value to step over values backwards