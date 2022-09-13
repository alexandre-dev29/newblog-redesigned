import { Button, Card, Col, Row, Text } from "@nextui-org/react";
import { Post } from "../Types/generated/graphqlTypes";
import { imageFromSource } from "../utils";
import { useRouter } from "next/router";

const FeaturedArticleComponent = ({ title, description, mainImage, slug }: Post) => {
  const router = useRouter();
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text h2 weight="bold" transform="uppercase">
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={imageFromSource(`${mainImage?.asset?.url}`).url()}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
          height: 100,
        }}
      >
        <Row>
          <Col span={10}>
            <Text size={15}>{description}</Text>
          </Col>
          <Col span={2}>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                color="secondary"
                onClick={async () => {
                  await router.push(`/article/${slug?.current}`);
                }}
              >
                <Text css={{ color: "#fff" }} size={12} weight="bold" transform="uppercase">
                  Open The post
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default FeaturedArticleComponent;
