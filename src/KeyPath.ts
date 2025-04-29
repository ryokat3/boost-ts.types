import { Cast } from "./basic"
import { UnionHead } from "./union"


type AddKeyPath<A, B, Sep extends string, HeadingSep extends boolean> = A extends string ? B extends string ? `${A}${Sep}${B}` : A : B extends string ? HeadingSep extends true ? `${Sep}${B}` : `${B}` : ""
type GetOneKey<T> = Cast<UnionHead<keyof T>, keyof T>

export type KeyPath<T, Sep extends string = ".", HeadingSep extends boolean = true, ParentKey extends string|null = null> =
    T extends Record<string, unknown> ?
        keyof T extends never ?
            {} :
            KeyPath<T[GetOneKey<T>], Sep, HeadingSep, AddKeyPath<ParentKey, GetOneKey<T>, Sep, HeadingSep>> & KeyPath<Omit<T, GetOneKey<T>>, Sep, HeadingSep, ParentKey> :
        ParentKey extends string ?
            Record<ParentKey, T> :
            {}