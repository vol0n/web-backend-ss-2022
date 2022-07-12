/*
 * Implement partition which splits Array into two arrays based on predicate
 */

// using Array.forEach
export function partition1<T>(arr: T[], pred: (elem: T) => boolean): [T[], T[]] {
    const pass: T[] = []
    const fail: T[] = []
    arr.forEach((elem: T) => {
        pred(elem) ? pass.push(elem) : fail.push(elem)
    })
    return [pass, fail]
}


// using Array.reduce
export function partition2<T>(arr: T[], pred: (elem: T) => boolean): [T[], T[]] {
    return arr.reduce((prevRes: [T[], T[]], elem: T) => {
        pred(elem) ? prevRes[0].push(elem) : prevRes[1].push(elem)
        return prevRes
    }, [[], []])
}

// using *-spread op and recursion
export function partition3<T>(arr: T[], pred: (elem: T) => boolean): [T[], T[]] {
    if (!arr.length)
        return [[], []]
    const [cur, ...rest] = arr
    const [t, f] = partition3(rest, pred)
    if (pred(cur))
        return [[cur].concat(t), f]
    return [t, [cur].concat(f)]
}

