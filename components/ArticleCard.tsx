import { Card, Col, Container, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import { EyeEmpty } from "iconoir-react";
import Link from "next/link";
import { PostFragmentFragment } from "../Types/generated/graphqlTypes";
import { imageFromSource } from "../utils";

type articleData = {
  data: PostFragmentFragment;
};

export function ArticleCard({ data }: articleData) {
  return (
    <Card css={{ borderRadius: "$xs" }}>
      <Card.Body css={{ p: 0 }}>
        <Image
          src={imageFromSource(`${data?.mainImage?.asset?.url}`).url()}
          objectFit="cover"
          width="600px"
          height={400}
          alt={`${data.mainImage?.asset?.altText}`}
        />
      </Card.Body>
      <Card.Footer>
        <Container display={"flex"} direction={"column"}>
          <Link href={`/article/${data.slug?.current}`}>
            <Text
              h5
              weight="bold"
              transform="uppercase"
              css={{ textGradient: "45deg, $purple600 10%, $pink600 100%", textAlign: "center" }}
              style={{ cursor: "pointer" }}
            >
              {data.title}
            </Text>
          </Link>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text
              size={14}
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {data.description}
            </Text>
            <Row justify={"space-between"} css={{ mt: "$xs" }}>
              <Col>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm", mr: "10px" }}>
                  {new Date(data.publishedAt).toISOString().split("T")[0]}
                </Text>
              </Col>
              <Col>
                <Row justify={"flex-end"}>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm", mr: "10px" }}>
                    {data.viewCount}
                  </Text>
                  <EyeEmpty fontSize={25} color={"var(--nextui-colors-accents7)"} />
                </Row>
              </Col>
            </Row>
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  );
}
