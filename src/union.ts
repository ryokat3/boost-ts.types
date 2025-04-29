import { Cast, Length } from "./basic"
import { Tail } from "./tuple"
import { Equals } from "./test"

type Cofunc<T> = T extends any ? (x:T)=>void : never
type Extends<T> = [T] extends [(x:infer X)=>void] ? X : never

type _IsUnion<U> = [U] extends [Extends<Extends<Cofunc<Cofunc<U>>>>] ? false : true
// BINU: Boolean Is Not Union
export type IsUnion<U, BINU extends boolean = true> = Equals<U, boolean> extends true ? BINU extends true ? false: _IsUnion<U> : _IsUnion<U>

type _UnionHead<U> = Extends<Extends<Cofunc<Cofunc<U>>>>

export type UnionHead<U, BINU extends boolean = true> = BINU extends false ? _UnionHead<U> : boolean extends U ? _UnionHead<U> extends boolean ? boolean : _UnionHead<U> : _UnionHead<U>
export type UnionTail<U, BINU extends boolean = true> = Exclude<U, UnionHead<U, BINU>>

export type UnionToTuple<U, BINU extends boolean = true, Tpl extends unknown[] = []> =
    [U] extends [never] ? Tpl :
        IsUnion<U, BINU> extends true ? UnionToTuple<Exclude<U, UnionHead<U, BINU>>, BINU, [UnionHead<U, BINU>, ...Tpl]> : [U, ...Tpl]

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
