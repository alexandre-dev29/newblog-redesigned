import { Card, Col, Container, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import { EyeEmpty } from "iconoir-react";
import Link from "next/link";

export function ArticleCard({
  img,
  price,
  title,
  slug,
  datePublished,
}: {
  title: string;
  price: string;
  img: string;
  slug: string;
  datePublished: string;
}) {
  return (
    <Card css={{ borderRadius: "$xs" }}>
      <Card.Body css={{ p: 0 }}>
        <Image src={"https://nextui.org" + img} objectFit="cover" width="600px" height={400} alt={title} />
      </Card.Body>
      <Card.Footer>
        <Container display={"flex"} direction={"column"}>
          <Link href={`/article/${slug}`}>
            <Text
              h5
              weight="bold"
              transform="uppercase"
              css={{ textGradient: "45deg, $purple600 10%, $pink600 100%", textAlign: "center" }}
              style={{ cursor: "pointer" }}
            >
              {title}
            </Text>
          </Link>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text
              size={13}
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Lorem ipsum dolor sit amets consectetur consectetur adipisicing elit. Adipisci aliquam autem
              eligendi,
            </Text>
            <Row justify={"space-between"} css={{ mt: "$xs" }}>
              <Col>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm", mr: "10px" }}>
                  {datePublished}
                </Text>
              </Col>
              <Col>
                <Row justify={"flex-end"}>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm", mr: "10px" }}>
                    5
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
