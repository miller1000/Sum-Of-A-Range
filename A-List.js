const arrayToList = array => {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

const x = arrayToList([1, 2, 3]);
console.log(JSON.stringify(x));

const listToArray = list => {
    let array = [];
    let element = list;
    while (element !== null) {
        array.push(element.value);
        element = element.rest;
    }
    return array;
}

console.log(listToArray(x));

const prepend = (el, list) => list = {value: el, rest:list};

const y = prepend(23, x)
console.log(JSON.stringify(y));