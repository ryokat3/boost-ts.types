import { Cast } from "./basic"
import { UnionHead } from "./union"
import { Push, Reverse } from "./tuple"


type GetOneKey<T> = T extends Record<string,unknown> ? Cast<UnionHead<keyof T>, keyof T & string> : never

type AddKeyPath<A, B, Sep extends string, HeadingSep extends boolean> = A extends string ? B extends string ? `${A}${Sep}${B}` : A : B extends string ? HeadingSep extends true ? `${Sep}${B}` : `${B}` : ""

export type KeyPath<T, Sep extends string = ".", HeadingSep extends boolean = true, ParentKey extends string|null = null> =
    T extends Record<string, unknown> ?
        // keyof {} = never
        keyof T extends never ?
            {} :
            KeyPath<T[GetOneKey<T>], Sep, HeadingSep, AddKeyPath<ParentKey, GetOneKey<T>, Sep, HeadingSep>> & KeyPath<Omit<T, GetOneKey<T>>, Sep, HeadingSep, ParentKey> :
        ParentKey extends string ?
            Record<ParentKey, T> :
            {}

export type KeyArray<T, ParentKey extends string[] = []> =
    GetOneKey<T> extends never ?
        ParentKey extends [] ?
            never :
            [ Reverse<ParentKey>, T ]:
    GetOneKey<Omit<T, GetOneKey<T>>> extends never ?
        KeyArray<T[GetOneKey<T>], Push<GetOneKey<T>, ParentKey>> :
        KeyArray<T[GetOneKey<T>], Push<GetOneKey<T>, ParentKey>> | KeyArray<Omit<T, GetOneKey<T>>, ParentKey>                    
