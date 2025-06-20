"use client";

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
import { useDeliveryContext } from "@/contexts/DeliveryContext";

export const DeliveriesTable = () => {
  const router = useRouter();
  const { setDeliveryInfo, deliveries } = useDeliveryContext();

  const handleRowClick = (delivery) => {
    setDeliveryInfo(delivery);
    // Navigate to the dynamic route
    router.push(`/deliveries/${delivery.delivery_id}`);
  };

  return (
    <div className="mt-4">
      <Table>
        <TableHeader className={"bg-foreground"}>
          <TableRow className={"hover:bg-foreground"}>
            <TableHead className="lg:w-[100px] text-center text-background font-bold">
              Id
            </TableHead>
            <TableHead className="text-background font-bold text-center">
              Item Barcode
            </TableHead>
            <TableHead className="text-background font-bold text-center">
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
          {deliveries.map((delivery) => (
            <TableRow
              key={delivery.id}
              className={"hover:cursor-pointer"}
              onClick={() => handleRowClick(delivery)}
            >
              <TableCell className="font-medium text-center">
                {delivery.id}
              </TableCell>
              <TableCell>{delivery.equipmentbarcode}</TableCell>
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
