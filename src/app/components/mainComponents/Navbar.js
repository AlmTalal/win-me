"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@radix-ui/react-icons";
import { ShoppingCartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import routes from "@/routes";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function Navbar() {
  const address = useAddress();

  useEffect(() => {
    if (address !== undefined) {
      setShowDialog(false);
    }
  }, [address]);

  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);

  const reRouteUser = (page) => {
    router.push(page);
  };

  const reRouteToGamingPage = (page) => {
    if (address !== undefined) {
      router.push(page);
      return;
    }

    setShowDialog(!showDialog);
  };

  return (
    <div className=" flex flex-1 flex-col justify-evenly items-center w-full h-full rounded-lg border-2 border-red-700">
      <Button
        className="my-10 p-5 w-40"
        onClick={() => reRouteToGamingPage(routes.gaming)}
      >
        <PlayIcon />
        <p className="ml-2">Let's play!</p>
      </Button>
      <Button
        className="my-10 p-5 w-40"
        onClick={() => reRouteUser(routes.marketplace)}
      >
        <ShoppingCartIcon />
        <p className="ml-2">Let's shop!</p>
      </Button>
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="text-white bg-black border-red-600">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Hey, we need you to connect your Metamask
            </AlertDialogTitle>
            <AlertDialogDescription>
              We promise that we will do our best efforts to not to scam you 🤣
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="p-4 px-7 w-auto h-auto text-black font-semibold font-xl">
              Cancel
            </AlertDialogCancel>
            <ConnectWallet />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
