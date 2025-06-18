import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DeliveryContextProvider } from "@/contexts/DeliveryContext";

export const metadata = {
  title: "M.Saleh Stock Inventory",
  description:
    "This is a web app that monitors deliveries posted by all branches.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <DeliveryContextProvider>{children}</DeliveryContextProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
