// Good Luck 💪🏾
//makeCapital("my name is ali") 
"use strict";
const capitalized = function(sentence) {

    let str =sentence.split("");
    for(let i= 0; i<str.length; i++){
         str[i]= str[i][0].toUpperCase() +str[i].substring(1);
 
        }
        return str.join("");
}

console.log(capitalized("my name is ali"));

//makeCapital("fikrcamp Bootcamp")
"use strict";
const Capitalized = function(sentence) {

    let str =sentence.split("");
    for(let i= 0; i<str.length; i++){
         str[i]= str[i][0].toUpperCase() +str[i].substring(1);
 
        }
        return str.join("");
}

console.log(Capitalized("fikrcamp Bootcamp"));


//makeCapital("i live In Paris")
"use strict";
const CApitalized = function(sentence) {

    let str =sentence.split("");
    for(let i= 0; i<str.length; i++){
         str[i]= str[i][0].toUpperCase() +str[i].substring(1);
 
        }
        return str.join("");
}

console.log(CApitalized("i live In Paris"));


