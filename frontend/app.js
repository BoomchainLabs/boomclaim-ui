async function claim() {
  const provider = new window.SuiWalletProvider();
  try {
    const tx = await provider.signAndExecuteTransactionBlock({
      transactionBlock: {
        kind: "moveCall",
        target: "0x04b421F7a73C039194033bfe18d728EaEd0BC7DB::boom_claim::claim",
        arguments: [],
      },
    });
    document.getElementById("status").innerText = "✅ Claimed! TX: " + tx.digest;
  } catch (e) {
    document.getElementById("status").innerText = "❌ Failed: " + e.message;
  }
}
