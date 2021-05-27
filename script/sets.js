"use strict";
// ==================  SET =====================
// store(nested) data of any kind and length
// iterable, also many sp method are avil, not array's method diffrent methods for sets
// Order is not-guaranteed,duplicate item not-allowed, no index for accesss
// array.from(set) used for converting set into array

// =================== creating sets =====================
// var variable = new set()
// pass iterable in SET() constructure


// let newSet = new Set([1,2,3,4]); // 4 items/ entries, in sets item refer as entires
// console.log(newSet);

// let newSet = new Set({{...},{...},{...}}); // give us error it always new Set([...]);

// newSet = new Set([{name:'dhaval',surname:'vaishnav'}]); // just one entry i.e one object
// console.log(newSet);

// newSet = new Set([[1,2,3],['hii','there'],['dhaval',25]]); // 3 entries of diffrent kind of type value
// console.log(newSet);

// let newSet = new Set([{name:'dhaval',surname:'vaishnav'}, {name:'raj',surname:'rana'}, {name:'srb',surname:'rajput'}]); // just one entry i.e one object
// for (const entry of newSet) {
//     console.log(entry);
//     console.log(entry.name);
//     console.log(entry.surname);

// }

let newSet = new Set([1,2,3,4,5]); // just one entry i.e one object
// console.log('==== for (entry of newSet) =====');
// for (const entry of newSet) {
//     console.log(entry);
// }

// console.log('==== for (entry of newSet.entries()) =====');
// for (const entry of newSet.entries()) {
//     console.log(entry);
//     console.log(entry[0]);
// }

// console.log('==== for (entry of newSet.values()) =====');
// for (const entry of newSet.values()) {
//     console.log(entry);
// }

// console.log('==== add(value) & delete(value) new entry  =====');
// console.log(newSet.add(10),'newSet.add(10)');

// newSet.delete(10); // return true if delete or else false
// console.log(newSet,'newSet.delete(10)');

// console.log(' ==========  set.add(value) method used u can add any type of data=======');
// newSet.add(10);
newSet.add({name:'dhaval'});
// console.log(newSet);

// console.log(' ==========  set.has(value) method used =======');
// if(newSet.has(10)){
//     newSet.delete(10);
//     console.log(newSet);
// }

// newSet.delete(1);
// newSet.forEach((val,idx,sets) => {
//     console.log(val,'val');
//     console.log(idx,'index');
//     console.log(sets,'array');
// })