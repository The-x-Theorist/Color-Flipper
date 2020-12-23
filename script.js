//All the elements selected
const background = document.querySelector(".background");
const btn = document.querySelector(".changer");
const icon = document.querySelector(".ionicons");

//Generating a random number
const randomNumber = function (number) {
  const no = Math.floor(Math.random() * number);
  return no;
};

//Main function
const changeBackground = function () {
  const number1 = randomNumber(255);
  const number2 = randomNumber(255);
  const number3 = randomNumber(255);
  background.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;

  icon.removeAttribute("name");
  icon.setAttribute("name", "happy-outline");
};

//Hover in function for the button
const hoverIn = function () {
  icon.removeAttribute("name");
  icon.setAttribute("name", "accessibility-outline");
};

//hoverout function for the button
const hoverOut = function () {
  icon.removeAttribute("name");
  icon.setAttribute("name", "earth-outline");
};

//All the event listeners
btn.addEventListener("mouseover", hoverIn);
btn.addEventListener("mouseout", hoverOut);

btn.addEventListener("click", changeBackground);
