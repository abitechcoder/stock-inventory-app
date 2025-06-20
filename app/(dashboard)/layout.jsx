import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { AppHeader } from "@/components/ui/app-header";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider className={"bg-background"}>
      <AppSidebar />
      <main className="w-full h-screen overflow-hidden grid grid-rows-[56px_1fr]">
        <div>
          <AppHeader />
          <Separator />
        </div>
        <div className="p-8 h-full overflow-auto">{children}</div>
      </main>
    </SidebarProvider>
  );
}
