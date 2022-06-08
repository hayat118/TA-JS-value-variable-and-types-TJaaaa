// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number=12
if (number % 2==0) {
  alert(`number is even`)
  
}
if (number % 2!==0){
  alert(`number is odd`)
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let a=prompt(`enter 1st number`);
let b=prompt(`enter 2nd number`);
if (a>b){
  alert(`max value=${a}`)
}
else{
  alert(`max value=${b}`)
}
// 3. Convert the above code using`?` terniary operator
let max=a>b ? a:b
alert(`max=${max}`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let user=prompt(`enter house name`)
if (user=="stark"){
  alert(`winter is coming`)
}else if(user=="lannister"){
  alert(`A lannister always pays his debt`)
}else{
  alert(`All men must die`)
}

// 5. Convert the above code using`?` terniary operator
 user=="stark" ? alert(`winter is coming`) : 
 user="lannister" ? alert(`A lannister always pays his debt`) :
 alert(`All men must die`)

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month=+prompt(`enter number`)

switch (month) {
  case 1:
    alert(`number of days=31`)
    break;

  default:
    break;
}
switch (month) {
  case 2:
    alert(`number of days=28`)
    break;

  default:
    break;
}
switch (month) {
  case 3:
    alert(`number of days=31`)
    break;

  default:
    break;
}
switch (month) {
  case 4:
    alert(`number of days=30`)
    break;

  default:
    break;
}
switch (month) {
  case 5:
    alert(`number of days=31`)
    break;

  default:
    break;
}
switch (month) {
  case 6:
    alert(`number of days=30`)
    break;

  default:
    break;
}
switch (month) {
  case 7:
    alert(`number of days=31`)
    break;

  default:
    break;
}
switch (month) {
  case 8:
    alert(`number of days=31`)
    break;

  default:
    break;
}
switch (month) {
  case 9:
    alert(`number of days=30`)
    break;

  default:
    break;
}
switch (month) {
  case 10:
    alert(`number of days=31`)
    break;

  default:
    break;
}
switch (month) {
  case 11:
    alert(`number of days=30`)
    break;

  default:
    break;
}
switch (month) {
  case 1:
    alert(`number of days=30`)
    break;

  default:
    break;
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salery=prompt(`enter salery`)
if (salery<=20000){
  alert(`in hand amount=${salery-salery*10/100}`)
}else if(salery <=40000){
  alert(`in hand amount=${salery-salery*20/100}`)
}else(salery >50000)
  alert(`in hand amount=${salery-salery*30/100}`)
  


//  if..else vs switch
let salery=+prompt(`enter salery`)

switch (true) {
  case salery<=20000:
  alert(`in hand amount=${salery-salery*10/100}`)
    
    
    break;

  default:
    break;
}
switch (true) {
  case salery<=40000:
  alert(`in hand amount=${salery-salery*20/100}`)
    
    
    break;

  default:
    break;
}
switch (true) {
  case salery>50000:
  alert(`in hand amount=${salery-salery*30/100}`)
    
    
    break;

  default:
    break;
}

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks=prompt(`enter marks`)
if(marks>100){
  alert(`Marks cant't be graeter than 100`)
}else if(marks>80 && marks<100){
  alert(`Grade A`)
}else if(marks>50 && marks<80){
  alert(`Grade B`)
}else if(marks>30 && marks<50){
  alert(`Grade C`)

}else (marks>0 && marks<30)
  alert(`Grade D`)

let marks=prompt(`enter marks`)

switch (true) {
  case marks>100:
  alert(`Marks cant't be graeter than 100`)
    
    break;

  default:
    break;
}
switch (true) {
  case marks>80 && marks<100 :
  alert(`Grade A`)
    
    break;

  default:
    break;
}
switch (true) {
  case marks>50 && marks<80 :
  alert(`Grade B`)
    
    break;

  default:
    break;
}
switch (true) {
  case marks>30 && marks<50 :
  alert(`Grade c`)
    
    break;

  default:
    break;
}
switch (true) {
  case marks>0 && marks<30 :
  alert(`Grade D`)
    
    break;

  default:
    break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather=prompt(`weather condition`)
if (weather=="sunny"){
  alert(`Wear a T-shirt`)
}else if(weather=="rainy"){
  alert(`Dont't forget to take your raincoat`)
}else if(weather=="hot"){
  alert(`Get a hanky`)
}else if(weather=="freezing"){
  alert(`Get your sweater on`)
}else
  alert(`Not a valid input`)
