import { Metadata } from "next";
import "./global.css";
import { monaSans } from "./fonts/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Agentoor",
  openGraph: {
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-mona-sans", monaSans.variable)}>
        {children}
      </body>
    </html>
  );
}
