
/**
	Declare var and console typeof data
 */

var n = 42;
console.log(typeof n); // "number"

var b = true;
console.log(typeof b); // "boolean"

var s = "42";
console.log(typeof b); // "string"

var u;
console.log(typeof u) // "Undefined"

var o = {
	hello : "world"
};
console.log(typeof o) // "Object"



/**
	Declare js comment
*/

// Single comment line

/*
Multiple lines
comments
*/


/**
	Var keyword : declaration multiple, declaration simple, coercion, concatenation
*/
var number = 12,
   string = '1',
   secondString = "hello",
   thirdString = 'world'
   bool = true,
   other = null,
   array = [],
   object = {}
;

var otherVariable = 12;
var helloWorld = ’hello world’;

// Coercion type
number + "";
// "12"
+string
// 1

// Concatenation
var str = secondString + ' ' + thirdString + ' ?';


// MAJ ES6 ---- LET CONST ------------------------


// var variable can be updated and redefined
// var are function scoped

var width = 100;

// let and const and block scoped
// (if statement or function statement ex)

let height = 200;
const value = 'value';

/*
Let vs Const
*/

// let and const are only declare once and scoped to block
// const can not be updated
// Let can be updated
// I can't update key
const key = '123094094';


let winner  = false;
let points = 48;

// let winner as same name but block scoped winner = true, scoped iy block
if(points <= 50) {
  let winner = true;
  console.log('Log winner let 02 ' + winner);
}

// if const is a object, i can't reasign but i can upate propeties
const band = {
  type : 'rock',
  artist : 'Rolling Stones',
  album : 15
}

band.type = 'Reggae';
// Object {type: "Reggae", artist: "Rolling Stones", album: 15}

// To freese a object
const lockBand = Object.freeze(band);
lockBand.type = "salsa";
// lockBand Object {type: "Reggae", artist: "Rolling Stones", album: 15}

// END MAJ ES6 ---- LET CONST ------------------------



/**
	Function & var : declaration and visibility
*/

// Declare variable with no assignment
var maVariable;
console.log(maVariable); //undefined

// Declare Function
function maFonction() {
	//execute some code
};

// Call Function
maFonction();

// Visibility of the var : global or in function
var a = 'kikoo';

function fn() {
  var b = 'lol';

  console.log(a); // kikoo
  console.log(b); // lol
};

fn();
console.log(a);
// kikoo
console.log(b);
// ReferenceError: b is undefined


/**
	Manipulation Number and String
*/

var foo = "10.5"; // String
foo.parseInt(foo);    // 10
foo.parseFloat(foo);  // 10.5

var s = "Jack l'opossum";
s.indexOf('opossum');       // 7
s.split(' ');// ["Jack", "l'opossum"]
s.substr(1, 3);    // "ack"
s.toLowerCase(); // "jack l'opossum"
s.toUpperCase(); // "JACK L'OPOSSUM"

/**
	Manipulation Array
*/


var a = ["apple","orange","banana"];
a.push("kiwi");
//        3 - ["apple","orange","banana","kiwi"]
a.shift();
//  "apple" - ["orange","banana", "kiwi"]
a.unshift("lemon");
//        3 - ["lemon","orange","banana",kiwi"]
a.reverse();
// ["kiwi","banana","orange","lemon"]
a.sort();
// ["banana","kiwi","lemon","orange"]



/**
	Array
*/

// Declaration ARRAY
var array = [];
var array = new Array; //same result but different write

//Array always begin with 0 !!!!
var a = [ ];
a.length;   // 0
a[0] = 1;
a[1] = "2";
a[2] = [ 3 ];
a.length;   // 3
a // [1, "2", [3]]

// Declaration Date
var today  = new Date;
console.log(today); //Sun SEP 23 2016 16:41:37 GMT+0100 (CET)


/**
	Conditions
*/


// Check if condition is true
if ( true ) {
  //Execute some code
};

// Else statement
if ( true ) {
  //Execute some code
} else {
  //Otherwise execute this code
};

// Else if statement
if ( true ) {
  //Execute some code
} else if ( true ) {
  //Otherwise execute this code
} else {
  // Else execute this code
};

// Match condition value
switch(condition) {
  case value1:
    // do something
    break;
  case value2:
    // do something
    break;
  default:
    // default action
};

// Ternair operator if condition written different
// condition ? Execute some code : Otherwise execute this code


/**
	Operators
*/


// Arithmethics operations
var add = 2+10;
var sub = 5-10.8;
var mult = 10*5;
var div = 2456/3;

// Increment operations
var i = 1;
i = i + 1;
i++;
++i;

// Comparison operators

==
// True, if the two operands are equal, ignore type

===
// True if same value and type (more safe !!!)

!=
// True, if the two operands are not equal, ignore type

!==
//True if not same value and type

// Lower and greather op
>, >=, <, <=



/**
	Operators logical
*/

var sentence  = 'hello world';

// Logical operators
&&
// And

||
// Or

!
// Not

// Exemple test if sentence is string type and not empty
if(typeof sentence == 'string' && sentence !== '') {
  //Excecute some code
  console.log("String is not empty, and append to String type")
};

// Exemple test if sentence is present
if (typeof sentence !== undefined) {
  console.log("Sentence exist")
};


/**
	Loop on array and object
*/


 var arr = ['item1', 'item2', 'item3']

// Loop 1 for
 for (var i=0; i < arr.length; i++) {
   // I must be lower then a.length for iterate
   // I is the iterator, i++
   //execute code
   console.log('log each item in arr ' + arr[i])
 }

 // Loop 2 forVarIn
 for (var item in arr) {
   console.log(arr[item]);
 }

 // Loop 3 forEach
 arr.forEach(function (item, i) {
   console.log(item, i);
 });

 var obj = {
 	key : 'value1',
 	key2 : 'value2',
 };

 for ( var item in obj) {
   console.log('log key and value ' + item, obj[item]);
 }


 /**
 	Math Object
 */

 Math.PI; // 3.14159...
 Math.round(10.4); // 10
 Math.round(10.5); // 11
 Math.ceil(10.4);  // 11
 Math.floor(10.5); // 10
 Math.max(1, 2, 3); // 3
 Math.min(1, 2, 3); // 1
 Math.random(); // 0 a 1 …


 /**
 	Declare and work with object in javascript
 */

var car  = {
	seat : 4,
	citycar : true,
	color: "red",
	size :  {
		width : 200,
		height : 400
	}
};

 // Create Object in 2 different way
var subcar = new Object();
var subcar = {};

// Value assignment
subcar["seat"] = 4;
subcar["citycar"] = true;
subcar["color"] = red;

// Get value from property seat
subcar.seat // 4



/**
	DOM method manipulation
*/

// Create a new dom element passing
//the element tag name
var div = document.createElement('div');

// Create a node text passing node value
var node = document.createTextNode("hello world");

// Create attribute passing name and value
div.setAttribute("id", "main");
// <div id="main"></div>

// Get atribute value
div.getAttribute("id");
// main

// Retrieve element by ID
document.getElementById("main");

// Retrieve elemnt by tag name
document.getElementsByTagName("ul");
// Return HTML collection [ul, ul]

// Retrieve element by className
document.getElementsByClassName("list");
// Return HTML collection [list, list]

// Retrieve First element found
document.querySelector(".list"); // class
document.querySelector("#list"); // id
// Slow and Supported by IE8 and up



/**
	NODE method manipulation
*/


/*
// HTML
<div id="main">
  <nav id="topnav">
  	<span>Logo</span>
  </nav>
</div>
*/
// Create new element div
var ul = document.createElement("ul");
var nav = document.getElementById("topnav");
var span = document.getElementsByTagName('span')[0];

// Add ul element to topnav element id
nav.appendChild(ul);

// Check if element contains ul
nav.contains(ul);

// Check if element has child node
nav.hasChildNodes();
// Return boolean

// Create link element a
var link = document.createElement("a");

// Get parent span
var parent = span.parentNode;

// Insert link in nav before child span
parent.insertBefore(link, span);

// Remove link node inside nav
nav.removeChild(link);

// Insert value in the a tag
// InnerHTML -> parse html, slower //text/html
// textContent -> faster, don't parse //text/plain
link.innerHTML = 'new string';
link.texContent = 'new string content';


/**
	Graphic css manipulation by Dom style inline
	or class css (add, remove, contains)
*/

/*
//HTML
<div id="main">
  <nav id="topnav">
  	<span>Logo</span>
  </nav>
</div>
*/
var nav = document.getElementById('topnav');

// Set css by style property of nav
nav.style.backgroundColor = "#EBEBEB"
nav.style.width = "100%";
nav.style.padding = "10px";

// ---------------------------------------//

// List of class
nav.className
// return className string

// Add Class to element
nav.classList.add('bar');
// <nav class="top bar"></nav>

// Remove Class of element
nav.classList.remove('bar');
// <nav class="top"></nav>

// Check if class exist
console.log(nav.classList.contains('bar'));
// return boolean false



/**
	Javascript Events
*/


// HTML
// <form id="contact" action="/" method="post">
//   <label for="name">Name</label>
//   <input type="text" name="name" id="name" />
// </form>

// Write events javascript
// addEventListener(DOMString type, EventListener event, boolean useCapture)
// removeEventListener(DOMString type, EventListener event, boolean useCapture)

var contact = document.getElementById("contact");
contact.addEventListener("submit", validForm,false);

function validForm(e) {
	// Get target element
	var target = e.target || e.srcElement;
	console.log(e, e.target);
	// Stop event sending form
	e.stopPropagation();
	// Check if valid form inputs
};

// Keypress, keyup, keydown
window.addEventListener('keypress', function(event) {
	// log key and code of the event
	console.log(event.key ,event.keyCode);
},false);



/**
  TIMER
*/

// setTimeout(function, delay)
// Execute a function after a delay in millisecond
function log(){
  console.log('hello log');
}
setTimeout(log, 500); // 500 is millisecond

// setInterval(function, time millisecond);
// clearInterval(function);
// Call a function by repetition every millisecond
// Clear the function after
setInterval(log, 500); // 500 is millisecond


/**
	Natif vs Jquery
*/


// On event no jquery
el.addEventListener("click", function(e) {
  //execute some code
});

// On event jquery
$(el).on("click", function(e){
  //execute some code
});

// Document ready function in pure javascript
function ready(cb) {
  if (document.readyState != "loading"){
    cb();
  } else {
    document.addEventListener("DOMContentLoaded", cb);
  }
}
ready(function(){
  // Code to excetute when dom is ready
})

// Document ready in jquery
$(document).ready(function(){
  // Code to excetute when dom is ready
});


/**
	HTTP VERB AND HTTP STATUS
*/

/*
HTTP VERB
POST -> create
GET -> read
PUT -> update/replace
PATCH -> update/modify
DELETE -> delete

 HTTP STATUS
 200 : OK
 201 : created
 301 : Moved Permanently
 302 : Temporarily
 400 : Bad Request
 401 : Unauthorized
 403 : Forbidden
 404 : Not Found
 500 : Internal Server Error
 503 : Service Unavailable
 */


 /**
 	AJAX natif javascript
 */


// new  XMLHttpRequest object
var xhr = new XMLHttpRequest();

// This function is trigger when onreadystatechange property change
xhr.onreadystatechange = function() {
  // Readystate property complete
  if (this.readyState === 4) {
    if (this.status >= 200 && this.status < 400)
        {
      // Success!
      var resp = this.responseText;
    } else {
      // Error :(
    }
  }
};

// Open request  with params as  HTTP VERB and URL send it
// For GET request
xhr.open('GET', '/echo/json/', true);
xhr.send();

// For POST request
var data = "data";
xhr.open('post', '/echo/json/', true);
xhr.send(data);



/**
	JQUERY ajax
*/

// GET request handling succes and error
$.ajax({
  type: 'GET',
  url: '/my/url',
  success: function(resp) {
    console.log(resp);
  },
  error: function() {
    console.log("fail request");
  }
});

// POST request with data params
$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data
});

// Load JSON
$.getJSON('/my/url', function(data) {
  console.log(data);
});


/**
  DEBUGGING TOOLS
*/


// Add debugger keywords;
debugger;
// Console object methods
console.dir(contact)
console.info(contact)
console.log(contact)
console.warn(contact)
console.error(contact)
console.table(contact)
console.time("Start timing")
// some code
console.timeEnd("End timing")


/**
	Function declaration
*/

// Declare function with no params call log,
// call it after with name of the function and ();
function log() {
  console.log('Hello world');
}

log();


// Declare function anonymous in square variable // Not good
var square = function (a, b) {
 return a * b;
};

// Declare a function call fx // OK
function square(a, b) {
  return a * b;
};

// Declare square as function in square var //  Better
var square = function squareFx(a, b) {
 return a * b;
};

// Declare an obj wich contains square key who hold square function // very good
var obj = {
    square: function square(a, b) {
     return a * b;
   }
 };




 /**
 	Function hoisting
 */


var n = 42;

function n() { console.log('42'); }
n(); // => TypeError: number is not a function

// Explain
// Hoisting is when javascript pull up function
// on top before var
function n() { console.log('42'); }

// Hoisting var;
var n;

// continue
n = 42;

n();
// => TypeError: number is not a function

///// Solution
var n = 42;
n = function() { console.log('yeah'); }
n();



/**
	IIFE Immediately-invoked function expression
*/


(function(){
  var a = 'hello world';
})();
console.log(typeof a);
// Show undefined


// Pattern IIFE
(function(){
  console.log('Hello world');
})();

(function bar(){
  console.log('Hello world from bar function');
})();

var bar = function(){
  console.log('Hello world from function stored in bar var');
}();



/**
	Data parsing : JSON
*/

// Converting string to JSON objet
var data = '{"name":"thomas","age":"33"}';
var obj = JSON.parse(data);
//  {name: "thomas", age: "33"} typeof object


// Converting JavaScript data into JSON text
var simpleData = {
  name : 'thomas',
  age : '33'
}

var transFormToObj = JSON.stringify(simpleData);
//{"name":"thomas","age":"33"} typeof string


/**
	REGEX
*/

// exemple of pattern to test
// ALl caracters : \w ([A-Za-z0-9_])
// All numbers : \d ([0-9])

var pattern = /hello/;
var pattern = new RegExp('hello');

pattern.test('hello world')
// return boolean true because hello word exist in sentence

var sentence = "hello world"
sentence.replace(pattern,'42') ;
// return 42 world string


/**
	NODE js
*/

// first install nodejs from https://nodejs.org/en/

// Type node helloworld.js in the console
$ node helloworld.js

//In helloworld.js file
console.log('Hello World');

// Node will excute this file as javascript;
Hello World !!

// NPM
// First npm init
// Answer question -> create json package.json

// Find a module in npm and install it
npm install name_of_the_module --save

// Install module globally on your machine
npm install -g

