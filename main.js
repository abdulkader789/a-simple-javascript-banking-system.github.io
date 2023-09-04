// grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

//Check Sign in
let isSignedin = false;

const btn_signin = document.querySelectorAll(".sign-in");
const btn_banking = document.querySelectorAll(".banking");
const btn_history = document.querySelectorAll(".history");

const signin_section = document.getElementById("signin-section");
const banking_section = document.getElementById("banking-section");
const history_section = document.getElementById("history-section");

const deposit_btn = document.getElementById("deposit-btn");
const withdraw_btn = document.getElementById("withdraw-btn");
const d_input = document.getElementById("d-input");
const w_input = document.getElementById("w-input");

btn_signin.forEach((el) => {
  el.addEventListener("click", () => {
    isSignedin = true;
    banking_section.style.display = "block";
    history_section.style.display = "none";
    signin_section.style.display = "none";
  });
});

btn_banking.forEach((el) => {
  el.addEventListener("click", () => {
    if (!isSignedin) {
      alert("Plese sign in first");
      return;
    } else {
      banking_section.style.display = "block";
      signin_section.style.display = "none";
      history_section.style.display = "none";
    }
  });
});

btn_history.forEach((el) => {
  el.addEventListener("click", () => {
    if (!isSignedin) {
      alert("Plese sign in first");
      return;
    } else {
      banking_section.style.display = "none";
      signin_section.style.display = "none";
      history_section.style.display = "block";
    }
  });
});

function checkInput(inputId) {
  const digits_only = (string) =>
    [...string].every((c) => "0123456789".includes(c));
  let input = document.getElementById(inputId);
  if (input.value.length == 0) {
    return false;
  }
  if (input.value.length > 0) {
    if (!digits_only(input.value)) {
      return false;
    } else {
      return true;
    }
  }
}

function getInput(input_field) {
  let input = document.getElementById(input_field);
  let num = parseFloat(input.value);
  return num;
}
function getElement(elementId) {
  let element = document.getElementById(elementId).innerText;
  let num = parseFloat(element);
  return num;
}
function setElement(elementId, value) {
  let element = document.getElementById(elementId);
  element.innerText = value;
}
function actionButton(input, element, balance) {
  let valid = checkInput(input);
  if (valid) {
    let i_value = getInput(input);
    let el = getElement(element);
    let bal = getElement(balance);
    let newBal = 0;

    if (i_value > bal && element == "withdraw") {
      alert("You don't have enough balance");
      return;
    }
    if (element == "deposit") {
      newBal = bal + i_value;
      history("deposit", i_value, newBal);
    }
    if (element == "withdraw") {
      newBal = bal - i_value;
      history("withdraw", i_value, newBal);
    }
    setElement(balance, newBal);

    let newDepo = el + i_value;
    setElement(element, newDepo);
  } else {
    alert("Enter integer value");
  }
}
d_input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    actionButton("d-input", "deposit", "balance");
  }
});

w_input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    actionButton("w-input", "withdraw", "balance");
  }
});

deposit_btn.addEventListener("click", () => {
  actionButton("d-input", "deposit", "balance");
});

withdraw_btn.addEventListener("click", () => {
  actionButton("w-input", "withdraw", "balance");
});

function history(el, inputed, bal) {
  const date = dateTime();
  const statement = document.createElement("div");

  if (el == "deposit") {
    statement.classList.add("m-1", "p-6", "bg-green-500");
  }
  if (el == "withdraw") {
    statement.classList.add("m-1", "p-6", "bg-red-500");
  }
  statement.innerHTML = `<p class="text-white">${date}</p>
                    <p class="text-white">Your ${el}: $ ${inputed}</p>
                    <p class="text-white">Your balance: $ ${bal}</p>
`;
  document.getElementById("statement").appendChild(statement);
}

function dateTime() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  let currentTime = date.toLocaleTimeString();
  let date_time = [currentDate + "    " + currentTime];

  return date_time;
}
