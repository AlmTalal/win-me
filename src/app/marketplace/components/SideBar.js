"use client";

import { Button } from "@/components/ui/button";
import routes from "@/routes";
import { ShoppingBagIcon, BadgeCheckIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

export default function SideBar() {
  const router = useRouter();

  const routeUser = (path) => {
    console.log(path);
    router.push(path);
  };

  const path = usePathname();
  console.log(path);

  return (
    <div className="col-span-1 flex h-[85vh] rounded-lg border-2 border-red-700 p-5  overflow-scroll flex-col ">
      <Button
        className={` hover:bg-white hover:text-black px-7 py-5 my-4 ${
          path === routes.marketplace ? "bg-white text-black" : ""
        } `}
        onClick={() => routeUser(routes.marketplace)}
      >
        <ShoppingBagIcon className="mr-2 h-4 w-4" />
        Market Place
      </Button>
      <Button
        className={` hover:bg-white hover:text-black px-7 py-5 my-4 ${
          path === routes.playerNfts ? "bg-white text-black" : ""
        }`}
        onClick={() => routeUser(routes.playerNfts)}
      >
        <BadgeCheckIcon className="mr-2 h-4 w-4" />
        Your Nfts
      </Button>
    </div>
  );
}
