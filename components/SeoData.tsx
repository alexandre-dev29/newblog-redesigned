import * as React from "react";
import Head from "next/head";
import { imageFromSource } from "../utils";

interface ISeoData {
  pageTitle: string | null;
  description: string | null;
  imageUrl?: string | null;
  keywords?: string;
  urlPath?: string;
}

export function SeoData({ pageTitle, description, imageUrl, keywords, urlPath }: ISeoData) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={`${description}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Axel Mwenze" />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={`https://blog.axelmwenze.dev/${urlPath}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${pageTitle}`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:image" content={imageFromSource(`${imageUrl}`).url()} />
    </Head>
  );
}
