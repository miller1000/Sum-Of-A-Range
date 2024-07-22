function deepEqual(val1, val2) {
    if (val1 == null || val2 == null) {
        return val1 === val2;
    }

    if (typeof val1 != "object" && typeof val2 !="object") {
        return val1 === val2;
    }

    function arraysAreEqual(array1, array2) {
        if (array1.length !== array2.length) {
            return false;
        }
        let result;
        for (let i = 0; i < array1.length; i++) {
            result = deepEqual(array1[i], array2[i]);
        }
        return result;
    }
    
    const val1Keys = Object.keys(val1);
    const val2Keys = Object.keys(val2);

    if (arraysAreEqual(val1Keys, val2Keys)) {
        const val1Objects = Object.values(val1);
        const val2Objects = Object.values(val2);
        return arraysAreEqual(val1Objects, val2Objects);
    } else {
        return false;
    }
}