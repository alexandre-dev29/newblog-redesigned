import type { GetServerSideProps } from "next";
import { PageGetIndexDataComp, ssrGetIndexData } from "../Types/generated/graphqlPages";
import { withApollo } from "../config/graphql/withApollo";
import { ArticleContainer, FeaturedArticleComponent } from "../components";
import Head from "next/head";

const list = [
  {
    title: "HOW TO CREATE A BLOG FROM SCRATCH",
    img: "/images/fruit-1.jpeg",
    price: "$5.50",
    slug: "how-to-create-a-blog-from-scratch",
  },
];

const Home: PageGetIndexDataComp = ({ data, error }) => {
  const { description, title, author, tags, slug, mainImage, categories, viewCount, _id, _createdAt }: any =
    data?.allFeaturedArticle[0].featured;

  return (
    <div>
      <Head>
        <title>Blog Axel Mwenze</title>
        <meta
          name={"description"}
          content={
            " I am a software engineer and full stack web developer, Living in DRC and this this my blog created from scratch using NextJs, Graphql, SanityCms and NextUi"
          }
        />
      </Head>
      <FeaturedArticleComponent
        description={description}
        title={title}
        author={author}
        slug={slug}
        categories={categories}
        viewCount={viewCount}
        _id={_id}
        _createdAt={_createdAt}
        mainImage={mainImage}
        tags={tags}
      />
      <ArticleContainer listOfData={data?.allPost} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // @ts-ignore
  return await ssrGetIndexData.getServerPage({}, { cookies: undefined });
};
export default withApollo(ssrGetIndexData.withPage(() => ({}))(Home));
