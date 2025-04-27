import { Cast, Length } from "./basic"
import { Tail } from "./tuple"

type Cofunc<T> = T extends any ? (x:T)=>void : never
type Extends<T> = [T] extends [(x:infer X)=>void] ? X : never
export type UnionTail<U> = Extends<Extends<Cofunc<Cofunc<U>>>>
export type UnionPop<U> = Exclude<U, UnionTail<U>>
type IsUnion<U> = [U] extends [Extends<Cofunc<Cofunc<U>>>] ? false : true

export type UnionToTuple<U, List extends unknown[] = []> =
    [U] extends [never] ? List :
        IsUnion<U> extends true ? UnionToTuple<Exclude<U, UnionTail<U>>, [UnionTail<U>, ...List]> : [U, ...List]

export type ObjectToEntries<T, Keys extends (keyof T)[] = [never], Entries extends unknown[] = []> = 
    Keys extends [never] ? ObjectToEntries<T, Cast<UnionToTuple<keyof T>, (keyof T)[]>, Entries> :
        Length<Keys> extends 0 ? Entries :
            ObjectToEntries<T, Tail<Keys>, [[Keys[0], T[Keys[0]]], ...Entries]>

export type EntriesToObject<E extends [string|number|symbol, unknown][], T = {}> = 
    Length<E> extends 0 ? T : EntriesToObject<Tail<E>, Record<E[0][0], E[0][1]> & T>

export type PickValueType<E extends [string|number|symbol, unknown][], V, Picked extends [string|number|symbol, unknown][] = []> =
    Length<E> extends 0 ? Picked : E[0][1] extends V ? PickValueType<Tail<E>, V, [E[0], ...Picked]> : PickValueType<Tail<E>, V, Picked>

export type OmitValueType<E extends [string|number|symbol, unknown][], V, Picked extends [string|number|symbol, unknown][] = []> =
    Length<E> extends 0 ? Picked : E[0][1] extends V ? OmitValueType<Tail<E>, V, Picked> : OmitValueType<Tail<E>, V, [E[0], ...Picked]>
