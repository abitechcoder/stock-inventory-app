import { DeliveriesTable } from "@/components/ui/deliveries-table";

const Deliveries = async () => {
  return (
    <div className="h-full">
      <div className="flex min-w-72 flex-col gap-2">
        <p className="text-foreground tracking-light text-3xl font-bold leading-tight">
          Deliveries
        </p>
        <p className="text-muted-foreground text-sm font-normal leading-normal">
          Overview of all delivery activities
        </p>
      </div>

      <div>
        <DeliveriesTable />
      </div>
    </div>
  );
};

export default Deliveries;
