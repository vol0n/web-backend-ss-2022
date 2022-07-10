import * as t3 from '../../src/hw1/task3'

const toTest = [t3.solve1, t3.solve2, t3.solve3]

test('simple data', () => {
    for (const solution of toTest) {
        console.log(`Testing: ${solution.name}`)
        expect(solution([1, 3, 3, 4, 5, 4, 5])).toBe(1)
    }
})
