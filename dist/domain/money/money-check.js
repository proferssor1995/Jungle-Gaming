import { Money } from "./money.js";
const first = Money.fromCents(2500);
const second = Money.fromCents(1250);
const total = first.add(second);
if (total.getCents() !== 3750) {
    throw new Error("Erro: o cálculo do dinheiro está incorreto.");
}
console.log("Teste aprovado!");
console.log("Total:", total.getCents(), "centavos");
//# sourceMappingURL=money-check.js.map