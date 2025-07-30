import Head from "next/head";
import ClaimCard from "@/components/ClaimCard";
import WalletConnect from "@/components/WalletConnect";

export default function Home() {
  return (
    <>
      <Head>
        <title>BoomClaim</title>
        <meta name="description" content="Claim your loyalty rewards powered by Boomchainlab" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">BoomClaim</h1>
        <WalletConnect />
        <ClaimCard />
      </main>
    </>
  );
}
