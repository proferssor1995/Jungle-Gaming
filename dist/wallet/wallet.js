"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const money_1 = require("../money/money");
class Wallet {
    constructor(initialBalance, ledger) {
        this.ledger = ledger;
        if (initialBalance.getCents() < 0) {
            throw new Error("O saldo inicial não pode ser negativo.");
        }
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    debit(amount) {
        if (amount.getCents() <= 0) {
            throw new Error("O valor deve ser positivo.");
        }
        if (amount.getCents() > this.balance.getCents()) {
            throw new Error("Saldo insuficiente.");
        }
        this.ledger.recordDebit(amount, "Aposta");
        this.balance = money_1.Money.fromCents(this.balance.getCents() - amount.getCents());
    }
}
exports.Wallet = Wallet;
