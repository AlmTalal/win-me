"use client";

import React from "react";
import { ConnectWallet, metamaskWallet } from "@thirdweb-dev/react";

const metamask = metamaskWallet();

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between py-5 ">
      <h1 className="font-bold text-2xl">Guest 0000012100011</h1>
      <ConnectWallet />
    </header>
  );
}
