/*
 * Array contains only pairs of numbers except for one number
 * find that number */

// using Map
export function solve1(arr: number[]): number {
  const count: Map<number, number> = new Map();
  for (const elem of arr) {
    if (!count.has(elem)) count.set(elem, 0);
    count.set(elem, count.get(elem) + 1);
  }
  for (const [k, v] of count) {
    if (v == 1) return k;
  }
}

// sorting array in-place and using nlogn time
export function solve2(arr: number[]): number {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i += 2) {
    if (arr[i] !== arr[i + 1]) return arr[i];
  }
}

// using xor
export function solve3(arr: number[]): number {
  return arr.reduce((prevRes, elem) => prevRes ^ elem);
}
