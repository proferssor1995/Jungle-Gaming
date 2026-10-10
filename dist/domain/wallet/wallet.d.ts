import { Money } from "../money/money.js";
import { Ledger } from "../ledger/ledger.js";
export declare class Wallet {
    private readonly ledger;
    private balance;
    constructor(initialBalance: Money, ledger: Ledger);
    getBalance(): Money;
    debit(amount: Money): void;
}
//# sourceMappingURL=wallet.d.ts.map