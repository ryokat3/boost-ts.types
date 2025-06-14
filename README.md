<!-- vim: set tabstop=4 expandtab shiftwidth=4 softtabstop=4: -->

# boost-ts.types

Collection of advanced Typescript types to boost type programming

<p align="center">
  <a href="https://github.com/ryokat3/boost-ts.types">
    <img src="https://github.com/ryokat3/boost-ts.types/actions/workflows/test.yml/badge.svg?branch=main" alt="test status" height="20">
  </a>
</p>

This collection mainly offers type operation for structured/complicated types, like tuple, union, object data type.
By using this collection, "as any" can be avoided for the complicated type of Typescript functions.

<!-- ------------------------------------------------------------------------ -->
## KeyPath

### Basic

Generate key path from data type

**Data Type**

```typescript
type Sprinter = {
    "name": string
    "best": {
        "100m": number
        "200m": number
    }
}
```

**Key Path**

```typescript
const target:KeyPath<Sprinter> = {
    "name": "Usain Bolt"
    "best.100m" : 9.58
    "best.200m" : 19.19
}
```

### Key path format

The format of key path is customizable.

```typescript
KeyPath<T, Sep, HeadingSep, ValueType>
```

- **T**: Data type
- **Sep**: Separator (string, default: ".")
- **HeadingSep**: Adding separtor at the head (boolean, default: false)
- **ValueType**: key path is generated for the specified value type (type, default: any)

### Directory path format

```typescript
const target:KeyPath<Sprinter, "/", true> = {
    "/name": "Usain Bolt"
    "/best/100m" : 9.58
    "/best/200m" : 19.19
}
```

### KeyArray

```typescript
const target:KeyArray<Sprinter> = {
    [ [ "name" ], "Usain Bolt" ],
    [ [ "best", "100m" ], 9.58 ],
    [ [ "best", "200m" ], 19.19 ]
]
```


<!-- ------------------------------------------------------------------------ -->
## Tuple

### Head

Get the head of type tuple.

```typescript
// type Target = Date
type Target = Head<[Date, string, number]>
```

### Tail

Remove a type from the head of type tuple.

```typescript
// type Target = [string, number]
type Target = Tail<[Date, string, number]>
```

### Push

Add a type to the head of type tuple.

```typescript
// type Target = [Date, string, number]
type Target = Push<Date, [string, number]>
```

### Reverse

Reverse the order of type tuple.

```typescript
// Target = [number, string, boolean]
type Target = Reverse<[boolean, string, number]>
```

### TupleOmit

Remove a type from type tuple.

```typescript
// Target = [boolean, number]
type Target = TupleOmit<string, [boolean, string, number]>
```

### TuplePick

Fileter a type from type tuple.

```typescript
// Target = [string, number]
type Target = TuplePick<string|number, [boolean, string, number]>
```

### Zip

Zip two type tuples.

```typescript
// Target = [ [1, boolean], [2, string, [3, number] ]
type Target = Zip<[1, 2, 3], [boolean, string, number]>
```

<!-- ------------------------------------------------------------------------ -->
## Number

### Decrease

Decrease a number type.

```typescript
// Target = 3
type Target = Decrease<4>
```

### Comp

Compare two number types.

```typescript
// Target1 = -1
type Target1 = Comp<1, 2>
// Target2 = 0
type Target2 = Comp<2, 2>
// Target3 = 1
type Target3 = Comp<2, 1>
```

------

- Some code of this library is based on [this stackoverflow article](https://stackoverflow.com/questions/54607400/typescript-remove-entries-from-tuple-type).
- Thanks to the blog [Suppress Error of type level programming of TypeScript](https://kgtkr.net/blog/2019/04/15/typescript-typelevelprogramming-error-suppression/en).
  This library will be nothing without workarounds suggested by this blog. [Japanese version](https://kgtkr.net/blog/2019/04/15/typescript-typelevelprogramming-error-suppression) is also published.
- [typepark](https://www.npmjs.com/package/typepark) is an excellent library that provides the large collection of typescript types manipulation.
- The code of `Equals` implementation is copied from [this comment](https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650)
- [How to break the limit of recursived type](https://susisu.hatenablog.com/entry/2020/09/12/214343) is a great article (written in Japanese).
