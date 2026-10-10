"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const money_1 = require("../money/money");
const ledger_1 = require("../ledger/ledger");
const wallet_1 = require("./wallet");
const ledger = new ledger_1.Ledger();
const wallet = new wallet_1.Wallet(money_1.Money.fromCents(10000), ledger);
try {
    wallet.debit(money_1.Money.fromCents(12000));
    console.log("ERRO: a aposta deveria ter sido recusada.");
}
catch (error) {
    console.log("Teste aprovado: saldo insuficiente.");
}
console.log("Saldo:", wallet.getBalance().getCents());
console.log("Movimentações:", ledger.getEntries().length);
