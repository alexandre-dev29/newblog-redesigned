import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { GetServerSideProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/atom-one-dark.css";
import { motion, useScroll } from "framer-motion";
import { Col, Row, Table, Text } from "@nextui-org/react";
import { ssrGetPostBySlug } from "../../Types/generated/graphqlPages";
import { Post } from "../../Types/generated/graphqlTypes";
import { YouTubeComp } from "../../components";
import Image from "next/image";
import { EyeEmpty } from "iconoir-react";
import rehypePrettyCode from "rehype-pretty-code";
import GiscusComment from "../../components/GiscusComment";

interface mixedReturnedServerData {
  mdxSource: any;
  dataPage: Post;
}

const PostPage = ({ mdxSource, dataPage }: mixedReturnedServerData) => {
  const { scrollYProgress } = useScroll();
  const allComponent = {
    Text,
    h2: (props: any) => (
      <Text
        h2
        css={{
          textGradient: "45deg, $purple600 10%, $pink600 100%",
          "@xsMax": { fontSize: "$2xl" },
          "@smMin": { fontSize: "$3xl" },
          "@mdMin": { fontSize: "$4xl" },
        }}
        {...props}
      />
    ),
    YouTubeComp,
    Image,
    img: (props: any) => <Image {...props} height={450} width={800} layout="responsive" loading="lazy" />,
    Table,
  };

  return (
    <div>
      <motion.div className={"progress-bar"} style={{ scaleX: scrollYProgress }} />

      <Text
        h2
        css={{
          textGradient: "45deg, $purple600 10%, $pink600 100%",
          "@xsMax": { fontSize: "$3xl" },
          "@smMin": { fontSize: "$4xl" },
          "@mdMin": { fontSize: "$5xl" },
        }}
      >
        {dataPage.title}
      </Text>
      <Row justify={"space-between"} css={{ mt: "$xs", mb: "$xs" }}>
        <Col>
          <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm", mr: "10px" }}>
            {new Date(`${dataPage.publishedAt}`).toUTCString()}
          </Text>
        </Col>
        <Col>
          <Row justify={"flex-end"}>
            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm", mr: "10px" }}>5</Text>
            <EyeEmpty fontSize={25} color={"var(--nextui-colors-accents7)"} />
          </Row>
        </Col>
      </Row>
      <article>
        <MDXRemote {...mdxSource} components={allComponent} />
      </article>
      <section style={{ marginTop: "4rem" }}>
        <GiscusComment />
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { props } = await ssrGetPostBySlug.getServerPage(
    { variables: { slug: params?.slug?.toString() || "" } },
    // @ts-ignore
    { cookies: undefined }
  );

  const options = {
    theme: "one-dark-pro",
    onVisitLine(node: any) {
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }];
      }
    },
    onVisitHighlightedLine(node: any) {
      node.properties.className.push("highlighted");
    },
    onVisitHighlightedWord(node: any) {
      node.properties.className = ["word"];
    },
  };

  const selectedArticle = props.data?.allPost[0];
  const { content } = matter(`${selectedArticle.content}`);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        [rehypePrettyCode, options],
      ],
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      mdxSource,
      dataPage: selectedArticle,
    },
  };
};

export default PostPage;
