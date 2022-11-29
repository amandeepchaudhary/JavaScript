// 1.Ways to print in JavaScript
console.log("This is Console Log");  // Write in console
// alert("This is a Alert");  // Gives an Alert
document.write("This is simple text in javascript")  // Text in JavaScript


// 2.JavaScript Console API(Application Programming Interface) 
console.log("This is Console Log", 4 + 11, "Another log");  // Write in console
console.warn("This is a Warning");  // Shows Waring in Console
console.error("This is a Error");  // Shows Error in COnsole


// 3.JavaScript Variables 
// What are Variables? - Variables are the container to store the data values
var number1 = 34;
var number2 = 66;
console.log("This is the Addition of Number1 and Number2", number1 + number2)


// 4.Data Types in JavaScript
//String
var str1 = "This is a Double Quote String"  // Strings are written in the single and double quotes
var str2 = 'This is a Single Quote String'

//Number
var num1 = 999;
var num2 = 3453;

//Objects
// Key value pairs == Like Dictionary in Python

var marks = { 'ravi': 34, 'Aman': 99, 'Ishu': 100 };
console.log(marks);

//Booleans 
var a = true;
var b = false;
console.log(a, b);

//Undifined = when the value is not defined in the varibale
// mtlb apne isse bna k choad diya hai
var und1;
//or
var und = undefined;
console.log(und);
console.log(und1);
console.log(undefined);

//Null = when you are saying ki iske andar kuch nhi rakha jata hai
var n = null;
console.log(n);

// Arrays are the collection of Elements = numbers, String, Boolens mtlb collection of anything

/*At a very High level, there are two types of Data Types in JavaScript ==

1.Primitive Data Types: Null, Undifined, Numbers, String, Boolean, Symbol(Genrates a Random Numeber)

2.Reference Data Types: Arrays and Objects

*/

var arr = [1, 2, 3, "Kuch Bhi", 45, 5324];
console.log(arr);

// 5.Operators in JavaScript
//Arithmatic Operators
console.log("Arithmatic Operators");
var c = 1000;
var d = 100;
console.log("The Value of c+d is", c + d);
console.log("The Value of c-d is", c - d);
console.log("The Value of c*d is", c * d);
console.log("The Value of c/d is", c / d);

//Assignment Operators
console.log("Assignment Operators");
var e = c;
e += 2;
// e -= 2;
// e *= 2;
// e /= 2;
console.log(e)

//Comparision Operators
console.log("Comparision Operators");
var x = 34;
var y = 4436;
console.log("x:", x)
console.log("y:", y)
console.log("x==y:", x == y)
console.log("x<=y:", x <= y)
console.log("x>=y:", x >= y)
console.log("x<y:", x < y)
console.log("x>y:", x > y)

//Logical Operators
console.log("Logical Operators");

//Logical AND = All must be true for true, ek bhi false hua toh False
console.log("Logical AND");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//Logical OR = ek bhi true hua toh true hoga
console.log("Logical OR");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//Logical NOT = sach ko jhut aur jhut ko Sach 
console.log("Logical NOT");

console.log(!false);
console.log(!true);

//Operators and Operants
// if we are adding two numbers then::
// operator is + and operant is that number on which we are applying the operator

// 6.Functions in JavaScript
//we use function for a logic which is used multiple times and we dot want to write it again and again so we create a function for that logic==

function avg(a, b) {
    return (a + b) / 2;
}

/* principle
DRY = Do not Repeat Yourself
*/

c0 = avg(23, 67);
c1 = avg(23324, 6723);
console.log("The Average of c0 is:", c0, "and average of c1 is:", c1);

// 7.Conditionals in JavaScript
age = 22;
// if Statement
if (age < 25) {
    console.log('You cannot Drink')
}

// if-else Statement
if (age < 25) {
    console.log('You cannot Drink')
}
else {
    console.log('You can Drink')
}

// if-else Ladder
if (age > 60) {
    console.log('You are a Senior Citizen Now!!')
}
else if (age > 50) {
    console.log('You are going to a Senior Citizen in 10 Years!!')
}
else if (age > 40) {
    console.log('You are in your Mids!!')
}
else if (age > 30) {
    console.log('You are Young!!')
}
else if (age > 20) {
    console.log('You are in your Twenties!!')
}
else if (age > 10) {
    console.log('You are Small Kid!!')
}
else {
    console.log('Just Born!!');
}
console.log('End of Ladder.');

//Making a fucntion to see that i can drink rasna water or not!!
function rasna(age) {
    if (age >= 18) {
        console.log('You can Drink rasna water!!')
    }
    else {
        console.log('You cannot Drink rasna Water!!')
    }
}
a = rasna(9)


// 8.Loops
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);

//For Loop
// iteration/iterate means one by one showing of a group of things
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr.forEach(function (element) {
    console.log(element);
})

// let == var  //var purana h aur let nya h aur let curlly braces tak hi kaaam aata h mtlb function k andar agar variable bnaaya toh bhar voh variable kaam nhi aayega jaise python mai built-in hota hai
let j = 0;

// const is used when we don't want to change it ever again even if we try to change this in future it will throw an error i.e., Constant value
const ac = 0;

//While Loop
console.log("While Loop");
let z = 0;
while(z<arr.length){
    console.log(arr[z]);
    z++;
}

//Do While Loop
// isme ek baar toh do run hoga hi hoga phir voh condition dekhega
do{
    console.log(arr[z])
} while(z<arr.length);


// 9.Break and Continue
// continue = iss iteration ko choado aur agli iteration kro
// break = looping krna choad do

let arr1 = [1,2,3,4,5,6,7]
for(let p = 0;p<arr1.length;p++){
    if(p==2){
        // break;  // The For loop will break and cursor go out
        // continue;  // Don't do this iteration and jump to the next one
    }
    console.log(arr1[p])
}


// 10.Array Methods
console.log('Array Methods');
let myArr = ["Computer", "Phone", "Mic", "Bed", 908, 2022, null, undefined, true];
console.log(myArr.length);
console.log("DEFAULT",myArr);

myArr.pop();  // Used to remove the last element from the array
console.log("POP",myArr);

myArr.push("Aman");  // Used to Add a Element in the last of an Array
console.log("PUSH",myArr);

myArr.shift();  // Used to Remove the First Element from the array
console.log("SHIFT",myArr);

myArr.unshift("AMAN");  // Used to Add a element on the [0]th position or on the first spot of an array
console.log("UNSHIFT",myArr);


// 11.String Methods in JavaScript
console.log('')
console.log('String Methods in JavaScript');
let myLovelyString = "Aman is here guyz is is";
console.log(myLovelyString.length)
console.log(myLovelyString.indexOf("is"));  //indexing starts from 0
console.log(myLovelyString.lastIndexOf("is"));
console.log(myLovelyString.slice(0,3))  // 0 = n where 3 = n-1 start from 0 to 2, So it will give us 0,1,2 positioned elements
v = myLovelyString.replace("Aman", "Diksha")  // Aman will got replaced by Diksha here, and replace will change the first occurance only <-- <--
v = v.replace("is", "ok")
console.log(v, myLovelyString)


// 12.Dates in JavaScript
let myDate = new Date();
console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getTime());


// 13.DOM(Document Object Model) Manipulation
let elem = document.getElementById('Click');  // Used when we want to target an element by its identifier
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);
// if i wwant to change the backgrount color of the first container class then---
elemClass[0].style.background = "orange";
let heading = document.getElementById('heading');
console.log(heading);
heading.style.background = "yellow";

// if we have a class in html style and want to add in the element then ---> --->
elemClass[1].classList.add('bg-primary');
elemClass[1].classList.add('text-success');

elemClass[1].classList.remove('text-success'); //to remove

//to get html as a string 
elemClass[1].innerHTML //<<<< in Document Object Model
console.log(elemClass[1].innerHTML);

//For text
console.log(elemClass[1].textContent); //<<<< in Document Object Model

//Tag name se
let tn = document.getElementsByTagName('div');  //an arrays of div tag name goes to tn
let tn1 = document.getElementsByTagName('button');
console.log(tn)
console.log(tn1)


// sabse pehle hume ek element chahiye h jha p koi tagname, id, class h toh add krna hoga appendChild se phir element ban gya pr kis tarah ka uske liye document.createElement likha aur iske andar bataya kaisa element chahiye h paragraph chahiye hai toh 'p' phir isme k krna h abb paragraph m likhna h toh element k name mai name.innerText = 'yha likha' aur done element ban gya hume jha chahiye tha, kis tarah ka chahiye tha, aur usme kya chahiye tha >>>>>>---
let createdChild = document.createElement('p');
createdChild.innerText = 'This is a paragraph in Child';
tn[0].appendChild(createdChild);  //Kisi bhi element mai Child add krna h toh 

//replacing the child with another one
let createdChild1 = document.createElement('b');
createdChild1.innerText = 'This is a Bold in Child';
tn[0].replaceChild(createdChild1, createdChild);

//Created a element of button type on my own
let bu = document.createElement('button');
bu.innerText = 'Button';
bu.style.padding = '2px 5px';
tn[0].appendChild(bu);

// removeChild(element); --->removes a Child


document.location
document.title
document.URL
document.scripts
document.links
document.forms
document.images
document.domain

//Selecting Using Query
let sel = document.querySelector('.container');  // Gives first container class Element
console.log(sel);
let sel1 = document.querySelectorAll('.container');  // Gives all container classea
console.log(sel1);  //This type is majorly used  in css alomost same as getElementByClass

// 14.Events in JavaScript
function clicked(){
    console.log('Button is Clicked');
}
window.onload = function(){
    console.log('page is loaded');
}

//for getting respose from the system by adding an event 
// id se direct refer kr skte h toh>>>
// firstcontainer.addEventListener('click', function(){    // (event(click pe , hover p, on p), function())
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Clicked the Container</b>"
//     console.log("clicked on Container");
// })
// firstcontainer.addEventListener('mouseover', function(){    // (event(click pe , hover p, on(mouseover) p), function())
//     console.log("mouse over on container");
// })
// firstcontainer.addEventListener('mouseout', function(){    // (event(click pe , hover p, on(mouseover) p), function())
//     console.log("mouse out of the container");
// })
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup', function(){    // (event(click pe , hover p, on(mouseover) p), function())
    document.getElementsByClassName('container')[1].innerHTML = prevHTML;
    //OR
    // document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("mouse is up now");
})
firstcontainer.addEventListener('mousedown', function(){    // (event(click pe , hover p, on(mouseover) p), function())
    document.getElementsByClassName('container')[1].innerHTML = '<b>when down click on mouse</b>'
    //OR
    // document.querySelectorAll('.container')[1].innerHTML = '<b>when down on click mouse</b>'
    console.log("mouse is down now");
})


// 15.SetTimeout and Setinterval
// Arrow functions
function summ(a, b){
    return a+b;
}

summ = (a, b) => {
    return a+b;
}

// making a function using arrow method
logKro = () =>{
    document.getElementsByClassName('container')[1].innerHTML = '<b>Set Timeout Fired!!</b>'
    console.log("I am your Log")
}

clrt = setTimeout(logKro, 2000);  // setTimeout(function, milliseconds mai time hoga ki itne time baad yh function execute ho)  yh 2 second baad show hoga

clr = setInterval(logKro, 2000);  // setInterval is used to show a function repeatitively(Baar baar) within a certain time frame

// Use clearTimeout(clrt)/clearInterval(clr) to cancel setTimeout/setInterval
clearInterval(clr);  // Used to stop the setinterval, as setinterval gives the id to a variable and if we pass that id in the clearinterval it will clear the setinterval's execution

clearTimeout(clrt);  // Used to stop the settimeout, as settimeout gives the id to a variable and if we pass that id in the cleartimeout it will clear the settimeout's execution



// FaceBook
// isse hum like krwane k liye use kr skte h getElementsByTagName mai button ya kuch bhi se liya let k ander phir usko setinterval mai ek click naam se fucntion dal diya aur voh like krta rahega jaise jaise setinterval chalega click hota rahega like button pe

// lik = () =>{
    
//     let like = firstcontainer.addEventListener('scroll', function(){
//         document.querySelectorAll('.x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1ey2m1c xds687c xg01cxk x47corl x10l6tqk x17qophe x13vifvy x1ebt8du x19991ni x1dhq9h') = click();
//     })
// };
// setInterval(lik, 2000);



//JavaScript localStorage
// is used to store some items with key:value pair, keep them less as much as possible
localStorage.setItem('name', 'aman')  //In this 'name' is key, whereas 'aman' is the value 
localStorage  //is used to see what the local storage have in it within the website
localStorage.clear()  //is used to clear the localStorage of a webpage in inspect console
localStorage.getItem('name')  //is used to get the value by giving the key
localStorage.removeItem('name')  //to remove a single item

//Don't give any important information in localStorage as We can access it easily by going in inspect-->application-->storage-->localStorage


//JSON
//Useful in Data Tranportation
// open standard file format, which is used to exchange the data
//JSON doesn't accept single quotes not even once<<<----
//Changing an obj to a string
obj = {name: "aman", length: 1, a:{this: "that"}};
jso = JSON.stringify(obj);
console.log(jso); 

// to know a type of the variable we use 'typeof'

//Changing a string to a obj
parsed = JSON.parse(`{"name":"aman","length":1,"a":{"this":"that"}}`)  //we give parse a string inside the backticks
console.log(parsed);


// ECMA Script 
// is used to set a standard for javaScript as everyone doing their thing when the javaScript launched so ECMA Scripts made to set standards for the browsers


//Template literals - Backticks
m = 23;
console.log(`this is a string ${m}`);
console.log("this is my" , m, "ok");