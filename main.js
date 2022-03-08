 var userName = prompt('Hi, please let me know your name');

 var initialUserName = userName.substring(0,1).toUpperCase();
 console.log(initialUserName);

 var restUsername = userName.substring(1).toLowerCase();
 console.log(userName);
 userName = initialUserName + restUsername;
 userName +='.';
 document.getElementById('u-name').innerHTML =userName;

 document.getElementById("greeting").innerHTML = userName.substring(0,1) + "for" + userName;

 var userAge = prompt("How old are you?", "Please type as number here");
 console.log(typeof(userAge), userAge );

 userAge = parseInt(userAge);
 console.log(typeof(userAge), userAge);

 document.getElementById("age").innerHTML=userAge;

 
 document.getElementById("lucky").innerHTML = Math.ceil(Math.random()*6);

 var number1 = prompt("Please tell me a number");
 var number2 = prompt("Please tell me one more number")
 var number3 = prompt("Please tell me last one more number")
 var nMax = Math.max(number1, number2, number3)
 var nMin = Math.min(number1, number2, number3)
 alert(`Max: ${nMax}
    Min: ${nMin}`);
    
//  alert( "MAX:" + nMax+ '/n' + 'min:' + nMin)

 document.getElementById("numbers").innerHTML = 
 `<tr>
   <td>${number1}</td>
   <td>${number2}</td>
   <td>${number3}</td>
 </tr>`;

 document.getElementById("maximum").innerHTML = 
 `<tr>
   <td>${nMax}</td>
   <td>${nMin}</td>
 </tr>`

 
 
//  '<tr> <td>' + '<tr> <td>' + '<tr> <td>' + '<tr> <td>'
//  how to putt prefix to userName

var testNumber = 1;
testNumber = 5;
console.log(testNumber);





/* var userName = prompt("Hello,Please update me on today's weather");

document.getElementById("weather").innerHTML = userName;
document.getElementById("deg").innerHTML = userName;

var userAge =prompt("Hello,Please tell me where you live?")

document.getElementById("stay").innerHTML = userName */