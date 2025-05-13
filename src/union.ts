import { Cast, Length } from "./basic"
import { Tail } from "./tuple"

type Cofunc<T> = T extends any ? (x:T)=>void : never
type Extends<T> = [T] extends [(x:infer X)=>void] ? X : never

export type UnionHead<U> = Extends<Extends<[ Cofunc<Cofunc<boolean>> ] extends [ Cofunc<Cofunc<U>> ] ? Exclude<Cofunc<Cofunc<U>>, Cofunc<Cofunc<boolean>>>|((x:(x:boolean)=>void)=>void) : Cofunc<Cofunc<U>>>>
export type UnionTail<U> = Exclude<U, UnionHead<U>>

export type IsUnion<U> = [U] extends [ UnionHead<U> ] ? false : true

export type UnionToTuple<U, Tpl extends unknown[] = []> =
    [U] extends [never] ? Tpl :
        [ IsUnion<U> ] extends [ true ] ? UnionToTuple<Exclude<U, UnionHead<U>>, [UnionHead<U>, ...Tpl]> : [U, ...Tpl]

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
