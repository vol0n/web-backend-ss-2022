import * as t4 from "../../src/hw1/task4"

test("simple test", () => {
    const it = new t4.MyIterator('dcb', 2)
    const expected = ['bc', 'bd', 'cb', 'cd', 'db', 'dc']
    const actual = []
    for (; it.hasNext();) {
        actual.push(it.next().value)
    }
    expect(actual).toEqual(expected)
})
