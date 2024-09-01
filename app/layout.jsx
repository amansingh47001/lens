import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme/theme-provider";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
