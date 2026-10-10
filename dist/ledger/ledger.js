"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ledger = void 0;
class Ledger {
    constructor() {
        this.entries = [];
    }
    recordDebit(amount, description) {
        if (amount.getCents() <= 0) {
            throw new Error("O valor deve ser positivo.");
        }
        this.entries.push({
            type: "DEBIT",
            amount,
            description,
            createdAt: new Date(),
        });
    }
    getEntries() {
        return [...this.entries];
    }
}
exports.Ledger = Ledger;
