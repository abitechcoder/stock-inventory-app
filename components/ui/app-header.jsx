"use client";
import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const AppHeader = () => {
  const path = usePathname();
  const [page, setPage] = React.useState("");

  React.useEffect(() => {
    if (path === "/") {
      setPage("");
    } else {
      const parts = path.split("/").filter(Boolean);
      setPage(parts[0]);
    }
  }, [path]);

  return (
    <header className="h-[56px] flex justify-between items-center w-full px-8">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
      <Breadcrumb>
        <BreadcrumbList>
          {!page ? (
            <BreadcrumbItem>
              <BreadcrumbPage className={"font-bold"}>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className={"font-bold"}>{page}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      </div>
      <ModeToggle />
    </header>
  );
};
