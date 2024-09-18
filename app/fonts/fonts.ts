import localFont from "next/font/local";

export const monaSans = localFont({
  variable: "--font-mona-sans",
  src: [
    {
      path: "./Mona-Sans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Mona-Sans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Mona-Sans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Mona-Sans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
