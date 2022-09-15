export default {
  name: "featuredArticle",
  title: "FeaturedArticle",
  type: "document",
  fields: [
    {
      name: "featured",
      title: "Featured",
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
};
