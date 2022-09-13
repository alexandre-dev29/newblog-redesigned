import React from "react";
import NavBarComponent from "./NavBar";
import { Container, Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { HalfMoon, SunLight } from "iconoir-react";

interface ILayoutComponent {
  children: any;
}

export default function LayoutComponent({ children }: ILayoutComponent) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div style={{ maxWidth: "100%", boxSizing: "border-box", position: "relative", minHeight: "100vh" }}>
      <Switch
        checked={!isDark}
        color={"warning"}
        size="xl"
        onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
        iconOn={<SunLight />}
        iconOff={<HalfMoon />}
        css={{
          position: "absolute",
          bottom: "45%",
          right: 0,
          "@xsMin": {
            display: "none",
          },
        }}
        style={{ rotate: "-90deg" }}
      />
      <NavBarComponent />
      <Container
        fluid
        css={{
          "@xsMax": {
            padding: "2rem 2rem",
          },
          "@xsMin": {
            padding: "2rem 8rem",
          },
          "@mdMin": {
            padding: "2rem 12rem",
          },
          "@lgMin": {
            padding: "2rem 20rem",
          },
          "@xlMin": {
            padding: "2rem 25rem",
          },
        }}
      >
        <div>{children}</div>
      </Container>
    </div>
  );
}
