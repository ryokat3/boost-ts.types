import { Cast } from "./basic"
import { UnionTail } from "./union"


type AddKeyPath<A, B> = A extends string ? B extends string ? `${A}.${B}` : A : B extends string ? `.${B}` : ""
type GetOneKey<T> = Cast<UnionTail<keyof T>, keyof T>

type KeyPathDataType<ValueType> = { [key:string]: ValueType|KeyPathDataType<ValueType> } 

export type KeyPath<T, ValueType = string|number|boolean|null, ParentKey extends string|null = null> =
    T extends KeyPathDataType<ValueType> ?
        keyof T extends never ?
            {} :
            KeyPath<T[GetOneKey<T>], ValueType, AddKeyPath<ParentKey, GetOneKey<T>>> & KeyPath<Omit<T, GetOneKey<T>>, ValueType, ParentKey> :
        ParentKey extends string ?
            Record<ParentKey, T> :
            {}