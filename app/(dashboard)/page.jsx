import { getDeliveries } from "@/lib/data";
import RecentDeliveryTable from "@/components/RecentDeliveryTable";

export default async function Home() {
  const deliveries = await getDeliveries();
  

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Recent Deliveries</h2>
        {deliveries.length === 0 && (
         <div className="flex flex-col items-center justify-center text-center p-8 bg-card rounded-lg shadow-md">
            <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Could Not Load Deliveries</h2>
            <p className="text-muted-foreground">
              Error occured while fetching delivery data from the server. Please try again.
            </p>
          </div>
      )}

      <div className="px-4 py-3">
        {deliveries.length > 0 && <RecentDeliveryTable deliveries={deliveries.slice(0, 10)} />}
      </div>
    </div>

  );
}
