export type Cast<T,P> = T extends P ? T : never
export type Length<T extends any[]> = T['length']

export const BXP: unique symbol = Symbol("RecurseBoxProperty")

type UnboxSub<T> =
    T extends { [BXP]: never } ? never
  : T extends { [BXP]: { [BXP]: infer U } } ? { [BXP]: UnboxSub<U> }
  : T extends { [BXP]: infer U } ? U
  : T

declare const UBXP: unique symbol
type UBXP = typeof UBXP

export type Unbox<T> =
  T extends { [BXP]: unknown }
    ? { [Key in UBXP]: Unbox<UnboxSub<T>> }[UBXP]
    : T