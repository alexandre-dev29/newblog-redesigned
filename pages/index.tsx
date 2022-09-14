import type { GetServerSideProps } from "next";
import { PageGetIndexDataComp, ssrGetIndexData } from "../Types/generated/graphqlPages";
import { withApollo } from "../config/graphql/withApollo";
import FeaturedArticleComponent from "../components/FeaturedArticleComponent";
import ArticleContainer from "../components/ArticleContainer";

const list = [
  {
    title: "HOW TO CREATE A BLOG FROM SCRATCH",
    img: "/images/fruit-1.jpeg",
    price: "$5.50",
    slug: "how-to-create-a-blog-from-scratch",
  },
  {
    title: "HOW TO CREATE A BLOG FROM SCRATCH",
    img: "/images/fruit-2.jpeg",
    price: "$3.00",
    slug: "how-to-create-a-blog-from-scratch",
  },
  {
    title: "HOW TO CREATE A BLOG FROM SCRATCH",
    img: "/images/fruit-3.jpeg",
    price: "$10.00",
    slug: "how-to-create-a-blog-from-scratch",
  },
  {
    title: "HOW TO CREATE A BLOG FROM SCRATCH",
    img: "/images/fruit-4.jpeg",
    price: "$5.30",
    slug: "how-to-create-a-blog-from-scratch",
  },
  {
    title: "HOW TO CREATE A BLOG FROM SCRATCH",
    img: "/images/fruit-5.jpeg",
    price: "$15.70",
    slug: "how-to-create-a-blog-from-scratch",
  },
  {
    title: "HOW TO CREATE A BLOG FROM SCRATCH 2",
    img: "/images/fruit-6.jpeg",
    price: "$8.00",
    slug: "how-to-create-a-blog-from-scratch",
  },
  {
    title: "HOW TO CREATE A BLOG FROM SCRATCH",
    img: "/images/fruit-7.jpeg",
    price: "$7.50",
    slug: "how-to-create-a-blog-from-scratch",
  },
  {
    title: "HOW TO CREATE A BLOG FROM SCRATCH",
    img: "/images/fruit-8.jpeg",
    price: "$12.20",
    slug: "how-to-create-a-blog-from-scratch",
  },
];
const Home: PageGetIndexDataComp = ({ data, error }) => {
  const { description, title, author, tags, slug, mainImage, categories, viewCount, _id, _createdAt }: any =
    data?.allFeaturedArticle[0].featured;

  return (
    <div>
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
      <ArticleContainer listOfData={list} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // @ts-ignore
  return await ssrGetIndexData.getServerPage({}, { cookies: undefined });
};
export default withApollo(ssrGetIndexData.withPage(() => ({}))(Home));
