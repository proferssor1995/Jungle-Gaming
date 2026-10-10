"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const money_1 = require("./money");
const valid = money_1.Money.fromCents(3750);
console.log("Valor válido:", valid.getCents());
try {
    money_1.Money.fromCents(12.5);
    console.log("ERRO: deveria rejeitar centavos fracionários.");
}
catch (error) {
    console.log("Teste aprovado: valor fracionário rejeitado.");
}
try {
    money_1.Money.fromCents(Number.NaN);
    console.log("ERRO: deveria rejeitar NaN.");
}
catch (error) {
    console.log("Teste aprovado: NaN rejeitado.");
}
