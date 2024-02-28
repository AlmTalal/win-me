"use client";

import { MetaMaskProvider } from "@metamask/sdk-react";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <MetaMaskProvider
        debug={false}
        sdkOptions={{
          dappMetadata: {
            name: "Example React Dapp",
            url: window.location.href,
          },
        }}
      >
        {children}
      </MetaMaskProvider>
    </div>
  );
}
