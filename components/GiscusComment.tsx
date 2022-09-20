import Giscus from "@giscus/react";
import { useTheme } from "@nextui-org/react";

const GiscusComment = () => {
  const { isDark, type } = useTheme();
  const projectRepo = process.env.NEXT_PUBLIC_GISCUS_PROJECT_REPO;
  const ownerName = process.env.NEXT_PUBLIC_GISCUS_PROJECT_NAME;
  const projectRepoId = process.env.NEXT_PUBLIC_GISCUS_PROJECT_REPO_ID;
  const discussionCategoryId = process.env.NEXT_PUBLIC_GISCUS_DISCUSSION_CATEGORY_ID;
  const discussionCategoryName = process.env.NEXT_PUBLIC_GISCUS_DISCUSSION_CATEGORY_NAME;

  return (
    <>
      <Giscus
        id="comment-id"
        repo={`${ownerName}/${projectRepo}`}
        repoId={`${projectRepoId}`}
        category={discussionCategoryName}
        categoryId={discussionCategoryId}
        mapping="pathname"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="top"
        theme={isDark ? "dark" : "light"}
        lang="en"
        loading="lazy"
      />
    </>
  );
};

export default GiscusComment;
