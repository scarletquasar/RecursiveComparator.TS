function compare(value1: any, value2: any, cmpFn: (a: any, b: any) => boolean = (a: any, b: any) => a === b): boolean {
    let firstConstructor = value1.constructor.name;
    let secondConstructor = value2.constructor.name;

    if(firstConstructor !== secondConstructor) return cmpFn(value1, value2);

    let len1: number | null = null;
    let len2: number | null = null;

    switch(firstConstructor) {
        case "Map":
            len1 = value1.size;
            len2 = value2.size;

            if(len1 !== len2) return false;

            const map1 = Array.from(value1.entries());
            const map2 = Array.from(value2.entries());

            return compare(map1, map2, cmpFn);

        case "Set":
            len1 = value1.size;
            len2 = value2.size;

            if(len1 !== len2) return false;

            for (let x of value1) {
                for(let y of value2) {
                    if(!compare(x, y, cmpFn)) {
                        return false;
                    }
                }
            }
            break;
        
        case "Array":
            len1 = value1.length;
            len2 = value2.length;

            if(len1 !== len2) return cmpFn(len1, len2);

            for(let i = 0; i < (len1 ?? 0); i++) {
                if(!compare(value1[i], value2[i], cmpFn)) {
                    return cmpFn(value1[i], value2[i]);
                }
            }
            break;

        case "Object":
            const obj1 = Object.entries(value1);
            const obj2 = Object.entries(value2);
            len1 = obj1.length;
            len2 = obj2.length;

            if(len1 !== len2) return cmpFn(len1, len2);

            return compare(obj1, obj2, cmpFn);

        default:
            return cmpFn(value1.toString(), value2.toString());
    }

    return true;
}

console.log(compare([1], []));