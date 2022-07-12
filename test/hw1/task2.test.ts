import * as t2 from '../../src/hw1/task2'

const toTest = [t2.partition1, t2.partition2, t2.partition3]

test('empty', () => {
    for (const partition of toTest) {
        expect(partition([], x => true)).toEqual([[], []])
    }
})

test('simple partition', () => {
    for (const partition of toTest) {
        console.log(`Testing: ${partition.name}`)
        expect(partition([1, 2, 3, 5], x => x % 2 === 0)).toEqual([[2], [1, 3, 5]])
    }
})
