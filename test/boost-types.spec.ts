import * as chai from "chai"
import { IsAllTrue, Equals, NotEquals, None, Length, Cast, Last, Initial, UnionTail, UnionPop, UnionToTuple, KeyPath } from "../src/index"


describe("typelib", ()=>{

    it("Equals, NotEquals", ()=>{
        const result:IsAllTrue<[
            NotEquals<any, true>,
            NotEquals<true, unknown>,
            NotEquals<any, unknown>,
            NotEquals<any, never>,
            NotEquals<any, null>,            
            NotEquals<()=>any, ()=>null>,            
            NotEquals<(x:any)=>void, (x:null)=>unknown>,                        
            Equals<any, any>,            
            Equals<unknown, unknown>,            
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
    it("Unshift", ()=>{

        const result:IsAllTrue<[
            Equals<Initial<[string, number]>, [string]>,
            Equals<Initial<[string, "hello", number]>, [string, "hello"]>,
            Equals<Initial<[string]>, []>,
            Equals<Initial<[]>, []>,
        ]> = true

        chai.assert.isTrue(result)
    })
    it("TailUnion", ()=>{
        const result:IsAllTrue<[
            Equals<UnionTail<string|number>, number>,
            Equals<UnionTail<string>, string>,
            Equals<UnionTail<boolean>, true>            
        ]> = true
        
        chai.assert.isTrue(result)
    }),
    it("UnionPop", ()=>{
        const result:IsAllTrue<[
            Equals<UnionPop<string|number>, string>,
            Equals<UnionPop<string>, never>,
            Equals<UnionPop<boolean>, false>,            
        ]> = true        

        chai.assert.isTrue(result)
    }) 
    it("UnionToTuple", ()=>{
        const result:IsAllTrue<[
            UnionToTuple<"key1"|"key2"> extends ["key1", "key2"]|["key2", "key1"] ? true : false,
            UnionToTuple<"key2"|"key1"> extends ["key1", "key2"]|["key2", "key1"] ? true : false,
            Equals<Length<UnionToTuple<"key1"|"key2"|"key3">>, 3>,
            Equals<UnionToTuple<"key1">, ["key1"]>,
            Equals<UnionToTuple<keyof {}>, []>
        ]> = true

        chai.assert.isTrue(result)
    })
    it("KeyPath", ()=>{
        type Target = { "key1": { "key2": string|number, "key3": number}, "key4": null}

        const result:IsAllTrue<[            
            Equals<KeyPath<Target>[".key1.key2"], string|number>,
            Equals<KeyPath<Target>[".key1.key3"], number>,
            Equals<KeyPath<Target>[".key4"], null>,
            Equals<Length<UnionToTuple<keyof KeyPath<Target>>>, 3>
        ]> = true
                
        chai.assert.isTrue(result)
    })
})