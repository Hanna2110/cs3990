// function greetings()
// {
//     console.log(makeGreet());
// }

// function makeGreet()
// {
//     return 'Rise & Shine!';    
// }

// greetings();

// for (var i = 0; i < 3; i++) {
//     var name = "Hanna";
// }
// console.log(i);  //3, "i" is visible after loop, it's a global variable
// console.log(name); //"name" "i" is visible after loop, it's a global variable

// var name ="Hanna"
// var name ="NotHanna" //it doesn't trigger an error
// alert(name); //"NotHanna" 

// alert(myprof);
// var myprof="Hanna"

// const MY_PROF="Hanna";
// myProf="NotHanna"; // error, can't reassign Hanna!

// let myProf="Hanna"
// console.log(`Hi from ${myProf}`)


// alert("Hi from Hanna!")
// let res=confirm ("Do you like CS3990?")
// if (res) alert ("Glad to know!")

// let userName=prompt("Your name?","Hanna")
// alert(`Hi ${userName}! Nice to meet you!`)

function sayHi1() {
    let msg = "Hello, I'm Hanna"; // local variable  
    alert(msg);
}
  
sayHi1(); // Hello,  I'm Hanna
alert( msg ); // <-- Error! The variable is local to the function

let userName = 'Hanna';

function sayHi2() {
  let msg = 'Hello, ' + userName;
  alert(msg);
}
sayHi2(); // Hello, Hanna

let user = 'Hanna';

function sayHi3() {
    user='Franco' //changed the value of the outer variable
    let msg = 'Hello, ' + userName;
    alert(msg);
}

console.log( user ); // Hanna before the function sayHi3 call
sayHi3(); // Hello, Franco
console.log( user ); // Franco after the function sayHi3 call

let instructor = 'Hanna';

function sayHi4() {
    let instructor='Franco' //declare a local (its own) instructor variable 
    let msg = 'Hello, ' + instructor;
    alert(msg); 
}

console.log( instructor ); // Hanna 
sayHi4()//Hello, Franco
console.log( instructor ); // Hanna