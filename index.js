let myAge = 35
let sisterAge = 33

// increase my age by 15
myAge += 15

// decrease my age by 20
myAge -= 20

// multiply my age by itself

myAge **= 2

// what remains when i divide my age by 7
myAge %= 7

// increase my age by 1
myAge++
myAge++

const totalAge = myAge + sisterAge

const avgAge = totalAge/2

const productAge = myAge * sisterAge


let myName

myName = `My name is Franc, and I am ${myAge} years old
. I was born in ${new Date().getFullYear() - myAge}`


console.log(myAge)