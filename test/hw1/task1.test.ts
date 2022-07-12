import { mymap } from '../../src/hw1/task1'

test('test empty', () => {
    expect(mymap([], x => x)).toEqual([])
});

test('test not empty', () => {
    expect(mymap([1, 4, 9], Math.sqrt)).toEqual([1, 2, 3])
})

