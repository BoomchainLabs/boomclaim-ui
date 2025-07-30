"use client";

import { useState } from "react";
import { ethers } from "ethers";
import BoomClaimABI from "@/lib/BoomClaimABI.json";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

export default function ClaimCard() {
  const [status, setStatus] = useState("");

  const claim = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, BoomClaimABI, signer);

      const amount = ethers.utils.parseUnits("10", 18); // Example amount
      const proof = ["0x..."]; // Replace with actual Merkle proof

      const tx = await contract.claim(amount, proof);
      await tx.wait();
      setStatus("✅ Claim successful!");
    } catch (err) {
      setStatus("❌ Claim failed: " + (err as any).message);
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded shadow text-center">
      <h2 className="text-xl mb-2">Claim Your Rewards</h2>
      <button onClick={claim} className="bg-green-600 px-4 py-2 rounded">
        Claim
      </button>
      <p className="mt-2">{status}</p>
    </div>
  );
}
