var Venkat = "6"
console.log("Venkat")

function findbiggest(a,b)
{ if(a>b) return a
    else return b}
console.log(findbiggest(100,500)) 


function isBoolean(num)
{
    for(let i = 5000; i <= 9999; i++)
    {
      if(num % i === 5000){
        isBoolean = false;
      } else {
        isBoolean = true;
      }
    }
    return isBoolean;
  }
  console.log('isBoolean')
  
  
   function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
cToF(60);


function cuberoot(x)
{
    return Math.cbrt(x, 1/3)
}
console.log(cuberoot(48))


function conversion(x,y)
{
    return y = x / 12;
}
console.log(conversion(72))


//Convert from Pounds to Kilograms	kg=lb/2.2046
//Convert from Kilograms to Pounds	lb=kg*2.204


var lb= 72;
var kilograms = lb / 2.2046;
console.log(kilograms);
var kilograms =52;
var lb = kilograms*2.204;
console.log(lb);
  
  
var a= "Venkat";var b="aravindbalaji";
function findlongest(a, b) 
{
    if(a > b) return a
    else return b
}
console.log(findlongest(a,b))


var arr = ["ajay", "Arunkumar", "Ram", "Suriya", "Aishwarya"];
console.log (
  arr.reduce((a, b) => a.length <= b.length ? a : b)
)