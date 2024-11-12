import { useEffect, useRef } from "react";
import { OKXUniversalConnectUI, THEME } from "@okxconnect/ui";

const useOkxConnect = () => {
  const uiRef = useRef<OKXUniversalConnectUI>();

  const init = async () => {
    uiRef.current = await OKXUniversalConnectUI.init({
      dappMetaData: {
        icon: "https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png",
        name: "OKX WalletConnect UI Demo",
      },
      actionsConfiguration: {
        returnStrategy: "tg://resolve",
        modals: "all",
        tmaReturnUrl: "back",
      },
      language: "en_US",
      uiPreferences: {
        theme: THEME.LIGHT,
      },
    });
  };

  const openConnectModal = async () => {
    if (!uiRef.current) {
      return;
    }

    await uiRef.current.openModal({
      namespaces: {
        eip155: {
          chains: ["eip155:1", "eip155:xxx"],
          rpcMap: {
            1: "https://rpc", // set your own rpc url
          },
          defaultChain: "1",
        },
      },
      optionalNamespaces: {
        eip155: {
          chains: ["eip155:43114"],
        },
      },
    });
  };

  useEffect(() => {
    init();
  }, []);

  return { uiRef, openConnectModal: openConnectModal };
};

export default useOkxConnect;
