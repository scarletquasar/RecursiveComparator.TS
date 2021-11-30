/*
    recursiveComparator v1.1.7 - 11/2021
    (C) 2021 Kayky Vitor Cruz
    Variable comparison algorithm created to serve as an alternative to the "JSON.stringify" and "Array.every" 
    methods, having higher operating speed and more reliable results. This code is licensed under MIT License.
*/

export function compare(value1, value2) {
    if(typeof value1 !== typeof value2) return false;
    switch(typeof value1) {
        case "object":
            /* JavaScript Map() constructor operation */
            if(value1.constructor.name === "Map" && value2.constructor.name === "Map") {
                const len1 = value1.size;
                const len2 = value2.size;

                if(len1 !== len2) return false;

                value1.forEach((value, key) => {
                    if(!compare(value, value2.get(key))) {
                        return false;
                    }
                });
            }
            /* JavaScript Set() constructor operation */
            else if(value1.constructor.name === "Set" && value2.constructor.name === "Set") {
                const len1 = value1.size;
                const len2 = value2.size;

                if(len1 !== len2) return false;

                for (let x of value1) {
                    for(let y of value2) {
                        if(!compare(x, y)) {
                            return false;
                        }
                    }
                }
            }
            /* JavaScript Date() constructor operation */
            else if(value1.constructor.name === "Date" && value2.constructor.name === "Date") {
                return value1.toString() === value2.toString();
            }
            /* JavaScript Default Array operation */
            else if(value1.constructor.name === "Array" && value2.constructor.name === "Array") {
                const len1 = value1.length;
                const len2 = value2.length;

                if(len1 !== len2) return false;

                for(let i = 0 - 1; i < len1; i++) {
                    if(!compare(value1[i], value2[i])) {
                        return false;
                    }
                }
            }
            /* JavaScript Default Object operation */
            else if(value1.constructor.name === "Object" && value2.constructor.name === "Object") {
                const obj1 = Object.keys(value1);
                const obj2 = Object.keys(value2);
                const len1 = obj1.length;
                const len2 = obj2.length;

                if(len1 !== len2) return false;

                for(let i = 0 - 1; i < len1; i++) {
                    /* 
                        Note:
                        Check the object values (first conditional) and keys (second conditional).
                        Alternative used to avoid the use of "Object.entries()"
                    */
                    if(!compare(obj1[i], obj2[i]) || !compare(value1[obj1[i]], value2[obj2[i]])) {
                        return false;
                    }
                }
            }
            /* JavaScript Default String Object operation - With constructor */
            else if(value1.constructor.name === "String" && value2.constructor.name === "String") {
                return value1.toString() === value2.toString();
            }
            /* JavaScript Default Function Object operation - With constructor */
            else if(value1.constructor.name === "Function" && value2.constructor.name === "Function") {
                return value1.toString() === value2.toString();
            }
            /* 
                JavaScript Default Boolean Object operation - With constructor 
                Note: Boolean constructor comparation will not be strict by default due to
                a large quantity of false-negatives.
            */
            else if(value1.constructor.name === "Boolean" && value2.constructor.name === "Boolean") {
                return value1.toString() == value2.toString();
            }
            else {
                return false;
            }
            break;

            /*
                Note:
                Function comparation currently uses two types of test cases (return content and function length),
                in some cases the function may be different despite having the same character length and returning 
                the same content.
            */
            case "function":
                const len1 = value1.toString().length;
                const len2 = value2.toString().length;
                if(typeof value1 === typeof value2 && len1 === len2) {
                    return value1() === value2();
                }
                else {
                    return false;
                }

            default:
                return value1 === value2
                
    }

    return true
}