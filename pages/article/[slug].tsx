import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { GetServerSideProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "highlight.js/styles/atom-one-dark.css";
import { motion, useScroll } from "framer-motion";
import { Text } from "@nextui-org/react";
import { ssrGetPostBySlug } from "../../Types/generated/graphqlPages";
import { Post } from "../../Types/generated/graphqlTypes";

interface mixedReturnedServerData {
  mdxSource: any;
  dataPage: Post;
}

const PostPage = ({ mdxSource, dataPage }: mixedReturnedServerData) => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div className={"progress-bar"} style={{ scaleX: scrollYProgress }} />
      <Text>{dataPage.title}</Text>

      <article>
        <MDXRemote {...mdxSource} />
      </article>
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
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }], rehypeHighlight],
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
