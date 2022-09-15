import { Grid } from "@nextui-org/react";

import ArticleCard from "./ArticleCard";

export type ArticleContainerPropsType = {
  listOfData: { title: string; price: string; img: string; slug: string }[];
};
export function ArticleContainer(props: ArticleContainerPropsType) {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {props.listOfData.map(({ img, price, title, slug }, index) => (
        <Grid xs={12} sm={6} md={4} key={index}>
          <ArticleCard title={title} price={price} img={img} slug={slug} />
        </Grid>
      ))}
    </Grid.Container>
  );
}
