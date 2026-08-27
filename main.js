"use strict"

// UPPGIFT 1
console.log("UPPGIFT 1")
console.log(5 * 2 < 12)
console.log(55 != 22)
console.log(16 / 4 == 4)
console.log(8 + 2 <= 128)
console.log(32 * 8 > 255)

// UPPGIFT 2
console.log("UPPGIFT 2")

let day = "Tisdag"
let partOfDay = day.substring(0, 3)
console.log(partOfDay)

let food = "Hamburgare"
let partOfFood = food.substring(3, 10)
console.log(partOfFood)

let info = "I'll be back"
let partOfInfo = info.substring(5, 12)
console.log(partOfInfo)

// UPPGIFT 3
console.log("UPPGIFT 3")

let string1 = "It's Learning"
let string1Upper = string1.toUpperCase()
let partOfstring1 = string1Upper.substring(5, 13)
console.log(partOfstring1)

let string2 = "JavaScript: The Good Parts"
let string2Lower = string2.toLowerCase()
let partOfString2 = string2Lower.substring(12, 26)
console.log(partOfString2)

// UPPGIFT 4
console.log("UPPGIFT 4")

// Del 1

var numbers = [128, 256, 512, 1024, 2048]

let sumOfNumbers = 0

function sumFunction(item) {
  sumOfNumbers += item
}

numbers.forEach(sumFunction)

console.log(sumOfNumbers)

// Del 2
let avgNumber = 0

avgNumber = sumOfNumbers / numbers.length

console.log(avgNumber)

// Del 3
numbers.push(sumOfNumbers)
console.log(numbers)

// UPPGIFT 5
console.log("UPPGIFT 5")

// Del 1

var countries = ["Sweden", "Denmark", "Finland", "Norway"]

// hitta rätt element
let element2 = countries[1]

// hitta de tre första bokstäverna
let partOfElement2 = element2.substring(0, 3)

console.log(partOfElement2)

// Del 2

let sumOfLetters = 0
let avgLetters = 0
function sumLetters(item) {
  sumOfLetters += item.length
}

countries.forEach(sumLetters)

avgLetters = sumOfLetters / countries.length

console.log("Genomsnittligt antal bokstäver är ", avgLetters)

// UPPGIFT 6

console.log("UPPGIFT 6")

var values = [3, 5, "Jane", true, 144, false]

values.reverse()

console.log(values)

// UPPGIFT 7
console.log("UPPGIFT 7")

var names = ["Jane", "Joe", "Eliza"]
var ages = [21, 34, 22]
var hasPet = [true, false, true]

var multipleArrays = []

// Funktion för att lägga till värden i arrayen multipleArrays
function addValue(item) {
  multipleArrays.push(item)
}

names.forEach(addValue)

ages.forEach(addValue)

hasPet.forEach(addValue)

console.log(multipleArrays)
