import { Length } from "./basic"
import { Head, Tail } from "./tuple"
/**
 * Equals
 * 
 * https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
 */
export type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false
export type NotEquals<X, Y> = Equals<X, Y> extends true ? false : true

/**
 * IsAllTrue
 */
export type IsAllTrue<List extends any[]> = Length<List> extends 0 ? true : Head<List> extends never ? false : Equals<Head<List>, any> extends true ? false : Head<List> extends true ? IsAllTrue<Tail<List>> : false
