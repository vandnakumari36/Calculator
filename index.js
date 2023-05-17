//TODO - Make M+ M- functional
let string = "";
let buttons = document.querySelectorAll(".button"); //1.select the button
Array.from(buttons).forEach((button) => {
  //Array.from() lets you create Array s from: iterable objects (objects such as Map and Set ); or, if the object is not iterable, array-like objects (objects with a length property and indexed elements).
  //The forEach() method calls a function for each element in an array.
  //The forEach() method is not executed for empty elements.
  //2.create function
  button.addEventListener("click", (e) => {
    //3.add event listener
    if (e.target.innerHTML == "=") {
      //6. add value or logic to = button
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      //7. logic fo C button
      string = "";
      document.querySelector("input").value = string;
    } else {
      // using if else it will not reflect equal sign
      //console.log(e.target); //print value in console
      string = string + e.target.innerHTML; //4.take html value of buttons and make it string value
      document.querySelector("input").value = string; //5. push it in input element
    }
  });
});
