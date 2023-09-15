//  Example 1

//  Is it even?

// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

function isEven(n) {
  if (typeof n === "number" && !Number.isInteger(n)) {
    return false;
  }
  return n % 2 === 0;
}
console.log(isEven(2)); // true
console.log(isEven(4.2)); // false
console.log(isEven(-10)); // true
console.log(isEven(3.14)); // false
console.log(isEven("hello")); // false

//  Example 2

//  Will you make it?

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away!
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

function canGetToPump(fuelLeft, distanceToPump, fuelEfficiency) {
  maxDistance = fuelLeft * fuelEfficiency;
  return maxDistance >= distanceToPump;
}
const canGetToPump77 = canGetToPump(2, 50, 25);
if (canGetToPump) {
  console.log("You can make it to the pump!");
} else {
  console.log("You need to find a gas can.");
}

//  Example 3

//  You Can't Code Under Pressure #1

//  Code as fast as you can! You need to double the integer and return it.

function doubleInteger(n) {
  return n * 2;
}
const doubledNumber = doubleInteger(10);
console.log(doubledNumber); // 20

//  Example 4

//  Largest 5 digit number in a series

//  In the following 6 digit number: 283910
//  91 is the greatest sequence of 2 consecutive digits.
//  In the following 10 digit number: 1234567890
//  67890 is the greatest sequence of 5 consecutive digits.
//  Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given.
// The number will be passed in as a string of only digits. It should return a five digit integer.
// The number passed may be as large as 1000 digits.

function largestFiveDigitNumber(str) {
  const digits = str.split("");
  let largestNumber = 0;

  for (let i = 0; i < digits.length - 4; i++) {
    const currentNumberString = digits.slice(i, i + 5).join("");
    const currentNumber = Number(currentNumberString);
    if (currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
  }
  return largestNumber;
}
const largestNumberIn283910 = largestFiveDigitNumber("283910");
console.log(largestNumberIn283910); // 83910
const largestNumberIn1234567890 = largestFiveDigitNumber("1234567890");
console.log(largestNumberIn1234567890); // 67890

//  Example 5

//  Graceful Tipping

// Adding tip to a restaurant bill in a graceful way can be tricky, thats why you need make a function for it.
// The function will receive the restaurant bill (always a positive number) as an argument. You need to 1) add at least 15% in tip, 2) round that number up to an elegant value and 3) return it.
// What is an elegant number? It depends on the magnitude of the number to be rounded. Numbers below 10 should simply be rounded to whole numbers. Numbers 10 and above should be rounded like this:
// 10 - 99.99... ---> Round to number divisible by 5
// 100 - 999.99... ---> Round to number divisible by 50
// 1000 - 9999.99... ---> Round to number divisible by 500
// And so on...
// Good luck!
// Examples
//  1  -->    2
//  7  -->    9
// 12  -->   15
// 86  -->  100

function addElegantTip(billAmount) {
  const tipAmount = billAmount * 0.15;
  const elegantTipAmount = roundUpToElegantValue(tipAmount);
  return billAmount + elegantTipAmount;
}
function roundUpToElegantValue(number) {
  const magnitude = Math.log10(number) + 1;
  if (magnitude < 1) {
    return Math.ceil(number);
  } else if (magnitude < 3) {
    return Math.ceil(number / 5) * 5;
  } else if (magnitude < 4) {
    return Math.ceil(number / 50) * 50;
  } else {
    return Math.ceil(number / 500) * 500;
  }
}
const totalBill = addElegantTip(10);
console.log(totalBill); // 15

//  Example 6

//  By 3, or not by 3? That is the question . . .

// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three.
// If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.
// Given a series of digits as a string, determine if the number represented by the string is divisible by three.
// Example:
// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

function isDivisibleByThree(numberString) {
  let sumOfDigits = 0;
  for (let i = 0; i < numberString.length; i++) {
    sumOfDigits += Number(numberString[i]);
  }
  return sumOfDigits % 3 === 0;
}
const isDivisibleByThreee = isDivisibleByThree("123");
const isDivisibleByThreee1 = isDivisibleByThree("7");
console.log(isDivisibleByThreee); // true
console.log(isDivisibleByThreee1); // false

//  Example 7

//  N-th Fibonacci

// I love Fibonacci numbers in general, but I must admit I love some more than others.
// I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.
// For example:
// nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.
// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

function nthFibonacci(n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 2;
  }
  return nthFibonacci(n - 2);
}
const nthFibonacciNumber = nthFibonacci(4);
console.log(nthFibonacciNumber); // 2

//  Example 8

//  Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function sumOfMultiplesOf3Or5(n) {
  if (n < 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
const sumOfMultiplesOf3Or5Below10 = sumOfMultiplesOf3Or5(10);
console.log(sumOfMultiplesOf3Or5Below10); // 23
const sumOfMultiplesOf3Or5Below100 = sumOfMultiplesOf3Or5(100);
console.log(sumOfMultiplesOf3Or5Below100); // 2318
const sumOfMultiplesOf3Or5BelowNegative10 = sumOfMultiplesOf3Or5(-10);
console.log(sumOfMultiplesOf3Or5BelowNegative10); // 0

//  Example 9

//  Remove First and Last Character

// It's pretty straightforward.
// Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeFirstAndLastCharacter(str) {
  return str.substring(1, str.length - 1);
}
const str = "Hello, world";
const newStr = removeFirstAndLastCharacter(str);
console.log(newStr); // 'ello, worl'

//  Example 10

//  Remove String Spaces

// Write a function that removes the spaces from the string, then return the resultant string.
// Examples:
// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function removeSpaces(strr) {
  return strr.replace(/\s/g, "");
}
const strr = "8 j 8   mBliB8g  imjB8B8  jl  B";
const newStrr = removeSpaces(strr);
console.log(newStrr); // '8j8mBliB8gimjB8B8jlB'

//  Example 11

//  Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
const isPlayingBanjo = areYouPlayingBanjo("Ringo");
console.log(isPlayingBanjo); // "Ringo plays banjo"

//  Example 12

//  Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
// Example:
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

function greet(name) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  name += "!";
  return "Hello " + name;
}
const greeting = greet("riley");
console.log(greeting); // "Hello Riley!"

//  Example 13

//  Absent vowel

// Your job is to figure out the index of which vowel is missing from a given string:
// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function findMissingVowelIndex(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (!str.includes(vowels[i])) {
      return i;
    }
  }
  return -1;
}
const missingVowelIndex = findMissingVowelIndex(
  "John Doe hs seven red pples under his bsket"
);
console.log(missingVowelIndex); // 0

//  Example 14

//  Validate my Password

// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.
// Passwords must abide by the following requirements:
// More than 3 characters but less than 20.
// Must contain only alphanumeric characters.
// Must contain letters and numbers.

function isPasswordValid(password) {
  if (password.length < 3 || password.length > 20) {
    return false;
  }
  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    return false;
  }
  if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/.test(password)) {
    return false;
  }
  return true;
}
const password = "StrongPassword123";
const isValid = isPasswordValid(password);
if (isValid) {
  console.log("VALID");
} else {
  console.log("INVALID");
}

//  Example 15

//  Human readable duration format

// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// It is much easier to understand with an example:
// For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
// Note that spaces are important.
// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(seconds) {
  const unitsOfTime = ["years", "days", "hours", "minutes", "seconds"];
  let durationString = "";
  for (const unit of unitsOfTime) {
    const numberOfUnits = Math.floor(seconds / unit);
    if (numberOfUnits > 0) {
      durationString +=
        numberOfUnits + " " + unit + (numberOfUnits > 1 ? "s" : "") + ", ";
      seconds -= numberOfUnits * unit;
    }
  }
  durationString = durationString.substring(0, durationString.length - 2);
  if (durationString === "") {
    return "now";
  } else {
    return durationString;
  }
}
const durationString = formatDuration(62);
console.log(durationString); // "1 minute and 2 seconds"

//  Example 16

//  The Coupon Code

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(couponCode, correctCode, expirationDate, currentDate) {
  if (couponCode !== correctCode) {
    return false;
  }
  const expirationDateObj = new Date(expirationDate);
  const currentDateObj = new Date(currentDate);
  if (expirationDateObj >= currentDateObj) {
    return true;
  } else {
    return false;
  }
}
const isCouponValid = checkCoupon("123", "123", "July 9, 2015", "July 9, 2015");
console.log(isCouponValid); // true

//  Example 17

//  Century From Year

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function getCentury(year) {
  const century = Math.ceil(year / 100);
  return century;
}
const century = getCentury(1705);
console.log(century); // 18

//  Example 18

//  Unlucky Days

// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.
// Examples:
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

function unluckyDays(year) {
  const fridays = [];
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      fridays.push(date);
    }
  }
  let unluckyDaysCount = 0;
  for (const friday of fridays) {
    if (friday.getDate() === 13) {
      unluckyDaysCount++;
    }
  }
  return unluckyDaysCount;
}
const unluckyDaysCount = unluckyDays(2015);
console.log(unluckyDaysCount); // 3

//  Example 19

//  Fizz Buzz Cuckoo Clock

// Your story
// You've always loved both Fizz Buzz katas and cuckoo clocks, and when you walked by a garage sale and saw an ornate cuckoo clock with a missing pendulum, and a "Beyond-Ultimate Raspberry Pi Starter Kit" filled with all sorts of sensors and motors and other components, it's like you were suddenly hit by a beam of light and knew that it was your mission to combine the two to create a computerized Fizz Buzz cuckoo clock!
// You took them home and set up shop on the kitchen table, getting more and more excited as you got everything working together just perfectly. Soon the only task remaining was to write a function to select from the sounds you had recorded depending on what time it was:
// Your plan
// When a minute is evenly divisible by three, the clock will say the word "Fizz".
// When a minute is evenly divisible by five, the clock will say the word "Buzz".
// When a minute is evenly divisible by both, the clock will say "Fizz Buzz", with two exceptions:
// On the hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo bird will come out and "Cuckoo" between one and twelve times depending on the hour.
// On the half hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo will come out and "Cuckoo" just once.
// With minutes that are not evenly divisible by either three or five, at first you had intended to have the clock just say the numbers ala Fizz Buzz, but then you decided at least for version 1.0 to just have the clock make a quiet, subtle "tick" sound for a little more clock nature and a little less noise.
// Your input will be a string containing hour and minute values in 24-hour time, separated by a colon, and with leading zeros. For example, 1:34 pm would be "13:34".
// Your return value will be a string containing the combination of Fizz, Buzz, Cuckoo, and/or tick sounds that the clock needs to make at that time, separated by spaces. Note that although the input is in 24-hour time, cuckoo clocks' cuckoos are in 12-hour time.
// Some examples
// "13:34"       "tick"
// "21:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
// "11:15"       "Fizz Buzz"
// "03:03"       "Fizz"
// "14:30"       "Cuckoo"
// "08:55"       "Buzz"
// "00:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
// "12:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
// Have fun!

function fizzBuzzCuckooClock(time) {
  const [hours, minutes] = time.split(":");
  const hoursInt = parseInt(hours);
  const minutesInt = parseInt(minutes);
  let cuckooSound;
  if (minutesInt === 0) {
    cuckooSound = "Cuckoo ".repeat(hoursInt);
  } else if (minutesInt === 30) {
    cuckooSound = "Cuckoo";
  } else {
    cuckooSound = "";
  }
  let fizzBuzzSound;
  if (minutesInt % 3 === 0 && minutesInt % 5 === 0) {
    fizzBuzzSound = "Fizz Buzz";
  } else if (minutesInt % 3 === 0) {
    fizzBuzzSound = "Fizz";
  } else if (minutesInt % 5 === 0) {
    fizzBuzzSound = "Buzz";
  } else {
    fizzBuzzSound = "tick";
  }
  return cuckooSound + fizzBuzzSound;
}
const sound = fizzBuzzCuckooClock("13:34");
console.log(sound); // "tick"

//  Example 20

//  Milk and Cookies for Santa

// Happy Holidays fellow Code Warriors!
// It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! Wait... when exactly do we need to do that?
// Time for Milk and Cookies
// Complete the function function that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.
// Keep in mind Javascript's Date month is 0 based!
// Examples
// timeForMilkAndCookies(new Date(2013, 11, 24))  // true
// timeForMilkAndCookies(new Date(2013, 0, 23))   // false
// timeForMilkAndCookies(new Date(3000, 11, 24))  // true

function timeForMilkAndCookies(date) {
  if (date.getMonth() != 11) {
    return false;
  }
  if (date.getDate() != 24) {
    return false;
  }
  return true;
}
const christmasEve = new Date(2013, 11, 24);
const isTimeForMilkAndCookies = timeForMilkAndCookies(christmasEve);
console.log(isTimeForMilkAndCookies);  // true
