import type { NextPage } from "next";
import { Text } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <Text
      h2
      css={{
        textGradient: "45deg, $purple600 10%, $pink600 100%",
        textAlign: "center",
      }}
    >
      How to create a blog from scratch
    </Text>
  );
};

export default Home;
