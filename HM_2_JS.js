// 1* 
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования: Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age_2 = 18
let age_3 = 60

const checkAge = function(age) {
if (age < age_2){ 
   console.log("You do not have access cause your age is", + age, "It is less then")
   }    
   else if (age >= age_2 && age < age_3){
   console.log("Welcome !")
   }
   else if (age > age_3){
   console.log("Keep calm and look Culture channel")
   }    
   else {
   console.log("Technical work")
   }
}
checkAge(17)
checkAge(18)
checkAge(60)


// 2*
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

let age_2 = 18
let age_3 = 60

const checkAge = function(age) {
 if (typeof age == 'number') {  
    if (age < age_2){ 
        console.log("You do not have access cause your age is", + age, "It is less then")
        }    
        else if (age >= age_2 && age < age_3){
        console.log("Welcome !")
        }
        else if (age > age_3){
        console.log("Keep calm and look Culture channel")
        }    
        else {
        console.log("Technical work")
        }
    }   else 
        console.log("Not an integer value")   
        
    }

    checkAge(17)
    checkAge(18)
    checkAge(60)
    checkAge('nbn')
    checkAge('20')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

let age_2 = 18;
let age_3 = 60;

const checkAge = function(age) {
   
 if (age && !isNaN(age)) {  
    if (age < age_2){ 
        console.log("You do not have access cause your age is", + age, "It is less then");
        }    
        else if (age >= age_2 && age < age_3){
        console.log("Welcome !");
        }
        else if (age > age_3){
        console.log("Keep calm and look Culture channel");
        }    
        else {
        console.log("Technical work");
        }
    }   else 
        console.log("Not an integer value");  
        
    }

    checkAge(17)
    checkAge(18)
    checkAge(60)
    checkAge('bb')
    checkAge('20')
    checkAge('0')
    checkAge('')


 // 4***:
 // Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let age_2 = 18
let age_3 = 60
const checkAge = function (age) {
 if (age && !isNaN(age)) {  
    if (age < age_2){ 
            alert("You do not have access cause your age is" + age + "It is less then")
        }    
        else if (age >= age_2 && age < age_3){
            alert("Welcome !")
        }
        else if (age > age_3){
            alert("Keep calm and look Culture channel")
        }    
        else {
            alert("Technical work")
        }
    } else alert('Not an integer value')   
    }
    let a = prompt('Enter your age')
    checkAge(a)
