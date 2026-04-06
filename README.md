# @momentum/shared

Shared types, DTOs, constants, and utility functions for the Momentum ticketing platform.

## Installation

```bash
# From git (in service repos)
npm install git+https://github.com/your-org/momentum-shared.git

# Or via npm link for local development
npm link
```

## Contents

- **constants.ts** — Status enums, Redis key prefixes, Kafka topics
- **dto.ts** — Request/response DTOs for all services
- **interfaces.ts** — Core interfaces (ReservationData, OutboxEvent, QueueTokenPayload)
- **utils.ts** — Utility functions (idempotency keys, retry with backoff, currency conversion)

## Build

```bash
npm run build
```
