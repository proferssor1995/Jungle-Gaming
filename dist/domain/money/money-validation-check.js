import { Money } from "./money.js";
const valid = Money.fromCents(3750);
console.log("Valor válido:", valid.getCents());
try {
    Money.fromCents(12.5);
    console.log("ERRO: deveria rejeitar centavos fracionários.");
}
catch (error) {
    console.log("Teste aprovado: valor fracionário rejeitado.");
}
try {
    Money.fromCents(Number.NaN);
    console.log("ERRO: deveria rejeitar NaN.");
}
catch (error) {
    console.log("Teste aprovado: NaN rejeitado.");
}
//# sourceMappingURL=money-validation-check.js.map