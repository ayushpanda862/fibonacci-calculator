const input = document.getElementById("userinput");
const inputans = document.getElementById("inputans");
const outputans = document.getElementById("outputans")

function fibonacci(num) {
  let num1 = 1;
  let num2 = 2;
  let sum;
  if (num === 1) {
    return num1;
  } else if (num === 2) {
    return num2;
  } else {
    for (let i = 3; i <= num; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return num2;
  }
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    console.log(input.value);
    const inputvalnum = input.value;
    console.log(inputvalnum);
    const inputvaltext = inputvalnum.toString();
    inputans.innerText = `Input: ${inputvaltext}`;
    const answer = fibonacci(inputvalnum);
    outputans.innerText = `Answer: ${answer}`;
    console.log(`Fibonacci(${inputvaltext})` + fibonacci(inputvalnum));
    input.value = null;
  }
});
