"use client"
import { useDelivery } from "../lib/hooks";

export default function Home() {
  const { deliveries } = useDelivery();

  // console.log("Deliveries:", deliveries)

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Recent Transactions</h2>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-lg border border-[#dbe0e6] bg-white">
          <table className="flex-1">
            <thead>
              <tr className="bg-white">
                <th
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-120 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                  Product Name
                </th>
                <th
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-240 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                  Quantity
                </th>
                <th
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-360 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                  Date</th>
                <th
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-480 px-4 py-3 text-left text-[#111418] w-60 text-sm font-medium leading-normal">
                  Type</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-t-[#dbe0e6]">
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                  Widget A</td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                  100</td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                  2024-07-26
                </td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-full">
                    <span className="truncate">Sale</span>
                  </button>
                </td>
              </tr>
              <tr className="border-t border-t-[#dbe0e6]">
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                  Gadget B</td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                  50</td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                  2024-07-25
                </td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-full">
                    <span className="truncate">Purchase</span>
                  </button>
                </td>
              </tr>
              <tr className="border-t border-t-[#dbe0e6]">
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                  Tool C</td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                  75</td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                  2024-07-24
                </td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-full">
                    <span className="truncate">Sale</span>
                  </button>
                </td>
              </tr>
              <tr className="border-t border-t-[#dbe0e6]">
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                  Part D</td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                  200</td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                  2024-07-23
                </td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-full">
                    <span className="truncate">Purchase</span>
                  </button>
                </td>
              </tr>
              <tr className="border-t border-t-[#dbe0e6]">
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                  Component E
                </td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                  150</td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                  2024-07-22
                </td>
                <td
                  className="table-d5e33407-730e-4d4b-9125-c8300679d0f9-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-full">
                    <span className="truncate">Sale</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}
