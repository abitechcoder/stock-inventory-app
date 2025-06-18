"use client";

import { Home, Truck, Package } from "lucide-react";
import Link from "next/link";
import { Separator } from "./separator";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "./sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Deliveries",
    url: "/deliveries",
    icon: Truck,
  },
  // {
  //   title: "Products",
  //   url: "/products",
  //   icon: Package,
  // },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
        <div className="px-4 grid place-items-center">
          <img src="/logo.png" alt="Logo Image" className="h-[40px]" />
        </div>
      </SidebarHeader>

      <Separator />

      <SidebarContent className="px-4 mt-3">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="flex px-3 py-2 rounded-md"
                >
                  <Link
                    href={item.url}
                    className={`flex items-center gap-2 w-full ${
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-muted-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                    }`}
                  >
                    <item.icon className={`w-5 h-5`} />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
