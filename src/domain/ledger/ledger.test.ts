
import test from "node:test";
import assert from "node:assert/strict";

import { Money } from "../money/money.js";
import { Ledger } from "./ledger.js";

test("registra um débito válido", () => {
  const ledger = new Ledger();

  ledger.recordDebit(
    Money.fromCents(3000),
    "Aposta"
  );

  const entries = ledger.getEntries();

  assert.equal(entries.length, 1);
  assert.ok(entries[0]);
  assert.equal(entries[0].type, "DEBIT");
  assert.equal(entries[0].amount.getCents(), 3000);
  assert.equal(entries[0].description, "Aposta");
  assert.ok(entries[0].createdAt instanceof Date);
});

test("rejeita débito de valor zero", () => {
  const ledger = new Ledger();

  assert.throws(
    () => ledger.recordDebit(Money.fromCents(0), "Aposta"),
    /O valor deve ser positivo/
  );

  assert.equal(ledger.getEntries().length, 0);
});

test("não permite alterar o histórico pela lista retornada", () => {
  const ledger = new Ledger();

  ledger.recordDebit(Money.fromCents(3000), "Aposta");

  const entries = ledger.getEntries();

  (entries as unknown as unknown[]).pop();

  assert.equal(ledger.getEntries().length, 1);
});
