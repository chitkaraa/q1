/*  
---------------------------------------------------
  📌 1. forEach – Iterates & Can Modify Original Array
---------------------------------------------------
*/

let arr = [1,2,3,4,5];

arr.forEach(function(value, index, array){
    console.log(value, index, array);
    array[index] = value + 1; // modifies original
});

console.log("After forEach:", arr);


/*
---------------------------------------------------
  📌 2. map – Returns a New Array
---------------------------------------------------
*/

let newSalary1 = arr.map(function(value){
    return value + 1;
});

console.log("map result:", newSalary1);


/*
---------------------------------------------------
  📌 3. filter – Returns Matching Elements
---------------------------------------------------
*/

let arrFilter = [1,2,3,4,5,6];

let filtered = arrFilter.filter(function(value){
    return value % 2 === 0;  // even numbers
});

console.log("filter result:", filtered);


/*
---------------------------------------------------
  📌 4. Custom forEach, map, filter
---------------------------------------------------
*/

// custom forEach
function myForEach(arr, cb){
    for(let i = 0; i < arr.length; i++){
        cb(arr[i], i, arr);
    }
}

// custom map
function myMap(arr, cb){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(cb(arr[i], i, arr));
    }
    return newArray;
}

// custom filter
function myFilter(arr, cb){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i], i, arr)){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// calling of custom functions

let arr2 = [1,2,3,4,5,6];

let myFiltered = myFilter(arr2, function(value){
    return value % 3 === 0;
});

console.log("myFilter result:", myFiltered);


/*
---------------------------------------------------
  📌 5. Object Basics (add / delete / access)
---------------------------------------------------
*/

let obj = {
    "first name": "himanshu",
    address: "chitkara",
    phone: 9876543210
};

delete obj.phone;
obj.mobile = 9876543210;

console.log("Object after update:", obj);


/*
---------------------------------------------------
  📌 6. for-in Loop (Loop over Object Keys)
---------------------------------------------------
*/

const info = {
    firstName: "himanshu",
    lastName: "sharma",
    hobbies: ["1", "2", "3"],
    dob: "01/01/1000"
};

for(let key in info){
    console.log(info[key]);
}


/*
---------------------------------------------------
  📌 7. Spread Operator (Shallow Copy Example)
---------------------------------------------------
*/

let a = [1,2,[3,4],5];
let b = [...a];   // shallow copy

b[2][0] = "three";  // affects 'a' also
a.splice(1,1,"six");

console.log("Array a:", a);
console.log("Array b:", b);


/*
---------------------------------------------------
  📌 8. for-of (Loop Over Array Values)
---------------------------------------------------
*/

let arr3 = ["one", "two", "three", "four"];

for(let value of arr3){
    console.log(value);
}


/*
---------------------------------------------------
  📌 9. Nested Object Example – Employee Salary Finder
---------------------------------------------------
*/

const employees = [
   { name: 'John', salary: { basic: 20000, bonus: 5000 } },
   { name: 'Alice', salary: { basic: 25000 } }, // bonus missing
   { name: 'Bob' }, // salary missing
   { name: 'Carol', salary: { basic: 30000, bonus: 10000 } }
];

function getEmployeeSalary(employeeName){
    let employeeDetail = employees.filter(function(emp){
        return emp.name === employeeName;
    });

    employeeDetail = employeeDetail[0];

    if(employeeDetail){
        if(employeeDetail.salary){
            let basic = employeeDetail.salary.basic;
            let bonus = employeeDetail.salary.bonus || 0; // default 0

            let totalSalary = basic + bonus;
            console.log("Total salary of", employeeName, "=", totalSalary);

        } else {
            console.log("Salary does not exist for", employeeName);
        }

    } else {
        console.log("Employee does not exist:", employeeName);
    }
}

getEmployeeSalary("Alice");
