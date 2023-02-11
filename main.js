// MODULARIZACION IMPORT Y EXPORT
import { toDollars, toEuros } from "./bitcoinConverter.js";

const btcAmountInput = document.getElementById("btc-amount");
const dollarsOutput = document.getElementById("dollars-output");
const eurosOutput = document.getElementById("euros-output");

btcAmountInput.addEventListener("input", () => {
	const btcAmount = Number(btcAmountInput.value);
	dollarsOutput.textContent = toDollars(btcAmount).toFixed(2);
	eurosOutput.textContent = toEuros(btcAmount).toFixed(2);
});