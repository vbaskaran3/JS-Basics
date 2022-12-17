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

//8 Create a json file that has a list of atleast 10 states in USA with atleast 8 properties
{
  "United states": [
    {
      "State": "California",
      "Capital": "Sacramento",
      "Largest City": "Los Angeles",
      "Population": "40 million",
      "Total Area":  "423967 km^2",
      "Land Area": "403466 km^2",
      "Water Area": "20501 km^2",
      "No.of Reps.": "53",
    } 
    {
      "State": "Florida",
      "Capital": "Tallahassee",
      "Largest City": "Jacksonville",
      "Population": "4 million",
      "Total Area":  "65378 km^2",
      "Land Area": "53525 km^2",
      "Water Area": "10540 km^2",
      "No.of Reps.": "27",
    }
    {
      "State": "Georgia",
      "Capital": "Atlanta",
      "Largest City": "Atlanta",
      "Population": "3 million",
      "Total Area":  "13378 km^2",
      "Land Area": "31525 km^2",
      "Water Area": "8540 km^2",
      "No.of Reps.": "14",
    }
    {
      "State": "Michigan",
      "Capital": "Lansen",
      "Largest City": "Detroit",
      "Population": "3 million",
      "Total Area":  "15378 km^2",
      "Land Area": "12525 km^2",
      "Water Area": "9540 km^2",
      "No.of Reps.": "13",
    }
    {
      "State": "New York",
      "Capital": "Albany",
      "Largest City": "New York",
      "Population": "6 million",
      "Total Area":  "18378 km^2",
      "Land Area": "87566 km^2",
      "Water Area": "9000 km^2",
      "No.of Reps.": "27",
    }
    {
      "State": "North Carolina",
      "Capital": "Raleigh",
      "Largest City": "Charlotte",
      "Population": "5 million",
      "Total Area":  "8378 km^2",
      "Land Area": "5566 km^2",
      "Water Area": "16000 km^2",
      "No.of Reps.": "12",
    }
    {
      "State": "Pennsylvannia",
      "Capital": "Harrisburg",
      "Largest City": "Philadelphia",
      "Population": "8 million",
      "Total Area":  "16378 km^2",
      "Land Area": "67566 km^2",
      "Water Area": "18000 km^2",
      "No.of Reps.": "15",
    }
    {
      "State": "Texas",
      "Capital": "Austin",
      "Largest City": "Houston",
      "Population": "7 million",
      "Total Area":  "16378 km^2",
      "Land Area": "65786 km^2",
      "Water Area": "8000 km^2",
      "No.of Reps.": "17",
    }
    {
      "State": "Washington",
      "Capital": "Olympia",
      "Largest City": "Seattle",
      "Population": "32 million",
      "Total Area":  "156378 km^2",
      "Land Area": "89566 km^2",
      "Water Area": "19000 km^2",
      "No.of Reps.": "44",
    }
    {
      "State": "South Carolina",
      "Capital": "Columbia",
      "Largest City": "Charleston",
      "Population": "8 million",
      "Total Area":  "21078 km^2",
      "Land Area": "18966 km^2",
      "Water Area": "12000 km^2",
      "No.of Reps.": "20",
    }

  ]
}

//9 Create a json object for cricket team.It should contain details about team and players.
{
  "Indian National cricket team:"[
    {
      "Tests:"[
       "Played": "563",
       "Won": "168",
       "Lost": "174",
       "Championship":"Runners in 2021",
      ]
    }
    {
      "ODI's:"[
       "Played": "1020",
       "Won": "523",
       "Lost": "436",
       "Championship":"Winners in 1983 & 2011",
      ]
    }
    {
      "T20's:"[
       "Played": "193",
       "Won": "123",
       "Lost": "61",
       "Championship":"Winners in 2007",
      ]
    }
    {
       "Players:"
       [
       "Name": "Rohit Sharma",
       "Age": "35",
       "Position": "Captain",
       "Format":"Tests,ODIs&T20s",
      ]
      [
        "Name": "KL Rahul",
        "Age": "32",
        "Position": "Vice-Captain",
        "Format":"Tests,ODIs&T20s",
      ]
      [
        "Name": "Virat Kohli",
        "Age": "34",
        "Position": "Batsman",
        "Format":"Tests,ODIs&T20s",
      ]
      [
        "Name": "Rishab Pant",
        "Age": "26",
        "Position": "Wicket-keeper",
        "Format":"Tests,ODIs&T20s",
      ]
      [
        "Name": "R Ashwin",
        "Age": "36",
        "Position": "Spin-Bowler",
        "Format":"Tests,ODIs&T20s",
      ]
      [
        "Name": "M Siraj",
        "Age": "27",
        "Position": "Fast-Bowler",
        "Format":"Tests,ODIs&T20s",
      ]
      [
        "Name": "Shreyas Iyer",
        "Age": "30",
        "Position": "Batsman",
        "Format":"Tests,ODIs&T20s",
       ]
       [
        "Name": "Shubman Gill",
        "Age": "25",
        "Position": "Opening Batsman",
        "Format":"Tests",
      ]
      [
        "Name": "Jasprit Bumrah",
        "Age": "30",
        "Position": "Fast Bowler",
        "Format":"Tests,ODIs&T20s",
      ]
      [
        "Name": "Kuldeep Yadav",
        "Age": "33",
        "Position": "Spin Bowler",
        "Format":"Tests,ODIs",
      ]

    }
  ]
}


        
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