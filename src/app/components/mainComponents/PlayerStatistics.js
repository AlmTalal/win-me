import { useAddress } from "@thirdweb-dev/react";
import React from "react";
import Separator from "../Separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PlayerStatistics() {
  const address = useAddress();

  const statistics = [
    ["Games Won", 90],
    ["Nfts Owned", 2],
    ["Total tokens Won", 1000],
  ];

  return (
    <div className="col-span-2 bg-black w-full h-full rounded p-5 text-white font-bold text-3xl ">
      {address ? (
        <>
          <div className="h-16 flex w-full justify-start items-center ">
            <h1>Player Statistics</h1>
          </div>
          <Separator />
          <Table>
            <TableCaption>You are killing it!</TableCaption>
            <TableBody>
              {statistics.map((statistic) => (
                <TableRow>
                  <TableCell className="font-medium">{statistic[0]}</TableCell>
                  <TableCell>{statistic[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <div className="flex flex-1 justify-center items-center h-full">
          <h1 className="text-center text-base mt-16">
            Please connect to your wallet
          </h1>
        </div>
      )}
    </div>
  );
}
