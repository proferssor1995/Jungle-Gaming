
import test from "node:test";
import assert from "node:assert/strict";

import { Money } from "../money/money.js";
import { Ledger } from "../ledger/ledger.js";
import { Wallet } from "./wallet.js";

test("debita uma aposta válida e registra no Ledger", () => {
  const ledger = new Ledger();
  const wallet = new Wallet(Money.fromCents(10000), ledger);

  wallet.debit(Money.fromCents(3000));

  assert.equal(wallet.getBalance().getCents(), 7000);
  assert.equal(ledger.getEntries().length, 1);
});

test("recusa uma aposta acima do saldo", () => {
  const ledger = new Ledger();
  const wallet = new Wallet(Money.fromCents(10000), ledger);

  assert.throws(
    () => wallet.debit(Money.fromCents(12000)),
    /Saldo insuficiente/
  );

  assert.equal(wallet.getBalance().getCents(), 10000);
  assert.equal(ledger.getEntries().length, 0);
});
