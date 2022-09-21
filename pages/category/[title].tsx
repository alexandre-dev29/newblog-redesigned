import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  PageGetCategoryByTitleComp,
  ssrGetAllCategories,
  ssrGetCategoryByTitle,
} from "../../Types/generated/graphqlPages";
import { withApollo } from "../../config/graphql/withApollo";

const CategoryArticles: PageGetCategoryByTitleComp = ({ data, error }) => {
  const currentElement = data?.allCategory[0];
  return (
    <div>
      <h1>{currentElement?.title}</h1>
    </div>
  );
};

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  const { props } = await ssrGetAllCategories.getServerPage(
    { variables: { limit: 20, offset: 0 } },
    { cookies: {}, req: undefined }
  );
  const paths =
    props?.data?.allCategory?.map((value) => ({
      params: { title: value.title },
    })) || [];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await ssrGetCategoryByTitle.getServerPage(
    { variables: { title: params?.title?.toString() || "" } },
    // @ts-ignore
    { cookies: undefined }
  );
  if (res.props.error || !res.props.data?.allCategory?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...res,
    },
    revalidate: 120,
  };
};
export default withApollo(
  ssrGetCategoryByTitle.withPage((arg) => ({
    variables: { title: arg?.query?.title?.toString() || "" },
  }))(CategoryArticles)
);
