
export class Money {
  private constructor(private readonly cents: number) {}

  static fromCents(cents: number): Money {
    if (!Number.isSafeInteger(cents)) {
      throw new Error("O valor deve ser um número inteiro de centavos.");
    }

    return new Money(cents);
  }

  getCents(): number {
    return this.cents;
  }

  add(other: Money): Money {
    return Money.fromCents(this.cents + other.cents);
  }
}
