import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { DarkTheme, LightTheme } from "../config/themes";
import Router from "next/router";
import LayoutComponent from "../components/Layout";
import { IconoirProvider } from "iconoir-react";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme={"system"}
      attribute={"class"}
      value={{ light: LightTheme.className, dark: DarkTheme.className }}
    >
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
