import type { GetServerSideProps } from "next";
import { PageGetIndexDataComp, ssrGetIndexData } from "../Types/generated/graphqlPages";
import { withApollo } from "../config/graphql/withApollo";
import { ArticleContainer, FeaturedArticleComponent, SeoData } from "../components";

const Home: PageGetIndexDataComp = ({ data, error }) => {
  const { description, title, author, tags, slug, mainImage, categories, viewCount, _id, _createdAt }: any =
    data?.allFeaturedArticle[0].featured;

  return (
    <div>
      <SeoData
        pageTitle={"Blog Axel Mwenze"}
        description={
          " I am a software engineer and full stack web developer, Living in DRC and this this my blog created from scratch using NextJs, Graphql, SanityCms and NextUi"
        }
      />
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

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  res.setHeader("Cache-Control", "public, s-maxage=30, stale-while-revalidate=100");
  // @ts-ignore
  return await ssrGetIndexData.getServerPage({}, { cookies: undefined });
};
export default withApollo(ssrGetIndexData.withPage(() => ({}))(Home));
