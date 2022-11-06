import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo-client";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();
theme.typography.h6 = {
  ...theme.typography.h6,
  fontSize: "16px",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}
