/*A script with two variables, each assigned to a number. 
Add them together and output the result to the console. 
Now do the same with two strings.*/
var num1 = 2;
var num2 = 5;
console.log (num1 + num2);

var string1 = "Hey, how are you ";
var string2 = "doing?";
console.log (string1 + string2);

/* Create a multidimensional array related to a subject that interests you. 
Output two of the items in sub-arrays to the console.*/
var color = ["red", "green", "blue", "pink"];
var tag = ["p", "h1", "span", "div"];
var mix = [color, tag];

console.log (mix[0][1] + " " + mix[1][3]);

// more than 100 script 
// var num; or future function  
if (num < 100) {
	alert("number is less than 100");
} else if (num === 100) {
	alert("number is 100");
} else if (num > 100) {
	alert("number is greater than 100");
} else {
	alert("not a number");
}
// console.log(num = 3);
// console.log(funcName(3)); - if we had a function

// checking strings 
var st1 = "Denis";
var st2 = "Dennis";
if (st1 === st2) {
	console.log("Funny");
} else {
	console.log("Whatever you prefer!");
}

//Declare a function that takes a name as an argument:
function firstName(name) {
	return name;
}
console.log(firstName("Spooner"));
// or 
// var value = firstName("Spooner");
// console.log(firstName);

//more
function alertName(somePersonsName) { 
	return alert(somePersonsName);
}
alertName("Zach");

// no argument function, but prints something out
function noArgument() {
	console.log("no value");
}

noArgument();

/*Declare a function that receives an input of door 1, 2 or 3. 
Depending upon which virtual "door" was entered, 
the function will tell the user they've received a different "prize" in an alert. 
Try running it after it has been declared a few times with each door option.*/
function doorNumber(door) {
    if (door === 1) {
    	alert("you won a string!!!");
    } else if (door === 2) {
    	alert("you won an array!!!");
    } else if (door === 3) {
    	alert("you won an object!!!");
    } else {
    	alert("your door doesn't exis!!!");
    }
}

console.log(doorNumber(1));
console.log(doorNumber(2));
console.log(doorNumber(3));
console.log(doorNumber(4));
// could add to the beginning - if (typeof doorNumber !== "number") {
// 	return alert("not a number")
// }

// Loops:
// "for"
var friends = ["Marlon", "Jeremy", "Theresa", "Anna", "Kirill"]; 
 
for (var i = 0; i < friends.length; i++) {
 	console.log(friends[i] + " is my friend!");
 }

// "while"
var x = 99;

while (x >= 0) {
	console.log(x + " bottles of root beer on the wall")
	x--;
}

// Bonus "math":
function doTheMath(n1, n2, n3, n4) {
	var result = n1 + n2 + n3 / n4;
	return result
	// or return n1 + n2 + n3 / n4;
}
console.log(doTheMath(3, 5, 99, 444));