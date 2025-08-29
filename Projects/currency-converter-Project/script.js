const API_KEY = "a38c9b1ebd521d7146ee5e96"; // <-- Replace this

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");

// Populate dropdowns
for (let code in country_list) {
  let option1 = document.createElement("option");
  option1.value = code;
  option1.textContent = code;

  let option2 = option1.cloneNode(true);

  fromCurrency.appendChild(option1);
  toCurrency.appendChild(option2);
}

// Default selections
fromCurrency.value = "USD";
toCurrency.value = "PKR";

// Update flag when currency changes
[fromCurrency, toCurrency].forEach((select, index) => {
  select.addEventListener("change", (e) => {
    let code = country_list[e.target.value];
    let img = e.target.parentElement.querySelector("img");
    img.src = `https://flagcdn.com/48x36/${code.toLowerCase()}.png`;
  });
});

// Fetch & Convert
async function getExchangeRate() {
  const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.value}`;
  result.innerText = "Getting exchange rate...";

  try {
    let response = await fetch(URL);
    let data = await response.json();

    if (data.result === "error") {
      result.innerText = "Invalid API Key or limit reached!";
      return;
    }

    let rate = data.conversion_rates[toCurrency.value];
    let total = (amount.value * rate).toFixed(2);
    result.innerText = `${amount.value} ${fromCurrency.value} = ${total} ${toCurrency.value}`;
  } catch (err) {
    result.innerText = "Error fetching data!";
    console.error(err);
  }
}

convertBtn.addEventListener("click", getExchangeRate);

// Load first rate
getExchangeRate();
