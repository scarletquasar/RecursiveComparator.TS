/*
    recursiveComparator v1.2.0 - 12/2021
    (C) 2021 Kayky Vitor Cruz
    Variable comparison algorithm created to serve as an alternative to the "JSON.stringify" and "Array.every" 
    methods, having higher operating speed and more reliable results. This code is licensed under MIT License.
*/

export function compare(value1, value2, cmpFn = (a, b) => a === b) {
    if(typeof value1 !== typeof value2) return false;
    switch(typeof value1) {
        case "object":
            /* JavaScript Map() constructor operation */
            if(value1.constructor.name === "Map" && value2.constructor.name === "Map") {
                const len1 = value1.size;
                const len2 = value2.size;

                if(len1 !== len2) return false;

                const map1 = Array.from(value1.entries());
                const map2 = Array.from(value2.entries());

                return compare(map1, map2, cmpFn);
            }
            /* JavaScript Set() constructor operation */
            else if(value1.constructor.name === "Set" && value2.constructor.name === "Set") {
                const len1 = value1.size;
                const len2 = value2.size;

                if(len1 !== len2) return false;

                for (let x of value1) {
                    for(let y of value2) {
                        if(!compare(x, y, cmpFn)) {
                            return false;
                        }
                    }
                }
            }
            /* JavaScript Date() constructor operation */
            else if(value1.constructor.name === "Date" && value2.constructor.name === "Date") {
                return cmpFn(value1.toString(), value2.toString());
            }
            /* JavaScript Default Array operation */
            else if(value1.constructor.name === "Array" && value2.constructor.name === "Array") {
                const len1 = value1.length;
                const len2 = value2.length;

                if(len1 !== len2) return cmpFn(len1, len2);

                for(let i = 0; i < len1; i++) {
                    if(!compare(value1[i], value2[i], cmpFn)) {
                        return cmpFn(value1[i], value2[i]);
                    }
                }
            }
            /* JavaScript Default Object operation */
            else if(value1.constructor.name === "Object" && value2.constructor.name === "Object") {
                const obj1 = Object.entries(value1);
                const obj2 = Object.entries(value2);
                const len1 = obj1.length;
                const len2 = obj2.length;

                if(len1 !== len2) return cmpFn(len1, len2);
                return compare(obj1, obj2, cmpFn);
            }
            /* JavaScript Default String Object operation - With constructor */
            else {
                return compare(value1.toString(), value2.toString(), cmpFn);
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
                    return compare(value1(), value2(), cmpFn);
                }
                else {
                    return false;
                }

            default:
                return cmpFn(value1, value2);
    }
    return true;
}