# Arquitetura — Jungle Gaming Backend

## 1. Objetivo

Desenvolver um backend financeiro para processar apostas e movimentações de carteiras com segurança, evitando cobranças duplicadas, saldos incorretos e perda de registros.

## 2. Tecnologias

- **TypeScript e Bun:** desenvolvimento e execução da aplicação.
- **NestJS:** estrutura do backend e organização dos módulos.
- **PostgreSQL:** armazenamento dos saldos e registros financeiros.
- **Amazon SQS:** processamento de mensagens assíncronas.
- **Docker Compose:** execução dos serviços do projeto.

## 3. Componentes principais

- **Wallet:** controla o saldo disponível do jogador.
- **Money:** representa valores monetários com precisão.
- **Wallet Ledger:** registra créditos e débitos realizados.
- **Wager Transaction:** representa as operações de aposta e seus resultados.
- **Idempotência:** impede que uma mesma requisição gere movimentações duplicadas.
- **SQS:** permite processar mensagens de forma assíncrona.
- **Outbox:** registra eventos no banco para que possam ser enviados à fila com segurança.

## 4. Fluxo de uma aposta

1. O sistema recebe e valida a requisição.
2. Verifica se a operação já foi processada.
3. Confere as regras da aposta e o saldo disponível.
4. Atualiza a carteira e registra a movimentação no Ledger.
5. Salva as alterações em uma transação no banco de dados.
6. Publica os eventos necessários na fila SQS.

Se ocorrer uma falha antes da confirmação da transação, as alterações realizadas nela são desfeitas.

## 5. Segurança e consistência financeira

- **Precisão monetária:** utilizar centavos inteiros ou uma representação decimal adequada.
- **Idempotência:** impedir que a mesma operação seja processada mais de uma vez.
- **Concorrência:** proteger o saldo contra operações simultâneas.
- **Transações:** manter o saldo e o histórico financeiro consistentes.
- **Recuperação de falhas:** permitir novas tentativas de processamento sem duplicar movimentações.

## 6. Testes

O projeto deve incluir testes para verificar:

- Cálculos monetários e saldo da carteira.
- Registro correto das movimentações.
- Requisições duplicadas.
- Operações simultâneas.
- Falhas e reversões de transações.
- Processamento e repetição de mensagens.

## 7. Considerações finais

A arquitetura busca garantir que as operações financeiras sejam seguras, consistentes e rastreáveis.

A implementação e os testes devem confirmar que essas regras são respeitadas pelo sistema.