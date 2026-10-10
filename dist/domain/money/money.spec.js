import test from "node:test";
import assert from "node:assert/strict";
import { Money } from "./money.js";
test("cria um valor monetário em reais", () => {
    const money = Money.fromCents(10000);
    assert.equal(money.getCents(), 10000);
});
//# sourceMappingURL=money.spec.js.map