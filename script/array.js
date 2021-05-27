"use strict";
// ==================  ARRAY =====================
// store(nested) data of any kind and length
// iterable, also many sp method are avil
// Order is guaranteed,duplicate item allowed, zero based indexing for accesss


const targetElement = document.getElementById("myTable");
let rowId = 0;

function setNewRow(title) {
	const newRow = document.createElement("tr");
	newRow.insertCell().innerHTML = `<b>${title}</b>`;
	newRow.cells[0].colSpan = 5;
	newRow.cells[0].className = "text-center";
	targetElement.insertAdjacentElement("beforeend", newRow);
}

function setOutput(question, operation, expectedArr = [], resultArr = []) {
	const newRow = document.createElement("tr");

	newRow.id = "row" + ++rowId;
	newRow.insertCell().innerHTML = rowId;
	newRow.insertCell().innerHTML = question ? question : "empty";
	newRow.insertCell().innerHTML = operation;
	newRow.insertCell().innerHTML = `[ ${expectedArr} ]`;
	newRow.insertCell().innerHTML = `[ ${resultArr} ]`;
	targetElement.insertAdjacentElement("beforeend", newRow);

	if (JSON.stringify(expectedArr) == JSON.stringify(resultArr)) {
		newRow.cells[4].className = "text-success";
	} else {
		newRow.cells[4].className = "text-danger";
	}
	// targetElement.appendChild(newRow);
	// appendChild render the whole element again whereas insertAdjacentElement just append new element rather re-rendering element
}

// =============================== CREATING ARRAY ==========================================
{
	//     // Number Array
	//     let oldArr = [1,2,3,4,5];
	//     let expectedArr = Array(1,2,3,4,5);
	//     let resultArr = new Array(1,2,3,4,5);
	//     let numArr = Array(5); // empty array with 5 element
	//     let numArrOf1 = Array.of(5);
	//     let numArrOf2 = Array.of(5,2);
	//     let numArr3 = Array.from(5);
	//     // console.log("====== Number array =========");
	//     // console.log(oldArr,"result of [1,2,3,4,5]");
	//     // console.log(expectedArr,"result of Array(1,2,3,4,5)");
	//     // console.log(resultArr,"result of = new Array(1,2,3,4,5)");
	//     // console.log(numArr ,"result of Array(5)");
	//     // console.log(numArrOf1,"result of Array.of(5)");
	//     // console.log(numArrOf2,"result of Array.of(5,2)");
	//     // console.log(numArr3,"result of Array.from()");
	//     // string Array
	//     let strArr = ['hello','world'];
	//     let strArr2 = Array('hello','world');
	//     let strArr3 = new Array('hello','world');
	//     let strArr4 = Array.of('hello','world');
	//     // console.log("====== String array =========");
	//     // console.log(strArr,"result of ['hello','world']");
	//     // console.log(strArr2,"result of Array('hello','world') ");
	//     // console.log(strArr3,"result of new Array('hello','world')");
	//     // console.log(strArr4,"result of  Array.of('hello','world')");
	//     // likewise we can also create mixed type of array
}

// =======================  general method of array  ==============================
{
	//     let arr = [];
	//     // add string element
	//     // arr.push('new Element'); return count of array length with the element that we added
	//     arr.push('daksh');
	//     console.log(arr,'result of arr.push()');
	//     // add Number element
	//     // arr.push(522); return count of array length with the element that we added
	//     console.log(arr.push(24),'return while push');
	//     console.log(arr,'result of arr.push(24)');
	//     // arr.unshift('argument'); add element at first
	//     arr.unshift('vaishnav');
	//     console.log(arr,'result of arr.unshift(vaishnav)');
	//     // arr.pop(); return last element or remove the last element
	//     console.log(arr.pop());
	//     console.log(arr,'result of arr.pop()');
	//     arr.unshift('ruff');
	//     console.log(arr,'result of arr.unshift(ruff)');
	//     // arr.shift(); remove element from starting
	//     console.log(arr.shift());
	//     console.log(arr,'result of arr.shift()');
}

// ================ splice method  =================
{
	// Array.splice(startIndex, deleteCount?, ...newElement?)
	// newElement is define with spread operator so it will convert into array
	// splice return the removed element
	setNewRow("Splice() method , Actuall Array : [110, 250, 360, 425, 550]");
	// add element at starting using  splice
	{
		let expectedArr = ["new element", 110, 250, 360, 425, 550];
		let resultArr = [110, 250, 360, 425, 550];

		resultArr.splice(0, 0, "new element"); // starting index is 0, delete element count is 0(so nothing to be delete), and adding str 'new element'
		setOutput(
			"Add ele at first ",
			'splice(0, 0, "new element")',
			expectedArr,
			resultArr
		); // true
	}

	// add element at end using  splice
	{
		let expectedArr = [110, 250, 360, 425, 55, "ending"];
		let resultArr = [110, 250, 360, 425, 55];

		resultArr.splice(resultArr.length, 0, "ending"); // starting index is last idx, delete element count is 0(so nothing to be delete), and adding str 'ending'
		setOutput(
			"Add element at end ",
			'splice(arr.length, 0, "ending")',
			expectedArr,
			resultArr
		); // true
	}

	// add element at specified index using  splice
	{
		let expectedArr = [110, "index", 250, 360, 425, 55];
		let resultArr = [110, 250, 360, 425, 55];

		resultArr.splice(1, 0, "index"); // starting index is last idx, delete element count is 0(so nothing to be delete), and adding str 'ending'
		setOutput(
			"Add element at specified index ",
			'splice(1, 0, "index")',
			expectedArr,
			resultArr
		); // true
	}

	// remove element at specified index using  splice
	{
		let expectedArr = [110, 360, 425, 55];
		let resultArr = [110, 250, 360, 425, 55];

		resultArr.splice(1, 1); // starting index is 1, delete element count is 1(so remove only one element ), adding element is not define so nothing to add
		setOutput(
			"remove element at specified index ",
			"splice(1, 1)",
			expectedArr,
			resultArr
		); // true
	}

	// remove multiple element at specified index using  splice
	{
		let expectedArr = [110, 250, 55];
		let resultArr = [110, 250, 360, 425, 55];

		resultArr.splice(2, 2); // starting index is 2, delete element count is 2(so remove only two element i.e. 360,425), adding element is not define so nothing to add
		setOutput(
			"remove multiple element ",
			"splice(2, 2)",
			expectedArr,
			resultArr
		); // true
	}

	// remove multiple element at specified index and add one new element at that location using  splice
	{
		let expectedArr = [110, 250, "element", 55];
		let resultArr = [110, 250, 360, 425, 55];

		resultArr.splice(2, 2, "element"); // starting index is 2, delete element count is 2(so remove only two element i.e. 360,425), adding element 'element'
		setOutput(
			"remove multiple element and add ele ",
			'splice(2, 2, "element")',
			expectedArr,
			resultArr
		); // true
	}

	// remove all element using  splice
	{
		let expectedArr = [];
		let resultArr = [110, 250, 360, 425, 55];

		resultArr.splice(0); // starting index is 0, delete element count is not specified( so it will take arr.length), adding element is nothing
		setOutput("remove all ele", "splice(0)", expectedArr, resultArr); // true
	}

	// remove all element except untill specified index  using  splice
	{
		let expectedArr = [110, 250];
		let resultArr = [110, 250, 360, 425, 55];

		resultArr.splice(2); // starting index is 2, delete element count is not specified(so start from 2nd element to arr.length), adding element is nothing
		setOutput(
			"remove all element except untill specified ele idx ",
			"splice(2)",
			expectedArr,
			resultArr
		); // true
	}

	// getting remove element
	{
		let expectedArr = [360, 425, 55];
		let resultArr = [110, 250, 360, 425, 55];

		resultArr = resultArr.splice(2); // starting index is 2, delete element count is not specified(so start from 2nd element to arr.length), adding element is nothing
		setOutput(
			"getting remove element",
			"resultArr = resultArr.splice(2)",
			expectedArr,
			resultArr
		); // true
	}

	// accessing negative index
	{
		let expectedArr = [110, 250, 360, 55];
		let resultArr = [110, 250, 360, 425, 55];

		resultArr.splice(-2, 1); // starting index is -2(so last to second element), delete element count is 1 (so remove 424), adding element is nothing
		setOutput(
			"accessing negative index",
			"resultArr.splice(-2, 1)",
			expectedArr,
			resultArr
		); // true
	}

	// accessing negative index and remove last 2 element
	{
		let expectedArr = [110, 250, 360];
		let resultArr = [110, 250, 360, 425, 55];

		resultArr.splice(-2); // starting index is -2(so last to second element), delete element count is 1 (so remove 424), adding element is nothing
		setOutput(
			"accessing negative index and remove last 2 element",
			"resultArr.splice(-2)",
			expectedArr,
			resultArr
		); // true
	}

	// accessing negative index and remove element and add new(replace)
	{
		let expectedArr = [110, 250, 360, "replace", 55];
		let resultArr = [110, 250, 360, 425, 55];

		resultArr.splice(-2, 1, "replace"); // starting index is -2(so last to second element), delete element count is 1 (so remove 424), adding element is nothing
		setOutput(
			"accessing negative index and remove ele and add (replace)",
			'splice(-2,1,"replace")',
			expectedArr,
			resultArr
		); // true
	}
}

// ================= slice method ========================
{
	// slice(start?,end?) return number[]
	setNewRow("Slice() method , Actuall Array : [110, 250, 360, 425, 550]");

	// cpoying whole array into new variable of array
	{
		let expectedArr = [110, 250, 360, 425, 550];
		let resultArr = [110, 250, 360, 425, 550];

		resultArr = expectedArr.slice();
		setOutput("copying array", "result = arr.slice();", expectedArr, resultArr); // true
	}

	// cpoying specified length array into new variable of array
	{
		let expectedArr = [250, 360, 425];
		let resultArr = [110, 250, 360, 425, 550];

		resultArr = resultArr.slice(1, 4);
		// i.e. strat from index 1(element 2) go throgh utill 4th index but no include 4th one element
		setOutput(
			"copying array",
			"result = arr.slice(1,4)",
			expectedArr,
			resultArr
		); // true
	}

	// accessing negative index
	{
		let expectedArr = [360, 425];
		let resultArr = [110, 250, 360, 425, 550];

		resultArr = resultArr.slice(-3, -1);
		// can't use like slice(-1,-3)
		// i.e. strat from last 3rd index to last one except last
		setOutput(
			"accessing negative index",
			"result = arr.slice(-3,-1)",
			expectedArr,
			resultArr
		); // true
	}

	// accessing negative index
	{
		let expectedArr = [360, 425, 550];
		let resultArr = [110, 250, 360, 425, 550];

		resultArr = resultArr.slice(-3);
		// i.e. strat from last 3rd index to last one inculding last one also
		setOutput(
			"accessing negative index",
			"result = arr.slice(-3)",
			expectedArr,
			resultArr
		); // true
	}
}

// ================  concat() array ==========================
{
	setNewRow("concat array , Actuall Array : [110, 250, 360, 425, 550]");

	{
		let expectedArr = [110, 95, 36, 58, 10, 20, 30];
		let arr = [110, 95, 36, 58];
		let resultArr = arr.concat([10, 20, 30]);
		setOutput(
			"Concat array",
			"result = arr.concat([10,20,30])",
			expectedArr,
			resultArr
		);
	}

	{
		let expectedArr = [110, 95, 36, 58, 10, 20, 30];
		let arr = [110, 95, 36, 58];
		arr.push([10, 20, 30]);
		// console.log(expectedArr);
		// console.log(arr);
		// using push its add nestaed array instead of appending all element
		setOutput("Concat array", "result.push([10,20,30])", expectedArr, arr);
	}
}

// ============== indexOf(), includes() methnod ===========================
{
	// indexOf() return  index if finds otherwise return -1
	// includes return true if finds else return false
	let arr = [10, 10.25, 66, 95, 58.3, 258.225698, 22];

	// console.log(arr.indexOf(58.3));
	// console.log(arr.includes(58.3));

	// console.log(arr.indexOf(258.225)); // return -1 , matches whole number
	// console.log(arr.includes(258.225)); // return false , matches whole number

	// console.log(arr.indexOf(258.225698));
	// console.log(arr.includes(258.225698));

	const persondata = [
		{
			name: "dhaval",
		},
		{
			name: "raj",
		},
		{
			name: "allie",
		},
		{
			name: "cassendra",
		},
	];

	// console.log(persondata.indexOf({name:'raj'})); // don't work, return -1
	// console.log(persondata.includes({name:'raj'})); // don't work, return false
}

// ================  find() method for finding object in array ============================
{
	// arr[ {...},{...} ]
	// arr.find(callbackFun(singleObjectOfArray, IndexOfPreviousObject, CollectionOfObjectOfArray)); return true

	const persondata = [
		{
			name: "dhaval",
		},
		{
			name: "raj",
		},
		{
			name: "allie",
		},
		{
			name: "cassendra",
		},
	];

	// find don't create copy  so it will return address of perticular object/item of array based on logic.
	let result = persondata.find((person, index, persons) => {
		return person.name === "dhaval";
		// above code return the object reference of the object which have dhaval as name prop value

		// return index === 2;
		// above code return the object reference of the object which have index value is 2

		// if(index > 2) {
		// 	return person;
		// }
	});
	// console.log(result);

	// findIndex implimenatation is same as find but it will retrun the index instead of object or item of array
	result = persondata.findIndex((person, index, persons) => {
		return person.name === "allie";
		// above code return the object reference of the object which have dhaval as name prop value

		// return index === 2;
		// above code return the object reference of the object which have index value is 2

		// if(index > 2) {
		// 	return person;
		// }
	});
	// console.log(result);
}

// ================  foreach() method alternative of FOR loop ============================
{
	// arr.foreach(callbackFun(value/item of array,indexOfItem,fullArray(i.e. actull our array i.e. arr in this example))) used when index is needed
	// the argumant of callback function is passed by JS Engine for us, i.e. value/item, index, and fullArray(i.e. on whome we are itarating (arr))
	// simplify arr.forEach( arr[i], i = index, arr ) => {...}
	const persondata = [
		{
			name: "dhaval",
		},
		{
			name: "raj",
		},
		{
			name: "allie",
		},
		{
			name: "cassendra",
		},
	];

	let newArr = [];
	// let idx = 0;
	// for (const item of persondata){
	// 	if(idx < persondata.length-1){
	// 		newArr.push({index:idx,name:item.name,nmLen:item.name.length,nextObject:persondata.slice(idx + 1,idx + 2)});
	// 	}else{
	// 		newArr.push({index:idx,name:item.name,nmLen:item.name.length,nextObject:'empty'});
	// 	}
	// 	idx++;
	// }
	// console.log(newArr);

	// ===========================     same operation with ForEach() =======================

	newArr = [];
	persondata.forEach((person, idx, persons) => {
		if (idx < persons.length - 1) {
			newArr.push({
				index: idx,
				name: person.name,
				nmLen: person.name.length,
				nextObject: persons.slice(++idx, ++idx),
			});
		} else {
			newArr.push({
				index: idx,
				name: person.name,
				nmLen: person.name.length,
				nextObject: "empty",
			});
		}
	});
	// console.log(newArr);
}

// ================= map() alternative of ForEach()+Push()===================
{
	// map is combination of arr.forEach() + push()
	// callback function is same as forEach()
	// it return whole new array i.e. push
	// it return each time a item which itarate at the same time and we can transform it like we did in forEach()

	const persondata = [
		{
			name: "dhaval",
		},
		{
			name: "raj",
		},
		{
			name: "allie",
		},
		{
			name: "cassendra",
		},
	];

	let newArr = persondata.map((person, idx, persons) => {
		if (idx < persons.length - 1) {
			return {
				index: idx,
				name: person.name,
				nmLen: person.name.length,
				nextObject: persons.slice(++idx, ++idx),
			};
		} else {
			return {
				index: idx,
				name: person.name,
				nmLen: person.name.length,
				nextObject: "empty",
			};
		}
	});
	// console.log(newArr);
}

// =================== sort()ing and reverse()ing array ============================
{
	// let arr = [10.25,5.66,3.26,5.22,5.22,3.26,9.00,8.5,7,6.5];
	// let sortedArr = arr.sort();
	// // it will sorted in string format which means '10 > 3' instead '1 > 3' here 1 is part of 10.25
	// // so output is 10.25, 3.26, 5.22, 5.66, 6.5, 7, 8.5, 9
	// console.log(sortedArr);
	// sortedArr = arr.sort(
	// 	(a,b) => {
	// 		return a > b ? 1 : -1 ;
	// 		// return a > b ? -1 : 1 ; // reverse sorting
	// 	}
	// );
	// console.log(sortedArr);
	// console.log(sortedArr.reverse());
	// // or
	// //sortedArr = arr.sort(
	// // 	(a,b) => {
	// // 		return a > b ? -1 : 1 ;
	// // 	}
	// // );
}

// ============ filter()ing in array ======================
{
	let arr = [10.25, 5.66, 3.26, 5.22, 9.0, 8.5, 7, 6.5];
	const filterArr = arr.filter((value, index, arr) => {
		return value > 6;
	});
	// shortcut way of using errow function,
	// filterArr = ARR.filter(value => value > 6 );    =====  or   ======
	// filterArr = ARR.filter(v => v > 6 );
	//we can ommit bracates if one argument is there
	// remove return keword also
	// one statement then '{ }' remove it
	// console.log(filterArr);
}

// ===============  reduce() method ==============
{
	// return number, takes 2 arg reduce(callback(),initialValue)

	let arr = [10.25, 5.66, 3.26, 5.22, 9.0, 8.5, 7, 6.5];
	const sum = arr.reduce((prevValue, curValue, CurIndex, arr) => {
		return prevValue + curValue;
	}, 0);
	// console.log(sum);

	// e.g [ 1  2  3]  0
	// here bove 0 is initial value in reduce() method's second argument
	// so now reduce return prevValue + curValue // here prevValue is 0 set by second argument at first time of method calling
	// step 1 : 0 + 1, [ 2 3 ]
	// step 2 : 1 + 2, [ 3 ]
	// step 3: 3 + 3, [ ]
	// result is 6 it will return 6
	// based on above logic u can like this
	// ====== NOTE ========   do remeber arr.reduce() can't poped element,   after execution u will find all element in arr's array
}

// ==============  split() for string data and join() for array ============
{
	// split takes string return array, split('spliting chacter');
	// join takes array and return string, join('conecting chacter');
	// let arr = 'navasari;10:30;sunday';
	// let newArr = arr.split(";");
	// console.log(arr);
	// console.log(newArr);
	// let result = newArr.join(); // default join with comma ','
	// console.log(result,'====== result of: newArr.join(); =====');
	// result = newArr.join(' ');
	// console.log(result,'===== result of: newArr.join(" "); =====');
}

// ==============  spread operator (...) for copying array ============
{
	// split takes string return array, split('spliting chacter');
	// join takes array and return string, join('conecting chacter');

	// let arr = ["dhaval", "vaishnav"];

	// let newArr = [...arr]; // ============  use of spread op  ==================
	// // it will return one by one item of array

	// console.log(arr, "=== arr ===");
	// console.log(newArr, "=== newArr ===");

	// arr.splice(0, 0, "Mr");
	// console.log(arr, "=== arr.push('mr') ===");

	// // ======= another application of spread op ==========
	// console.log(Math.min(1, 2, 5, -1)); // it will return -1 as minimum value
	// // but it can't work directly array
	// arr = [10.25, 5.99, 7.36, 3.55];
	// console.log(Math.min(arr)); // throw error NaN, min takes list of individual number and array passed
	// console.log(Math.min(...arr)); // now it will return 3.55

	// // working with array of object
	// let person = [
	// 	{ name: "dhaval", age: 25 },
	// 	{ name: "raj", age: 24 },
	// 	{name:'vipul',age:26}
	// ];
	// let copiedArr = [...person];
	// console.log(person, "==== person  ====");
	// console.log(copiedArr, "==== copiedArr  ====");
	// person.push({name:'srb',abg:28});
	// console.log(person, "==== person.push({...})  ====");
	// // but it will can't create copy nested object of an array, it will send the reference of it in new array
	// console.log(person[0].age, "==== before change in person[0].age, person array");
	// console.log(copiedArr[0].age, "==== before change in copiedArr[0].age , copiedArr array");
	// copiedArr[0].age = 35;
	// // it will change the age on 0th index item i.e. dhaval from 25 to 35;
	// console.log(person[0].age,"==== after change in person[0].age , person array");
	// console.log(copiedArr[0].age,"==== before change in person[0].age, copiedArr array");

	// // to achive this do it like this
	// person = [
	// 	{ name: "dhaval", age: 25 },
	// 	{ name: "raj", age: 24 },
	// 	{name:'vipul',age:26}
	// ];
	// copiedArr = [...person.map(person => ({name:person.name,age:person.age}))];
	// console.log(person, "==== person  ====, using ... and map");
	// console.log(copiedArr, "==== copiedArr  ====, using ... and map");
	// console.log(person[0].age, "==== before change in person[0].age, person array");
	// console.log(copiedArr[0].age, "==== before change in copiedArr[0].age , copiedArr array");
	// person[0].age = 35;
	// // it will change the age on 0th index item i.e. dhaval from 25 to 35;
	// console.log(person[0].age,"==== after change in person[0].age , person array");
	// console.log(copiedArr[0].age,"==== before change in person[0].age, copiedArr array");

}

// =============== array destructuring ===================
{
	// let arr = ['dhaval','vaishnav'];
	// let [ firstName, lastName] = arr;
	// console.log(arr);
	// console.log(firstName, lastName);

	// arr.push('Mr');
	// let [ firstName, lastName ] = arr;
	// console.log(arr);
	// console.log(firstName, lastName);

	// arr.push('25');
	// let [ firstName, lastName, ...otherAll ] = arr; // here ...otherAll it'll call rest operator instead of spread op, because convert into array
	// console.log(arr);
	// console.log(firstName, lastName, otherAll);

}