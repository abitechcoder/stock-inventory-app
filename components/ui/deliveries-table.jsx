"use client";

import React from "react";
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
import { Input } from "@/components/ui/input";
import { PackageSearch } from "lucide-react";

export const DeliveriesTable = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = React.useState("");
  const { setDeliveryInfo, deliveries } = useDeliveryContext();

  const handleRowClick = (delivery) => {
    setDeliveryInfo(delivery);
    router.push(`/deliveries/${delivery.delivery_id}`);
  };

  const filteredDeliveries = React.useMemo(() => {
    let processedDeliveries = [...deliveries];

    if (searchTerm) {
      processedDeliveries = processedDeliveries.filter(
        (delivery) =>
          delivery.clientaddress
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          delivery.clientname
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          delivery.pickupbranch
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          delivery.equipmentName
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }
    return processedDeliveries;
  }, [deliveries, searchTerm]);

  return (
    <div className="mt-4">
      <div className="relative w-full sm:max-w-xs mb-6">
        <Input
          type="text"
          placeholder="Search deliveries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <PackageSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      </div>

      {filteredDeliveries.length > 0 ? (
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
            {filteredDeliveries.map((delivery) => (
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
      ) : (
        <div className="text-center py-10 text-muted-foreground">
          <PackageSearch className="mx-auto h-12 w-12 mb-4" />
          <p className="text-lg font-medium">No deliveries found.</p>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};
