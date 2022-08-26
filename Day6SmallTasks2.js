// day6 tasks-2
// Shaik Mahmmadsufiyan (B37 Weekend English batch) 

// JS file


// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-1
//  sub-task-1
//  Find the culprit

//  <!DOCTYPE html>
//  <html>
//  <body>
//   <script>
//   alert("I'm JavaScript!")
//   </script>
//   Whats the error in this ?
//   <p>Answer: the use of single quotes (which creates clash between the sentance apostrophe and the single quotes)</p>
//  </body>
//  </html> 


// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-2
//  sub-task-2

// alert("I'm invoked!");



// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-3
//  sub-task-3
// Explain the below how it works

// Explanation: The alert function in the .js file 
//                 >throughs an alert of the strings that are inside it (in the same structure as they are written)
//                 >alerts the value of the variables or values directly (after performing the mathematical operations)


// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-4
//  sub-task-4
// Fix the below to alert Guvi geek

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+ " " +lname;
// alert( admin ); // "Guvi geek"



// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-5
//  sub-task-5
// Fix the below to alert hello Guvi geek

// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( `hello ${name}` );


// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-6
//  sub-task-6
// Fix the below to alert sum of two numbers

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(parseInt(a) + parseInt(b));



// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-7
//  sub-task-7
// Fix the below to alert sum of two numbers

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(parseInt(a) + parseInt(b));



// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-8
//  sub-task-8
// If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.


// var a = 2 > 12;
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }


// Answer: As the 2 and 12 are written inside quotes > then the comparison will be done by taking the first digit
//         >Then as 2 is greater than 1 it assigns true to a (then it executes "code is blasted")
//         >If the 2 and 12 are written without quotes then it will lead to display "code is diffused"
//         >This is corrected in the Day6Smalltasks2.js file 


// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-9
//  sub-task-9
// How to get the success in console. 

// Answer: If we click on  "Cancel" in the prompt pop up in the web page
//           >then it gives "success" in the console.


// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-10
//  sub-task-10
// How to get the correct score in console.

// let value = prompt('How many runs you scored in this ball');
// if (value == 4) {
//       console.log("You hit a Four");
// } else if (value == 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }


// Answer: In the given code in if condition '===' is used (i.e. checking for the 'type' also)
//         >Either by using just '==' in if condition
//         >Or by writing the variables in the if condition as strings (i.e. value==='4' and value==='6')
//         >By using the above two solutions we can display correct score in the console.



// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-11
//  sub-task-11
// Fix the code to welcome the Employee

// let login = 'Employee';
// let message = (login == 'Employee') ? 'welcome':
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);



// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-15
//  sub-task-15
// Change the code to print
// 3
// 2
// 1


//You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log(i--);
// }


// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-16
//  sub-task-16
// Change the code to print 1 to 10 in 4 lines

// let num=1;
// while(num<=10){
//     console.log(num);
//     num+=1;}


// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-17
//  sub-task-17
// Change the code to print even numbers

//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }



// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-18
//  sub-task-18
// Change the code to print all the gifts

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }



// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-20
//  sub-task-20
// Whats the msg printed and why?

// Answer: The message 'hi' will be printed
//         >Because lemein is a string and will execute the first if block (containing 'hi')
//         >lemeout is 0 (a null value) this stops the execution of if block in which 'hello' message is there


// -----------------------------------------------------------------------
// ------------------------------------------------day-6 task-2 SUB-TASK-21
//  sub-task-21
// Whats the msg printed and why? Guess you answer before running it.

// Answer: The message 'hi' will be printed
//         >Because lemein is a string and will execute the first if block (containing 'hi')
//         >lemeout is 0 (a null value) this stops the execution of if block in which 'hello' message is there