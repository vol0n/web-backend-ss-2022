export function mymap<T, R>(arr: T[], fun: (elem: T) => R): R[] {
    return Array.from(arr, fun)
}

