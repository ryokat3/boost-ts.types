import { Cast, Length } from "./basic"
import { Push, Tail } from "./tuple"

type NumberToTuple<N extends number, Result extends Array<any> = []> = {
    done: Result
    continue: NumberToTuple<N, Push<1, Result>> extends infer X1 ? Cast<X1, 1[]> : never
} [ Length<Result> extends N  ? "done" : "continue"]

type CompLength<Items1 extends any[], Items2 extends any[]> = {
    less: -1
    equal: 0
    great: 1
    continue:  CompLength<Tail<Items1>, Tail<Items2>>
}[ Length<Items1> extends Length<Items2> ? "equal" : Length<Items1> extends 0 ? "less" : Length<Items2> extends 0 ? "great" : "continue" ]

export type Decrease<N extends number> = Length<Tail<NumberToTuple<N>>>

export type Comp<Num1 extends number, Num2 extends number> = CompLength<NumberToTuple<Num1>, NumberToTuple<Num2>>