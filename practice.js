//1. call the elements ie, input and button
const buttons = document.querySelectorAll(".button");
const input = document.querySelector("input");
let string = "";
Array.from(buttons).forEach((button) => {
  // 2.call buttons in array form for each button
  button.addEventListener("click", (e) => {
    //3. add eventlistener and function assign
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      input.value = string;
    } else {
      string = string + e.target.innerHTML; //4. take html value of buttons and make it string value
      input.value = string; //5. reflect string on input
    }
  });
});
