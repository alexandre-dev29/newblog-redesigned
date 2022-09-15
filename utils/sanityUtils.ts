import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const clientSanity = sanityClient({
  projectId: process.env.NEXT_PUBLIC_APP_PROJECTID,
  dataset: "production",
  token: process.env.NEXT_PUBLIC_APP_ACCESS_TOKEN,
  apiVersion: "2022-02-01",
  useCdn: true,
});

const builder = imageUrlBuilder(clientSanity);

export const imageFromSource = (source: SanityImageSource) => builder.image(source);
