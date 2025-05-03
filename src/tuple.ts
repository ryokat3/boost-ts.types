import { None } from "./None"
import { Length } from "./basic"
import { Decrease } from "./number"

export type At<Tpl extends any[], I extends number> = Length<Tpl> extends 0 ? None : Tpl[I]

export type Head<Tpl extends any[]> = Length<Tpl> extends 0 ? None : Tpl[0]

export type Tail<Tpl extends any[]> = Length<Tpl> extends 0 ? [] : (((...b: Tpl) => void) extends (a:any, ...b: infer I) => void ? I : [])

export type Last<Tpl extends any[]> = Length<Tpl> extends 0 ? None : At<Tpl, Decrease<Length<Tpl>>>

type InitialRvs<Tpl extends any[], Result extends any[] = []> = Length<Tpl> extends 0 ? Result : Length<Tpl> extends 1 ? Result : InitialRvs<Tail<Tpl>, Push<Head<Tpl>, Result>>

export type Initial<Tpl extends any[]> = Length<Tpl> extends 0 ? [] : Length<Tpl> extends 1 ? [] : Reverse<InitialRvs<Tpl>>

export type Reverse<Tpl extends any[]> = {
    0: []
    1: [Tpl[0]]
    2: [Tpl[1], Tpl[0]]
    3: [Tpl[2], Tpl[1], Tpl[0]]
    4: [Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    5: [Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    6: [Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    7: [Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    8: [Tpl[7], Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    9: [Tpl[8], Tpl[7], Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    10: [Tpl[9], Tpl[8], Tpl[7], Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    11: [Tpl[10], Tpl[9], Tpl[8], Tpl[7], Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    12: [Tpl[11], Tpl[10], Tpl[9], Tpl[8], Tpl[7], Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    13: [Tpl[12], Tpl[11], Tpl[10], Tpl[9], Tpl[8], Tpl[7], Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    14: [Tpl[13], Tpl[12], Tpl[11], Tpl[10], Tpl[9], Tpl[8], Tpl[7], Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    15: [Tpl[14], Tpl[13], Tpl[12], Tpl[11], Tpl[10], Tpl[9], Tpl[8], Tpl[7], Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
    16: [Tpl[15], Tpl[14], Tpl[13], Tpl[12], Tpl[11], Tpl[10], Tpl[9], Tpl[8], Tpl[7], Tpl[6], Tpl[5], Tpl[4], Tpl[3], Tpl[2], Tpl[1], Tpl[0]]
}[ Tpl['length'] extends 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16 ? Tpl['length'] : never ]

export type Push<T, Tpl extends any[]> = T extends None ? Tpl : ((a: T, ...b: Tpl) => void) extends ((...a: infer Result) => void) ? Result : never

export type Append<T, Tpl extends any[]> = Reverse<Push<T, Reverse<Tpl>>>

export type Plus<T1 extends any[], T2 extends any[]> = T2 extends [] ? T1 : Plus<Push<Head<T2>, T1>, Tail<T2>>


type TplOmit1<T, Tpl extends any[]> = Tpl[0] extends T  ? [] : Tpl
type TplOmit2<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit1<T, Tail<Tpl>> : Push<Tpl[0], TplOmit1<T, Tail<Tpl>>>
type TplOmit3<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit2<T, Tail<Tpl>> : Push<Tpl[0], TplOmit2<T, Tail<Tpl>>>
type TplOmit4<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit3<T, Tail<Tpl>> : Push<Tpl[0], TplOmit3<T, Tail<Tpl>>>
type TplOmit5<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit4<T, Tail<Tpl>> : Push<Tpl[0], TplOmit4<T, Tail<Tpl>>>
type TplOmit6<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit5<T, Tail<Tpl>> : Push<Tpl[0], TplOmit5<T, Tail<Tpl>>>
type TplOmit7<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit6<T, Tail<Tpl>> : Push<Tpl[0], TplOmit6<T, Tail<Tpl>>>
type TplOmit8<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit7<T, Tail<Tpl>> : Push<Tpl[0], TplOmit7<T, Tail<Tpl>>>
type TplOmit9<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit8<T, Tail<Tpl>> : Push<Tpl[0], TplOmit8<T, Tail<Tpl>>>
type TplOmit10<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit9<T, Tail<Tpl>> : Push<Tpl[0], TplOmit9<T, Tail<Tpl>>>
type TplOmit11<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit10<T, Tail<Tpl>> : Push<Tpl[0], TplOmit10<T, Tail<Tpl>>>
type TplOmit12<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit11<T, Tail<Tpl>> : Push<Tpl[0], TplOmit11<T, Tail<Tpl>>>
type TplOmit13<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit12<T, Tail<Tpl>> : Push<Tpl[0], TplOmit12<T, Tail<Tpl>>>
type TplOmit14<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit13<T, Tail<Tpl>> : Push<Tpl[0], TplOmit13<T, Tail<Tpl>>>
type TplOmit15<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit14<T, Tail<Tpl>> : Push<Tpl[0], TplOmit14<T, Tail<Tpl>>>
type TplOmit16<T, Tpl extends any[]> = Tpl[0] extends T ? TplOmit15<T, Tail<Tpl>> : Push<Tpl[0], TplOmit15<T, Tail<Tpl>>>

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
    9: TplOmit9<T, Tpl>
    10: TplOmit10<T, Tpl>
    11: TplOmit11<T, Tpl>
    12: TplOmit12<T, Tpl>
    13: TplOmit13<T, Tpl>
    14: TplOmit14<T, Tpl>
    15: TplOmit15<T, Tpl>
    16: TplOmit16<T, Tpl>
}[ Tpl['length'] extends 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16 ? Tpl['length'] : never]


type TplPick1<T, Tpl extends any[]> = Tpl[0] extends T ? Tpl : []
type TplPick2<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick1<T, Tail<Tpl>>> : TplPick1<T, Tail<Tpl>> 
type TplPick3<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick2<T, Tail<Tpl>>> : TplPick2<T, Tail<Tpl>>
type TplPick4<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick3<T, Tail<Tpl>>> : TplPick3<T, Tail<Tpl>>
type TplPick5<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick4<T, Tail<Tpl>>> : TplPick4<T, Tail<Tpl>>
type TplPick6<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick5<T, Tail<Tpl>>> : TplPick5<T, Tail<Tpl>>
type TplPick7<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick6<T, Tail<Tpl>>> : TplPick6<T, Tail<Tpl>>
type TplPick8<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick7<T, Tail<Tpl>>> : TplPick7<T, Tail<Tpl>>
type TplPick9<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick8<T, Tail<Tpl>>> : TplPick8<T, Tail<Tpl>>
type TplPick10<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick9<T, Tail<Tpl>>> : TplPick9<T, Tail<Tpl>>
type TplPick11<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick10<T, Tail<Tpl>>> : TplPick10<T, Tail<Tpl>>
type TplPick12<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick11<T, Tail<Tpl>>> : TplPick11<T, Tail<Tpl>>
type TplPick13<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick12<T, Tail<Tpl>>> : TplPick12<T, Tail<Tpl>>
type TplPick14<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick13<T, Tail<Tpl>>> : TplPick13<T, Tail<Tpl>>
type TplPick15<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick14<T, Tail<Tpl>>> : TplPick14<T, Tail<Tpl>>
type TplPick16<T, Tpl extends any[]> = Tpl[0] extends T ? Push<Tpl[0], TplPick15<T, Tail<Tpl>>> : TplPick15<T, Tail<Tpl>>

export type TuplePick<T, Tpl extends any[]> = {
    0: []
    1: TplPick1<T, Tpl>
    2: TplPick2<T, Tpl>
    3: TplPick3<T, Tpl>
    4: TplPick4<T, Tpl>
    5: TplPick5<T, Tpl>
    6: TplPick6<T, Tpl>
    7: TplPick7<T, Tpl>
    8: TplPick8<T, Tpl>
    9: TplPick9<T, Tpl>
    10: TplPick10<T, Tpl>
    11: TplPick11<T, Tpl>
    12: TplPick12<T, Tpl>
    13: TplPick13<T, Tpl>
    14: TplPick14<T, Tpl>
    15: TplPick15<T, Tpl>
    16: TplPick16<T, Tpl>
}[ Tpl['length'] extends 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16 ? Tpl['length'] : never]


export type TupleZip<Tpl1 extends any[], Tpl2 extends any[]> = {
    0: []
    1: [ [ Tpl1[0], Tpl2[0] ] ]
    2: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ] ]
    3: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ] ]
    4: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ] ]
    5: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ] ]
    6: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ], [ Tpl1[5], Tpl2[5] ] ]
    7: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ], [ Tpl1[5], Tpl2[5] ], [ Tpl1[6], Tpl2[6] ] ]
    8: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ], [ Tpl1[5], Tpl2[5] ], [ Tpl1[6], Tpl2[6] ], [ Tpl1[7], Tpl2[7] ] ]
    9: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ], [ Tpl1[5], Tpl2[5] ], [ Tpl1[6], Tpl2[6] ], [ Tpl1[7], Tpl2[7] ], [ Tpl1[8], Tpl2[8] ] ]
    10: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ], [ Tpl1[5], Tpl2[5] ], [ Tpl1[6], Tpl2[6] ], [ Tpl1[7], Tpl2[7] ], [ Tpl1[8], Tpl2[8] ], [ Tpl1[9], Tpl2[9] ] ]
    11: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ], [ Tpl1[5], Tpl2[5] ], [ Tpl1[6], Tpl2[6] ], [ Tpl1[7], Tpl2[7] ], [ Tpl1[8], Tpl2[8] ], [ Tpl1[9], Tpl2[9] ], [ Tpl1[10], Tpl2[10] ] ]
    12: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ], [ Tpl1[5], Tpl2[5] ], [ Tpl1[6], Tpl2[6] ], [ Tpl1[7], Tpl2[7] ], [ Tpl1[8], Tpl2[8] ], [ Tpl1[9], Tpl2[9] ], [ Tpl1[10], Tpl2[10] ], [ Tpl1[11], Tpl2[11] ] ]
    13: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ], [ Tpl1[5], Tpl2[5] ], [ Tpl1[6], Tpl2[6] ], [ Tpl1[7], Tpl2[7] ], [ Tpl1[8], Tpl2[8] ], [ Tpl1[9], Tpl2[9] ], [ Tpl1[10], Tpl2[10] ], [ Tpl1[11], Tpl2[11] ], [ Tpl1[12], Tpl2[12] ] ]
    14: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ], [ Tpl1[5], Tpl2[5] ], [ Tpl1[6], Tpl2[6] ], [ Tpl1[7], Tpl2[7] ], [ Tpl1[8], Tpl2[8] ], [ Tpl1[9], Tpl2[9] ], [ Tpl1[10], Tpl2[10] ], [ Tpl1[11], Tpl2[11] ], [ Tpl1[12], Tpl2[12] ], [ Tpl1[13], Tpl2[13] ] ]
    15: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ], [ Tpl1[5], Tpl2[5] ], [ Tpl1[6], Tpl2[6] ], [ Tpl1[7], Tpl2[7] ], [ Tpl1[8], Tpl2[8] ], [ Tpl1[9], Tpl2[9] ], [ Tpl1[10], Tpl2[10] ], [ Tpl1[11], Tpl2[11] ], [ Tpl1[12], Tpl2[12] ], [ Tpl1[13], Tpl2[13] ], [ Tpl1[14], Tpl2[14] ] ]
    16: [ [ Tpl1[0], Tpl2[0] ], [ Tpl1[1], Tpl2[1] ], [ Tpl1[2], Tpl2[2] ], [ Tpl1[3], Tpl2[3] ], [ Tpl1[4], Tpl2[4] ], [ Tpl1[5], Tpl2[5] ], [ Tpl1[6], Tpl2[6] ], [ Tpl1[7], Tpl2[7] ], [ Tpl1[8], Tpl2[8] ], [ Tpl1[9], Tpl2[9] ], [ Tpl1[10], Tpl2[10] ], [ Tpl1[11], Tpl2[11] ], [ Tpl1[12], Tpl2[12] ], [ Tpl1[13], Tpl2[13] ], [ Tpl1[14], Tpl2[14] ], [ Tpl1[15], Tpl2[15] ] ]
}[ Tpl1['length'] extends 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16  ? Tpl1['length'] : never ]    

export type TupleUnzip<Tpl extends [any,any][]> = {
    0: [ [], [] ]
    1: [ [ Tpl[0][0] ], [ Tpl[0][1] ] ]
    2: [ [ Tpl[0][0], Tpl[1][0] ], [ Tpl[0][1], Tpl[1][1] ] ]
    3: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1] ] ]
    4: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1] ] ]
    5: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1] ] ]
    6: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0], Tpl[5][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1], Tpl[5][1] ] ]
    7: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0], Tpl[5][0], Tpl[6][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1], Tpl[5][1], Tpl[6][1] ] ]
    8: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0], Tpl[5][0], Tpl[6][0], Tpl[7][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1], Tpl[5][1], Tpl[6][1], Tpl[7][1] ] ]
    9: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0], Tpl[5][0], Tpl[6][0], Tpl[7][0], Tpl[8][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1], Tpl[5][1], Tpl[6][1], Tpl[7][1], Tpl[8][1] ] ]
    10: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0], Tpl[5][0], Tpl[6][0], Tpl[7][0], Tpl[8][0], Tpl[9][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1], Tpl[5][1], Tpl[6][1], Tpl[7][1], Tpl[8][1], Tpl[9][1] ] ]
    11: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0], Tpl[5][0], Tpl[6][0], Tpl[7][0], Tpl[8][0], Tpl[9][0], Tpl[10][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1], Tpl[5][1], Tpl[6][1], Tpl[7][1], Tpl[8][1], Tpl[9][1], Tpl[10][1] ] ]
    12: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0], Tpl[5][0], Tpl[6][0], Tpl[7][0], Tpl[8][0], Tpl[9][0], Tpl[10][0], Tpl[11][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1], Tpl[5][1], Tpl[6][1], Tpl[7][1], Tpl[8][1], Tpl[9][1], Tpl[10][1], Tpl[11][1] ] ]
    13: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0], Tpl[5][0], Tpl[6][0], Tpl[7][0], Tpl[8][0], Tpl[9][0], Tpl[10][0], Tpl[11][0], Tpl[12][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1], Tpl[5][1], Tpl[6][1], Tpl[7][1], Tpl[8][1], Tpl[9][1], Tpl[10][1], Tpl[11][1], Tpl[12][1] ] ]
    14: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0], Tpl[5][0], Tpl[6][0], Tpl[7][0], Tpl[8][0], Tpl[9][0], Tpl[10][0], Tpl[11][0], Tpl[12][0], Tpl[13][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1], Tpl[5][1], Tpl[6][1], Tpl[7][1], Tpl[8][1], Tpl[9][1], Tpl[10][1], Tpl[11][1], Tpl[12][1], Tpl[13][1] ] ]
    15: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0], Tpl[5][0], Tpl[6][0], Tpl[7][0], Tpl[8][0], Tpl[9][0], Tpl[10][0], Tpl[11][0], Tpl[12][0], Tpl[13][0], Tpl[14][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1], Tpl[5][1], Tpl[6][1], Tpl[7][1], Tpl[8][1], Tpl[9][1], Tpl[10][1], Tpl[11][1], Tpl[12][1], Tpl[13][1], Tpl[14][1] ] ]
    16: [ [ Tpl[0][0], Tpl[1][0], Tpl[2][0], Tpl[3][0], Tpl[4][0], Tpl[5][0], Tpl[6][0], Tpl[7][0], Tpl[8][0], Tpl[9][0], Tpl[10][0], Tpl[11][0], Tpl[12][0], Tpl[13][0], Tpl[14][0], Tpl[15][0] ], [ Tpl[0][1], Tpl[1][1], Tpl[2][1], Tpl[3][1], Tpl[4][1], Tpl[5][1], Tpl[6][1], Tpl[7][1], Tpl[8][1], Tpl[9][1], Tpl[10][1], Tpl[11][1], Tpl[12][1], Tpl[13][1], Tpl[14][1], Tpl[15][1] ] ]
}[ Tpl['length'] extends 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16 ? Tpl['length'] : never ]

/**
 * TupleFind<T, any[]>
 * 
 * Find the 1st element of array which is derived from type T 
 */
export type TupleFind<T, Tpl extends any[], NotFound=never> = {
    1: Tpl[0] extends T ? Tpl[0] : NotFound
    2: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : NotFound
    3: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : NotFound
    4: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : NotFound
    5: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : NotFound
    6: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : Tpl[5] extends T ? Tpl[5] : NotFound
    7: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : Tpl[5] extends T ? Tpl[5] : Tpl[6] extends T ? Tpl[6] : NotFound
    8: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : Tpl[5] extends T ? Tpl[5] : Tpl[6] extends T ? Tpl[6] : Tpl[7] extends T ? Tpl[7] : NotFound
    9: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : Tpl[5] extends T ? Tpl[5] : Tpl[6] extends T ? Tpl[6] : Tpl[7] extends T ? Tpl[7] : Tpl[8] extends T ? Tpl[8] : NotFound
    10: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : Tpl[5] extends T ? Tpl[5] : Tpl[6] extends T ? Tpl[6] : Tpl[7] extends T ? Tpl[7] : Tpl[8] extends T ? Tpl[8] : Tpl[9] extends T ? Tpl[9] : NotFound
    11: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : Tpl[5] extends T ? Tpl[5] : Tpl[6] extends T ? Tpl[6] : Tpl[7] extends T ? Tpl[7] : Tpl[8] extends T ? Tpl[8] : Tpl[9] extends T ? Tpl[9] : Tpl[10] extends T ? Tpl[10] : NotFound
    12: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : Tpl[5] extends T ? Tpl[5] : Tpl[6] extends T ? Tpl[6] : Tpl[7] extends T ? Tpl[7] : Tpl[8] extends T ? Tpl[8] : Tpl[9] extends T ? Tpl[9] : Tpl[10] extends T ? Tpl[10] : Tpl[11] extends T ? Tpl[11] : NotFound
    13: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : Tpl[5] extends T ? Tpl[5] : Tpl[6] extends T ? Tpl[6] : Tpl[7] extends T ? Tpl[7] : Tpl[8] extends T ? Tpl[8] : Tpl[9] extends T ? Tpl[9] : Tpl[10] extends T ? Tpl[10] : Tpl[11] extends T ? Tpl[11] : Tpl[12] extends T ? Tpl[12] : NotFound
    14: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : Tpl[5] extends T ? Tpl[5] : Tpl[6] extends T ? Tpl[6] : Tpl[7] extends T ? Tpl[7] : Tpl[8] extends T ? Tpl[8] : Tpl[9] extends T ? Tpl[9] : Tpl[10] extends T ? Tpl[10] : Tpl[11] extends T ? Tpl[11] : Tpl[12] extends T ? Tpl[12] : Tpl[13] extends T ? Tpl[13] : NotFound
    15: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : Tpl[5] extends T ? Tpl[5] : Tpl[6] extends T ? Tpl[6] : Tpl[7] extends T ? Tpl[7] : Tpl[8] extends T ? Tpl[8] : Tpl[9] extends T ? Tpl[9] : Tpl[10] extends T ? Tpl[10] : Tpl[11] extends T ? Tpl[11] : Tpl[12] extends T ? Tpl[12] : Tpl[13] extends T ? Tpl[13] : Tpl[14] extends T ? Tpl[14] : NotFound
    16: Tpl[0] extends T ? Tpl[0] : Tpl[1] extends T ? Tpl[1] : Tpl[2] extends T ? Tpl[2] : Tpl[3] extends T ? Tpl[3] : Tpl[4] extends T ? Tpl[4] : Tpl[5] extends T ? Tpl[5] : Tpl[6] extends T ? Tpl[6] : Tpl[7] extends T ? Tpl[7] : Tpl[8] extends T ? Tpl[8] : Tpl[9] extends T ? Tpl[9] : Tpl[10] extends T ? Tpl[10] : Tpl[11] extends T ? Tpl[11] : Tpl[12] extends T ? Tpl[12] : Tpl[13] extends T ? Tpl[13] : Tpl[14] extends T ? Tpl[14] : Tpl[15] extends T ? Tpl[15] : NotFound
}[ Tpl['length'] extends 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16  ? Tpl['length'] : never ]

export type ZipFind<T, Zp extends [any, any][], NotFound=never> = {
    1: Zp[0][0] extends T ? Zp[0][1] : NotFound
    2: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : NotFound
    3: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : NotFound
    4: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : NotFound
    5: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : NotFound
    6: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : Zp[5][0] extends T ? Zp[5][1] : NotFound
    7: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : Zp[5][0] extends T ? Zp[5][1] : Zp[6][0] extends T ? Zp[6][1] : NotFound
    8: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : Zp[5][0] extends T ? Zp[5][1] : Zp[6][0] extends T ? Zp[6][1] : Zp[7][0] extends T ? Zp[7][1] : NotFound
    9: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : Zp[5][0] extends T ? Zp[5][1] : Zp[6][0] extends T ? Zp[6][1] : Zp[7][0] extends T ? Zp[7][1] : Zp[8][0] extends T ? Zp[8][1] : NotFound
    10: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : Zp[5][0] extends T ? Zp[5][1] : Zp[6][0] extends T ? Zp[6][1] : Zp[7][0] extends T ? Zp[7][1] : Zp[8][0] extends T ? Zp[8][1] : Zp[9][0] extends T ? Zp[9][1] : NotFound
    11: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : Zp[5][0] extends T ? Zp[5][1] : Zp[6][0] extends T ? Zp[6][1] : Zp[7][0] extends T ? Zp[7][1] : Zp[8][0] extends T ? Zp[8][1] : Zp[9][0] extends T ? Zp[9][1] : Zp[10][0] extends T ? Zp[10][1] : NotFound
    12: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : Zp[5][0] extends T ? Zp[5][1] : Zp[6][0] extends T ? Zp[6][1] : Zp[7][0] extends T ? Zp[7][1] : Zp[8][0] extends T ? Zp[8][1] : Zp[9][0] extends T ? Zp[9][1] : Zp[10][0] extends T ? Zp[10][1] : Zp[11][0] extends T ? Zp[11][1] : NotFound
    13: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : Zp[5][0] extends T ? Zp[5][1] : Zp[6][0] extends T ? Zp[6][1] : Zp[7][0] extends T ? Zp[7][1] : Zp[8][0] extends T ? Zp[8][1] : Zp[9][0] extends T ? Zp[9][1] : Zp[10][0] extends T ? Zp[10][1] : Zp[11][0] extends T ? Zp[11][1] : Zp[12][0] extends T ? Zp[12][1] : NotFound
    14: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : Zp[5][0] extends T ? Zp[5][1] : Zp[6][0] extends T ? Zp[6][1] : Zp[7][0] extends T ? Zp[7][1] : Zp[8][0] extends T ? Zp[8][1] : Zp[9][0] extends T ? Zp[9][1] : Zp[10][0] extends T ? Zp[10][1] : Zp[11][0] extends T ? Zp[11][1] : Zp[12][0] extends T ? Zp[12][1] : Zp[13][0] extends T ? Zp[13][1] : NotFound
    15: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : Zp[5][0] extends T ? Zp[5][1] : Zp[6][0] extends T ? Zp[6][1] : Zp[7][0] extends T ? Zp[7][1] : Zp[8][0] extends T ? Zp[8][1] : Zp[9][0] extends T ? Zp[9][1] : Zp[10][0] extends T ? Zp[10][1] : Zp[11][0] extends T ? Zp[11][1] : Zp[12][0] extends T ? Zp[12][1] : Zp[13][0] extends T ? Zp[13][1] : Zp[14][0] extends T ? Zp[14][1] : NotFound
    16: Zp[0][0] extends T ? Zp[0][1] : Zp[1][0] extends T ? Zp[1][1] : Zp[2][0] extends T ? Zp[2][1] : Zp[3][0] extends T ? Zp[3][1] : Zp[4][0] extends T ? Zp[4][1] : Zp[5][0] extends T ? Zp[5][1] : Zp[6][0] extends T ? Zp[6][1] : Zp[7][0] extends T ? Zp[7][1] : Zp[8][0] extends T ? Zp[8][1] : Zp[9][0] extends T ? Zp[9][1] : Zp[10][0] extends T ? Zp[10][1] : Zp[11][0] extends T ? Zp[11][1] : Zp[12][0] extends T ? Zp[12][1] : Zp[13][0] extends T ? Zp[13][1] : Zp[14][0] extends T ? Zp[14][1] : Zp[15][0] extends T ? Zp[15][1] : NotFound
}[ Zp['length'] extends 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16 ? Zp['length'] : never]

export type TupleToUnion<Tpl extends any[]> = {
    1: Tpl[0]    
    2: Tpl[0] | Tpl[1]
    3: Tpl[0] | Tpl[1] | Tpl[2]
    4: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3]
    5: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4]
    6: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4] | Tpl[5]
    7: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4] | Tpl[5] | Tpl[6]
    8: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4] | Tpl[5] | Tpl[6] | Tpl[7]
    9: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4] | Tpl[5] | Tpl[6] | Tpl[7] | Tpl[8]
    10: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4] | Tpl[5] | Tpl[6] | Tpl[7] | Tpl[8] | Tpl[9]
    11: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4] | Tpl[5] | Tpl[6] | Tpl[7] | Tpl[8] | Tpl[9] | Tpl[10]
    12: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4] | Tpl[5] | Tpl[6] | Tpl[7] | Tpl[8] | Tpl[9] | Tpl[10] | Tpl[11]
    13: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4] | Tpl[5] | Tpl[6] | Tpl[7] | Tpl[8] | Tpl[9] | Tpl[10] | Tpl[11] | Tpl[12]
    14: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4] | Tpl[5] | Tpl[6] | Tpl[7] | Tpl[8] | Tpl[9] | Tpl[10] | Tpl[11] | Tpl[12] | Tpl[13]
    15: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4] | Tpl[5] | Tpl[6] | Tpl[7] | Tpl[8] | Tpl[9] | Tpl[10] | Tpl[11] | Tpl[12] | Tpl[13] | Tpl[14]
    16: Tpl[0] | Tpl[1] | Tpl[2] | Tpl[3] | Tpl[4] | Tpl[5] | Tpl[6] | Tpl[7] | Tpl[8] | Tpl[9] | Tpl[10] | Tpl[11] | Tpl[12] | Tpl[13] | Tpl[14] | Tpl[15]
}[ Tpl['length'] extends 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16  ? Tpl['length'] : never ]