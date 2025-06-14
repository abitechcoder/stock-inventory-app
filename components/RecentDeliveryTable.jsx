import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const RecentDeliveryTable = ({ deliveries }) => {
  return (
    <Table>
      <TableHeader className={"bg-gray-200"}>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deliveries.map((delivery) => (
          <TableRow key={delivery.id}>
            <TableCell className="font-medium">{delivery.id}</TableCell>
            <TableCell>{delivery.clientname}</TableCell>
            <TableCell>{delivery.purchasedate}</TableCell>
            <TableCell>{delivery.pickupbranch}</TableCell>
            <TableCell>{delivery.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentDeliveryTable;
