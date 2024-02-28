"use client";

import { MetaMaskProvider } from "@metamask/sdk-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function layout({ children }) {
  const path = usePathname();

  return (
    <div>
      <MetaMaskProvider
        debug={false}
        sdkOptions={{
          dappMetadata: {
            name: "Example React Dapp",
            url: path,
          },
        }}
      >
        {children}
      </MetaMaskProvider>
    </div>
  );
}
