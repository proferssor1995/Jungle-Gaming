
import { Money } from "../money/money.js";
import { Ledger } from "../ledger/ledger.js";
import { Wallet } from "./wallet.js";

const ledger = new Ledger();
const wallet = new Wallet(Money.fromCents(10000), ledger);

wallet.debit(Money.fromCents(3000));

const balance = wallet.getBalance().getCents();
const entries = ledger.getEntries();

if (balance !== 7000) {
  throw new Error("O saldo esperado era 7000 centavos.");
}

if (entries.length !== 1) {
  throw new Error("Era esperado um débito no Ledger.");
}

console.log("Teste aprovado!");
console.log("Saldo:", balance);
console.log("Movimentações:", entries.length);
