import { None } from "./None"
import { Length } from "./basic"
import { Decrease } from "./number"

export type At<Tpl extends any[], I extends number> = Length<Tpl> extends 0 ? None : Tpl[I]

export type Head<Tpl extends any[]> = Length<Tpl> extends 0 ? None : Tpl[0]

export type Tail<Tpl extends any[]> = Length<Tpl> extends 0 ? [] : (((...b: Tpl) => void) extends (a:any, ...b: infer I) => void ? I : [])

export type Last<Tpl extends any[]> = Length<Tpl> extends 0 ? None : At<Tpl, Decrease<Length<Tpl>>>

type InitialRvs<Tpl extends any[], Result extends any[] = []> = Length<Tpl> extends 0 ? Result : Length<Tpl> extends 1 ? Result : InitialRvs<Tail<Tpl>, Push<Head<Tpl>, Result>>

export type Initial<Tpl extends any[]> = Length<Tpl> extends 0 ? [] : Length<Tpl> extends 1 ? [] : Reverse<InitialRvs<Tpl>>

export type Push<T, Tpl extends any[]> = T extends None ? Tpl : ((a: T, ...b: Tpl) => void) extends ((...a: infer Result) => void) ? Result : never

export type Reverse<Tpl extends any[]> = {
    0: []
    1: Tpl
    2: [Tpl[1], Tpl[0]]
    3: [Tpl[2], Tpl[1], Tpl[0]]
    4: [Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    5: [Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    6: [Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    7: [Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    8: [Tpl[7], Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
}[ Tpl['length'] extends 0|1|2|3|4|5|6|7|8 ? Tpl['length'] : never ]



type TplOmit1<T, List extends any[]> = List[0] extends T  ? [] : List
type TplOmit2<T, List extends any[]> = List[0] extends T ? TplOmit1<T, Tail<List>> : Push<List[0], TplOmit1<T, Tail<List>>>
type TplOmit3<T, List extends any[]> = List[0] extends T ? TplOmit2<T, Tail<List>> : Push<List[0], TplOmit2<T, Tail<List>>>
type TplOmit4<T, List extends any[]> = List[0] extends T ? TplOmit3<T, Tail<List>> : Push<List[0], TplOmit3<T, Tail<List>>>
type TplOmit5<T, List extends any[]> = List[0] extends T ? TplOmit4<T, Tail<List>> : Push<List[0], TplOmit4<T, Tail<List>>>
type TplOmit6<T, List extends any[]> = List[0] extends T ? TplOmit5<T, Tail<List>> : Push<List[0], TplOmit5<T, Tail<List>>>
type TplOmit7<T, List extends any[]> = List[0] extends T ? TplOmit6<T, Tail<List>> : Push<List[0], TplOmit6<T, Tail<List>>>
type TplOmit8<T, List extends any[]> = List[0] extends T ? TplOmit7<T, Tail<List>> : Push<List[0], TplOmit7<T, Tail<List>>>

export type TupleOmit<T, Tpl extends any[]> = {
    0: []
    1: TplOmit1<T, Tpl>
    2: TplOmit2<T, Tpl>
    3: TplOmit3<T, Tpl>
    4: TplOmit4<T, Tpl>
    5: TplOmit5<T, Tpl>
    6: TplOmit6<T, Tpl>
    7: TplOmit7<T, Tpl>
    8: TplOmit8<T, Tpl>
}[ Tpl['length'] extends 0|1|2|3|4|5|6|7|8 ? Tpl['length'] : never]


type TplPick1<T, List extends any[]> = List[0] extends T ? List : []
type TplPick2<T, List extends any[]> = List[0] extends T ? Push<List[0], TplPick1<T, Tail<List>>> : TplPick1<T, Tail<List>> 
type TplPick3<T, List extends any[]> = List[0] extends T ? Push<List[0], TplPick2<T, Tail<List>>> : TplPick2<T, Tail<List>>
type TplPick4<T, List extends any[]> = List[0] extends T ? Push<List[0], TplPick3<T, Tail<List>>> : TplPick3<T, Tail<List>>
type TplPick5<T, List extends any[]> = List[0] extends T ? Push<List[0], TplPick4<T, Tail<List>>> : TplPick4<T, Tail<List>>
type TplPick6<T, List extends any[]> = List[0] extends T ? Push<List[0], TplPick5<T, Tail<List>>> : TplPick5<T, Tail<List>>
type TplPick7<T, List extends any[]> = List[0] extends T ? Push<List[0], TplPick6<T, Tail<List>>> : TplPick6<T, Tail<List>>
type TplPick8<T, List extends any[]> = List[0] extends T ? Push<List[0], TplPick7<T, Tail<List>>> : TplPick7<T, Tail<List>>

export type TuplePick<T, List extends any[]> = {
    0: []
    1: TplPick1<T, List>
    2: TplPick2<T, List>
    3: TplPick3<T, List>
    4: TplPick4<T, List>
    5: TplPick5<T, List>
    6: TplPick6<T, List>
    7: TplPick7<T, List>
    8: TplPick8<T, List>
}[ List['length'] extends 0|1|2|3|4|5|6|7|8 ? List['length'] : never]


/**
 * Select1st<T, any[]>
 * 
 * Select the 1st element of array which is derived from type T 
 */
export type TupleFind<T, List extends any[], NotFound=never> = {
    1: List[0] extends T ? List[0] : NotFound
    2: List[0] extends T ? List[0] : List[1] extends T ? List[1] : NotFound
    3: List[0] extends T ? List[0] : List[1] extends T ? List[1] : List[2] extends T ? List[2] : NotFound
    4: List[0] extends T ? List[0] : List[1] extends T ? List[1] : List[2] extends T ? List[2] : List[3] extends T ? List[3] : NotFound
    5: List[0] extends T ? List[0] : List[1] extends T ? List[1] : List[2] extends T ? List[2] : List[3] extends T ? List[3] : List[4] extends T ? List[4] : NotFound
    6: List[0] extends T ? List[0] : List[1] extends T ? List[1] : List[2] extends T ? List[2] : List[3] extends T ? List[3] : List[4] extends T ? List[4] : List[5] extends T ? List[5] : NotFound
    7: List[0] extends T ? List[0] : List[1] extends T ? List[1] : List[2] extends T ? List[2] : List[3] extends T ? List[3] : List[4] extends T ? List[4] : List[5] extends T ? List[5] : List[6] extends T ? List[6] : NotFound
    8: List[0] extends T ? List[0] : List[1] extends T ? List[1] : List[2] extends T ? List[2] : List[3] extends T ? List[3] : List[4] extends T ? List[4] : List[5] extends T ? List[5] : List[6] extends T ? List[6] : List[7] extends T ? List[7] : NotFound
}[ List['length'] extends 1|2|3|4|5|6|7|8  ? List['length'] : never ]

export type TupleZip<List1 extends any[], List2 extends any[]> = {
    0: []
    1: [ [ List1[0], List2[0] ] ]
    2: [ [ List1[0], List2[0] ], [ List1[1], List2[1] ] ]
    3: [ [ List1[0], List2[0] ], [ List1[1], List2[1] ], [ List1[2], List2[2] ] ]
    4: [ [ List1[0], List2[0] ], [ List1[1], List2[1] ], [ List1[2], List2[2] ], [ List1[3], List2[3] ] ]
    5: [ [ List1[0], List2[0] ], [ List1[1], List2[1] ], [ List1[2], List2[2] ], [ List1[3], List2[3] ], [ List1[4], List2[4] ] ]
    6: [ [ List1[0], List2[0] ], [ List1[1], List2[1] ], [ List1[2], List2[2] ], [ List1[3], List2[3] ], [ List1[4], List2[4] ], [ List1[5], List2[5] ] ]
    7: [ [ List1[0], List2[0] ], [ List1[1], List2[1] ], [ List1[2], List2[2] ], [ List1[3], List2[3] ], [ List1[4], List2[4] ], [ List1[5], List2[5] ], [ List1[6], List2[6] ] ]
    8: [ [ List1[0], List2[0] ], [ List1[1], List2[1] ], [ List1[2], List2[2] ], [ List1[3], List2[3] ], [ List1[4], List2[4] ], [ List1[5], List2[5] ], [ List1[6], List2[6] ], [ List1[7], List2[7] ] ]
}[ List1['length'] extends 0|1|2|3|4|5|6|7|8  ? List1['length'] : never ]    

export type TupleUnzip<List extends [any,any][]> = {
    0: [ [], [] ]
    1: [ [ List[0][0] ], [ List[0][1] ] ]
    2: [ [ List[0][0], List[1][0] ], [ List[0][1], List[1][1] ] ]
    3: [ [ List[0][0], List[1][0], List[2][0] ], [ List[0][1], List[1][1], List[2][1] ] ]
    4: [ [ List[0][0], List[1][0], List[2][0], List[3][0] ], [ List[0][1], List[1][1], List[2][1], List[3][1] ] ]
    5: [ [ List[0][0], List[1][0], List[2][0], List[3][0], List[4][0] ], [ List[0][1], List[1][1], List[2][1], List[3][1], List[4][1] ] ]
    6: [ [ List[0][0], List[1][0], List[2][0], List[3][0], List[4][0], List[5][0] ], [ List[0][1], List[1][1], List[2][1], List[3][1], List[4][1], List[5][1] ] ]
    7: [ [ List[0][0], List[1][0], List[2][0], List[3][0], List[4][0], List[5][0], List[6][0] ], [ List[0][1], List[1][1], List[2][1], List[3][1], List[4][1], List[5][1], List[6][1] ] ]
    8: [ [ List[0][0], List[1][0], List[2][0], List[3][0], List[4][0], List[5][0], List[6][0], List[7][0] ], [ List[0][1], List[1][1], List[2][1], List[3][1], List[4][1], List[5][1], List[6][1], List[7][1] ] ]
}[ List['length'] extends 0|1|2|3|4|5|6|7|8 ? List['length'] : never ]