const arr1 = [
    {
        name1 : "name2",
        job: "student1"
    },
    {
        name1 : "name2",
        job: "student2"
    },
    {
        name1 : "name3",
        job: "student3"
    },
    {
        name1 : "name4",
        job: "student4"
    },   {
        name1 : "name5",
        job: "student5"
    } 
]

const arr2 = [
    {
        name1 : "name1",
        job: "student1"
    },
    {
        name1 : "name2",
        job: "student2"
    }
]
 
// 1st argument index 2nd argument objects 
// const arr3 = arr1.slice(2, 3);

// filter new array returns and some array method contains callback which pass test returend in new array but not operator not put passed test objects
// const arr3 = arr1.filter(obj1 => !arr2.some(obj2 => obj1.name1 === obj2.name1))

// pass test objects returned 
// const arr3 =  arr1.filter(ev => ev == arr1[0]) 

// new array return 
// const arr3 = arr1.map(element => element * 2);

// accumulator stores default 2nd argument value but after callback it behave like callback with its default/initial value 
// var currentValue = [2]
// const arr3 = currentValue.reduce(accumulator => accumulator + currentValue, 0);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];
// Concatenate the arrays
// const arr3 = array1.concat(array2, array3);

// const fruits = ['apple', 'banana', 'cherry', 'date'];
// Replace 2 elements starting from index 1 with 'orange' and 'kiwi'
// const arr3 = fruits.splice(1, 2, 'orange', 'kiwi');

const arr3 = arr1.length
console.log(arr3);