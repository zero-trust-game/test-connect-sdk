import { OKXUniversalProvider } from "@okxconnect/universal-provider";
import { useEffect, useRef } from "react";

const useOkxConnectProvider = () => {
  const providerRef = useRef<OKXUniversalProvider>();

  const init = async () => {
    providerRef.current = await OKXUniversalProvider.init({
      dappMetaData: {
        name: "application name",
        icon: "application icon url",
      },
    });
  };

  const openConnectModal = async () => {
    if (!providerRef.current) {
      return;
    }
    console.log("OKX Universal Provider - Connect -> EVM");
    const res = await providerRef.current.connect({
      namespaces: {
        eip155: {
          // 请按需组合需要的链id传入，多条链就传入多个
          chains: ["eip155:1"],
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
      sessionConfig: {
        redirect: "tg://resolve",
      },
    });

    console.log("OKX Universal Provider - Connect -> result", res);
  };

  useEffect(() => {
    init();
  }, []);

  return { providerRef, openConnectModal };
};

export default useOkxConnectProvider;
