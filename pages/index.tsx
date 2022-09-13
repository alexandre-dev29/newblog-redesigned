import type { GetServerSideProps } from "next";
import { PageGetIndexDataComp, ssrGetIndexData } from "../Types/generated/graphqlPages";
import { withApollo } from "../config/graphql/withApollo";
import FeaturedArticleComponent from "../components/FeaturedArticleComponent";

const Home: PageGetIndexDataComp = ({ data, error }) => {
  const { description, title, author, tags, slug, mainImage, categories, viewCount, _id, _createdAt }: any =
    data?.allFeaturedArticle[0].featured;
  return (
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
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetIndexData.getServerPage({}, { cookies: undefined });
};
export default withApollo(ssrGetIndexData.withPage(() => ({}))(Home));
