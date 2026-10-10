import { Money } from "../money/money.js";
import { Ledger } from "../ledger/ledger.js";
export class Wallet {
    ledger;
    balance;
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
        this.balance = Money.fromCents(this.balance.getCents() - amount.getCents());
    }
}
//# sourceMappingURL=wallet.js.map