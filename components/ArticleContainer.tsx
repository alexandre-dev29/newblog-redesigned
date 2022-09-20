import { Grid } from "@nextui-org/react";

import { ArticleCard } from "./ArticleCard";
import { PostFragmentFragment } from "../Types/generated/graphqlTypes";

export type ArticleContainerPropsType = {
  listOfData: PostFragmentFragment[] | any;
};
export function ArticleContainer(props: ArticleContainerPropsType) {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {props.listOfData.map((element: any, index: number) => (
        <Grid xs={12} sm={6} md={4} key={index}>
          <ArticleCard data={element} />
        </Grid>
      ))}
    </Grid.Container>
  );
}
