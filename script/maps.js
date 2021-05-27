"use strict";
// ==================  Map =====================
// store(nested) key -value data of any kind and length any key and value allowed
// u can use array,obj as key as well
// iterable, also many sp method are avil, not array's method diffrent methods for maps
// Order is guaranteed,duplicate key not-allowed but maybe value same, key-based accesss
// array.from(map) used for converting maps into array

// ==================  creating Map ======================

const person1 = {name:'dhaval'};
const person2 = {name:'vipul'};

// let newMap = new Map({person1,person2}); // give us error it always new Map([...]);

// let newMap = new Map([person1,person2]); // it will execute as undifined must pass key-value
// console.log(newMap);

// let newMap = new Map([person1:'vaishnav',person2:'prajapati']); // it throw syntex error  for ':'
// console.log(newMap);

// let newMap = new Map([{person1:'vaishnav'},{person2:'prajapati'}]); // it will execute as undifined
// console.log(newMap);

// object as key and surname(single value type of string) as value
// let newMap = new Map([[person1,'vaishnav'],[person2,'prajapati']]); // correct way to declare map
// console.log(newMap);

// let newMap = new Map([[person1, {surname:'vaishanv'}],[person2,{surname : 'prajapati'}]]); // correct way to declare map
// console.log(newMap);

// =================== NOTE =================
// when map is create using object as key by default behaviour of object is reference type
// so in map key hold the reference of object or other words its store it address as key

// let newMap = new Map([[person1, {surname:'vaishanv'}],[person2,{surname : 'prajapati'}]]); // correct way to declare map
// console.log('==== before change object of key value check key of first entry ===========');
// console.log(newMap);
// console.log('==== after change object of key value check key of first entry ===========');
// person1.name = "Daksh";
// console.log(newMap);


//  =========    getting value using key  ===================

// let newMap = new Map([[person1, {surname:'vaishanv'}],[person2,{surname : 'prajapati'}]]); // correct way to declare map
// console.log(newMap.get(person1)); // as above said here it will take address of person1 and return only value portion

// for (const entry of newMap) { // for (const [key,value] of newMap) it is array destructuring syntex
//     console.log('=====  loop fare 6 =======');
//     console.log(entry);
// }


// for (const [key,value] of newMap) { // for (const [key,value] of newMap) it is array destructuring syntex
// console.log(key,'key');
// console.log(key.name,'key.name');
// console.log(value,'value');
// console.log(value.surname,'value.surnmae');
// }

// =====  NOTE ============
//  below example of it actually store address rather comparing value of it
// its give error
// newMap.set({name:'raj'},[{surname:'rana'},{age:29}]);
// console.log(newMap.get({name:'raj'}));
// console.log(newMap.has({name:'raj'}));

//  =========    setting or add value after creation of Map  ===================

let newMap = new Map([[person1, {surname:'vaishanv'}],[person2,{surname : 'prajapati'}]]); // correct way to declare map
let person3= {name:'raj'};
newMap.set(person3,[{surname:'rana'},{age:29}]);
// console.log(newMap);

// ===== or ==========
// newMap.set({name:'raj'},[{surname:'rana'},{age:29}]);
// both of below method of accessing is not worked
// console.log(newMap.get({name:'raj'}));
// console.log(newMap.has({name:'raj'}));

// let [,,key3] = newMap.keys();
// console.log(newMap.get(key3)); // return value of 3rd entry
// console.log(key3,newMap.get(key3)); // return value of 3rd entry

// for (const entry of newMap) {
//     console.log(entry);
// }

// for (const [key,value] of newMap) {
//     console.log(key,'key');
//     console.log(value,'value');
//     console.log(value.surname,'value');
// }
