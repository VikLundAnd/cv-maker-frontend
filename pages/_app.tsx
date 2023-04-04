import { TextStyleConfiguration } from "@/style/TextStyleConfiguration";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
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
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
