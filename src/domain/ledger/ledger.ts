
import { Money } from "../money/money.js";

export type LedgerEntry = {
  type: "DEBIT";
  amount: Money;
  description: string;
  createdAt: Date;
};

export class Ledger {
  private entries: LedgerEntry[] = [];

  recordDebit(amount: Money, description: string): void {
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

  getEntries(): readonly LedgerEntry[] {
    return [...this.entries];
  }
}
