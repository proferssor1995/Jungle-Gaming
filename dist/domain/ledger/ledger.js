import { Money } from "../money/money.js";
export class Ledger {
    entries = [];
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
//# sourceMappingURL=ledger.js.map