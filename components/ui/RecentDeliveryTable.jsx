"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { DeliveryStatusBadge } from "./StatusBadge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDeliveryContext } from "@/contexts/DeliveryContext";

const RecentDeliveryTable = ({ deliveries }) => {
  const router = useRouter();
  const { setDeliveries, setDeliveryInfo } = useDeliveryContext();

  useEffect(() => {
    setDeliveries(deliveries);
  }, [deliveries]);

  const handleRowClick = (delivery) => {
    setDeliveryInfo(delivery);
    router.push(`/deliveries/${delivery.delivery_id}`);
  };

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between">
        <h2 className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
          Recent Deliveries
        </h2>
        <Button asChild className={"bg-primary text-primary-foreground"}>
          <Link href="/deliveries">View All</Link>
        </Button>
      </div>
      <Table>
        <TableHeader className={"bg-foreground"}>
          <TableRow className={"hover:bg-foreground"}>
            <TableHead className="lg:w-[100px] text-center text-background font-bold">
              Id
            </TableHead>
            <TableHead className="lg:min-w-[400px] text-background font-bold">
              Customer
            </TableHead>
            <TableHead className="lg:w-[150px] text-center text-background font-bold">
              Date
            </TableHead>
            <TableHead className="lg:w-[150px] text-center text-background font-bold">
              Branch
            </TableHead>
            <TableHead className="lg:w-[150px] text-center text-background font-bold">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deliveries.slice(0, 8).map((delivery) => (
            <TableRow
              key={delivery.id}
              className={"hover:cursor-pointer"}
              onClick={() => handleRowClick(delivery)}
            >
              <TableCell className="font-medium text-center">
                {delivery.id}
              </TableCell>
              <TableCell>{delivery.clientname}</TableCell>
              <TableCell className={"text-center"}>
                {delivery.purchasedate}
              </TableCell>
              <TableCell className={"text-center"}>
                {delivery.pickupbranch}
              </TableCell>
              <TableCell className={"flex justify-center"}>
                <DeliveryStatusBadge status={delivery.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentDeliveryTable;
