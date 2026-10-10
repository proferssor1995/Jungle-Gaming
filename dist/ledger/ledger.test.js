"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const strict_1 = __importDefault(require("node:assert/strict"));
const money_1 = require("../money/money");
const ledger_1 = require("./ledger");
(0, node_test_1.default)("registra um débito válido", () => {
    const ledger = new ledger_1.Ledger();
    ledger.recordDebit(money_1.Money.fromCents(3000), "Aposta");
    const entries = ledger.getEntries();
    strict_1.default.equal(entries.length, 1);
    strict_1.default.equal(entries[0].type, "DEBIT");
    strict_1.default.equal(entries[0].amount.getCents(), 3000);
    strict_1.default.equal(entries[0].description, "Aposta");
    strict_1.default.ok(entries[0].createdAt instanceof Date);
});
(0, node_test_1.default)("rejeita débito de valor zero", () => {
    const ledger = new ledger_1.Ledger();
    strict_1.default.throws(() => ledger.recordDebit(money_1.Money.fromCents(0), "Aposta"), /O valor deve ser positivo/);
    strict_1.default.equal(ledger.getEntries().length, 0);
});
(0, node_test_1.default)("não permite alterar o histórico pela lista retornada", () => {
    const ledger = new ledger_1.Ledger();
    ledger.recordDebit(money_1.Money.fromCents(3000), "Aposta");
    const entries = ledger.getEntries();
    entries.pop();
    strict_1.default.equal(ledger.getEntries().length, 1);
});
