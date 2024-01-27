function tabuada() {
  let numero = document.querySelector("#txtn");
  let tab = document.querySelector("#seltab");

  if (numero.value.length == 0) {
    alert("Por favor, digite um numero!");
  } else {
    let n = Number(numero.value);
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} X ${c} = ${n * c}`;
      tab.appendChild(item);
      c++;
    }
  }
}

const FIRST_ROW_MODEL = [
  {
    text: "AC",
    class: "",
    isIcon: false,
    callback: () => clear(),
  },
  {
    text: "",
    class: "fa-solid fa-delete-left",
    isIcon: true,
    callback: () => console.log("delete"),
  },
  {
    text: "%",
    class: "fa-solid fa-percent",
    isIcon: true,
    callback: () => console.log("percent"),
  },
  {
    text: "/",
    class: "fa-solid fa-divide",
    isIcon: true,
    callback: () => console.log("division"),
  },
];

const SECOND_ROW_MODEL = [
  7,
  8,
  9,
  {
    text: "x",
    class: "fa-solid fa-xmark",
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
    class: "fa-solid fa-minus",
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
    class: "fa-solid fa-plus",
    isIcon: false,
    callback: () => console.log("addition"),
  },
];

const FIFTH_ROW_MODEL = [
  0,
  {
    text: ".",
    class: "fa-solid fa-circle",
    isIcon: true,
    callback: () => console.log("dot"),
  },
  {
    text: "",
    class: "fa-solid fa-equals",
    isIcon: true,
    callback: () => console.log("equal"),
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
    // document.getElementById("dec").disabled = false;
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

function clear() {
  document.querySelector("#inputNumber").value = 0;
}

function verifyIsIcon(elem, value) {
  if (value.isIcon) {
    elem.classList = value.class;
  } else {
    if (!value.text) {
      elem.textContent = value;
      return;
    }
    elem.textContent = value.text;
  }
}
