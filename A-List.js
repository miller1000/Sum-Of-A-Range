const arrayToList = array => {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}


const listToArray = list => {
    let array = [];
    let element = list;
    while (element !== null) {
        array.push(element.value);
        element = element.rest;
    }
    return array;
}


const prepend = (el, list) => list = {value: el, rest:list};


const nth = (list, num) => {
    let element = list;
    for (i = 0; i < num -1; i++) {
        if (element.rest) {
            element = element.rest;
        } else {
            element = undefined;
            break;
        }
    }
    return element;
}


const nth2 = (list, num) => {
    let element = list;
    if (!element.rest) {
        return undefined;
    }
    if (num === 1) {
        return element;
    } else {
        return nth2(element.rest, num - 1);
    }
}