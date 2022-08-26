// day6 tasks-3
// Shaik Mahmmadsufiyan (B37 Weekend English)

console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-1')
// sub-task-1
// Write a code to print the numbers in the array
// Output: 1234567891011
// For this sub-task, the corrected code is given below


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-2')
//sub-task-2
// Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11
// For this sub-task, the corrected code is given below


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i <11; i++) {
    if(i!=10){
 new_string += numsArr[i] + ',';
    }else{ new_string += numsArr[i];}
}
console.log(new_string);




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-3')
// sub-task-3
// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1
// For this sub-task, the corrected code is given below


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 10; i >=0; i--) {
    if(i!=0){
        new_string += numsArr[i] + " " 
    }else{
        new_string += numsArr[i]; 
    }
 
}
console.log(new_string);




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-4')
// sub-task-4
// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
// For this sub-task, the corrected code is given below


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-5')
// sub-task-5
// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
// For this sub-task, the corrected code is given below


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i%2 == 0 )
 {
 numsArr[i] = "even";
 }
}
console.log(numsArr);




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-6')
// sub-task-6
// Write a code to add all the numbers in the array
// Output: 66
// For this sub-task, the corrected code is given below


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <=10; i++) {
 sum += numsArr[i]
}
console.log(sum);




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-7')
// sub-task-7
// Write a code to add the even numbers only
// Output: 30
// For this sub-task, the corrected code is given below


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0){
    sum += numsArr[i];
 }
}
console.log(sum);




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-8')
// sub-task-8
// Write a code to add the even numbers and subract the odd numbers
// Output: 94
// For this sub-task, the corrected code is given below


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0){
 sum += numsArr[i]
 }else{
 sum -= numsArr[i]
 }
}
console.log(sum);




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-9')
// sub-task-9
// Write a code to print inner arrays
// Output:
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]
// For this sub-task, the corrected code is given below


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++){
 console.log( numsArr[i])
}




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-10')
// sub-task-10
// Write a code to print elements in the inner arrays
// Output: 1234567891011
// For this sub-task, the corrected code is given below


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all='';
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
     str_all +=inner_array[j];
 }
}
console.log(str_all);




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-11')
// sub-task-11
// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
// For this sub-task, the corrected code is given below


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
    if((i+j)%2 == 0 )
      {
        inner_array[j] = "even";
       }
 }
 numsArr[i] = inner_array;    
}
console.log(numsArr);




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-12')
// sub-task-12
// Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1
// For this sub-task, the corrected code is given below


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all='';
for (var i = numsArr.length-1; i >=0; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- ){
    str_all +=inner_array[j]+' '
 }   
}
console.log(str_all);




console.log('-----------------------------------------------------------------------')
console.log('------------------------------------------------day-6 task-3 SUB-TASK-13')
// sub-task-13
// Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30
// For this sub-task, the corrected code is given below


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!=0){
 sum_odd += inner_array[j]
 }else{
 sum_even += inner_array[j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);

