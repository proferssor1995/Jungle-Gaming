import { Money } from "../money/money.js";
import { Ledger } from "../ledger/ledger.js";
import { Wallet } from "./wallet.js";
const ledger = new Ledger();
const wallet = new Wallet(Money.fromCents(10000), ledger);
wallet.debit(Money.fromCents(3000));
console.log("Saldo:", wallet.getBalance().getCents());
console.log("Movimentações:", ledger.getEntries().length);
//# sourceMappingURL=wallet-check.js.map