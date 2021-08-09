// calculator logic starts here

let currentOperator;
let clicked = false;

// extract operators selected by user
// toggle operator classes onClick

function setOperator(el, op, id) {
  currentOperator = op;
  let childOperator = document.querySelector(".operators").children;

  for (let i = 0; i < childOperator.length; i++) {
    console.log(childOperator[i]);
    childOperator[i].className = "btn btn-dark";
  }
  el.className = "btn btn-primary";
}

// get the total of the 2 inputs

function totalSum() {
  let num1 = document.querySelector("#input1").value;
  let num2 = document.querySelector("#input2").value;
  if (
    isNaN(num1) ||
    isNaN(num2) ||
    currentOperator == null ||
    num1 == "" ||
    num2 == ""
  ) {
    alert("please input numbers only, fill both fields and select an operator");
  } else {
    let total = document.querySelector("#total");
    total.classList.add("totalStyle");
    total.classList.remove("none");
    total.innerHTML = eval(`${num1}${currentOperator}${num2}`);
  }
}

// clear all feilds

function clearSum() {
  document.querySelector("#input1").value = "";
  document.querySelector("#input2").value = "";

  let total = document.querySelector("#total");
  total.classList.add("none");
}

// counter program

// increment logic

let num = 0;

function increment() {
  num += 1;
  let count = document.querySelector("#counter");
  count.classList.add("btn-dark");
  count.innerHTML = num;
}

// decrement logic
function decrement() {
  num -= 1;
  let count = document.querySelector("#counter");
  count.innerHTML = num;
}

// clear all counter

function clearNum() {
  let count = document.querySelector("#counter");
  count.innerHTML = 0;
}

// Math game starts here

let operators = ["+", "-", "*", "/"];
let rand1v = 0;
let randOpv = "";
let rand2v = 0;

// functions to return 2 random numbers and a random operator

let rand1 = () => {
  let num = Math.floor(Math.random() * 15 + 2);
  rand1v = num;
  return num;
};
let randOp = () => {
  let op = operators[Math.floor(Math.random() * operators.length)];
  randOpv = op;
  return op;
};
let rand2 = () => {
  let num = Math.floor(Math.random() * 15 + 2);
  rand2v = num;
  return num;
};

let newQ = true;
let mathQuestion = `${rand1()} ${randOp()} ${rand2()} = ?`;

// check to see if the input answers is correct or wrong

function correct() {
  let resultCheck = document.querySelector("#answerCheck");
  resultCheck.innerHTML = "Correct";
  resultCheck.removeAttribute("class");
  resultCheck.classList.add("btn", "btn-success");
}

function wrong() {
  let resultCheck = document.querySelector("#answerCheck");
  resultCheck.innerHTML = "Wrong";
  resultCheck.removeAttribute("class");
  resultCheck.classList.add("btn", "btn-danger");
}

//  generate new random question
function question() {
  let resultCheck = document.querySelector("#answerCheck");
  resultCheck.classList.add("none");
  let answerInput = document.querySelector("#answer");
  answerInput.value = "";
  let q = document.querySelector("#question");

  if (newQ) {
    q.innerHTML = mathQuestion;
    newQ = !newQ;
  } else {
    mathQuestion = `${rand1()} ${randOp()} ${rand2()} = ?`;
    q.innerHTML = mathQuestion;
  }
}

// show the user if their inputed answer is correct

function resultChecker() {
  console.log(rand1v, randOpv, rand2v);
  let answer = eval(`${rand1v} ${randOpv} ${rand2v}`);

  let answerInput = document.querySelector("#answer");
  if (answerInput.value == answer) {
    correct();
    console.log(answer);
  } else {
    wrong();
  }
}
