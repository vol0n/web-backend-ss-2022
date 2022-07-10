/*
 * Implement a class with methods hasNext(), next() 
 * which produces all permutations of a string
 */

function* iterator(alphabet: string, permLen: number): Generator<string, void, void> {
    const a = [...alphabet].sort()
    const perm = Array(permLen).fill(0)
    const was = Array(alphabet.length).fill(false)

    function* find(i: number) {
        if (i == permLen) {
            yield perm.map(idx => a[idx]).join('')
            return;
        }
        for (let j = 0; j < alphabet.length; j++) {
            if (!was[j]) {
                was[j] = true
                perm[i] = j
                yield* find(i + 1)
                was[j] = false
            }
        }
    }

    yield* find(0)
}


export class MyIterator {
    private it: Generator<string, void, void>
    private prevRes: IteratorResult<string, void>

    constructor(alphabet: string, permLen: number) {
        this.it = iterator(alphabet, permLen)
    }

    hasNext(): boolean {
        if (this.prevRes === undefined) {
            this.prevRes = this.it.next()
        }
        return this.prevRes.done !== true
    }

    next(): IteratorResult<string, void> {
        if (this.hasNext()) {
            const next = this.prevRes
            this.prevRes = this.it.next()
            return next
        }
        return this.prevRes
    }
}

