import { NextPage } from "next";
import { useGraphqlErrorState } from "../../utils";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "./graphqlConfig";
import { Toaster } from "react-hot-toast";
import { ErrorPopup } from "../../components";
import { DarkTheme, LightTheme } from "../themes";

export const withApollo = (Comp: NextPage) => (props: any) => {
  const { isOpen, setIsOpen, errorType, messagesError } =
    useGraphqlErrorState();

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <ErrorPopup
        errorType={errorType}
        messages={messagesError}
        onCloseEvent={closeModal}
        openStatus={isOpen}
      />
      <Toaster />
      <Head>
        <title>Welcome The template </title>
      </Head>
      <NextThemesProvider
        defaultTheme={"system"}
        attribute={"class"}
        value={{ light: LightTheme.className, dark: DarkTheme.className }}
      >
        <NextUIProvider>
          <ApolloProvider
            client={getApolloClient(undefined, props.apolloState)}
          >
            <Comp />
          </ApolloProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  );
};
