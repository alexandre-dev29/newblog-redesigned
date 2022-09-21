import * as Types from "./graphqlTypes";
import * as Operations from "./graphqlTypes";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import * as Apollo from "@apollo/client";
import { QueryHookOptions, useQuery } from "@apollo/client";
import type React from "react";
import { ApolloClientContext, getApolloClient } from "../../config";

export async function getServerPageGetOneAuthor(
  options: Omit<Apollo.QueryOptions<Types.GetOneAuthorQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetOneAuthorQuery>({
    ...options,
    query: Operations.GetOneAuthorDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetOneAuthorComp = React.FC<{ data?: Types.GetOneAuthorQuery; error?: Apollo.ApolloError }>;
export const withPageGetOneAuthor =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetOneAuthorQuery, Types.GetOneAuthorQueryVariables>
  ) =>
  (WrappedComponent: PageGetOneAuthorComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetOneAuthorDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetOneAuthor = {
  getServerPage: getServerPageGetOneAuthor,
  withPage: withPageGetOneAuthor,
};
export async function getServerPageGetAllCategories(
  options: Omit<Apollo.QueryOptions<Types.GetAllCategoriesQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAllCategoriesQuery>({
    ...options,
    query: Operations.GetAllCategoriesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetAllCategoriesComp = React.FC<{
  data?: Types.GetAllCategoriesQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetAllCategories =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetAllCategoriesQuery, Types.GetAllCategoriesQueryVariables>
  ) =>
  (WrappedComponent: PageGetAllCategoriesComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetAllCategoriesDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetAllCategories = {
  getServerPage: getServerPageGetAllCategories,
  withPage: withPageGetAllCategories,
};
export async function getServerPageGetCategoryByTitle(
  options: Omit<Apollo.QueryOptions<Types.GetCategoryByTitleQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetCategoryByTitleQuery>({
    ...options,
    query: Operations.GetCategoryByTitleDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetCategoryByTitleComp = React.FC<{
  data?: Types.GetCategoryByTitleQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetCategoryByTitle =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetCategoryByTitleQuery, Types.GetCategoryByTitleQueryVariables>
  ) =>
  (WrappedComponent: PageGetCategoryByTitleComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetCategoryByTitleDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetCategoryByTitle = {
  getServerPage: getServerPageGetCategoryByTitle,
  withPage: withPageGetCategoryByTitle,
};
export async function getServerPageGetOneCategory(
  options: Omit<Apollo.QueryOptions<Types.GetOneCategoryQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetOneCategoryQuery>({
    ...options,
    query: Operations.GetOneCategoryDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetOneCategoryComp = React.FC<{
  data?: Types.GetOneCategoryQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetOneCategory =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetOneCategoryQuery, Types.GetOneCategoryQueryVariables>
  ) =>
  (WrappedComponent: PageGetOneCategoryComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetOneCategoryDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetOneCategory = {
  getServerPage: getServerPageGetOneCategory,
  withPage: withPageGetOneCategory,
};
export async function getServerPageGetAllFeaturedPost(
  options: Omit<Apollo.QueryOptions<Types.GetAllFeaturedPostQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAllFeaturedPostQuery>({
    ...options,
    query: Operations.GetAllFeaturedPostDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetAllFeaturedPostComp = React.FC<{
  data?: Types.GetAllFeaturedPostQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetAllFeaturedPost =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetAllFeaturedPostQuery, Types.GetAllFeaturedPostQueryVariables>
  ) =>
  (WrappedComponent: PageGetAllFeaturedPostComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetAllFeaturedPostDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetAllFeaturedPost = {
  getServerPage: getServerPageGetAllFeaturedPost,
  withPage: withPageGetAllFeaturedPost,
};
export async function getServerPageGetAllPosts(
  options: Omit<Apollo.QueryOptions<Types.GetAllPostsQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAllPostsQuery>({
    ...options,
    query: Operations.GetAllPostsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetAllPostsComp = React.FC<{ data?: Types.GetAllPostsQuery; error?: Apollo.ApolloError }>;
export const withPageGetAllPosts =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetAllPostsQuery, Types.GetAllPostsQueryVariables>
  ) =>
  (WrappedComponent: PageGetAllPostsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetAllPostsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetAllPosts = {
  getServerPage: getServerPageGetAllPosts,
  withPage: withPageGetAllPosts,
};
export async function getServerPageGetOnePost(
  options: Omit<Apollo.QueryOptions<Types.GetOnePostQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetOnePostQuery>({
    ...options,
    query: Operations.GetOnePostDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetOnePostComp = React.FC<{ data?: Types.GetOnePostQuery; error?: Apollo.ApolloError }>;
export const withPageGetOnePost =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetOnePostQuery, Types.GetOnePostQueryVariables>
  ) =>
  (WrappedComponent: PageGetOnePostComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetOnePostDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetOnePost = {
  getServerPage: getServerPageGetOnePost,
  withPage: withPageGetOnePost,
};
export async function getServerPageGetPostBySlug(
  options: Omit<Apollo.QueryOptions<Types.GetPostBySlugQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetPostBySlugQuery>({
    ...options,
    query: Operations.GetPostBySlugDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetPostBySlugComp = React.FC<{ data?: Types.GetPostBySlugQuery; error?: Apollo.ApolloError }>;
export const withPageGetPostBySlug =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetPostBySlugQuery, Types.GetPostBySlugQueryVariables>
  ) =>
  (WrappedComponent: PageGetPostBySlugComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetPostBySlugDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetPostBySlug = {
  getServerPage: getServerPageGetPostBySlug,
  withPage: withPageGetPostBySlug,
};
export async function getServerPageGetIndexData(
  options: Omit<Apollo.QueryOptions<Types.GetIndexPageDataQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetIndexPageDataQuery>({
    ...options,
    query: Operations.GetIndexPageDataDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetIndexDataComp = React.FC<{
  data?: Types.GetIndexPageDataQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetIndexData =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetIndexPageDataQuery, Types.GetIndexPageDataQueryVariables>
  ) =>
  (WrappedComponent: PageGetIndexDataComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetIndexPageDataDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetIndexData = {
  getServerPage: getServerPageGetIndexData,
  withPage: withPageGetIndexData,
};
