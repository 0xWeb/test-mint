import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Mainnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Mainnet;
export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || "https://winter-muddy-firefly.solana-mainnet.quiknode.pro/c06f0ab7a4fbdf266dfe910743c27b91d6a2e9ee/";

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
  "Fr7vTRH1Fm1ob5iKqMu1oN1Dge4KGr6s3BaV7JsxLF8p"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined; // undefined means default

// "qasJ6jhgtngKk2QnEPdDjuFH8NMoM58W8TxPBXAChPY"
// "Fr7vTRH1Fm1ob5iKqMu1oN1Dge4KGr6s3BaV7JsxLF8p"
// "DAA8yRLu7acVs3kxaTyCjoEjNWGinLaCKVhDY29ASNua"

export const whitelistedWallets = [
  "53VVFtLzzi3nL2p1QF591PAB8rbcbsirYepwUphtHU9Q",
  "85gHs1pKkZcNCDEbcfxqhfFNPWCsNFqPTMMbTQARspWy",
  "FXoth7ba7LALmJGFaidCcMnhsxEagBDBDKCmkpr2QuDr",
  "232Z5QNvQ4wRyraGWFpC5i3HEbqozEWgBCV95eWASaG1",
  "D8ivzpXkG66VknRdVjEF1HjqS3T1tzcqraVR6FYaeLsV",
  "sTAKERL4U8fbn2nUte6rPVdcrz2z3fEh1adQEDrGULr",
];
