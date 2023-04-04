"use client";

import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { TextStyleConfiguration } from "@/style/TextStyleConfiguration";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = extendTheme({
    fonts: {
      heading: openSans.style.fontFamily,
      body: openSans.style.fontFamily,
    },
    components: {
      Text: TextStyleConfiguration,
    },
  });

  return (
    <html lang="en">
      <ChakraProvider theme={theme}>
        <body>{children}</body>
      </ChakraProvider>
    </html>
  );
}
