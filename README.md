# boomclaim-ui
Frontend dApp for BoomClaim – Loyalty claim interface on Monad or Sui

# BoomClaim

Smart contract and claim dApp for loyalty

Understood. Since you're deploying on **Sui Mainnet**, not Monad, here's a revised and simplified version tailored specifically for Sui using **Move** instead of Solidity, with frontend hooks if you want to manually host it via GitHub.

---

## ✅ `BoomClaim` on Sui — GitHub Manual Structure

### 📁 Directory Structure

boomclaim/
├── move/
│   └── sources/
│       └── boom_claim.move
│   └── Move.toml
├── frontend/
│   ├── index.html
│   ├── app.js
│   └── style.css
├── README.md
├── .gitignore


---

## 🔷 1. `move/sources/boom_claim.move`

Example `BoomClaim` module (basic claim record structure):

```move
module boomclaim::boom_claim {

    use std::signer;
    use sui::object;
    use sui::tx_context::{Self, TxContext};

    struct Claim has key {
        id: object::ID,
        claimer: address,
        timestamp: u64,
    }

    public fun claim(ctx: &mut TxContext): Claim {
        let sender = tx_context::sender(ctx);
        Claim {
            id: object::new(ctx),
            claimer: sender,
            timestamp: tx_context::timestamp_ms(ctx),
        }
    }
}
