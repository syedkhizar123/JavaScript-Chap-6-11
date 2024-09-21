// Question 1

var num1 = 10
document.write("Chap:6-9 <br> Question 1 <br><br>Result<br>The value of num1 is: " + num1 + "<br><br><br>The value of ++num1 is: " + ++num1 + "<br>Now the value of num1 is " + num1
    + "<br><br><br>The value of num1++ is: " + num1++ + "<br>Now the value of num1 is: " + num1 + "<br><br><br>The value of --num1 is: " + --num1
    + "<br>Now the value of num1 is: " + num1 + "<br><br><br>The value of num1-- is: " + num1-- + "<br>Now the value of num1 is: " + num1 )


// Question 2
 
document.write("<br><br><br>Question 2 <br><br>")
var a = 2
var b = 1
var result = --a - --b + ++b + b--
document.write("The result of equation is " + result + "<br>")
document.write("a is  " , a + "<br>")
document.write("b is  " , b + "<br>")


// Question 3

document.write("<br><br><br>Question 3 <br><br>")
var username = prompt("Enter your name ", "John")
document.write("Welcome " + username )

// // Question 5

document.write("<br><br><br>Question 5 <br><br>")
var numtable = prompt("Enter a number for multiplication" , "5")
document.write(numtable +  " X 1 = " +numtable*1 + "<br>" + numtable +  " X 2 = " +numtable*2 + "<br>" +
    numtable +  " X 3 = " +numtable*3 + "<br>" + numtable +  " X 4 = " +numtable*4 + "<br>" +
    numtable +  " X 5 = " +numtable*5 + "<br>" + numtable +  " X 6 = " +numtable*6 + "<br>" +
    numtable +  " X 7 = " +numtable*7 + "<br>" + numtable +  " X 8 = " +numtable*8 + "<br>" +
    numtable +  " X 9 = " +numtable*9 + "<br>" + numtable +  " X 10 = " +numtable*10 ) 

// Question 6 

document.write("<br><br><br>Question 6<br><br>")
var subject1 = prompt("Enter the name of subject 1 " , "English")
var subject2 = prompt("Enter the name of subject 2 " , "Maths")
var subject3 = prompt("Enter the name of subject 3 ", "Urdu")
var markssub1 = +prompt("Enter the marks of " + subject1) 
var markssub2 = +prompt("Enter the marks of " + subject2) 
var markssub3 = +prompt("Enter the marks of " + subject3) 
var totalsub1 = 100
var totalsub2 = 100
var totalsub3 = 100
var totalmarks = totalsub1+totalsub2+totalsub3
var totalobtmarks = markssub1+markssub2+markssub3
var persub1 = markssub1/totalsub1 *100
var persub2 = markssub2/totalsub2 *100
var persub3 = markssub3/totalsub3 *100
var percentage = totalobtmarks/totalmarks * 100
document.write(
    `
    <table>
        <tr>
            <th>Subjects</th>
            <th>Total Marks </th>
            <th>Obtained Marks </th>
            <th>Percentage </th>
        </tr>
        <tr>
           <td> ${subject1} </td>
           <td> ${totalsub1} </td>
           <td> ${markssub1} </td>
           <td> ${persub1}% </td>
        </tr>
        <tr>
           <td> ${subject2} </td>
           <td> ${totalsub2} </td>
           <td> ${markssub2} </td>
           <td> ${persub2}% </td>
        </tr>
        <tr>
           <td> ${subject3} </td>
           <td> ${totalsub3} </td>
           <td> ${markssub3} </td>
           <td> ${persub3}% </td>
        </tr>
        <tr>
           <td> </td>
           <td> <b>${totalmarks}</b> </td>
           <td> <b>${totalobtmarks}<b/> </td>
           <td> <b>${percentage}%</b> </td>
        </tr>
    </table>`
)









// num1 = ++num1
// document.write("The value of ++num1 is " + num1 + "<br>Now the value of num1 is " + num1 + "<br><br><br>")
// num1 = num1++
// document.write("The value of num1++ is " + num1 + "<br>")
// document.write("Now the value of num1 is " + num1 + "<br><br><br>")










// Question1
document.write("<br><br><br>Chapter: 9-11 <br> Question 1 <br><br> ")
var cityname = prompt("Enter the name of your city ", "karachi")
if (cityname === "karachi"){
    document.write("Welcome to the city of lights")
} else {
    document.write("Welcome")
}

// Question 2
document.write("<br><br><br>Question 2<br><br>")
var gender = prompt("Enter your gender" , "male")
if (gender === "male"){
    document.write("Good morning Sir!<br><br><br>")
} else {
    document.write("Good Morning Ma'am!")
}
// Question3
document.write("<br><br><br>Question 3<br><br>")
var color = prompt("Enter the color of traffic signal " , "red") 
document.write(color + "<br>")
if (color === "red"){
    document.write("Must Stop")
} else if (color === "yellow"){
    document.write("Ready to move")
} else {
    document.write("Move now")
}

// Question 4
document.write("<br><br><br>Question 4<br><br>")
var carfuel = prompt("How much fuel is left in your car?")
if (carfuel <= 0.25){
    document.write("Please refill the fuel in your car")
} else{
    document.write("You have enough fuel to travel.")
}

// Question 6
document.write("<br><br><br>Question 6<br><br>")
var mathsmarks = +prompt("Enter the marks of Maths")
var englishmarks = +prompt("Enter the marks of English")
var urdumarks = +prompt("Enter the marks of Urdu")
var totalmarks2 = 300
var totalobtmarks2 = mathsmarks+englishmarks+urdumarks
var percentage2 = (totalobtmarks2/totalmarks2)*100
var grade
var remarks

if (percentage2 >= 80){
    grade = "A+"
    remarks = "Well Done"
} else if(percentage2 >= 70){
    grade = "A"
    remarks = "Good"
} else if(percentage2 >= 60){
    grade = "B"
    remarks = "You need to improve"
} else {
    grade = "Fail"
    remarks = "Sorry"
}

document.write("<h1>Mark Sheet</h1> <br><br><br> Total Marks: " + totalmarks2 + "<br> Obtained Marks: "
 + totalobtmarks2 + "<br> Percentage: " + percentage2 + "%<br> Grade: " + grade + "<br> Remarks: " + remarks + "<br>")


//  Question 7
document.write("<br><br><br>Queston 7<br><br>")
var secret = 9
var secretnum = +prompt("Guess the secret number from 1 - 10")
if (secretnum === secret){
    document.write("Bingo! Correct Answer")
} else if (secretnum === secret + 1){
    document.write("Close enough to the correct answer")
} else {
    document.write("Try again")
}


// Question 8
document.write("<br><br><br>Question 8<br><br>")
var divisibleby3 = prompt("Enter a number to check if it is divisible by 3", "3")
if (divisibleby3 % 3 === 0){
    document.write("Yes " + divisibleby3 + " is divisible by 3")
} else{
    document.write("No " + divisibleby3 + " is not divisible by 3")
}


// Question 9
document.write("<br><br><br>Question 9<br><br>")
var evenorodd = prompt("Enter a number to check if it is even or odd" , "1")
if (evenorodd % 2 === 0){
    document.write(evenorodd + " is an even number")
} else {
    document.write(evenorodd + " is an odd number")
}


//  Question 10
document.write("<br><br><br>Question 10<br><br>")
var temperature = prompt("Enter the temperature")
if(temperature >= "40"){
    document.write("It is too hot outside")
} else if (temperature >= "30"){
    document.write("The weather is normal")
} else if (temperature >= "20"){
    document.write("The weather is cool")
} else {
    document.write("OMG! It is too cold outside")
}


// Question 11
document.write("<br><br><br>Question 11<br><br>")
var num1 = +prompt("Enter the first number")
var operator = prompt("Enter the operation you want to perform")
var num2 = +prompt("Enter the second number")
if (operator === "+"){
    document.write("The sum of " + num1 + " and " + num2 + " is " + Number(num1+num2))
} else if (operator === "-"){
    document.write("The difference of " + num1 + " and " + num2 + " is " + Number(num1-num2) ) 
} else if (operator === "*"){
    document.write("The product of " + num1 + " and " + num2 + " is " + Number(num1*num2))
} else if (operator === "/"){
    document.write("The division of " + num1 + " and " + num2 + " is " + Number(num1/num2))
} else if (operator === "%"){
    document.write("The remainder of " + num1 + " and " + num2 + " is " + Number(num1%num2))
} else {
    document.write("Invalid operator")
}