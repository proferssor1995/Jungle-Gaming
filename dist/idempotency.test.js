"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const strict_1 = __importDefault(require("node:assert/strict"));
const idempotency_1 = require("./idempotency");
(0, node_test_1.default)("repete a mesma aposta sem descontar duas vezes", () => {
    const first = (0, idempotency_1.processBet)("bet-001", 10);
    const retry = (0, idempotency_1.processBet)("bet-001", 10);
    strict_1.default.deepEqual(retry, first);
});
(0, node_test_1.default)("rejeita a mesma chave com valor diferente", () => {
    (0, idempotency_1.processBet)("bet-002", 10);
    strict_1.default.throws(() => (0, idempotency_1.processBet)("bet-002", 20), /outro valor/);
});
(0, node_test_1.default)("rejeita valor não inteiro", () => {
    strict_1.default.throws(() => (0, idempotency_1.processBet)("bet-003", 1.5), /inteiro/);
});
