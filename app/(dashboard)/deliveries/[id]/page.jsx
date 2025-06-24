"use client";
import React, { useState } from "react";
import { useDeliveryContext } from "@/contexts/DeliveryContext";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Delivery = () => {
  const { id } = useParams();
  const { deliveryInfo } = useDeliveryContext();
  const [imgSrc, setImgSrc] = useState(
    `https://msalehgroup.co.in/msalah/api/delivery_receivers_photo/${id}.jpeg`
  );

  const handleError = () => {
    // Fallback to .jpg if .jpeg fails
    if (imgSrc.endsWith(".jpeg")) {
      setImgSrc(
        `https://msalehgroup.co.in/msalah/api/delivery_receivers_photo/${id}.jpg`
      );
    }
  };

  return (
    <div className="h-full">
      <Link href="/deliveries" className="flex items-center gap-2 mb-8">
        <div className="h-[30px] w-[30px] rounded-full bg-primary flex justify-center items-center">
          <ArrowLeft className="text-primary-foreground h-[20px] w-[20px]" />
        </div>
        <p className="text-muted-foreground text-sm">Back to Deliveries</p>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <img
          src={imgSrc}
          onError={handleError}
          className="w-full h-[300px] lg:h-[400px] object-center object-contain"
          alt="Photo of receiver"
        />
        <div className="text-foreground grid gap-4">
          <div className="grid gap-2">
            <div>
              <h3 className="text-muted-foreground text-xs">Customer Name</h3>
              <h1 className="text-2xl font-bold">{deliveryInfo?.clientname}</h1>
            </div>
            <div>
              <h3 className="text-muted-foreground text-xs">
                Customer Address
              </h3>
              <p className="text-lg font-bold">{deliveryInfo?.clientaddress}</p>
            </div>
            {/* <div>
            <h3 className="text-muted-foreground text-xs">Customer Phone</h3>
            <p className="text-lg font-bold">{deliveryInfo?.clientphone}</p>
          </div> */}
          </div>

          <div className="grid gap-2">
            <div>
              <h3 className="text-muted-foreground text-xs">Item Name</h3>
              <p className="text-lg font-bold">{deliveryInfo?.equipmentName}</p>
            </div>
            <div>
              <h3 className="text-muted-foreground text-xs">Item Barcode</h3>
              <p className="text-lg font-bold">
                {deliveryInfo?.equipmentbarcode}
              </p>
            </div>
            <div>
              <h3 className="text-muted-foreground text-xs">Purchase Date</h3>
              <p className="text-lg font-bold">{deliveryInfo?.purchasedate}</p>
            </div>
            <div>
              <h3 className="text-muted-foreground text-xs">Branch</h3>
              <p className="text-lg font-bold">{deliveryInfo?.pickupbranch}</p>
            </div>
            {/* <div>
            <h3 className="text-muted-foreground text-xs">Reciever</h3>
            <p className="text-lg font-bold">{deliveryInfo?.receivername}</p>
          </div> */}
            <div>
              <h3 className="text-muted-foreground text-xs">Status</h3>
              <p className="text-lg font-bold">{deliveryInfo?.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
