"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const strict_1 = __importDefault(require("node:assert/strict"));
const money_1 = require("../money/money");
const ledger_1 = require("../ledger/ledger");
const wallet_1 = require("./wallet");
(0, node_test_1.default)("debita uma aposta válida e registra no Ledger", () => {
    const ledger = new ledger_1.Ledger();
    const wallet = new wallet_1.Wallet(money_1.Money.fromCents(10000), ledger);
    wallet.debit(money_1.Money.fromCents(3000));
    strict_1.default.equal(wallet.getBalance().getCents(), 7000);
    strict_1.default.equal(ledger.getEntries().length, 1);
});
(0, node_test_1.default)("recusa uma aposta acima do saldo", () => {
    const ledger = new ledger_1.Ledger();
    const wallet = new wallet_1.Wallet(money_1.Money.fromCents(10000), ledger);
    strict_1.default.throws(() => wallet.debit(money_1.Money.fromCents(12000)), /Saldo insuficiente/);
    strict_1.default.equal(wallet.getBalance().getCents(), 10000);
    strict_1.default.equal(ledger.getEntries().length, 0);
});
