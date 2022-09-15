import React from "react";
import { Text } from "@nextui-org/react";
import Link from "next/link";

export default function Footer() {
  return (
    <div style={{ position: "fixed", bottom: 0, right: 40 }}>
      <Link href={"https://axelmwenze.dev"} target={"_blank"}>
        <Text
          h5
          weight="bold"
          transform="uppercase"
          css={{
            textGradient: "45deg, $purple600 10%, $pink600 100%",
            textAlign: "center",
            "@smMax": { fontSize: "$md", display: "none" },
          }}
          style={{ cursor: "pointer" }}
        >
          &copy; Axel Mwenze
        </Text>
      </Link>
    </div>
  );
}
