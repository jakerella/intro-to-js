(function() {

    /* ***************************************************************
                  Do not edit the lines above here!

                     Introduction to JavaScript

       You mist write code to make all of the tests pass. Open the
       index.html file in a web browser and open the developer tools
       to see if there are any errors! If there are no errors, you
       will see a message like this:
                     No errors! Congratulations!
     *************************************************************** */


     // TODO 1: Declare and instantiate a variable called `firstName` to store
     // your first name.
     // Also DECLARE (but do not instantiate) a `lastName` variable.

     

     // TODO 2: Create a `greeting` variable as a string which says:
     //    "Hello there _____!"
     // Replace the _____ above with the value of the `firstName` variable.
     // NOTE: Do NOT simply retype your first name in the `greeting` value.



     // TODO 3: Create two variables: one for the year you were born, and one
     // for the current year. Then create a third variable to store your age!
     // Name these: `birthYear`, `currentYear`, and `age`



     // TODO 4: Create a new variable called `style` - if your age is under 35,
     // store "hip" in this variable, but if your age is 35 or over, store
     // "classic" in this variable.



     // TODO 5: Create a variable indicating that your instructor is awesome
     // and call it `instructorIsAwesome`. This variable should be a boolean
     // (you can choose the value yourself).
     // Next, create a variable called `review` and, if the instructor is
     // awesome, set `review` to "good", otherwise set the `review` variable to "bad"



     // TODO 6: Create a function called `math` which accepts to numbers as
     // arguments and returns the result of adding them together, mutliplying
     // by 10, then dividing by the first number.



     // TODO 7: Write a function called `madlib` that takes 3 separate words as
     // arguments. The function should insert the words into this sentence:
     // "I prefer __1__ while I __2__ so that I don't __3__ on the __4__."
     // Finally, the function should return that new sentence.



     /* ***************************************************************
                              EPIC Mode

      You only need to write these functions if you're doing EPIC mode!
      Note that there are no tests for these functions, so you'll need
      to confirm they work yourself!
      *************************************************************** */

     // TODO 8: Define a function called `reverse` that returns the reverse of
     // a string provided as an argument. For example, reverse("jag testar")
     // should return the string "ratset gaj".



     // TODO 9: Write a function called `translate` that will translate text
     // passed in as an argument into "Rovarspraket". "Rovarspraket" is a new
     // language where you double every consonant and place an "o" in between.
     // For example, translate("this is fun") should return the string:
     // "tothohisos isos fofunon".




    /* ***************************************************************
                              DO NOT EDIT
                         ANYTHING BELOW THIS LINE

       These are the tests that ensure your code runs successfully!
     *************************************************************** */

    var result;
    var hasErrors = false;
    function assert(condition, msg) {
        console.assert(condition, msg);
        if (!condition) {
            hasErrors = true;
        }
    }

    // Task 1
	assert(typeof(firstName) === 'string', '`firstName` is not a string (got ' + typeof(firstName) + ' instead)');
    assert(!window.firstName, '`firstName` was not declared correctly!');
	assert(typeof(firstName) !== 'undefined' && firstName.length > 0, '`firstName` has no value');
    try {
        lastName === '';
    } catch(err) {
        assert(false, '`lastName` was not declared');
    }
    assert(typeof(lastName) === 'undefined', '`lastName` should not have a value (found a ' + typeof(firstName) + ' instead)');

    // Task 2
    assert(typeof(greeting) === 'string', '`greeting` is not a string (got ' + typeof(greeting) + ' instead)');
    assert(!window.greeting, '`greeting` was not declared correctly!');
    if (typeof(firstName) !== 'undefined') {
        assert(typeof(greeting) !== 'undefined' && greeting === 'Hello there ' + firstName + '!', '`greeting` is not correct, I expected it to be: Hello there ' + firstName + '!');
    }

    // Task 3
	assert(typeof(birthYear) === 'number', '`birthYear` is not a number (got ' + typeof(birthYear) + ' instead)');
    assert(!window.birthYear, '`birthYear` was not declared correctly!');
    if (typeof(birthYear) !== 'undefined') {
        assert(birthYear < 2000 && birthYear > 1940, '`birthYear` does not have a valid value (' + birthYear + ')');
    }
    assert(typeof(currentYear) === 'number', '`currentYear` is not a number (got ' + typeof(currentYear) + ' instead)');
    assert(!window.currentYear, '`currentYear` was not declared correctly!');
    if (typeof(birthYear) !== 'undefined') {
        assert(currentYear === (new Date()).getFullYear(), 'Expected `currentYear` to be ' + (new Date()).getFullYear() + ', but got ' + currentYear + ' instead');
    }
    assert(typeof(age) === 'number', '`age` is not a number (got ' + typeof(age) + ' instead)');
    assert(!window.age, '`age` was not declared correctly!');
    if (typeof(birthYear) !== 'undefined' && typeof(currentYear) !== 'undefined' && typeof(age) !== 'undefined') {
        assert(age === (currentYear - birthYear), 'Expected `age` to be ' + (currentYear - birthYear) + ' (got ' + age + ' instead)');
    }

    // Task 4
    assert(typeof(style) === 'string', '`style` is not a string (got ' + typeof(style) + ' instead)');
    assert(!window.style, '`style` was not declared correctly!');
    if (typeof(age) !== 'undefined' && typeof(style) !== 'undefined') {
        assert(style === ((age < 35) ? 'hip' : 'classic'), 'Expected `style` to be ' + ((age < 35) ? 'hip' : 'classic') + ' (got ' + style + ' instead)');
    }

    // Task 5
    assert(typeof(instructorIsAwesome) === 'boolean', '`instructorIsAwesome` is not a boolean (got ' + typeof(instructorIsAwesome) + ' instead)');
    assert(!window.instructorIsAwesome, '`instructorIsAwesome` was not declared correctly!');
    assert(typeof(review) === 'string', '`review` is not a string (got ' + typeof(review) + ' instead)');
    assert(!window.review, '`review` was not declared correctly!');
    if (typeof(review) !== 'undefined') {
        assert(review === ((instructorIsAwesome) ? 'good' : 'bad'), 'Expected `review` to be ' + ((instructorIsAwesome) ? 'good' : 'bad') + ' (got ' + review + ' instead)');
    }

    // Task 6
    assert(typeof(math) === 'function', '`math` is not a function (got ' + typeof(math) + ' instead)');
    if (typeof(math) !== 'undefined') {
        result = math(7, 13);
        assert(typeof(result) === 'number' && result === 28.571428571428573, 'Expected the result of math(7, 13) to be 28.571428571428573, but got ' + result + ' instead');
    }

    // Task 7
    assert(typeof(madlib) === 'function', '`madlib` is not a function (got ' + typeof(madlib) + ' instead)');
    if (typeof(madlib) !== 'undefined') {
        result = madlib('tea', 'code', 'nap', 'job');
        assert(typeof(result) === 'string' && result === 'I prefer tea while I code so that I don\'t nap on the job.', 'Expected the result of madlib("tea", "code", "nap", "job") to be "I prefer tea while I code so that I don\'t nap on the job.", but got ' + result + ' instead');
    }

    // Task 8
    assert(typeof(reverse) === 'function', 'EPIC MODE: `reverse` is not a function (got ' + typeof(reverse) + ' instead)');
    if (typeof(reverse) !== 'undefined') {
        result = reverse('emosewa si nadroJ');
        assert(typeof(result) === 'string' && result === 'Jordan is awesome', 'Expected the result of reverse("emosewa si nadroJ") to be "Jordan is awesome", but got ' + result + ' instead');
    }

    // Task 9
    assert(typeof(translate) === 'function', 'EPIC MODE: `translate` is not a function (got ' + typeof(translate) + ' instead)');
    if (typeof(translate) !== 'undefined') {
        result = translate('this is fun');
        assert(typeof(result) === 'string' && result === 'tothohisos isos fofunon', 'Expected the result of translate("this is fun") to be "tothohisos isos fofunon", but got ' + result + ' instead');
    }


    // Success message if no errors...
    if (!hasErrors) {
        console.info('No errors! Congratulations!');
    }
})();
