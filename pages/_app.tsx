import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { DarkTheme, LightTheme } from "../config/themes";
import Router from "next/router";
import LayoutComponent from "../components/Layout";
import { IconoirProvider } from "iconoir-react";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css";
import Head from "next/head";
import Script from "next/script";

export { reportWebVitals } from "next-axiom";

//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const actions = [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => (window.location.pathname = "blog"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => (window.location.pathname = "contact"),
  },
];
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme={"dark"}
      attribute={"class"}
      value={{ light: LightTheme.className, dark: DarkTheme.className }}
    >
      <Head>
        <Script
          data-host="https://onduis.com"
          data-dnt="true"
          src="https://onduis.com/js/script.js"
          id="ZwSg9rf6GA"
          async
          defer
        ></Script>
      </Head>
      <NextUIProvider>
        <LayoutComponent>
          <IconoirProvider
            iconProps={{
              color: "#2d2d2d",
              strokeWidth: 1,
              width: "1em",
              height: "1em",
            }}
          >
            <Component {...pageProps} />
          </IconoirProvider>
        </LayoutComponent>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
