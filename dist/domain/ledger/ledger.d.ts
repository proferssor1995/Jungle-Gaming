import { Money } from "../money/money.js";
export type LedgerEntry = {
    type: "DEBIT";
    amount: Money;
    description: string;
    createdAt: Date;
};
export declare class Ledger {
    private entries;
    recordDebit(amount: Money, description: string): void;
    getEntries(): readonly LedgerEntry[];
}
//# sourceMappingURL=ledger.d.ts.map