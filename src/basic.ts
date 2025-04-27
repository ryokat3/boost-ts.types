export type Cast<T,P> = T extends P ? T : never
export type Length<T extends any[]> = T['length']