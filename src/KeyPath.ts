// import { Length  } from "./basic"
import { UnionHead } from "./union"
// import { Push, Reverse, Head, Tail } from "./tuple"

////////////////////////////////////////////////////////////////////////
// Common
////////////////////////////////////////////////////////////////////////

type GetOneKey<T> = T extends Record<string,unknown> ? Extract<UnionHead<keyof T>, keyof T & string> : never

type AddKeyPath<A, B, Sep extends string, HeadingSep extends boolean> = A extends string ? B extends string ? `${A}${Sep}${B}` : A : B extends string ? HeadingSep extends true ? `${Sep}${B}` : `${B}` : ""

export const _LEFT: unique symbol = Symbol("_LEFT")
export const _RIGHT: unique symbol = Symbol("_RIGHT")

////////////////////////////////////////////////////////////////////////
// KeyPath
////////////////////////////////////////////////////////////////////////

type KeyPathSub<T, Sep extends string = ".", HeadingSep extends boolean = true, ValueType = any, ParentKey extends string|null = null> =
    [T] extends [Record<string, unknown>] ?
        // keyof {} = never
        [ keyof T ] extends [ never ] ?         
            {} :
            {
                [_LEFT]: KeyPathSub<T[GetOneKey<T>], Sep, HeadingSep, ValueType, AddKeyPath<ParentKey, GetOneKey<T>, Sep, HeadingSep>>,
                [_RIGHT]: KeyPathSub<Omit<T, GetOneKey<T>>, Sep, HeadingSep, ValueType, ParentKey> 
            } :            
        ParentKey extends string ?
            [T] extends [ValueType] ?
                Record<ParentKey, T> :
                {} :
            {}

declare const UBXP: unique symbol
type UBXP = typeof UBXP

type KeyPathUnbox<T> =
    T extends {
        [_LEFT]: {
            [_LEFT]: infer LL,
            [_RIGHT]: infer LR
        },
        [_RIGHT]: {
            [_LEFT]: infer RL,
            [_RIGHT]: infer RR

        } 
    } ? { [Key in UBXP]: KeyPathUnbox<LL> & KeyPathUnbox<LR> & KeyPathUnbox<RL> & KeyPathUnbox<RR> }[UBXP] : 
    T extends {
        [_LEFT]: {
            [_LEFT]: infer LL,
            [_RIGHT]: infer LR
        },
        [_RIGHT]: infer R
    } ? { [Key in UBXP]: KeyPathUnbox<LL> & KeyPathUnbox<LR> & R }[UBXP] :    
    T extends {
        [_LEFT]: infer L,
        [_RIGHT]: {
            [_LEFT]: infer RL,
            [_RIGHT]: infer RR
        }        
    } ? { [Key in UBXP]: L & KeyPathUnbox<RL> & KeyPathUnbox<RR> }[UBXP] :    
    T extends {
        [_LEFT]: infer L,
        [_RIGHT]: infer R
    } ? { [Key in UBXP]: L & R }[UBXP] :    
    T

export type KeyPath<T, Sep extends string = ".", HeadingSep extends boolean = false, ValueType = any> = KeyPathUnbox<KeyPathSub<T,Sep,HeadingSep,ValueType>>

/*
export type KeyPath<T, Sep extends string = ".", HeadingSep extends boolean = false, ValueType = any, ParentKey extends string|null = null> =
    [T] extends [Record<string, unknown>] ?
        // keyof {} = never
        [ keyof T ] extends [ never ] ?         
            {} :
            KeyPath<T[GetOneKey<T>], Sep, HeadingSep, ValueType, AddKeyPath<ParentKey, GetOneKey<T>, Sep, HeadingSep>> & KeyPath<Omit<T, GetOneKey<T>>, Sep, HeadingSep, ValueType, ParentKey> :            
        ParentKey extends string ?
            [T] extends [ValueType] ?
                Record<ParentKey, T> :
                {} :
            {}
*/
////////////////////////////////////////////////////////////////////////
// KeyArray
////////////////////////////////////////////////////////////////////////

/*
export type KeyArray<T, SingleKeyUnarray extends boolean = false, ParentKey extends string[] = []> =
    [ GetOneKey<T> ] extends [ never ]?
        [ ParentKey ] extends [[]] ?
            never :
            [ Length<ParentKey> ] extends [ 1 ] ? [ SingleKeyUnarray ] extends [ true ] ? ParentKey[0] : Reverse<ParentKey> : Reverse<ParentKey> :
    [ GetOneKey<Omit<T, GetOneKey<T>>> ] extends [ never ] ?
        KeyArray<T[GetOneKey<T>], SingleKeyUnarray, Push<GetOneKey<T>, ParentKey>> :
        KeyArray<T[GetOneKey<T>], SingleKeyUnarray, Push<GetOneKey<T>, ParentKey>> | KeyArray<Omit<T, GetOneKey<T>>, SingleKeyUnarray, ParentKey>

export type KeyArrayApply<T, KA extends string[]|string> =
    [ KA ] extends [[]] ? T : [ KA ] extends [ string[] ] ? [ Head<KA> ] extends [ keyof T ] ? KeyArrayApply<T[Head<KA>], Tail<KA>> : never : [ KA ] extends [ keyof T & string ] ? T[KA] : never
*/