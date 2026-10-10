import test from "node:test";
import assert from "node:assert/strict";
import { processBet } from "./idempotency.js";
test("repete a mesma aposta sem descontar duas vezes", () => {
    const first = processBet("bet-001", 10);
    const retry = processBet("bet-001", 10);
    assert.deepEqual(retry, first);
});
test("rejeita a mesma chave com valor diferente", () => {
    processBet("bet-002", 10);
    assert.throws(() => processBet("bet-002", 20), /outro valor/);
});
test("rejeita valor não inteiro", () => {
    assert.throws(() => processBet("bet-003", 1.5), /inteiro/);
});
//# sourceMappingURL=idempotency.test.js.map