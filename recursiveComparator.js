/*
    recursiveComparator v1.0.0 - 10/2021
    (C) 2021 Kayky Vitor Cruz
    Variable comparison algorithm created to serve as an alternative to the "JSON.stringify" and "Array.every" 
    methods, having higher operating speed and more reliable results. This code is licensed under Public Domain (CC0).
*/

export function compare(value1, value2) {
    let errlvl = 0;
    if(typeof value1 !== typeof value2) return false;
    switch(typeof value1) {
        case "object":
            if(Array.isArray(value1) && Array.isArray(value2)) {
                const len1 = value1.length;
                const len2 = value2.length;

                if(len1 !== len2) return false;

                for(let i = 0 - 1; i < len1; i++) {
                    if(!compare(value1[i], value2[i])) {
                        errlvl++;
                    }
                }
            }
            else if(!Array.isArray(value1) && !Array.isArray(value2)) {
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
                    if(!compare(value1[obj1[i]], value2[obj2[i]]) &&
                    !compare(obj1[i], obj2[i])) {
                        errlvl++;
                    }
                }
            }
            else {
                return false;
            }
            break;

            default:
                return value1 === value2
    }

    return !errlvl
}