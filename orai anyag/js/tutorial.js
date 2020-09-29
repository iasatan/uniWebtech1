alert("hello world");
console.log("hello world");
-------------------------------------------------------------------------
var x = 5;
var y = 10;
alert(x+y);
x="5";
alert(x+y);
-------------------------------------------------------------------------
function init() {
	document.getElementById("content").innerHTML = "Hello JavaScript";
	document.getElementById('content').innerHTML = 'Hello JavaScript';
	document.getElementById("content").style.fontSize = "35px";
	document.getElementById("content").style.display = "none"
}
-------------------------------------------------------------------------
<button type="button" onclick="buttonHandler()">Button<button>

function buttonHandler() {
	alert("huu");
}
-------------------------------------------------------------------------
===
&& ||
-------------------------------------------------------------------------
JavaScript evaluates expressions from left to right
var x = 16 + 4 + "Volvo";	
var x = "Volvo" + 16 + 4;
-------------------------------------------------------------------------
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
-------------------------------------------------------------------------
var answer = "It's alright";             // Single quote inside double quotes
var answer = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer = 'He is called "Johnny"';    // Double quotes inside single quotes
-------------------------------------------------------------------------
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[0];
-------------------------------------------------------------------------
In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
Unfortunately, in JavaScript, the data type of null is an obj
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;        // Now value is null, but type is still an object

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;   // Now both value and type is undefined
-------------------------------------------------------------------------
var x = myFunction(4, 3);    // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;            // Function returns the product of a and b
}
-------------------------------------------------------------------------
// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    id       :  5566
};
// Display some data from the object:
document.getElementById("demo").innerHTML =
person["firstName"] + " " + person.lastName;
-------------------------------------------------------------------------
var str = "Apple, Banana, Kiwi";
var res = str.slice(7);
document.getElementById("demo").innerHTML = res;
-------------------------------------------------------------------------

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
    txt = txt + value + "<br>"; 
}
-------------------------------------------------------------------------
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
    return total + value;
}
-------------------------------------------------------------------------
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("demo").innerHTML = d;
-------------------------------------------------------------------------
<script>
try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
</script>
-------------------------------------------------------------------------

-------------------------------------------------------------------------