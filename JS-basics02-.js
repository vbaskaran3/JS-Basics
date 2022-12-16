let name = 'Shan' // string
let age = 10 //number
let isHuman = true //boolean
// let names = 'Shan, Adam, Eve, Ram'

//array alwys start with index 0
let names = [] 
//console.log(names)
names = ['Shan', 'Adam', 'Eve', 'Ram', 'Joe', 'Jane', 'Joe'] // string array
let ages = [10,20,40,56,78,100] // number array

//console.log(names[0])
//console.log(names.indexOf('Joe'))

let car = {
  make: 'BMW',
  model: 'X5',
  year: 2022,
  type: 'SUV'  
} 
//object will always be inside {} snd properties will be defined as key/value pair
// ex: key: value
//use the dot operator to access one property of a object
//key should be camelcase, and it should be a one word (no spaces)
let employee = {
    name: 'Shan', // string
    age: 12, //number
    email: 'shan@test.com', //string
    addressOfPerson: '123 Main St, San Jose CA 95132', //string
    interests: ['reading', 'sports', 'travel'] //array of string
}
console.log(car)
console.log(employee)
console.log(employee.name)
console.log(car.make)
console.log(employee['email']) // employee['email'] is same as employee.email

let country = {
    name: 'India',
    capital: 'New Delhi',
    population: '1.4B',
    languages: ['Hindi', 'Telugu', 'Tamil', 'Malayalam', 'Marathi'],
    noOfStates: 28,
    regions: 4
}
console.log(country.languages[3])

const countries = ['India', 'USA', 'Mexico', 'UK', 'France']
console.log(countries)
countries.push('Pakistan')
console.log(countries)

countries.unshift('Canada')
console.log(countries)