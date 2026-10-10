"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processBet = processBet;
const processedBets = new Map();
let balance = 100;
function processBet(idempotencyKey, amount) {
    if (!idempotencyKey.trim()) {
        throw new Error("A chave de idempotência é obrigatória.");
    }
    const previous = processedBets.get(idempotencyKey);
    if (previous) {
        if (previous.amount !== amount) {
            throw new Error("A chave de idempotência já foi usada com outro valor.");
        }
        return previous.result;
    }
    if (!Number.isSafeInteger(amount) || amount <= 0) {
        throw new Error("O valor da aposta deve ser positivo e inteiro.");
    }
    const accepted = amount <= balance;
    if (accepted) {
        balance -= amount;
    }
    const result = {
        accepted,
        balance,
    };
    processedBets.set(idempotencyKey, {
        amount,
        result,
    });
    return result;
}
