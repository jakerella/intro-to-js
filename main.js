

/* ***************************************************************
                 Introduction to JavaScript

   You mist write code to make all of the tests at the bottom pass.
   Run the file in the terminal with: node main.js
   If there are no test failures, you will see a message like this:
                 No errors! Congratulations!
 *************************************************************** */


 // TODO 1:
 // (a) DECLARE and INSTANTIATE a few variables:
 //     `firstName` to store your first name
 //     `lastName` to store your last name
 //     `birthYear` to store the NUMBER of the year you were born - this value CAN NOT
 //         change (it should be immutable), so how will you create it?
 //     `currentYear` to store the NUMBER of the current year
 // (b) Also DECLARE (but do not instantiate) a `middleName` variable.
 // (c) Create an `age` variable that uses an expression to calculate your age from
 //     your `birthYear` and the `currentYear`
 //     (NOTE: DO NOT simply assign a number to the `age` variable, use an expression!)



 // TODO 2:
 // (a) Create a `greeting` variable as a string which says:  "Hello there _____!"
 //     Use an expression to replace the `_____` with the value of the `firstName` variable.
 //     NOTE: DO NOT simply retype your first name in the `greeting` value, USE AN EXPRESSION!
 // (b) Create a variable called `decades` which holds the WHOLE number of decades
 //     between 1900 and your birth year.
 //     NOTE: This variable SHOULD NOT have any decimal places!
 //     NOTE: You MUST USE an expression for this, it may have more than one operation!



 // TODO 3:
 // (a) Declare a new variable called `style`, but do not instantiate it immediately.
 //     If your age is under 35, assign "hip" in this variable, otherwise assign "classic"
 //         to this variable.
 //     NOTE: you MUST "decide" which value to assign using CODE so that if the `age`
 //         variable were to change, the correct value would still be asigned.
 // (b) Declare and instantiate a variable indicating whether your instructor is awesome
 //         or not called `instructorIsAwesome`
 //     Next, declare a variable called `review`, then either assign "good" or "bad"
 //         depending on the value of `instructorIsAwesome`
 //     NOTE: You MUST use code to determine which value to assign to `review`!



 // TODO 4:
 // (a) Create a function called `math` which accepts three arguments: two numbers
 //     and a string for what mathematical operation to perform. For example,
 //     you might call the function like so: math(13, 7, 'add');
 // (b) The `math` function must return the result of the mathematical operation
 //     specified in the third argument. In the example in (a) above, the return
 //     value would be 20.
 //     You will need to use a combination of code statements to make this happen!
 //     NOTE: You must implement 'add', 'subtract', 'multiply', and 'divide'
 // (c) If the `math` function is NOT called with one of the operations in (b)
 //     then it should return the value for something that is Not a Number




 // TODO 5:
 // (a) Write a function called `madlib` that takes 4 separate words as
 //     arguments. The function should insert the words into this sentence:
 //     "I prefer __1__ while I __2__ so that I don't __3__ on the __4__."
 //     (NOTE: the "__1__" and such are where you insert the arguments!)
 //     Finally, the function should return that new sentence.
 // (b) If any of the words is not provided to the function then it should use
 //     the word "bananas" instead.




 /* ******************************************************************
                              Adventure Mode
  You only need to write this function if you're doing Adventure mode!
  ******************************************************************** */

 // TODO 6:
 //     Define a function called `reverse` that returns the reverse of
 //     a string provided as an argument. For example, reverse("jag testar")
 //     should return the string "ratset gaj".



 /* ******************************************************************
                              EPIC Mode
     You only need to write this function if you're doing EPIC mode!
  ******************************************************************** */

 // TODO 7:
 //     Write a function called `translate` that will translate text
 //     passed in as an argument into "Rovarspraket". "Rovarspraket" is a new
 //     language where you double every consonant and place an "o" in between.
 //     For example, translate("this is fun") should return the string:
 //     "tothohisos isos fofunon".




/* ***************************************************************
                          DO NOT EDIT
                     ANYTHING BELOW THIS LINE

   These are the tests that ensure your code runs successfully!
 *************************************************************** */

let hasErrors = false;
let by = 1900;
function assert(condition, msg) {
    if (!condition) {
        console.error(msg);
        hasErrors = true;
    }
}

// Task 1(a)
assert(typeof(firstName) === 'string', '`firstName` is not a string (got ' + typeof(firstName) + ' instead)');
assert(!global.firstName, '`firstName` was not declared correctly!');
assert(typeof(firstName) !== 'undefined' && firstName.length > 0, '`firstName` has no value');
assert(typeof(lastName) === 'string', '`lastName` is not a string (got ' + typeof(lastName) + ' instead)');
assert(!global.lastName, '`lastName` was not declared correctly!');
assert(typeof(lastName) !== 'undefined' && lastName.length > 0, '`lastName` has no value');
assert(typeof(birthYear) === 'number', '`birthYear` is not a number (got ' + typeof(birthYear) + ' instead)');
assert(!global.birthYear, '`birthYear` was not declared correctly!');
if (typeof(birthYear) !== 'undefined') {
    assert(birthYear <= 2000 && birthYear >= 1900, '`birthYear` is not between 1900 and 2000 (' + birthYear + ')');
    try {
        birthYear = 1900;
        assert(false, '`birthYear` was not declared correctly, expected it to be an immutable value');
    } catch(e) { /* Passing! */ }
}
assert(typeof(currentYear) === 'number', '`currentYear` is not a number (got ' + typeof(currentYear) + ' instead)');
assert(!global.currentYear, '`currentYear` was not declared correctly!');
if (typeof(currentYear) !== 'undefined') {
    assert(currentYear === (new Date()).getFullYear(), 'Expected `currentYear` to be ' + (new Date()).getFullYear() + ', but got ' + currentYear + ' instead');
}
if (typeof(birthYear) !== 'undefined' && typeof(currentYear) !== 'undefined') {
    assert(currentYear > birthYear, 'Expected `currentYear` to be greater than `birthYear`');
}
// Task 1(b)
try {
    middleName === '';
} catch(err) {
    assert(false, '`middleName` was not declared');
}
assert(typeof(middleName) === 'undefined', '`middleName` should be undefined (found a ' + typeof(middleName) + ' instead)');
// Task 1(c)
assert(typeof(age) === 'number', '`age` is not a number (got ' + typeof(age) + ' instead)');
assert(!global.age, '`age` was not declared correctly!');
if (typeof(birthYear) !== 'undefined' && typeof(currentYear) !== 'undefined' && typeof(age) !== 'undefined') {
    assert(age === (currentYear - birthYear), 'Expected `age` to be ' + (currentYear - birthYear) + ' (got ' + age + ' instead)');
}


// Task 2(a)
assert(typeof(greeting) === 'string', '`greeting` is not a string (got ' + typeof(greeting) + ' instead)');
assert(!global.greeting, '`greeting` was not declared correctly!');
if (typeof(greeting) !== 'undefined' && typeof(firstName) !== 'undefined') {
    assert(greeting === 'Hello there ' + firstName + '!', '`greeting` is not correct, I expected it to be: Hello there ' + firstName + '!');
}
// Task 2(b)
assert(typeof(decades) === 'number', '`decades` is not a number (got ' + typeof(decades) + ' instead)');
assert(!global.decades, '`decades` was not declared correctly!');
if (typeof(decades) !== 'undefined' && typeof(birthYear) !== 'undefined') {
    let byu = birthYear;
    let d = ((byu-by)-((byu-by)%(34-24)))/(12-4+2);
    assert(decades === d, '`decades` is not correct, I expected it to be: ' + d);
}


// Task 3(a)
assert(typeof(style) === 'string', '`style` is not a string (got ' + typeof(style) + ' instead)');
assert(!global.style, '`style` was not declared correctly!');
if (typeof(age) !== 'undefined' && typeof(style) !== 'undefined') {
    assert(style === ((age < 35) ? 'hip' : 'classic'), 'Expected `style` to be ' + ((age < 35) ? 'hip' : 'classic') + ' (got ' + style + ' instead)');
}
// Task 3(b)
assert(typeof(instructorIsAwesome) === 'boolean', '`instructorIsAwesome` is not a boolean (got ' + typeof(instructorIsAwesome) + ' instead)');
assert(!global.instructorIsAwesome, '`instructorIsAwesome` was not declared correctly!');
assert(typeof(review) === 'string', '`review` is not a string (got ' + typeof(review) + ' instead)');
assert(!global.review, '`review` was not declared correctly!');
if (typeof(review) !== 'undefined') {
    assert(review === ((instructorIsAwesome) ? 'good' : 'bad'), 'Expected `review` to be ' + ((instructorIsAwesome) ? 'good' : 'bad') + ' (got ' + review + ' instead)');
}


// Task 4(a-c)
assert(typeof(math) === 'function', '`math` is not a function (got ' + typeof(math) + ' instead)');
if (typeof(math) !== 'undefined') {
    let first = Math.ceil(Math.random() * 10);
    let second = Math.ceil(Math.random() * 10);
    let result = math(first, second, 'add');
    assert(typeof(result) === 'number', 'Expected the result of math(' + first + ', ' + second + ', "add") to be a number, but got ' + typeof(result) + ' instead');
    assert(result === (first + second), 'Expected the result of math(' + first + ', ' + second + ', "add") to be ' + (first + second) + ', but got ' + result + ' instead');
    result = math(first, second, 'subtract');
    assert(typeof(result) === 'number', 'Expected the result of math(' + first + ', ' + second + ', "subtract") to be a number, but got ' + typeof(result) + ' instead');
    assert(result === (first - second), 'Expected the result of math(' + first + ', ' + second + ', "subtract") to be ' + (first - second) + ', but got ' + result + ' instead');
    result = math(first, second, 'multiply');
    assert(typeof(result) === 'number', 'Expected the result of math(' + first + ', ' + second + ', "multiply") to be a number, but got ' + typeof(result) + ' instead');
    assert(result === (first * second), 'Expected the result of math(' + first + ', ' + second + ', "multiply") to be ' + (first * second) + ', but got ' + result + ' instead');
    result = math(first, second, 'divide');
    assert(typeof(result) === 'number', 'Expected the result of math(' + first + ', ' + second + ', "divide") to be a number, but got ' + typeof(result) + ' instead');
    assert(result === (first / second), 'Expected the result of math(' + first + ', ' + second + ', "divide") to be ' + (first / second) + ', but got ' + result + ' instead');
    result = math(first, second, 'foobar');
    assert(typeof(result) === 'number' && result.toString() === 'NaN', 'Expected the result of math(' + first + ', ' + second + ', "foobar") to be NaN, but got ' + typeof(result) + ' instead');
}

// Task 5(a-b)
assert(typeof(madlib) === 'function', '`madlib` is not a function (got ' + typeof(madlib) + ' instead)');
if (typeof(madlib) !== 'undefined') {
    let result = madlib('tea', 'code', 'nap', 'job');
    assert(typeof(result) === 'string' && result === 'I prefer tea while I code so that I don\'t nap on the job.', 'Expected the result of madlib("tea", "code", "nap", "job") to be "I prefer tea while I code so that I don\'t nap on the job.", but got "' + result + '" instead.');
    result = madlib('tea', 'code');
    assert(typeof(result) === 'string' && result === 'I prefer tea while I code so that I don\'t bananas on the bananas.', 'Expected the result of madlib("tea", "code") to be "I prefer tea while I code so that I don\'t bananas on the bananas.", but got "' + result + '" instead.');
    result = madlib();
    assert(typeof(result) === 'string' && result === 'I prefer bananas while I bananas so that I don\'t bananas on the bananas.', 'Expected the result of madlib() to be "I prefer bananas while I bananas so that I don\'t bananas on the bananas.", but got "' + result + '" instead.');
}

// Success message if no errors...
if (!hasErrors) {
    console.log('You have completed the Mission! Congratulations!\n');
}

// Task 6
assert(typeof(reverse) === 'function', 'ADVENTURE MODE ONLY: `reverse` is not a function (got ' + typeof(reverse) + ' instead)');
if (typeof(reverse) !== 'undefined') {
    let result = reverse('emosewa si nadroJ');
    assert(typeof(result) === 'string' && result === 'Jordan is awesome', 'Expected the result of reverse("emosewa si nadroJ") to be "Jordan is awesome", but got ' + result + ' instead');
}

if (!hasErrors) {
    console.log('You have completed ADVENTURE MODE! Congratulations!\n');
}

// Task 7
assert(typeof(translate) === 'function', 'EPIC MODE: `translate` is not a function (got ' + typeof(translate) + ' instead)');
if (typeof(translate) !== 'undefined') {
    let result = translate('The Iron Yard rocks');
    assert(typeof(result) === 'string' && result === 'ToThohe Iroronon Yarordod rorocockoksos', 'Expected the result of translate("The Iron Yard rocks") to be "ToThohe Iroronon Yarordod rorocockoksos", but got ' + result + ' instead');
}

if (!hasErrors) {
    console.log('You have completed EPIC MODE! Congratulations!');
}
