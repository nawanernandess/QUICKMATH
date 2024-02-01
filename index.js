function generateMultiplicationTable() {
  let numberMultiplicate = document.querySelector("#multiplication");
  let showMultiplication = document.querySelector("#showMultiplication");

  if (numberMultiplicate.value.length == 0) {
    alert("Por favor, digite um numero!");
  } else {
    let multiplicateValue = Number(numberMultiplicate.value);
    let counter = 1;
    showMultiplication.innerHTML = "";
    while (counter <= 10) {
      let showMultiplicationTable = document.createElement("option");
      showMultiplicationTable.text = `${multiplicateValue} X ${counter} = ${
        multiplicateValue * counter
      }`;
      showMultiplication.appendChild(showMultiplicationTable);
      counter++;
    }
  }
}

const FIRST_ROW_MODEL = [
  {
    text: "AC",
    class: "button-action button-stl",
    isIcon: false,
    callback: () => clear(),
  },
  {
    text: "",
    class: "fa-solid fa-delete-left button-action button-stl",
    isIcon: true,
    callback: () => console.log("delete"),
  },
  {
    text: "%",
    class: "fa-solid fa-percent button-action button-stl",
    isIcon: true,
    callback: () => console.log("percent"),
  },
  {
    text: "/",
    class: "fa-solid fa-divide button-action button-stl",
    isIcon: true,
    callback: () => console.log("division"),
  },
];

const SECOND_ROW_MODEL = [
  7,
  8,
  9,
  {
    text: "*",
    class: "fa-solid fa-xmark button-action button-stl ",
    isIcon: true,
    callback: () => console.log("multiplication"),
  },
];

const THIRD_ROW_MODEL = [
  4,
  5,
  6,
  {
    text: "-",
    class: "fa-solid fa-minus button-action button-stl",
    isIcon: true,
    callback: () => console.log("subitraction"),
  },
];

const FOURTH_ROW_MODEL = [
  1,
  2,
  3,
  {
    text: "+",
    class: "fa-solid fa-plus button-action button-stl",
    isIcon: true,
    callback: () => console.log("addition"),
  },
];

const FIFTH_ROW_MODEL = [
  0,
  {
    text: ".",
    class: "button-number button-stl",
    isIcon: false,
    callback: () => console.log("dot"),
  },
  {
    text: "",
    class: "fa-solid fa-equals button-action button-stl",
    isIcon: true,
    callback: () => calculate(),
  },
];

function initCalculator() {
  creatCalculator();
}

function creatCalculator() {
  let trFirst = document.querySelector("#firstRow");
  let trSecond = document.querySelector("#secondRow");
  let trThird = document.querySelector("#thirdRow");
  let trFourth = document.querySelector("#fourthRow");
  let trFifth = document.querySelector("#fifthRow");

  firstActions(trFirst);
  secondActions(trSecond);
  thirdActions(trThird);
  fourthActions(trFourth);
  fifthActions(trFifth);
}

function firstActions(value) {
  const firstRowArray = FIRST_ROW_MODEL;
  creatAction(firstRowArray, value);
}

function secondActions(value) {
  const secondRowArray = SECOND_ROW_MODEL;
  creatAction(secondRowArray, value);
}

function thirdActions(value) {
  const thirdRowArray = THIRD_ROW_MODEL;
  creatAction(thirdRowArray, value);
}

function fourthActions(value) {
  const fourthRowArray = FOURTH_ROW_MODEL;
  creatAction(fourthRowArray, value);
}

function fifthActions(value) {
  const fifthRowArray = FIFTH_ROW_MODEL;
  creatAction(fifthRowArray, value);
}

function showNumber(value) {
  var outputValueTo = document.querySelector("#inputNumber");

  if (outputValueTo.value == "0" || outputValueTo.value == "Syntax error") {
    outputValueTo.value = value;
  } else {
    outputValueTo.value += value;
  }
}

function selectOperation(operation) {
  var outputValueTo = document.querySelector("#inputNumber");
  if (outputValueTo.value == "0" || outputValueTo.value == "Syntax error") {
    outputValueTo.value = "0";
  } else {
    outputValueTo.value += operation.text;
  }
}

function creatAction(ElemArray, value) {
  ElemArray.forEach((actionValue) => {
    let actionsElem = document.createElement("td");
    verifyIsIcon(actionsElem, actionValue);
    value.appendChild(actionsElem);
    actionsElem.addEventListener("click", () => {
      if (actionValue.callback) {
        actionValue.callback();
        selectOperation(actionValue);
      } else {
        showNumber(actionValue);
      }
    });
  });
}

function verifyIsIcon(elem, value) {
  if (value.isIcon) {
    elem.classList = value.class;
  } else {
    if (!value.text) {
      elem.textContent = value;
      elem.classList.add("button-number", "button-stl");
      return;
    }
    elem.textContent = value.text;
    elem.classList = value.class;
  }
}

function calculate() {
  try {
    var inputNumber = document.querySelector("#inputNumber");
    if (inputNumber.value != "") {
      var calculateResult = eval(inputNumber.value);
      inputNumber.value = calculateResult;
    }
  } catch (err) {
    inputNumber.value = "Syntax error";
  }
}

function clear() {
  document.querySelector("#inputNumber").value = 0;
}
