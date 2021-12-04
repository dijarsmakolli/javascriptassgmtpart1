// here is variables in javascript 

// we have 3 method to variable anything : var, let and const 

let message;

 message = 'Hello';  //store the string 'Hello' in the variable named message 

alert(message); // shows the variable content

let message = 'Hello'; // define the variable and assign the value

alert(message); // Hello!


let user = 'John' , age = 25, message = 'Hello';


let user = 'John';
let age = 25;
let message = 'Hello';


let user = 'John',
    age = 25,
    message = 'Hello';


let user = 'John'
    , age = 25
    , message = 'Hello';


// var instead of let

var message = 'Hello';

let message = 'Hello';

message = 'World'; // value changed , vlera u perzgjodh

alert(message);


let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

let message = "This";

// repeated 'let' leads to an error

let message = "That" // SyntaxError: 'message has already been declared

// Variable naming, There are two limitation on variable names in JS

// 1. The name must contain only letters, digits, or the symbol $ and "_"
// 2. The first character mus not be a digit 

// Examples of valid names:

let userName;
let test123;

// Kur emri permban shume fjale, perdoret zakonisht camelCase. 
// Kjo domethene --> fjalet shkojne njera pas tjetres , secial fjale
// pervec se pari fillon me nje shkronje te madhe : myVeryLongName.

// shenja e dollarit $ dhe nenvizimi _ munden me u perdor ne emra
// jane simbole te rregullta si shkronjat pa ndonje kuptim te veqante

// These names are valid:

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); //equals 3 because $ is 1 . and _ is 2 , 1 + 2 = 3. :)


// let 1a;   | cannot start with a digit , syntax error , i comment this

// let my-name; // hyphens "-" aren't allowed in the name 
// and this is syntax error , i want to comment that


// Lejohen shkronjat jo-latine , por nuk rekomandohen

// eshte e mundur te perdoret cdo gjuhe , duke perfshire shkronjat cirlike
// apo edhe hieroglyphs si kjo pershembull : 
// por nuk eshte e rekomandushme 

let имя = '...';
let 我 = '...';



// RESERVED NAMES 

// nje liste fjalesh jane te rezervuara ne javascript per vurjen(change) e variablave, sepse perdoren nga vete gjuha

// forexample: let, class, return and function are reserved , The code below gives a syntax error!

 // let let = 5;      |      // can't name a variable "let", error!
//  let return = 5;  |      // also can't name it "return" , error !




// An assignment  without use strict


// Normalisht, ne duhet ti percaktojm variablat perpara se ta perdorim ate . Por ne kohet e vjetra , teknikisht ishte e mundur
// te krijohej nje variabel me nje caktim te thjeshte te vleres pa perdorur let.
// kjo ende funksionon tani nese nuk perdorim strict ne scriptet tona per te ruajtur perputhshmerine me skriptet e vjetra.


// note: no "use strict" in this example 

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5 

// This is a bad practice and would cause an error in strict mode:

"use strict";

num = 5; // error because num is not defined




// Constants , To declare a constant (unchanging) variable, use const instead of let:

const myBirthday = '18.04.1982';

// Variablat e deklaruar me const quhen 'konstante'. Ata nuk mund te ricaktohen. Nje perpjekje per ta bere kete do te 
// shkaktonte nje error : 


const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!!!!


// Kur nje programmer eshte i sigurt se nje variabel nuk do te ndryshoje kurre, ai mund ta deklaroje ate me const per te
// garantuar dhe komunikuar qarte kete fakt per te gjithe



// UPERCASE CONSTANTS 


// Eshte nje praktik e perhapur per te perdorur constante si pseudonime per vlerat e veshtira per t'u mbajtur mend
// qe jane te njohura perpara execution, keso constante emerohen duke perdorur shkronja te medha dhe nenvizime. 
// forexample: let's make constants for colors in so called "web" (hexadecimal) format:: 

const COLOR_RED = "#F00";
const COLOR_GREEN = "#F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00"

// .. when we need to pick a color 
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// Benefits --> COLOR_ORANGE eshte shume me lehte per tu mbajtur mend se #FF7F00, eshte shum me lehte ta shkruash gabim 
// #FF7F00 sesa COLOR_ORANGE , kur lexoni kodin COLOR_ORANGE eshte shum me kuptimplot,

// te qenit constant nuk ndryshon kurre, por ka konstante qe njihen para ekzekutimit si nje vlere hexadecimal per te kuqe 
// dhe ka konstante qe llogariten ne kohen e ekzekutimit, por nuk ndryshojne pas caktimit te tyre ne fillim! per shembull :::

const pageLoadTime = /* time taken by a webpage to load */;

// vlera e pageLoadTime nuk dihet para ngarkimit te faqes, keshtu qe emertohet normalisht. por eshte ende nje konstante
// sepse nuk ndryshon pas caktimit, me fjalet te tjera , konstantet e emertuara me kapital perdoret vetem si
// pseudonime per "hard-coded" values.









