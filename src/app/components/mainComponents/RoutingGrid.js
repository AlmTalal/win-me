import React from "react";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@radix-ui/react-icons";
import { ShoppingCartIcon } from "lucide-react";

export default function RoutingGrig() {
  return (
    <div className=" flex flex-1 flex-col justify-evenly items-center w-full h-full rounded-lg border-2 border-red-700">
      <Button className="my-10 p-5 w-40">
        <PlayIcon />
        <p className="ml-2">Let's play!</p>
      </Button>
      <Button className="my-10 p-5 w-40">
        <ShoppingCartIcon />
        <p className="ml-2">Let's shop!</p>
      </Button>
    </div>
  );
}
