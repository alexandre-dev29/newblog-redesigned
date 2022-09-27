import { Avatar, Col, Dropdown, Navbar, Row, Switch, Text, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { GitHub, HalfMoon, SunLight } from "iconoir-react";
import Link from "next/link";

interface INavBarProps {}

export default function NavBarComponent(props: INavBarProps) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Navbar isBordered variant="sticky" shouldHideOnScroll={false}>
      <Navbar.Brand css={{ mr: "$4" }}>
        <Link href={"/"}>
          <Text
            size={35}
            css={{ textGradient: "45deg, $purple600 10%, $pink600 100%" }}
            weight="bold"
            style={{ cursor: "pointer" }}
          >
            AM
          </Text>
        </Link>
        <Text b color="inherit" css={{ mr: "$11", ml: "$8" }} hideIn="xs">
          Axel Mwenze Blog
        </Text>
        <Navbar.Content hideIn="xs" variant="highlight"></Navbar.Content>
      </Navbar.Brand>
      <Navbar.Content css={{ "@xsMax": { w: "100%", jc: "flex-end" } }}>
        {/*<Navbar.Item css={{ "@xsMax": { w: "100%", jc: "center" } }} id={"5"}>*/}
        {/*  <Input*/}
        {/*    aria-label={"search"}*/}
        {/*    id={"currentSearchInput"}*/}
        {/*    clearable*/}
        {/*    contentLeft={<Search color={"var(--nextui-colors-accents6)"} />}*/}
        {/*    contentLeftStyling={false}*/}
        {/*    css={{*/}
        {/*      w: "100%",*/}
        {/*      "@xsMax": {*/}
        {/*        mw: "300px",*/}
        {/*      },*/}
        {/*      "& .nextui-input-content--left": { h: "100%", ml: "$4", dflex: "center" },*/}
        {/*    }}*/}
        {/*    placeholder="Search..."*/}
        {/*  />*/}
        {/*</Navbar.Item>*/}
        <Navbar.Item css={{ "@xsMax": { display: "none" } }} id={"6"}>
          <Switch
            checked={!isDark}
            color={"warning"}
            size="xl"
            onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
            iconOn={<SunLight />}
            iconOff={<HalfMoon />}
          />
        </Navbar.Item>
        <Navbar.Item aria-valuetext={"testing"}>
          <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
              <Avatar
                bordered
                id={"avatar_id"}
                as="button"
                color="primary"
                size="md"
                src="https://avatars.githubusercontent.com/u/43857117?s=400&u=d2b32ebc8e0092c2510585d5cc279f12f24b20fd&v=4"
              />
            </Dropdown.Trigger>

            <Dropdown.Menu color="secondary">
              <Dropdown.Item key="profile" css={{ height: "$18" }} textValue={" Axel Mwenze"}>
                <Text b color="inherit" css={{ d: "flex" }} aria-valuetext={"Axel Mwenze"}>
                  Axel Mwenze
                </Text>
                <Text b color="inherit" css={{ d: "flex" }} aria-valuetext={"axel@axelmwenze.dev"}>
                  axel@axelmwenze.dev
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider textValue={"My Portfolio"}>
                <Text b color="inherit" aria-valuetext={"My Portfolio"}>
                  My Portfolio
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="blogCode" withDivider textValue={"The Blog Code"}>
                <Link href={"https://github.com/alexandre-dev29/newblog-redesigned"}>
                  <Row justify={"center"}>
                    <Col span={3}>
                      <GitHub />
                    </Col>
                    <Col>
                      <Text b color="inherit" aria-valuetext={"The Blog Code"}>
                        Blog Code
                      </Text>
                    </Col>
                  </Row>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
