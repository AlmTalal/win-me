"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@radix-ui/react-icons";
import { ShoppingCartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import routes from "@/routes";

export default function Navbar() {
  const router = useRouter();

  const reRouteUser = (page) => {
    router.push(page);
  };

  return (
    <div className=" flex flex-1 flex-col justify-evenly items-center w-full h-full rounded-lg border-2 border-red-700">
      <Button
        className="my-10 p-5 w-40"
        onClick={() => reRouteUser(routes.gaming)}
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
    </div>
  );
}
