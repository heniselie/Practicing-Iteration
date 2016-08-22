//******** Instructions # 1

// Write a for loop that uses a counter variable 
//initialized at 5 and then increments it by 10 
//every time it executes. Use console.log() to 
//output the value of the counter variable each 
//time through the loop. Stop execution of the loop if the 
//counter variable's value is greater than 120.

// Example output:

// Current value is 5

// Current value is 15

// Current value is 25

// ...

   console.log("************** here is Question #1 solution ****************");
for (var i = 5; i <=120; i = i + 10) {
	console.log("Current value is " + i);
}

/////////End of Question #1  /////////////////

// Instructions # 2
// Decrement by division
// Write a for loop with a counter variable 
//initialized at 4096. Each time the loop executes 
//divide the counter variable's value by 2. Use 
//console.log() to output its value every time. When
// the counter variable's value is 1, stop execution.
// Example output:
// Current value is 4096
// Current value is 2048
// Current value is 1024
// ...
console.log("************ here is Question #2 solution *********************");
for (var i = 4096;i <= 4096 && i > 1; i = i / 2) {																																	 
     console.log("Current value is " + i);
}



console.log("************ here is Question #3 solution *********************");

// Array iteration

// Create an array that contains the names of American 
//Presidents. Loop over that array with a for loop, and 
//use string concatenation with console.log() to output 
//the order and name of each President (see example below).

// Example output:

// President #1 was George Washington

// President #2 was John Adams

// President #3 was Thomas Jefferson

// ...
// var presidentNum = [" ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

var listOfPresidents = [" ","George Washington", "John Adams", "Thomas Jefferson",
"James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", 
"Martin Van Buren", "William H. Harrison", "John Tyler", "James K. Polk", 
"Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan",	
"Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Rutherford B. Hayes",	
"James A. Garfield", "Chester A. Arthur", "Grover Cleveland", "Benjamin Harrison",	
"Grover Cleveland", "William McKinley", "Theodore Roosevelt", "William Howard Taft",	
"Woodrow Wilson", "Warren G. Harding", "Calvin Coolidge", "Herbert Hoover", "Franklin D. Roosevelt",	
"Harry S Truman", "Dwight D. Eisenhower", "John F. Kennedy", "Lyndon B. Johnson",	
"Richard M. Nixon", "Gerald R. Ford", "James Earl Carter", "Ronald Reagan", 
"George Bush", "William J. Clinton", "George W. Bush", "Barack H. Obama"];

 for (var i = 1; i < listOfPresidents.length; i++) {
	listOfPresidents[i];
	console.log("President #" + i + " was " + listOfPresidents[i]);
} 

console.log("************ here is Question #4 solution *********************");

// Object iteration

// Use can use another kind of for loop to iterate over objects. 
//Iterate over the object below and use console.log() to output 
//the names of the keys in the object.

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}

}
  console.log(antSpecies);


