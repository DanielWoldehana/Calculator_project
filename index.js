// calculator logic starts here

let currentOperator;
let clicked = false;
function setOperator(op, id) {
  clicked = !clicked;
  console.log(clicked);
  currentOperator = op;
  if (clicked) {
    document.querySelector(`#${id}`).classList.remove("btn-dark");
    document.querySelector(`#${id}`).classList.add("btn-secondary");
  } else {
    document.querySelector(`#${id}`).classList.remove("btn-secondary");
    document.querySelector(`#${id}`).classList.add("btn-dark");
  }
}

function total() {
  let total = document.querySelector("#total");
  total.classList.add("totalStyle");
  let num1 = document.querySelector("#input1").value;
  let num2 = document.querySelector("#input2").value;
  if (isNaN(num1) || isNaN(num2) || currentOperator == null) {
    alert("please input numbers only, select operator");
  } else if (num1 == "") {
    num1 = 0;
    console.log(eval(`${num1}${currentOperator}${num2}`));
  } else if (num2 == "") {
    num2 = 0;
    console.log(eval(`${num1}${currentOperator}${num2}`));
  }
  total.innerHTML = eval(`${num1}${currentOperator}${num2}`);
}

// increment logic starts here

let num = 0;

function increment() {
  num += 1;
  let count = document.querySelector("#counter");
  count.classList.add("btn-dark");
  count.innerHTML = num;
}

function decrement() {
  num -= 1;
  let count = document.querySelector("#counter");
  count.innerHTML = num;
}

function clearNum() {
  num = 0;
  let count = document.querySelector("#counter");
  count.innerHTML = num;
}

// Math game starts here

let operators = ["+", "-", "*", "/"];
let rand1v = 0;
let randOpv = "";
let rand2v = 0;

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
