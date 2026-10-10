type BetResult = {
    accepted: boolean;
    balance: number;
};
declare function processBet(idempotencyKey: string, amount: number): BetResult;
export { processBet };
//# sourceMappingURL=idempotency.d.ts.map