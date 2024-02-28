"use client";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import Main from "../components/mainComponents/Main";

export default function Home() {
  return (
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
      ]}
      clientId={process.env.THIRD_WEB_CLIENT_ID}
    >
      <Main />
    </ThirdwebProvider>
  );
}
