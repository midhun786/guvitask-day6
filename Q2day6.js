/****************************************************************************
<!-- 2)1)Write a code to print the numbers in the array -->
//****************************************************************************
//Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i <numsArr.length; i++) {
 new_string =new_string + numsArr[i]+"";
}
console.log(new_string);

//****************************************************************************
<!-- 2)2)Write a code to print the numbers in the array -->
//****************************************************************************
//Output: 1,2,3,4,5,6,7,8,9,10,11

let numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let new_string = "";
 
for (let i = 0; i < 11; i++) {
 new_string += numsArr[i]+ ",";
}
let b = new_string.slice(0,-1);
console.log(b);

//****************************************************************************
<!-- 2)3)Write a code to print from last to first with spaces (Make sure there is no space after the last element 1) -->
//****************************************************************************
//Output: 11 10 9 8 7 6 5 4 3 2 1

let new_string = "";
for (var i = 11; i > 0; i -- ) {
 new_string += i + " ";
}
console.log(new_string.trimEnd());
//****************************************************************************
<!-- 2)4)Write a code to replace the array value — If the number is even, replace it with ‘even’. -->
//****************************************************************************
//Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
  if (numsArr[i] % 2 === 0) {
    numsArr[i] = "even";
  }
}
console.log(numsArr);
//****************************************************************************
<!-- 2)5)Write a code to replace the array value — If the index is even, replace it with ‘even’. -->
//****************************************************************************
//Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]


var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    numsArr[i] = "even";
  }
}
console.log(numsArr);

//****************************************************************************
<!-- 2)6)Write a code to add all the numbers in the array-->
//****************************************************************************

//Output: 66
//way 1:
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (let i = 0; i <=10; i++) {
 sum = sum+numsArr[i];
}
console.log(sum);
//way 2:
let numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = numsArr.reduce((acc,cur)=>{
    return acc+cur;
});
console.log(sum);

//****************************************************************************
<!-- 2)7)Write a code to add the even numbers only-->
//****************************************************************************
//Output: 30
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (let i = 0; i <=10; i++) {
 if(numsArr[i]%2==0){
 sum = sum+numsArr[i];
}
}
console.log(sum);
//****************************************************************************
<!-- 2)8)Write a code to add the even numbers and subract the odd numbers-->
//****************************************************************************

//Output: 94
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i <= 10; i++) {
  if (numsArr[i] % 2 === 0) {
    sum += numsArr[i];
  } else {
    sum -= numsArr[i];
  }
}
console.log(sum);

//****************************************************************************
<!-- 2)9)Write a code to print inner arrays-->
//****************************************************************************
//Output:
 [ 1, 2, 3, 4, 5 ]
 [ 6, 7, 8, 9, 10, 11 ]

var numsArr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
  ];
  for (var i = 0; i < numsArr.length; i++) {
    console.log(numsArr[i]);
  }
//****************************************************************************
<!-- 2)10) Write a code to print elements in the inner arrays-->
//****************************************************************************
// Output: 1234567891011

var numsArr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
  ];
  var str_all = "";
  for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j < inner_array.length; j++) str_all += inner_array[j];
  }
  console.log(str_all);

//****************************************************************************
<!-- 2)11) Fixed code to replace the array value — If the index is even, replace it with ‘even’.-->
//****************************************************************************

// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
var numsArr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
  ];
  var str_all = "";
  var count = 0;
  for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j < inner_array.length; j++) {
      if (count % 2 === 0) {
        numsArr[i][j] = "even";
      }
      count++;
    }
  }
  console.log(numsArr);

//****************************************************************************
<!-- 2)12) Fixed code to print elements in the inner arrays in reverse-->
//****************************************************************************

// Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
  ];
  var str_all = "";
  for (var i = numsArr.length - 1; i >= 0; i--) {
    var inner_array = numsArr[i];
    for (var j = inner_array.length - 1; j >= 0; j--)
 {
      if (i === 0 && j === 0)
{
 str_all += inner_array[j];
}
      else {
str_all += inner_array[j] + " ";
}
    }
  }
  console.log(str_all);
//****************************************************************************
<!-- 2)13) Fixed code to add elements in the inner arrays based on odd or even values-->
//****************************************************************************

/*Output:
36
30*/

var numsArr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
  ];
  var sum_odd = 0;
  var sum_even = 0;
  for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j < inner_array.length; j++) {
      if (inner_array[j] % 2 !== 0) {
        sum_odd += inner_array[j];
      } else {
        sum_even += inner_array[j];
      }
    }
  }
  console.log(sum_odd);
  console.log(sum_even);