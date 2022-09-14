import { Card, Col, Container, Row, Text } from "@nextui-org/react";
import { Post } from "../Types/generated/graphqlTypes";
import { imageFromSource } from "../utils";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const FeaturedArticleComponent = ({ title, description, mainImage, slug }: Post) => {
  const router = useRouter();
  return (
    <Card css={{ w: "100%", h: "400px", borderRadius: "$xs" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col></Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Image
          src={imageFromSource(`${mainImage?.asset?.url}`).url()}
          width="800px"
          height="500px"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          height: 300,
        }}
      >
        <Container>
          <Row>
            <Col>
              <Link href={`/article/${slug?.current}`}>
                <Text
                  h3
                  weight="bold"
                  transform="uppercase"
                  css={{
                    textGradient: "45deg, $purple600 10%, $pink600 100%",
                    textAlign: "center",
                    "@smMax": { fontSize: "$md" },
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {title}
                </Text>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text css={{ "@smMax": { fontSize: "$sm", textAlign: "center" } }} size={15}>
                {description}
              </Text>
            </Col>
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default FeaturedArticleComponent;
