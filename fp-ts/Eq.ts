import { Eq } from 'fp-ts/Eq'

const eqNumber: Eq<number> = {
    equals: (x , y) => x === y
}

type Point = {
    x: number
    y: number
}

const eqPoint: Eq<Point> = {
    equals: (p1 , p2) => p1.x === p2.x && p1.y === p2.y
}

type Ordering = -1 | 0 | 1

interface Ord<A> extends Eq<A> {
    readonly compare: (x: A , y: A) => Ordering
}