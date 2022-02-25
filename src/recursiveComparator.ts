export function compare(value1: unknown, value2: unknown, cmpFn: (a: unknown, b: unknown) => boolean = (a: unknown, b: unknown) => a === b): boolean {
    let firstConstructor = (value1 as any).constructor.name;
    let secondConstructor = (value2 as any).constructor.name;

    if(firstConstructor !== secondConstructor) return cmpFn(value1, value2);

    let len1: number | null = null;
    let len2: number | null = null;

    switch(firstConstructor) {
        case "Map":
            const map1: Map<any, any> = value1 as Map<any, any>;
            const map2: Map<any, any> = value1 as Map<any, any>;

            len1 = map1.size;
            len2 = map2.size;

            if(len1 !== len2) return false;

            const arrayMap1 = Array.from((value1 as Map<any, any>).entries());
            const arrayMap2 = Array.from((value2 as Map<any, any>).entries());

            return compare(arrayMap1, arrayMap2, cmpFn);

        case "Set":
            const set1: Set<any> = value1 as Set<any>;
            const set2: Set<any> = value1 as Set<any>;

            len1 = set1.size;
            len2 = set2.size;

            if(len1 !== len2) return false;

            for (let x of set1) {
                for(let y of set2) {
                    if(!compare(x, y, cmpFn)) {
                        return false;
                    }
                }
            }
            break;
        
        case "Array":
            const array1: Array<any> = value1 as Array<any>;
            const array2: Array<any> = value2 as Array<any>;
            
            len1 = array1.length;
            len2 = array2.length;

            if(len1 !== len2) return cmpFn(len1, len2);

            for(let i = 0; i < (len1 ?? 0); i++) {
                if(!compare(array1[i], array2[i], cmpFn)) {
                    return cmpFn(array1[i], array2[i]);
                }
            }
            break;

        case "Object":
            const obj1: Record<any, any> = value1 as Record<any, any>;
            const obj2: Record<any, any> = value2 as Record<any, any>;

            const objArray1 = Object.entries(obj1);
            const objArray2 = Object.entries(obj2);

            len1 = objArray1.length;
            len2 = objArray2.length;

            if(len1 !== len2) return cmpFn(len1, len2);

            return compare(objArray1, objArray2, cmpFn);

        default:
            return cmpFn((value1 as any).toString(), (value2 as any).toString());
    }

    return true;
}

console.log(compare({1: 1}, {1: 1}));