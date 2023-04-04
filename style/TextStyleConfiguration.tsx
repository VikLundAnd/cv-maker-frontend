import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const baseStyle = defineStyle({
  fontFamily: openSans.style.fontFamily,
});

export const TextStyleConfiguration = defineStyleConfig({
  baseStyle,
});
