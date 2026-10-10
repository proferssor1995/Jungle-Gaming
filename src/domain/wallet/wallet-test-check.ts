
import { Money } from "../money/money.js";
import { Ledger } from "../ledger/ledger.js";
import { Wallet } from "./wallet.js";

const ledger = new Ledger();
const wallet = new Wallet(Money.fromCents(10000), ledger);

try {
  wallet.debit(Money.fromCents(12000));
  console.log("ERRO: a aposta deveria ter sido recusada.");
} catch (error) {
  console.log("Teste aprovado: saldo insuficiente.");
}

console.log("Saldo:", wallet.getBalance().getCents());
console.log("Movimentações:", ledger.getEntries().length);
