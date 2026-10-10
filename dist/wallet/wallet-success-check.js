"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const money_1 = require("../money/money");
const ledger_1 = require("../ledger/ledger");
const wallet_1 = require("./wallet");
const ledger = new ledger_1.Ledger();
const wallet = new wallet_1.Wallet(money_1.Money.fromCents(10000), ledger);
wallet.debit(money_1.Money.fromCents(3000));
const balance = wallet.getBalance().getCents();
const entries = ledger.getEntries();
if (balance !== 7000) {
    throw new Error("O saldo esperado era 7000 centavos.");
}
if (entries.length !== 1) {
    throw new Error("Era esperado um débito no Ledger.");
}
console.log("Teste aprovado!");
console.log("Saldo:", balance);
console.log("Movimentações:", entries.length);
