# boost-ts.types

TypeScript Type Library to boost functional programming

This library includes useful generic type functions working for TypeScript types (not value), e.g. push/pop/zip for type tuples.

<p align="center">
  <a href="https://github.com/ryokat3/boost-ts.types">
    <img src="https://github.com/ryokat3/boost-ts.types/actions/workflows/test.yml/badge.svg?branch=master" alt="test status" height="20">
  </a>
</p>


## Type Library

This library for Typescript types offers tuple and union type operation, like Push, Pop, Find, Select, Zip etc.

I hope we can avoid to add "as any" for the complicated type of Typescript functions with this library.
As design policy, recursive type definition is avoided as much as possible because it sometimes causes a compile error when initiating types.

### Push

Add a type to the head of type tuple.

```ts
import { Push } from "boost-ts/typelib"

type Target = Push<Date, [string, number]>
// type Target = [Date, string, number]
```

[Playground Link](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgBQK4GcAWcC+cBmUEIcARAEYQTowC0M6A9DAJ5gCmANsOaQFB9WHOABUAhlADm7eAF4UGTAB4AImJjsANHADaNKMAB2k7YdQhy7KAF0AfH0aM4Q9qInS5utRu36jJuDMLK2sgA)


### Pop

Remove a type from the head of type tuple.

```ts
import { Pop } from "boost-ts/typelib"

type Target = Pop<[Date, string, number]>
// type Target = [string, number]
```
[Playground Link](https://www.typescriptlang.org/play?ssl=4&ssc=34&pln=1&pc=1#code/JYWwDg9gTgLgBAbzgBQmOBfOAzKERwBEARhBAM4wC0M5A9DAJ5gCmANsMYQFDdOtwAKgEMoAcxbwAvCjQAeANoARYTBYAaOJSjAAdmM26AriGIsoAXQB83OnTj8WQ0ROlwF2vQbjHT5i0A)

### Head

Get the head of type tuple.

```ts
import { Head } from "boost-ts/typelib"

type Target = Head<[Date, string, number]>
// type Target = Date
```

[Playground Link](https://www.typescriptlang.org/play?ssl=4&ssc=22&pln=1&pc=1#code/JYWwDg9gTgLgBAbzgCQKYEMAmcC+cBmUEIcARAEYQQDOMAtDNQPQwCeYqANsOaQFB82HOABV0UAOap4AXhQZMAHgDaAEXQxUAGji0owAHYSdBgK4hyqKAF0AfHyZM4Q1KPFTZcdZqA)

### Reverse

Reverse the order of type tuple.

```ts
// Target = [number, string, boolean]
type Target = Reverse<[boolean, string, number]>
```

### Filter

Filter a type from type tuple (incl. recursive call)

```ts
// Target = [boolean, number]
type Target = Filter<string, [boolean, string, number]>
```

### Select

Select a type from type tuple (incl. recursive call)

```ts
// Target = [string, number]
type Target = Select<string|number, [boolean, string, number]>
```

### Zip

Zip two type tuples.

```ts
// Target = [ [1, boolean], [2, string, [3, number] ]
type Target = Zip<[1, 2, 3], [boolean, string, number]>
```

### SelectObject

Select properties from object type.

```ts
type Source = {
    str1: string,
    num1: number,
    bool1: boolean,
    str2: string,
    num2: number
    bool2: boolean
}

// Target = {
//    str1: string,
//    str2: string
// }

type Target = SelectObject<Source, string>
```

### FilterObject

Filter properties from object type.

```ts
type Source = {
    str1: string,
    num1: number,
    bool1: boolean,
    str2: string,
    num2: number
    bool2: boolean
}

// Target = {
//    num1: number,
//    num2: number,
//    bool1: boolean,
//    bool2: boolean
// }

type Target = FilterObject<Source, string>
```

### Decrease

Decrease a number type.

```ts
// Target = 3
type Target = Decrease<4>
```

### Comp

Compare two number types.

```ts
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
