declare const Pad: unique symbol
type Pad = typeof Pad


/**
 * SelectMask
 * 
 * Replace elements by Pad if it doesn't extend T
 */
export type TupleMask<T, List extends any[]> = {
    0: []
    1: [ List[0] extends T ? List[0] : Pad ]
    2: [ List[0] extends T ? List[0] : Pad, List[1] extends T ? List[1] : Pad ]
    3: [ List[0] extends T ? List[0] : Pad, List[1] extends T ? List[1] : Pad, List[2] extends T ? List[2] : Pad ]
    4: [ List[0] extends T ? List[0] : Pad, List[1] extends T ? List[1] : Pad, List[2] extends T ? List[2] : Pad, List[3] extends T ? List[3] : Pad ]
    5: [ List[0] extends T ? List[0] : Pad, List[1] extends T ? List[1] : Pad, List[2] extends T ? List[2] : Pad, List[3] extends T ? List[3] : Pad, List[4] extends T ? List[4] : Pad ]
    6: [ List[0] extends T ? List[0] : Pad, List[1] extends T ? List[1] : Pad, List[2] extends T ? List[2] : Pad, List[3] extends T ? List[3] : Pad, List[4] extends T ? List[4] : Pad, List[5] extends T ? List[5] : Pad ]
    7: [ List[0] extends T ? List[0] : Pad, List[1] extends T ? List[1] : Pad, List[2] extends T ? List[2] : Pad, List[3] extends T ? List[3] : Pad, List[4] extends T ? List[4] : Pad, List[5] extends T ? List[5] : Pad, List[6] extends T ? List[6] : Pad ]
    8: [ List[0] extends T ? List[0] : Pad, List[1] extends T ? List[1] : Pad, List[2] extends T ? List[2] : Pad, List[3] extends T ? List[3] : Pad, List[4] extends T ? List[4] : Pad, List[5] extends T ? List[5] : Pad, List[6] extends T ? List[6] : Pad, List[7] extends T ? List[7] : Pad ]
}[ List['length'] extends 0|1|2|3|4|5|6|7|8  ? List['length'] : never ]




type Top2<T, List extends any[]> = List extends [infer A, infer B]
    ? B extends T ? [B, A]
    : List
    : never
type Top3<T, List extends any[]> = List extends [infer A, infer B, infer C]
    ? C extends T ? [C, A, B] 
    : B extends T ? [B, A, C]
    : List
    : never
type Top4<T, List extends any[]> = List extends [infer A, infer B, infer C, infer D]
    ? D extends T ? [D, A, B, C]
    : C extends T ? [C, A, B, D]
    : B extends T ? [B, A, C, D]
    : List
    : never
type Top5<T, List extends any[]> = List extends [infer A, infer B, infer C, infer D, infer E]
    ? E extends T ? [E, A, B, C, D]
    : D extends T ? [D, A, B, C, E]
    : C extends T ? [C, A, B, D, E]
    : B extends T ? [B, A, C, D, E]
    : List
    : never
type Top6<T, List extends any[]> = List extends [infer A, infer B, infer C, infer D, infer E, infer F]
    ? F extends T ? [F, A, B, C, D, E]
    : E extends T ? [E, A, B, C, D, F]
    : D extends T ? [D, A, B, C, E, F]
    : C extends T ? [C, A, B, D, E, F]
    : B extends T ? [B, A, C, D, E, F]
    : List
    : never
type Top7<T, List extends any[]> = List extends [infer A, infer B, infer C, infer D, infer E, infer F, infer G]
    ? G extends T ? [G, A, B, C, D, E, F]
    : F extends T ? [F, A, B, C, D, E, G]
    : E extends T ? [E, A, B, C, D, F, G]
    : D extends T ? [D, A, B, C, E, F, G]
    : C extends T ? [C, A, B, D, E, F, G]
    : B extends T ? [B, A, C, D, E, F, G]
    : List
    : never
type Top8<T, List extends any[]> = List extends [infer A, infer B, infer C, infer D, infer E, infer F, infer G, infer H]
    ? H extends T ? [H, A, B, C, D, E, F, G]
    : G extends T ? [G, A, B, C, D, E, F, H]
    : F extends T ? [F, A, B, C, D, E, G, H]
    : E extends T ? [E, A, B, C, D, F, G, H]
    : D extends T ? [D, A, B, C, E, F, G, H]
    : C extends T ? [C, A, B, D, E, F, G, H]
    : B extends T ? [B, A, C, D, E, F, G, H]
    : List
    : never

/**
 * Top
 * 
 * Move the 1st element to the head of array if it extends type T
 */    
export type Top<T, Items extends any[]> = {
    0: Items
    1: Items
    2: Top2<T,Items>    
    3: Top3<T,Items>
    4: Top4<T,Items>
    5: Top5<T,Items>
    6: Top6<T,Items>
    7: Top7<T,Items>
    8: Top8<T,Items>
}[ Items['length'] extends 0|1|2|3|4|5|6|7|8 ? Items['length'] : never ]    

export type MapUnion<T, List extends any[]> = {
    0: []
    1: [ List[0]|T ]
    2: [ List[0]|T, List[1]|T ]
    3: [ List[0]|T, List[1]|T, List[2]|T ]
    4: [ List[0]|T, List[1]|T, List[2]|T, List[3]|T ]
    5: [ List[0]|T, List[1]|T, List[2]|T, List[3]|T, List[4]|T ]
    6: [ List[0]|T, List[1]|T, List[2]|T, List[3]|T, List[4]|T, List[5]|T ]
    7: [ List[0]|T, List[1]|T, List[2]|T, List[3]|T, List[4]|T, List[5]|T, List[6]|T ]
    8: [ List[0]|T, List[1]|T, List[2]|T, List[3]|T, List[4]|T, List[5]|T, List[6]|T, List[7]|T ]
}[ List['length'] extends 0|1|2|3|4|5|6|7|8  ? List['length'] : never ]




export type SelectToUnion<T, List extends any[]> = {
    1: (List[0] extends T ? List[0] : never)
    2: (List[0] extends T ? List[0] : never) | (List[1] extends T ? List[1] : never)
    3: (List[0] extends T ? List[0] : never) | (List[1] extends T ? List[1] : never) | (List[2] extends T ? List[2] : never)
    4: (List[0] extends T ? List[0] : never) | (List[1] extends T ? List[1] : never) | (List[2] extends T ? List[2] : never) | (List[3] extends T ? List[3] : never)
    5: (List[0] extends T ? List[0] : never) | (List[1] extends T ? List[1] : never) | (List[2] extends T ? List[2] : never) | (List[3] extends T ? List[3] : never) | (List[4] extends T ? List[4] : never)
    6: (List[0] extends T ? List[0] : never) | (List[1] extends T ? List[1] : never) | (List[2] extends T ? List[2] : never) | (List[3] extends T ? List[3] : never) | (List[4] extends T ? List[4] : never) | (List[5] extends T ? List[5] : never)
    7: (List[0] extends T ? List[0] : never) | (List[1] extends T ? List[1] : never) | (List[2] extends T ? List[2] : never) | (List[3] extends T ? List[3] : never) | (List[4] extends T ? List[4] : never) | (List[5] extends T ? List[5] : never) | (List[6] extends T ? List[6] : never)
    8: (List[0] extends T ? List[0] : never) | (List[1] extends T ? List[1] : never) | (List[2] extends T ? List[2] : never) | (List[3] extends T ? List[3] : never) | (List[4] extends T ? List[4] : never) | (List[5] extends T ? List[5] : never) | (List[6] extends T ? List[6] : never) | (List[7] extends T ? List[7] : never)
}[ List['length'] extends 1|2|3|4|5|6|7|8  ? List['length'] : never ]

export type ToIntersect<List extends any[]> = {
    1: List[0]    
    2: List[0] & List[1]
    3: List[0] & List[1] & List[2]
    4: List[0] & List[1] & List[2] & List[3]
    5: List[0] & List[1] & List[2] & List[3] & List[4]
    6: List[0] & List[1] & List[2] & List[3] & List[4] & List[5]
    7: List[0] & List[1] & List[2] & List[3] & List[4] & List[5] & List[6]
    8: List[0] & List[1] & List[2] & List[3] & List[4] & List[5] & List[6] & List[7]
}[ List['length'] extends 1|2|3|4|5|6|7|8  ? List['length'] : never ]