import * as chai from "chai"
//import { IsAllTrue, Equals, NotEquals, None, Length, Cast, Last, Initial, Push, Reverse, Append, Plus, TupleToUnion, ZipFind,
//    IsUnion, UnionHead, UnionTail, UnionToTuple, NumberToTuple, KeyPath, KeyArray, KeyArrayApply} from "../src/index"

import { Cast, Length, } from "../src/basic"
import { At, Head, Tail, Last, Initial, Push, Append, Plus, Reverse, TupleOmit, TuplePick, TupleFind, TupleZip, TupleUnzip, ZipFind, TupleToUnion } from "../src/tuple"
import { KeyPath, KeyArray, KeyArrayApply } from "../src/KeyPath"
import { IsUnion, UnionHead, UnionTail, UnionToTuple } from "../src/union"
import { None } from "../src/None"
import { Decrease, Comp, NumberToTuple } from "../src/number"
import { Equals, NotEquals, IsAllTrue } from "../src/test"

describe("boost-ts.types", ()=>{

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
    it("Reverse", ()=>{

        const result:IsAllTrue<[
            Equals<Reverse<[Date, string, number, "hello"]>, ["hello", number, string, Date]>            
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
    it("Plus", ()=>{

        const result:IsAllTrue<[
            Equals<Plus<[string], [number]>, [number, string]>
            
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
    it("TupleToUnion", ()=>{
        
        const result:IsAllTrue<[
            Equals<TupleToUnion<[ "key1", "key2", "key3" ]>, "key1"|"key2"|"key3">,                                        
            Equals<TupleToUnion<[ "key1", "key1", "key3" ]>, "key1"|"key3">,                                        
            Equals<TupleToUnion<[ string, number, Date ]>, string|number|Date>,                                        
            Equals<TupleToUnion<[ string, number, never ]>, string|number>,                                        
            Equals<TupleToUnion<[ string  ]>, string>,                                        
            Equals<TupleToUnion<[ ]>, never>,                                        
        ]> = true

        chai.assert.isTrue(result)
    })
    it("IsUnion", ()=>{        
        const result:IsAllTrue<[
            Equals<IsUnion<string|number>, true>,    
            Equals<IsUnion<string>, false>,    
            Equals<IsUnion<boolean>, false>,
            Equals<IsUnion<true|false>, false> // treat 'true|false' as 'boolean'            
        ]> = true
        
        chai.assert.isTrue(result)
    }),
    it("UnionHead", ()=>{
        const result:IsAllTrue<[
            NotEquals<UnionHead<string|number>, string|number>,
            NotEquals<UnionHead<boolean>, true>,
            NotEquals<UnionHead<boolean>, false>,
            Equals<UnionHead<string>, string>,            
            Equals<UnionHead<boolean>, boolean>            
        ]> = true
        
        chai.assert.isTrue(result)
    }),
    it("UnionTail", ()=>{
        const result:IsAllTrue<[
            NotEquals<UnionTail<string|number>, string|number>,
            Equals<UnionTail<string>, never>,            
            Equals<UnionTail<boolean>, never>,
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
            Equals<Length<UnionToTuple<string|true>>, 2>,
            Equals<Length<UnionToTuple<string|false>>, 2>,
            Equals<Length<UnionToTuple<string|true|false>>, 2>,            
            Equals<Length<UnionToTuple<string|false>>, 2>,
            Equals<UnionToTuple<boolean>, [ boolean ]>,
            Equals<Length<UnionToTuple<boolean>>, 1>
        ]> = true

        chai.assert.isTrue(result)
    })        
    describe("KeyPath", ()=>{
        it("Small Object", () => {
            interface IntfData { "key": Date }
            type AliasData = { "key": Date }

            type Target = { "key1": { "key2": string | number, "key3": number }, "key4": null, "intf-key": IntfData, "alias-key": AliasData }
            type TargetKeyPath = KeyPath<Target>

            const result: IsAllTrue<[
                Equals<TargetKeyPath["key1.key2"], string | number>,
                Equals<TargetKeyPath["key1.key3"], number>,
                Equals<TargetKeyPath["key4"], null>,
                Equals<KeyPath<Target, "/", true>["/key1/key2"], string | number>,
                Equals<KeyPath<Target, ".", false>["key1.key2"], string | number>,
                Equals<KeyPath<Target, ".", false>["key4"], null>,
                Equals<KeyPath<Target, ".", true>[".key4"], null>,
                "intf-key" extends keyof TargetKeyPath ? true : false,
                "intf-key.key" extends keyof TargetKeyPath ? false : true,
                "alias-key" extends keyof TargetKeyPath ? false : true,
                "alias-key.key" extends keyof TargetKeyPath ? true : false,
                Equals<Length<UnionToTuple<keyof TargetKeyPath>>, 5>,                
            ]> = true

            chai.assert.isTrue(result)
        }),        
        it("Large Object", ()=>{
            type Target = {
                "key1": {
                    "key2": {
                        "key3": {
                            "key4": {
                                "key5": {
                                    "key6": {
                                        "key7": {
                                            "key8" : {
                                                "key9" : {
                                                    "key10": string,
                                                    "key11": number
                                                },
                                                "key12" : Date
                                            },
                                            "key13": {
                                                "key14": string,
                                                "key15": number
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }            
            type TargetKeyPath = KeyPath<Target>
        
            const result: IsAllTrue<[
                Equals<TargetKeyPath["key1.key2.key3.key4.key5.key6.key7.key8.key9.key10"], string>,
                Equals<TargetKeyPath["key1.key2.key3.key4.key5.key6.key7.key8.key9.key11"], number>,
                Equals<TargetKeyPath["key1.key2.key3.key4.key5.key6.key7.key8.key12"], Date>,
                Equals<TargetKeyPath["key1.key2.key3.key4.key5.key6.key7.key13.key14"], string>,
                Equals<TargetKeyPath["key1.key2.key3.key4.key5.key6.key7.key13.key15"], number>,                
            ]> = true

            chai.assert.isTrue(result)
        })
    })        
    it("KeyArray", ()=>{
        interface IntfData { "key": Date }
        type AliasData = { "key": Date }

        type Target = { "key1": { "key2": string|number, "key3": number}, "key4": null, "intf-key":IntfData, "alias-key": AliasData}        
        
        const result:IsAllTrue<[
            KeyArray<Target> extends string[] ? true : false,
            Equals<KeyArray<Target>, ["key1", "key2"] | ["key1", "key3"] | ["key4" ] | ["intf-key" ] | ["alias-key", "key" ]>,
            Equals<KeyArray<Target, true>, ["key1", "key2"] | ["key1", "key3"] | "key4" | "intf-key" | ["alias-key", "key" ]>            
        ]> = true
                
        chai.assert.isTrue(result)
    })
    it("KeyArrayApply", ()=>{
        interface IntfData { "key": Date }
        type AliasData = { "key": Date }

        type Target = { "key1": { "key2": string|number, "key3": number}, "key4": null, "intf-key":IntfData, "alias-key": AliasData}        
        
        const result:IsAllTrue<[
            Equals<KeyArrayApply<Target, ["key1", "key2"]>, string|number>,
            Equals<KeyArrayApply<Target, ["key1", "key3"]>, number>,
            Equals<KeyArrayApply<Target, ["key4"]>, null>,
            Equals<KeyArrayApply<Target, "key4">, null>,
            Equals<KeyArrayApply<Target, ["intf-key"]>, IntfData>,
            Equals<KeyArrayApply<Target, "intf-key">, IntfData>,
            Equals<KeyArrayApply<Target, ["alias-key", "key"]>, Date>,
        ]> = true
                
        chai.assert.isTrue(result)
    })

    it("NumberToTuple", function () {
        const result:IsAllTrue<[
            Equals<NumberToTuple<2, number>['length'], 2>,
/* Consuming CPU Too Much...                
            Equals<NumberToTuple<50, number>['length'], 50>,
            Equals<NumberToTuple<100, number>['length'], 100>,
            Equals<NumberToTuple<500, number>['length'], 500>,
            Equals<NumberToTuple<1000, number>['length'], 1000>,
*/                
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
})