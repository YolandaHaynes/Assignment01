// step 1
// Convert the following highlighted identifiers to Camel Case notation:
// let some_month
// function the Month()
// let current-month
// let summer_month
// let MyLibrary-function

// answer
// let someMonth;
// function theMonth();
// let currentMonth;
// let summerMonth;
// let myLibraryFunction;


// step 2
// Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

// answer
// let numberExample = 5;
// let stringExample= "Hello World";
// let booleanExample = true;
// let nullExample = null;


// step 3
// Give me two examples of complex / variable expressions.

// answer
// let example1 = 17 + 3 * 22;
// let example2 = 8 / 6 + 19;


// step 4
// Declare (but do not assign) 9 variables for the following identifiers: firstName, lastName, address, city, state, zip, yourAge, referralSource, mayWeContactYou.

// answer
// let firstName;
// let lastName;
// let address;
// let city;
// let state;
// let zip;
// let yourAge;
// let referralSource;
// let mayWeContactYou;


// step 5
// Take the 9 variables that you created above and demonstrate 3 methods for declaring and assigning values to those variables.

// answer
// let firstName = "Jane";
// let lastName = "Smith";
// let city = "San Diego";


// step 6
// Create a variable.
//Add a number and a string and display the coerced result in the browser’s console window.

// answer
// let aStringExample = 'Hello there ';
// console.log(aStringExample + 11);


//step 7
//Create two variables.
//For the first variable, add a Boolean and a string and display the coerced result.
//For the second variable, add a number and a Boolean and display the coerced result.

// answer
// let booleanExample = true + "you are correct!";
// let numberExample = 20 + false;
//console.log(booleanExample);
//console.log(numberExample);


//step8
//Is the following string literal valid? If not, how would you fix it?
//let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
//console.log(someString)

// answer
// It is not a valid string literal.
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
// console.log(someString);


//step 9
//Create a variable that produces a null value in the console window.
//Then, create a variable that produces an undefined value in the console window.

// answer
// let valueNull = null;
// let valueUndefined = undefined
// console.log(valueNull);
// console.log(valueUndefined);


//step 10
//Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

// answer
// let typeString = 'This is a string'
// let typeNum= 10;
// let typeBoolean = true;
// let typeObject = {color:'Teal'}
// let typeUndefined = undefined;

// console.log(typeof typeString);
// console.log(typeof typeNum);
// console.log(typeof typeBoolean);
// console.log(typeof typeObject);
// console.log(typeof typeUndefined);


//step 11
//Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
//Hello Zak Ruvalcaba, welcome to the JavaScript class!
//Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.

// answer
// let alertMsg = 'Hello ' + 'Yolanda Haynes, ' + 'welcome to the JavaScript class!';
// alert(alertMsg);


//step 12
//Declare a variable called name and set it equal to your name.
//Substitute your name in the previous alert string with the variable instead.

// answer
// let name = 'Yolanda Haynes';
// let msg= 'Hello ' + name + ', ' + 'welcome to the JavaScript class!';
// alert(msg);


//step 13
//Declare a variable called course and set it equal to “JavaScript”.
//Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

// answer
// let course = 'JavaScript';
// let name = 'Yolanda Haynes';
// let newMsg = 'Hello ' + name + ', ' + 'welcome to the ' + course + ' class!';
// alert(newMsg);


//step 14
//Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
//Hello Zak Ruvalcaba.
//Welcome to the JavaScript class!

// answer
// let course = 'JavaScript';
// let name = 'Yolanda Haynes';
// let msgLineBreak = 'Hello ' + name + '. \n' + 'Welcome to the ' + course + ' class!';
// alert(msgLineBreak);


//step 15
//Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.

// answer
// let name = prompt('Please enter your name');
// let course = 'JavaScript';
// let userInputMsg = 'Hello ' + name + '. \n' + 'Welcome to the ' + course + ' class!';
// alert(userInputNameMsg);


//step 16
//Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

// answer
// let name = prompt('Please enter your name');
// let course = prompt('Please enter the class you are taking');
// let userInputClassMsg = 'Hello ' + name + '. \n' + 'Welcome to the ' + course + ' class!';
// alert(userInputClassMsg);


//step 17
//Declare a variable called x and assign it a value of 10.
//Declare a variable called y and assign it a value of 20.
//Display the sum of those two numbers in the console window.

// answer
// let x = 10;
// let y = 20;
// console.log(x + y);


//step 18
//Declare a variable called x and assign it a value of 20.
//Add and assign 20 to that variable and display the result in the console window.
//The result should be 40.

// answer
// let x = 20;
// x += 20;
// console.log(x);


//step 19
//Declare a variable called x and assign it a value of 20.
//Multiply and assign 5 to that variable and display the result in the console window.
//The result should be 100.

// answer
// let x = 20;
// x *=5;
// console.log(x);s


//step 20
//Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//Divide and assign 1 to that variable and display the result in the console window.
//The result should be 2. If you got 6.66 try again.

// answer
// let x = 20 % 3;
// x /= 1;
// console.log(x);


//step 21
//Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

// answer
// let x = 10;
// let y = 20;
// console.log(x < y);


//step 22
//Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

// answer
// let x = 50;
// let y = '50';
// console.log(x === y);
