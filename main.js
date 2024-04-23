// let x = 25;
// let y = 25;
// let d = "rogie";
// let f = "rogie";

// let result = x == y;
// alert(result);

// for comaparison operators expected results in boolean either True or False.
// applicable to numbers & string.
// ********** Comparison Operators ********
// let result = d != f;
// alert(result);

// let result = x > y;
// alert(result);

// let result = x < y;
// alert(result);

// let result = d >= f;
// alert(result);

// let result = d <= f;
// alert(result);

// let result = x === y;
// alert(result);

// let result = x !== y;
// alert(result);

// ************* Logical Operators ********
// AND = &&
// OR = ||

// let x = true;
// let y = false;

// let result = x || y;
// alert(result);

// let result = x && y;
// alert(result);

// ********** Combination of Logical Operators and Comparison Operator ***********

// let x = (23 + 5 /2) < (26 + 5 / 3);
// let y = 4 > 5;

// // let result = x || y;
// // alert(result);

// let result = x && y;
// alert(result);

//  ********** If Statement **************
// if the condition is true
// let age = 15;

// if(age > 18){ // if the condition is true execute if statement
//     alert("you can now vote!");
// }else{ // Else statement if the condtion is false then execute the else condition
//     alert("you are still a minor!");
// }

//*************** Else If Statement ************
// let age = 12;

// if(age >= 18){ 
//     alert("you can now vote!");
// }else if(age > 12){ 
//     alert("you are still in Highschool");
// }else if(age >= 0 && age <= 12){
//     alert("you are still a minor");
// }else{
//     alert("Not valid age");
// }

// ********* Arrow Function **************
// const ageCalculation = () => {
//     let age = Number(document.querySelector("#ageInput").value)
//     // alert(age);
//     if(age >= 18){ 
//         alert("you can now vote!");
//     }else if(age > 12){ 
//         alert("you are still in Highschool");
//     }else if(age >= 0 && age <= 12){
//         alert("you are still a minor");
//     }else{
//         alert("Not valid age");
//     }
    
// };

// ************ Switch Case Statment *************

// let fruit ="orange"

// switch(fruit){
//     case "apple":
//         alert("Wow you have choosen apple");
//     break;
//     case "banana":
//         alert("Wow you have choosen banana");
//     break;
//     default:
//         alert("None of the Above")    
// }

// let age = 18;

// switch(true){
//     case (age >= 18):
//         alert("you can now vote!");
//     break;
//     case (age > 12):
//         alert("you are still in Highschool");
//     break;
//     case (age >= 0 && age <= 12):
//         alert("you are still a minor");
//     break;
//     default:
//         alert("Not valid age");    
// };

const setagePhase = () => {
    let age = Number(document.querySelector("#agePhase").value)
    if(age >= 0 && age <= 7){ 
        alert("Early Childhood");
    }else if(age >= 8 && age <= 12){ 
        alert("Childhood");
    }else if(age >= 13 && age <= 16){
        alert("Early Teenager");
    }else if(age >= 17 && age <= 19){
        alert("Late Teenager");
    }else if(age >= 20 && age <= 35){
        alert("Early Adolescence");
    }else if(age >= 36 && age <= 60){
        alert("Adolescence");
    }else{
        alert("Elderly");
    }
    
};