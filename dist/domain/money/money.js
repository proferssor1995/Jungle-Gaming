export class Money {
    cents;
    constructor(cents) {
        this.cents = cents;
    }
    static fromCents(cents) {
        if (!Number.isSafeInteger(cents)) {
            throw new Error("O valor deve ser um número inteiro de centavos.");
        }
        return new Money(cents);
    }
    getCents() {
        return this.cents;
    }
    add(other) {
        return Money.fromCents(this.cents + other.cents);
    }
}
//# sourceMappingURL=money.js.map