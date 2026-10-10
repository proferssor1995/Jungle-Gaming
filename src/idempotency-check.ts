
type BetResult = {
  accepted: boolean;
  balance: number;
};

type ProcessedBet = {
  amount: number;
  result: BetResult;
};

const processedBets = new Map<string, ProcessedBet>();
let balance = 10000;

function placeBet(key: string, amount: number): BetResult {
  if (!Number.isSafeInteger(amount) || amount <= 0) {
    throw new Error("Valor inválido.");
  }

  const previous = processedBets.get(key);

  if (previous) {
    if (previous.amount !== amount) {
      throw new Error("Chave reutilizada com outro valor.");
    }

    return previous.result;
  }

  const accepted = amount <= balance;

  if (accepted) {
    balance -= amount;
  }

  const result = { accepted, balance };

  processedBets.set(key, { amount, result });

  return result;
}

console.log("Primeira aposta:", placeBet("bet-123", 3000));
console.log("Repetição:", placeBet("bet-123", 3000));
console.log("Nova aposta:", placeBet("bet-456", 2000));
