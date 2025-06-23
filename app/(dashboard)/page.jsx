import { getDeliveries } from "@/lib/data";
import RecentDeliveryTable from "@/components/ui/RecentDeliveryTable";
import { AlertTriangle } from "lucide-react";

export default async function Home() {
  const deliveries = await getDeliveries();

  return (
    <div>
      <div className="flex min-w-72 flex-col gap-2">
        <p className="text-foreground tracking-light text-3xl font-bold leading-tight">
          Dashboard
        </p>
        <p className="text-muted-foreground text-sm font-normal leading-normal">
          Overview of your recent delivery activities
        </p>
      </div>
      {deliveries.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center p-8 bg-card rounded-lg shadow-md">
          <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
          <h2 className="text-2xl font-semibold mb-2">
            Could Not Load Deliveries
          </h2>
          <p className="text-muted-foreground">
            Error occured while fetching delivery data from the server. Please
            try again.
          </p>
        </div>
      )}

      <div>
        {deliveries.length > 0 && (
          <RecentDeliveryTable deliveries={deliveries} />
        )}
      </div>
    </div>
  );
}
