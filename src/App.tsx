import React from "react";
import logo from "./logo.svg";
import "./App.css";

import useOkxConnect from "./useOkxConnect";
import useOkxConnectProvider from "./useOkxConnectProvider";
import useUxuyConnect from "./useUxuyConnect";

function App() {
  const { uiRef, openConnectModal: openConnectModalUI } = useOkxConnect();
  const { providerRef, openConnectModal } = useOkxConnectProvider();
  const { connectEthWallet } = useUxuyConnect();

  console.log("uiRef", uiRef);
  console.log("providerRef", providerRef);

  return (
    <div className="App">
      <h1>OKX connect</h1>
      <button onClick={openConnectModalUI}>Open Connect Modal(UI)</button>
      <button onClick={openConnectModal}>Open Connect Modal(Provider)</button>
      <div className="separation-line"></div>
      <h1>UXUY connect</h1>
      <button onClick={connectEthWallet}>Connect ETH Wallet</button>
    </div>
  );
}

export default App;
