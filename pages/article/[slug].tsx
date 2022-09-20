import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { GetServerSideProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/atom-one-dark.css";
import { motion, useScroll } from "framer-motion";
import { Col, Row, Table, Text } from "@nextui-org/react";
import { ssrGetPostBySlug } from "../../Types/generated/graphqlPages";
import { Post } from "../../Types/generated/graphqlTypes";
import { SeoData, YouTubeComp } from "../../components";
import Image from "next/image";
import { EyeEmpty } from "iconoir-react";
import GiscusComment from "../../components/GiscusComment";
import { useRouter } from "next/router";
import Script from "next/script";

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
  const router = useRouter();
  return (
    <div>
      <Script src="https://unpkg.com/shiki"></Script>

      <motion.div className={"progress-bar"} style={{ scaleX: scrollYProgress }} />
      <SeoData
        pageTitle={`${dataPage.title}`}
        description={`${dataPage.description}`}
        imageUrl={`${dataPage.mainImage?.asset?.url}`}
        keywords={dataPage.tags?.join(",")}
        urlPath={router.asPath}
      />
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
            {new Date(`${dataPage.publishedAt}`).toISOString().split("T")[0]}
          </Text>
        </Col>
        <Col>
          <Row justify={"flex-end"}>
            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm", mr: "10px" }}>
              {dataPage.viewCount}
            </Text>
            <EyeEmpty fontSize={25} color={"var(--nextui-colors-accents7)"} />
          </Row>
        </Col>
      </Row>
      <article>
        <MDXRemote {...mdxSource} components={allComponent} />
      </article>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        {dataPage.tags?.map((value, index) => (
          <Text key={index} css={{ color: "$red600", fontWeight: "bold", marginRight: "10px" }}>
            {` #${value} `}
          </Text>
        ))}
      </div>
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
  const selectedArticle = props.data?.allPost[0];
  const { content } = matter(`${selectedArticle.content}`);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeCodeTitles,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
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
