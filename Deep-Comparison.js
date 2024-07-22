function deepEqual(val1, val2) {
    if (typeof val1 !== typeof val2) {
        return false;
    }

    if (val1 == null || val2 == null) {
        return val1 === val2;
    }

    if (typeof val1 !== "object" && typeof val2 !== "object" ) {
        return val1 === val2;
    }

    if (typeof val1 === "object" && typeof val2 === "object" ) {
        if (Object.keys(val1).length !== Object.keys(val2).length) {
            return false;
        }
        let valuesAreEqual = true;
        for (let i = 0; i < Object.keys(val1).length && valuesAreEqual === true; i++) {
            valuesAreEqual = deepEqual(Object.keys(val1)[i], Object.keys(val2)[i]);
            if (valuesAreEqual === true) {
                valuesAreEqual = deepEqual(Object.values(val1)[i], Object.values(val2)[i]);
            }
        }
        return valuesAreEqual;
    }
}