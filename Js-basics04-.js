//1 write a function that counts the number of character in a string the method shoud return thenumber

        var venkat = 6
        console.log(venkat)


//2 write a function that accepts an two numbers and return the largest number


         function findbiggest(a, b) {
         if (a > b) return a
         else return b
         }
         console.log(findbiggest(100, 200))


//3 write a function that returns boolean flag if a number is between 5000 and 9999

function isBoolean(number) {
  let i = 5000; i <= 9999; i++
  {
  if (num % i === 5000) {
  isBoolean = false;
  } else {
  isBoolean = true;
  }
  }
  return isBoolean;
  }

   console.log(isBoolean)


//4 write a function that accepts a number and returns the cube root of the number
   
   function cuberoot(x)
   {
   return Math.cbrt(x, 1/3)
   }
   console.log(cuberoot(55))


//5 write a function that converts inches into feet. it should get inchees as inout parammeter and return value infeet
  function conversion(inches,feet)
  {
    return feet = inches / 12;
  }
  console.log(conversion(72))

//6 write a function that converts degree to fahrenheit.


   function cToF(celsius) 
   {
   var cTemp = celsius;
   var cToFahr = cTemp * 9 / 5 + 32;
   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
   console.log(message);
   }
   cToF(60);


//7 write a program that converts kg to lb and vice vera. for eg, if the input is 72lb, it should return 32.6587kg, if the input 52kg, it should return 114.6404lb


  var lb= 72;
  var kilograms = lb / 2.2046;
  console.log(kilograms);

  var kilograms =52;
  var lb = kilograms*2.204;
  console.log(lb);  

        
//10 write a function that returns the longest string if two strings are given as input parameters
          

  var a= "Venkat";var b="aravindbalaji";
  function findlongest(a, b) 
  {
  if(a > b) return a
  else return b
  }  
  console.log(findlongest(a,b))


//11 write a function that returns the string of shortest length if an array is passed a parameter.
           
  var arr = ["Aravind", "venkat", "Rama", "Suriya", "Aishwarya"];
  console.log(arr.reduce((a, b) => a.length <= b.length ? a : b))