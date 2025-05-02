import * as chai from "chai"
import { IsAllTrue, Equals, NotEquals, None, Length, Cast, Last, Initial, Push, Append, ZipFind, IsUnion, UnionHead, UnionTail, UnionToTuple, KeyPath, KeyArray } from "../src/index"


describe("typelib", ()=>{

    it("Equals, NotEquals", ()=>{
        const result:IsAllTrue<[
            NotEquals<any, true>,
            NotEquals<true, unknown>,
            NotEquals<any, unknown>,
            NotEquals<any, never>,
            NotEquals<any, null>,            
            NotEquals<boolean, true>,            
            NotEquals<boolean, false>,            
            NotEquals<()=>any, ()=>null>,            
            NotEquals<(x:any)=>void, (x:null)=>unknown>,                        
            Equals<any, any>,            
            Equals<unknown, unknown>,            
            Equals<boolean, true|false>,
            Equals<any, any|string>
        ]> = true

        chai.assert.isTrue(result)        
    })
    it("IsAllTrue", ()=>{
        
        const result:IsAllTrue<[
            Equals<IsAllTrue<[true, true, true, true]>, true>,
            Equals<IsAllTrue<[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]>, true>,
            Equals<IsAllTrue<[]>, true>,
            Equals<IsAllTrue<[boolean]>, false>,
            Equals<IsAllTrue<[false, true, true]>, false>,
            Equals<IsAllTrue<[true, boolean, true]>, false>,
            Equals<IsAllTrue<[true, true, never]>, false>,
            Equals<IsAllTrue<[true, unknown, true]>, false>,
            Equals<IsAllTrue<[true, any, true]>, false>
        ]> = true

        chai.assert.isTrue(result)
    })
    it("Cast", ()=>{
        const result:IsAllTrue<[
            Equals<Cast<true, boolean>, true>,
            Equals<Cast<false, boolean>, false>,
            Equals<Cast<string, unknown>, string>,
            Equals<Cast<"key2", "key1"|"key2"|"key3">, "key2">,
            Equals<Cast<"key2", string>, "key2">,
            NotEquals<Cast<string, unknown>, number>
        ]> = true

        chai.assert.isTrue(result)
    })
    it("Length", ()=>{        
        
        const result:IsAllTrue<[
            Equals<Length<[number, boolean, string]>, 3>,
            Equals<Length<[]>, 0>            
        ]> = true
        
        chai.assert.isTrue(result)
    })
    it("Tail", ()=>{

        const result:IsAllTrue<[
            Equals<Last<[string, number]>, number>,
            Equals<Last<[string, number, "hello"]>, "hello">,
            Equals<Last<[]>, None>
        ]> = true

        chai.assert.isTrue(result)
    })
    it("Initial", ()=>{

        const result:IsAllTrue<[
            Equals<Initial<[string, number]>, [string]>,
            Equals<Initial<[string, "hello", number]>, [string, "hello"]>,
            Equals<Initial<[string]>, []>,
            Equals<Initial<[]>, []>,
        ]> = true

        chai.assert.isTrue(result)
    })
    it("Push", ()=>{

        const result:IsAllTrue<[
            Equals<Push<Date, [string, number]>, [Date, string, number]>,
            Equals<Push<Date, []>, [Date]>
        ]> = true

        chai.assert.isTrue(result)
    })
    it("Append", ()=>{

        const result:IsAllTrue<[
            Equals<Append<Date, [string, number]>, [string, number, Date]>,
            Equals<Append<Date, []>, [Date]>
        ]> = true

        chai.assert.isTrue(result)
    })
    it("ZipFind", ()=>{
        type Zp = [ ["key1", 1], ["key2", 2], ["key3", 3] ]

        const result:IsAllTrue<[
            Equals<ZipFind<"key1", Zp>, 1>,    
            Equals<ZipFind<"key2", Zp>, 2>,
            Equals<ZipFind<"key3", Zp>, 3>,
            Equals<ZipFind<"key4", Zp>, never>      
        ]> = true

        chai.assert.isTrue(result)
    })
    it("IsUnion", ()=>{        
        const result:IsAllTrue<[
            Equals<IsUnion<string|number>, true>,    
            Equals<IsUnion<string>, false>,    
            Equals<IsUnion<boolean, true>, false>,
            Equals<IsUnion<boolean, false>, true>
        ]> = true
        
        chai.assert.isTrue(result)
    }),
    it("UnionHead", ()=>{
        const result:IsAllTrue<[
            Equals<UnionHead<string|number, false>, number>,
            Equals<UnionHead<string, false>, string>,
            Equals<UnionHead<boolean, false>, true>,
            Equals<UnionHead<boolean, true>, boolean>            
        ]> = true
        
        chai.assert.isTrue(result)
    }),
    it("UnionTail", ()=>{
        const result:IsAllTrue<[
            Equals<UnionTail<string|number, false>, string>,
            Equals<UnionTail<string, false>, never>,
            Equals<UnionTail<boolean, false>, false>,
            Equals<UnionTail<boolean, true>, never>,
        ]> = true        

        chai.assert.isTrue(result)
    }) 
    it("UnionToTuple", ()=>{
        
        const result:IsAllTrue<[
            UnionToTuple<"key1"|"key2"> extends ["key1", "key2"]|["key2", "key1"] ? true : false,
            UnionToTuple<"key2"|"key1"> extends ["key1", "key2"]|["key2", "key1"] ? true : false,
            Equals<Length<UnionToTuple<"key1"|"key2"|"key3">>, 3>,
            Equals<UnionToTuple<"key1">, ["key1"]>,
            Equals<UnionToTuple<keyof {}>, []>,
            Equals<Length<UnionToTuple<string|boolean>>, 2>,        
            Equals<Length<UnionToTuple<string|boolean, false>>, 3>,
            Equals<Length<UnionToTuple<string|true, false>>, 2>,
            Equals<Length<UnionToTuple<string|true, true>>, 2>,
            Equals<Length<UnionToTuple<string|false, false>>, 2>,
            Equals<Length<UnionToTuple<string|false, true>>, 2>,
            Equals<UnionToTuple<boolean>, [ boolean ]>,
            Equals<Length<UnionToTuple<boolean, false>>, 2>
        ]> = true

        chai.assert.isTrue(result)
    })
    it("KeyPath", ()=>{
        interface IntfData { "key": Date }
        type AliasData = { "key": Date }

        type Target = { "key1": { "key2": string|number, "key3": number}, "key4": null, "intf-key":IntfData, "alias-key": AliasData}

        const result:IsAllTrue<[            
            Equals<KeyPath<Target>[".key1.key2"], string|number>,
            Equals<KeyPath<Target>[".key1.key3"], number>,
            Equals<KeyPath<Target>[".key4"], null>,
            Equals<KeyPath<Target, "/">["/key1/key2"], string|number>,
            Equals<KeyPath<Target, ".", false>["key1.key2"], string|number>,
            Equals<KeyPath<Target, ".", false>["key4"], null>,
            Equals<KeyPath<Target, ".", true>[".key4"], null>,
            ".intf-key" extends keyof KeyPath<Target> ? true : false,       
            ".intf-key.key" extends keyof KeyPath<Target> ? false : true,
            ".alias-key" extends keyof KeyPath<Target> ? false : true,
            ".alias-key.key" extends keyof KeyPath<Target> ? true : false,            
            Equals<Length<UnionToTuple<keyof KeyPath<Target>>>, 5>
        ]> = true
                
        chai.assert.isTrue(result)
    })
    it("KeyArray", ()=>{
        interface IntfData { "key": Date }
        type AliasData = { "key": Date }

        type Target = { "key1": { "key2": string|number, "key3": number}, "key4": null, "intf-key":IntfData, "alias-key": AliasData}
        type Result = KeyArray<Target>        
        
        const result:IsAllTrue<[            
            [ ["key1", "key2"], number|string ] extends Result ? true : false,            
            [ ["key1", "key3"], number ] extends Result ? true : false,
            [ ["key4" ], null ] extends Result ? true : false,
            [ ["intf-key" ], IntfData ] extends Result ? true : false,
            [ ["alias-key", "key" ], Date ] extends Result ? true : false,
            Equals<Length<UnionToTuple<Result>>, 5>      
        ]> = true
                
        chai.assert.isTrue(result)
    })
})