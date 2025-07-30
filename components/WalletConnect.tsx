"use client";

import { useEffect, useState } from "react";

export default function WalletConnect() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    }
  };

  return (
    <div className="mb-4">
      {account ? (
        <p className="text-green-400">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
      ) : (
        <button onClick={connectWallet} className="bg-blue-600 px-4 py-2 rounded">
          Connect Wallet
        </button>
      )}
    </div>
  );
}
