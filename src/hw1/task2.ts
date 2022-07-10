/*
 * Implement partition which splits Array into two arrays based on predicate
 */

// using Array.forEach
export function partition1<T>(arr: T[], pred: (elem: T) => boolean): Array<T[]> {
    const trueArr: T[] = []
    const falseArr: T[] = []
    arr.forEach((elem: T) => {
        pred(elem) ? trueArr.push(elem) : falseArr.push(elem)
    })
    return [trueArr, falseArr]
}


// using Array.reduce
export function partition2<T>(arr: T[], pred: (elem: T) => boolean): Array<T[]> {
    return arr.reduce((prevRes: Array<T[]>, elem: T) => {
        pred(elem) ? prevRes[0].push(elem) : prevRes[1].push(elem)
        return prevRes
    }, [[], []])
}

// using *-spread op and recursion
export function partition3<T>(arr: T[], pred: (elem: T) => boolean): Array<T[]> {
    if (!arr.length)
        return [[], []]
    const [x, ...rest] = arr
    const [t, f] = partition3(rest, pred)
    if (pred(x))
        return [[x].concat(t), f]
    return [t, [x].concat(f)]
}

