import { WalletTgSdk } from "@uxuycom/web3-tg-sdk";

const { ethereum, solana } = new WalletTgSdk();

// Demostrate how UXUY connect can be used for different networks
// https://docs.uxuy.com/uxuy-connect/introduction/
const useUxuyConnect = () => {
  const connectEthWallet = async () => {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected account:", accounts[0]);
      return accounts[0];
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const connectSolanaWallet = async () => {
    const params = {};
    const isPhantom = false;
    const res = await solana.connect(params, isPhantom);
    
  };

  return { connectEthWallet, connectSolanaWallet };
};

export default useUxuyConnect;
