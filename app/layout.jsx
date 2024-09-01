import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme/theme-provider";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/redux/provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Task Manager",
    default: "Task Manager",
  },
  // title: "Task Manager",
  description: "Task manager which manages all of your tasks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin=""
        />
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossorigin=""
        ></Script>
      </head> */}
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
