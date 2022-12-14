import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type Author = Document & {
  __typename?: "Author";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  /** THis is the bio of the author */
  bio?: Maybe<Scalars["String"]>;
  image?: Maybe<Image>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Slug>;
};

export type AuthorFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  bio?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type AuthorSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type Block = {
  __typename?: "Block";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars["String"]>;
  style?: Maybe<Scalars["String"]>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Boolean"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Boolean"]>;
};

export type Category = Document & {
  __typename?: "Category";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  featured?: Maybe<Post>;
  mainImage?: Maybe<Image>;
  title?: Maybe<Scalars["String"]>;
};

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  featured?: InputMaybe<PostFilter>;
  mainImage?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<ImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Date"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Date"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Date"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Date"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Date"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Date"]>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["DateTime"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["DateTime"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["DateTime"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["DateTime"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["DateTime"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["DateTime"]>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type FeaturedArticle = Document & {
  __typename?: "FeaturedArticle";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  featured?: Maybe<Post>;
};

export type FeaturedArticleFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  featured?: InputMaybe<PostFilter>;
};

export type FeaturedArticleSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: "File";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Float"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Float"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Float"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Float"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Float"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Float"]>;
};

export type Geopoint = {
  __typename?: "Geopoint";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  alt?: Maybe<Scalars["Float"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<Scalars["ID"]>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars["ID"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["ID"]>;
  nin?: InputMaybe<Array<Scalars["ID"]>>;
};

export type Image = {
  __typename?: "Image";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Int"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Int"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Int"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Int"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Int"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Int"]>;
};

export type Post = Document & {
  __typename?: "Post";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  content?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  mainImage?: Maybe<Image>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  slug?: Maybe<Slug>;
  tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title?: Maybe<Scalars["String"]>;
  viewCount?: Maybe<Scalars["Float"]>;
};

export type PostFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  author?: InputMaybe<AuthorFilter>;
  content?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  mainImage?: InputMaybe<ImageFilter>;
  publishedAt?: InputMaybe<DatetimeFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  viewCount?: InputMaybe<FloatFilter>;
};

export type PostSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<ImageSorting>;
  publishedAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
  viewCount?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename?: "RootQuery";
  Author?: Maybe<Author>;
  Category?: Maybe<Category>;
  Document?: Maybe<Document>;
  FeaturedArticle?: Maybe<FeaturedArticle>;
  Post?: Maybe<Post>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  allAuthor: Array<Author>;
  allCategory: Array<Category>;
  allDocument: Array<Document>;
  allFeaturedArticle: Array<FeaturedArticle>;
  allPost: Array<Post>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
};

export type RootQueryAuthorArgs = {
  id: Scalars["ID"];
};

export type RootQueryCategoryArgs = {
  id: Scalars["ID"];
};

export type RootQueryDocumentArgs = {
  id: Scalars["ID"];
};

export type RootQueryFeaturedArticleArgs = {
  id: Scalars["ID"];
};

export type RootQueryPostArgs = {
  id: Scalars["ID"];
};

export type RootQuerySanityFileAssetArgs = {
  id: Scalars["ID"];
};

export type RootQuerySanityImageAssetArgs = {
  id: Scalars["ID"];
};

export type RootQueryAllAuthorArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<AuthorSorting>>;
  where?: InputMaybe<AuthorFilter>;
};

export type RootQueryAllCategoryArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<CategorySorting>>;
  where?: InputMaybe<CategoryFilter>;
};

export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllFeaturedArticleArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<FeaturedArticleSorting>>;
  where?: InputMaybe<FeaturedArticleFilter>;
};

export type RootQueryAllPostArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<PostSorting>>;
  where?: InputMaybe<PostFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};

export type SanityAssetSourceData = {
  __typename?: "SanityAssetSourceData";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars["String"]>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars["String"]>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars["String"]>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: "SanityFileAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  altText?: Maybe<Scalars["String"]>;
  assetId?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  mimeType?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  sha1hash?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: "SanityImageAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  altText?: Maybe<Scalars["String"]>;
  assetId?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  sha1hash?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]>;
  uploadId?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: "SanityImageCrop";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  bottom?: Maybe<Scalars["Float"]>;
  left?: Maybe<Scalars["Float"]>;
  right?: Maybe<Scalars["Float"]>;
  top?: Maybe<Scalars["Float"]>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: "SanityImageDimensions";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: "SanityImageHotspot";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: "SanityImageMetadata";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  blurHash?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars["Boolean"]>;
  isOpaque?: Maybe<Scalars["Boolean"]>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars["String"]>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: "SanityImagePalette";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: "SanityImagePaletteSwatch";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
  foreground?: Maybe<Scalars["String"]>;
  population?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars["Boolean"]>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars["ID"]>;
};

export type Slug = {
  __typename?: "Slug";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  current?: Maybe<Scalars["String"]>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = "ASC",
  /** Sorts on the value in descending order. */
  Desc = "DESC",
}

export type Span = {
  __typename?: "Span";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  marks?: Maybe<Array<Maybe<Scalars["String"]>>>;
  text?: Maybe<Scalars["String"]>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars["String"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["String"]>;
  nin?: InputMaybe<Array<Scalars["String"]>>;
};

export type GetOneAuthorQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetOneAuthorQuery = {
  __typename?: "RootQuery";
  Author?: {
    __typename?: "Author";
    _id?: string | null;
    bio?: string | null;
    _createdAt?: any | null;
    slug?: { __typename?: "Slug"; current?: string | null } | null;
    image?: {
      __typename: "Image";
      _key?: string | null;
      _type?: string | null;
      asset?: {
        __typename?: "SanityImageAsset";
        description?: string | null;
        title?: string | null;
        size?: number | null;
        url?: string | null;
        altText?: string | null;
        label?: string | null;
        extension?: string | null;
        mimeType?: string | null;
        originalFilename?: string | null;
        source?: {
          __typename?: "SanityAssetSourceData";
          url?: string | null;
          name?: string | null;
          id?: string | null;
        } | null;
        metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
      } | null;
      crop?: {
        __typename?: "SanityImageCrop";
        bottom?: number | null;
        left?: number | null;
        right?: number | null;
        top?: number | null;
      } | null;
    } | null;
  } | null;
};

export type GetAllCategoriesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<CategorySorting> | CategorySorting>;
  where?: InputMaybe<CategoryFilter>;
}>;

export type GetAllCategoriesQuery = {
  __typename?: "RootQuery";
  allCategory: Array<{
    __typename?: "Category";
    _id?: string | null;
    _createdAt?: any | null;
    _key?: string | null;
    _updatedAt?: any | null;
    title?: string | null;
    description?: string | null;
    featured?: {
      __typename?: "Post";
      title?: string | null;
      description?: string | null;
      publishedAt?: any | null;
      tags?: Array<string | null> | null;
      author?: {
        __typename?: "Author";
        name?: string | null;
        image?: {
          __typename: "Image";
          _key?: string | null;
          _type?: string | null;
          asset?: {
            __typename?: "SanityImageAsset";
            description?: string | null;
            title?: string | null;
            size?: number | null;
            url?: string | null;
            altText?: string | null;
            label?: string | null;
            extension?: string | null;
            mimeType?: string | null;
            originalFilename?: string | null;
            source?: {
              __typename?: "SanityAssetSourceData";
              url?: string | null;
              name?: string | null;
              id?: string | null;
            } | null;
            metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
          } | null;
          crop?: {
            __typename?: "SanityImageCrop";
            bottom?: number | null;
            left?: number | null;
            right?: number | null;
            top?: number | null;
          } | null;
        } | null;
      } | null;
    } | null;
    mainImage?: {
      __typename: "Image";
      _key?: string | null;
      _type?: string | null;
      asset?: {
        __typename?: "SanityImageAsset";
        description?: string | null;
        title?: string | null;
        size?: number | null;
        url?: string | null;
        altText?: string | null;
        label?: string | null;
        extension?: string | null;
        mimeType?: string | null;
        originalFilename?: string | null;
        source?: {
          __typename?: "SanityAssetSourceData";
          url?: string | null;
          name?: string | null;
          id?: string | null;
        } | null;
        metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
      } | null;
      crop?: {
        __typename?: "SanityImageCrop";
        bottom?: number | null;
        left?: number | null;
        right?: number | null;
        top?: number | null;
      } | null;
    } | null;
  }>;
};

export type GetCategoryByTitleQueryVariables = Exact<{
  title?: InputMaybe<Scalars["String"]>;
}>;

export type GetCategoryByTitleQuery = {
  __typename?: "RootQuery";
  allCategory: Array<{
    __typename?: "Category";
    _id?: string | null;
    _createdAt?: any | null;
    _key?: string | null;
    _updatedAt?: any | null;
    title?: string | null;
    description?: string | null;
    featured?: {
      __typename?: "Post";
      title?: string | null;
      description?: string | null;
      publishedAt?: any | null;
      tags?: Array<string | null> | null;
      author?: {
        __typename?: "Author";
        name?: string | null;
        image?: {
          __typename: "Image";
          _key?: string | null;
          _type?: string | null;
          asset?: {
            __typename?: "SanityImageAsset";
            description?: string | null;
            title?: string | null;
            size?: number | null;
            url?: string | null;
            altText?: string | null;
            label?: string | null;
            extension?: string | null;
            mimeType?: string | null;
            originalFilename?: string | null;
            source?: {
              __typename?: "SanityAssetSourceData";
              url?: string | null;
              name?: string | null;
              id?: string | null;
            } | null;
            metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
          } | null;
          crop?: {
            __typename?: "SanityImageCrop";
            bottom?: number | null;
            left?: number | null;
            right?: number | null;
            top?: number | null;
          } | null;
        } | null;
      } | null;
    } | null;
    mainImage?: {
      __typename: "Image";
      _key?: string | null;
      _type?: string | null;
      asset?: {
        __typename?: "SanityImageAsset";
        description?: string | null;
        title?: string | null;
        size?: number | null;
        url?: string | null;
        altText?: string | null;
        label?: string | null;
        extension?: string | null;
        mimeType?: string | null;
        originalFilename?: string | null;
        source?: {
          __typename?: "SanityAssetSourceData";
          url?: string | null;
          name?: string | null;
          id?: string | null;
        } | null;
        metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
      } | null;
      crop?: {
        __typename?: "SanityImageCrop";
        bottom?: number | null;
        left?: number | null;
        right?: number | null;
        top?: number | null;
      } | null;
    } | null;
  }>;
};

export type GetOneCategoryQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetOneCategoryQuery = {
  __typename?: "RootQuery";
  Category?: {
    __typename?: "Category";
    _id?: string | null;
    _createdAt?: any | null;
    _key?: string | null;
    _updatedAt?: any | null;
    title?: string | null;
    description?: string | null;
    featured?: {
      __typename?: "Post";
      _id?: string | null;
      _createdAt?: any | null;
      publishedAt?: any | null;
      title?: string | null;
      description?: string | null;
      tags?: Array<string | null> | null;
      content?: string | null;
      viewCount?: number | null;
      slug?: { __typename?: "Slug"; current?: string | null } | null;
      mainImage?: {
        __typename: "Image";
        _key?: string | null;
        _type?: string | null;
        asset?: {
          __typename?: "SanityImageAsset";
          description?: string | null;
          title?: string | null;
          size?: number | null;
          url?: string | null;
          altText?: string | null;
          label?: string | null;
          extension?: string | null;
          mimeType?: string | null;
          originalFilename?: string | null;
          source?: {
            __typename?: "SanityAssetSourceData";
            url?: string | null;
            name?: string | null;
            id?: string | null;
          } | null;
          metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
        } | null;
        crop?: {
          __typename?: "SanityImageCrop";
          bottom?: number | null;
          left?: number | null;
          right?: number | null;
          top?: number | null;
        } | null;
      } | null;
      author?: {
        __typename?: "Author";
        name?: string | null;
        image?: {
          __typename: "Image";
          _key?: string | null;
          _type?: string | null;
          asset?: {
            __typename?: "SanityImageAsset";
            description?: string | null;
            title?: string | null;
            size?: number | null;
            url?: string | null;
            altText?: string | null;
            label?: string | null;
            extension?: string | null;
            mimeType?: string | null;
            originalFilename?: string | null;
            source?: {
              __typename?: "SanityAssetSourceData";
              url?: string | null;
              name?: string | null;
              id?: string | null;
            } | null;
            metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
          } | null;
          crop?: {
            __typename?: "SanityImageCrop";
            bottom?: number | null;
            left?: number | null;
            right?: number | null;
            top?: number | null;
          } | null;
        } | null;
        slug?: { __typename?: "Slug"; current?: string | null } | null;
      } | null;
      categories?: Array<{
        __typename?: "Category";
        title?: string | null;
        description?: string | null;
      } | null> | null;
    } | null;
    mainImage?: {
      __typename: "Image";
      _key?: string | null;
      _type?: string | null;
      asset?: {
        __typename?: "SanityImageAsset";
        description?: string | null;
        title?: string | null;
        size?: number | null;
        url?: string | null;
        altText?: string | null;
        label?: string | null;
        extension?: string | null;
        mimeType?: string | null;
        originalFilename?: string | null;
        source?: {
          __typename?: "SanityAssetSourceData";
          url?: string | null;
          name?: string | null;
          id?: string | null;
        } | null;
        metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
      } | null;
      crop?: {
        __typename?: "SanityImageCrop";
        bottom?: number | null;
        left?: number | null;
        right?: number | null;
        top?: number | null;
      } | null;
    } | null;
  } | null;
};

export type ImageFragmentFragment = {
  __typename: "Image";
  _key?: string | null;
  _type?: string | null;
  asset?: {
    __typename?: "SanityImageAsset";
    description?: string | null;
    title?: string | null;
    size?: number | null;
    url?: string | null;
    altText?: string | null;
    label?: string | null;
    extension?: string | null;
    mimeType?: string | null;
    originalFilename?: string | null;
    source?: {
      __typename?: "SanityAssetSourceData";
      url?: string | null;
      name?: string | null;
      id?: string | null;
    } | null;
    metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
  } | null;
  crop?: {
    __typename?: "SanityImageCrop";
    bottom?: number | null;
    left?: number | null;
    right?: number | null;
    top?: number | null;
  } | null;
};

export type GetAllFeaturedPostQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<FeaturedArticleSorting> | FeaturedArticleSorting>;
  where?: InputMaybe<FeaturedArticleFilter>;
}>;

export type GetAllFeaturedPostQuery = {
  __typename?: "RootQuery";
  allFeaturedArticle: Array<{
    __typename?: "FeaturedArticle";
    _id?: string | null;
    _createdAt?: any | null;
    _key?: string | null;
    featured?: {
      __typename?: "Post";
      _id?: string | null;
      _createdAt?: any | null;
      publishedAt?: any | null;
      title?: string | null;
      description?: string | null;
      tags?: Array<string | null> | null;
      content?: string | null;
      viewCount?: number | null;
      slug?: { __typename?: "Slug"; current?: string | null } | null;
      mainImage?: {
        __typename: "Image";
        _key?: string | null;
        _type?: string | null;
        asset?: {
          __typename?: "SanityImageAsset";
          description?: string | null;
          title?: string | null;
          size?: number | null;
          url?: string | null;
          altText?: string | null;
          label?: string | null;
          extension?: string | null;
          mimeType?: string | null;
          originalFilename?: string | null;
          source?: {
            __typename?: "SanityAssetSourceData";
            url?: string | null;
            name?: string | null;
            id?: string | null;
          } | null;
          metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
        } | null;
        crop?: {
          __typename?: "SanityImageCrop";
          bottom?: number | null;
          left?: number | null;
          right?: number | null;
          top?: number | null;
        } | null;
      } | null;
      author?: {
        __typename?: "Author";
        name?: string | null;
        image?: {
          __typename: "Image";
          _key?: string | null;
          _type?: string | null;
          asset?: {
            __typename?: "SanityImageAsset";
            description?: string | null;
            title?: string | null;
            size?: number | null;
            url?: string | null;
            altText?: string | null;
            label?: string | null;
            extension?: string | null;
            mimeType?: string | null;
            originalFilename?: string | null;
            source?: {
              __typename?: "SanityAssetSourceData";
              url?: string | null;
              name?: string | null;
              id?: string | null;
            } | null;
            metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
          } | null;
          crop?: {
            __typename?: "SanityImageCrop";
            bottom?: number | null;
            left?: number | null;
            right?: number | null;
            top?: number | null;
          } | null;
        } | null;
        slug?: { __typename?: "Slug"; current?: string | null } | null;
      } | null;
      categories?: Array<{
        __typename?: "Category";
        title?: string | null;
        description?: string | null;
      } | null> | null;
    } | null;
  }>;
};

export type GetAllPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<PostSorting> | PostSorting>;
  where?: InputMaybe<PostFilter>;
}>;

export type GetAllPostsQuery = {
  __typename?: "RootQuery";
  allPost: Array<{
    __typename?: "Post";
    _id?: string | null;
    _createdAt?: any | null;
    publishedAt?: any | null;
    title?: string | null;
    description?: string | null;
    tags?: Array<string | null> | null;
    content?: string | null;
    viewCount?: number | null;
    slug?: { __typename?: "Slug"; current?: string | null } | null;
    mainImage?: {
      __typename: "Image";
      _key?: string | null;
      _type?: string | null;
      asset?: {
        __typename?: "SanityImageAsset";
        description?: string | null;
        title?: string | null;
        size?: number | null;
        url?: string | null;
        altText?: string | null;
        label?: string | null;
        extension?: string | null;
        mimeType?: string | null;
        originalFilename?: string | null;
        source?: {
          __typename?: "SanityAssetSourceData";
          url?: string | null;
          name?: string | null;
          id?: string | null;
        } | null;
        metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
      } | null;
      crop?: {
        __typename?: "SanityImageCrop";
        bottom?: number | null;
        left?: number | null;
        right?: number | null;
        top?: number | null;
      } | null;
    } | null;
    author?: {
      __typename?: "Author";
      name?: string | null;
      image?: {
        __typename: "Image";
        _key?: string | null;
        _type?: string | null;
        asset?: {
          __typename?: "SanityImageAsset";
          description?: string | null;
          title?: string | null;
          size?: number | null;
          url?: string | null;
          altText?: string | null;
          label?: string | null;
          extension?: string | null;
          mimeType?: string | null;
          originalFilename?: string | null;
          source?: {
            __typename?: "SanityAssetSourceData";
            url?: string | null;
            name?: string | null;
            id?: string | null;
          } | null;
          metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
        } | null;
        crop?: {
          __typename?: "SanityImageCrop";
          bottom?: number | null;
          left?: number | null;
          right?: number | null;
          top?: number | null;
        } | null;
      } | null;
      slug?: { __typename?: "Slug"; current?: string | null } | null;
    } | null;
    categories?: Array<{
      __typename?: "Category";
      title?: string | null;
      description?: string | null;
    } | null> | null;
  }>;
};

export type GetOnePostQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetOnePostQuery = {
  __typename?: "RootQuery";
  Post?: {
    __typename?: "Post";
    _id?: string | null;
    _createdAt?: any | null;
    publishedAt?: any | null;
    title?: string | null;
    description?: string | null;
    tags?: Array<string | null> | null;
    content?: string | null;
    viewCount?: number | null;
    slug?: { __typename?: "Slug"; current?: string | null } | null;
    mainImage?: {
      __typename: "Image";
      _key?: string | null;
      _type?: string | null;
      asset?: {
        __typename?: "SanityImageAsset";
        description?: string | null;
        title?: string | null;
        size?: number | null;
        url?: string | null;
        altText?: string | null;
        label?: string | null;
        extension?: string | null;
        mimeType?: string | null;
        originalFilename?: string | null;
        source?: {
          __typename?: "SanityAssetSourceData";
          url?: string | null;
          name?: string | null;
          id?: string | null;
        } | null;
        metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
      } | null;
      crop?: {
        __typename?: "SanityImageCrop";
        bottom?: number | null;
        left?: number | null;
        right?: number | null;
        top?: number | null;
      } | null;
    } | null;
    author?: {
      __typename?: "Author";
      name?: string | null;
      image?: {
        __typename: "Image";
        _key?: string | null;
        _type?: string | null;
        asset?: {
          __typename?: "SanityImageAsset";
          description?: string | null;
          title?: string | null;
          size?: number | null;
          url?: string | null;
          altText?: string | null;
          label?: string | null;
          extension?: string | null;
          mimeType?: string | null;
          originalFilename?: string | null;
          source?: {
            __typename?: "SanityAssetSourceData";
            url?: string | null;
            name?: string | null;
            id?: string | null;
          } | null;
          metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
        } | null;
        crop?: {
          __typename?: "SanityImageCrop";
          bottom?: number | null;
          left?: number | null;
          right?: number | null;
          top?: number | null;
        } | null;
      } | null;
      slug?: { __typename?: "Slug"; current?: string | null } | null;
    } | null;
    categories?: Array<{
      __typename?: "Category";
      title?: string | null;
      description?: string | null;
    } | null> | null;
  } | null;
};

export type GetPostBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]>;
}>;

export type GetPostBySlugQuery = {
  __typename?: "RootQuery";
  allPost: Array<{
    __typename?: "Post";
    _id?: string | null;
    _createdAt?: any | null;
    publishedAt?: any | null;
    title?: string | null;
    description?: string | null;
    tags?: Array<string | null> | null;
    content?: string | null;
    viewCount?: number | null;
    slug?: { __typename?: "Slug"; current?: string | null } | null;
    mainImage?: {
      __typename: "Image";
      _key?: string | null;
      _type?: string | null;
      asset?: {
        __typename?: "SanityImageAsset";
        description?: string | null;
        title?: string | null;
        size?: number | null;
        url?: string | null;
        altText?: string | null;
        label?: string | null;
        extension?: string | null;
        mimeType?: string | null;
        originalFilename?: string | null;
        source?: {
          __typename?: "SanityAssetSourceData";
          url?: string | null;
          name?: string | null;
          id?: string | null;
        } | null;
        metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
      } | null;
      crop?: {
        __typename?: "SanityImageCrop";
        bottom?: number | null;
        left?: number | null;
        right?: number | null;
        top?: number | null;
      } | null;
    } | null;
    author?: {
      __typename?: "Author";
      name?: string | null;
      image?: {
        __typename: "Image";
        _key?: string | null;
        _type?: string | null;
        asset?: {
          __typename?: "SanityImageAsset";
          description?: string | null;
          title?: string | null;
          size?: number | null;
          url?: string | null;
          altText?: string | null;
          label?: string | null;
          extension?: string | null;
          mimeType?: string | null;
          originalFilename?: string | null;
          source?: {
            __typename?: "SanityAssetSourceData";
            url?: string | null;
            name?: string | null;
            id?: string | null;
          } | null;
          metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
        } | null;
        crop?: {
          __typename?: "SanityImageCrop";
          bottom?: number | null;
          left?: number | null;
          right?: number | null;
          top?: number | null;
        } | null;
      } | null;
      slug?: { __typename?: "Slug"; current?: string | null } | null;
    } | null;
    categories?: Array<{
      __typename?: "Category";
      title?: string | null;
      description?: string | null;
    } | null> | null;
  }>;
};

export type GetIndexPageDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetIndexPageDataQuery = {
  __typename?: "RootQuery";
  allFeaturedArticle: Array<{
    __typename?: "FeaturedArticle";
    featured?: {
      __typename?: "Post";
      _id?: string | null;
      _createdAt?: any | null;
      publishedAt?: any | null;
      title?: string | null;
      description?: string | null;
      tags?: Array<string | null> | null;
      content?: string | null;
      viewCount?: number | null;
      slug?: { __typename?: "Slug"; current?: string | null } | null;
      mainImage?: {
        __typename: "Image";
        _key?: string | null;
        _type?: string | null;
        asset?: {
          __typename?: "SanityImageAsset";
          description?: string | null;
          title?: string | null;
          size?: number | null;
          url?: string | null;
          altText?: string | null;
          label?: string | null;
          extension?: string | null;
          mimeType?: string | null;
          originalFilename?: string | null;
          source?: {
            __typename?: "SanityAssetSourceData";
            url?: string | null;
            name?: string | null;
            id?: string | null;
          } | null;
          metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
        } | null;
        crop?: {
          __typename?: "SanityImageCrop";
          bottom?: number | null;
          left?: number | null;
          right?: number | null;
          top?: number | null;
        } | null;
      } | null;
      author?: {
        __typename?: "Author";
        name?: string | null;
        image?: {
          __typename: "Image";
          _key?: string | null;
          _type?: string | null;
          asset?: {
            __typename?: "SanityImageAsset";
            description?: string | null;
            title?: string | null;
            size?: number | null;
            url?: string | null;
            altText?: string | null;
            label?: string | null;
            extension?: string | null;
            mimeType?: string | null;
            originalFilename?: string | null;
            source?: {
              __typename?: "SanityAssetSourceData";
              url?: string | null;
              name?: string | null;
              id?: string | null;
            } | null;
            metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
          } | null;
          crop?: {
            __typename?: "SanityImageCrop";
            bottom?: number | null;
            left?: number | null;
            right?: number | null;
            top?: number | null;
          } | null;
        } | null;
        slug?: { __typename?: "Slug"; current?: string | null } | null;
      } | null;
      categories?: Array<{
        __typename?: "Category";
        title?: string | null;
        description?: string | null;
      } | null> | null;
    } | null;
  }>;
  allPost: Array<{
    __typename?: "Post";
    _id?: string | null;
    _createdAt?: any | null;
    publishedAt?: any | null;
    title?: string | null;
    description?: string | null;
    tags?: Array<string | null> | null;
    content?: string | null;
    viewCount?: number | null;
    slug?: { __typename?: "Slug"; current?: string | null } | null;
    mainImage?: {
      __typename: "Image";
      _key?: string | null;
      _type?: string | null;
      asset?: {
        __typename?: "SanityImageAsset";
        description?: string | null;
        title?: string | null;
        size?: number | null;
        url?: string | null;
        altText?: string | null;
        label?: string | null;
        extension?: string | null;
        mimeType?: string | null;
        originalFilename?: string | null;
        source?: {
          __typename?: "SanityAssetSourceData";
          url?: string | null;
          name?: string | null;
          id?: string | null;
        } | null;
        metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
      } | null;
      crop?: {
        __typename?: "SanityImageCrop";
        bottom?: number | null;
        left?: number | null;
        right?: number | null;
        top?: number | null;
      } | null;
    } | null;
    author?: {
      __typename?: "Author";
      name?: string | null;
      image?: {
        __typename: "Image";
        _key?: string | null;
        _type?: string | null;
        asset?: {
          __typename?: "SanityImageAsset";
          description?: string | null;
          title?: string | null;
          size?: number | null;
          url?: string | null;
          altText?: string | null;
          label?: string | null;
          extension?: string | null;
          mimeType?: string | null;
          originalFilename?: string | null;
          source?: {
            __typename?: "SanityAssetSourceData";
            url?: string | null;
            name?: string | null;
            id?: string | null;
          } | null;
          metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
        } | null;
        crop?: {
          __typename?: "SanityImageCrop";
          bottom?: number | null;
          left?: number | null;
          right?: number | null;
          top?: number | null;
        } | null;
      } | null;
      slug?: { __typename?: "Slug"; current?: string | null } | null;
    } | null;
    categories?: Array<{
      __typename?: "Category";
      title?: string | null;
      description?: string | null;
    } | null> | null;
  }>;
};

export type PostFragmentFragment = {
  __typename?: "Post";
  _id?: string | null;
  _createdAt?: any | null;
  publishedAt?: any | null;
  title?: string | null;
  description?: string | null;
  tags?: Array<string | null> | null;
  content?: string | null;
  viewCount?: number | null;
  slug?: { __typename?: "Slug"; current?: string | null } | null;
  mainImage?: {
    __typename: "Image";
    _key?: string | null;
    _type?: string | null;
    asset?: {
      __typename?: "SanityImageAsset";
      description?: string | null;
      title?: string | null;
      size?: number | null;
      url?: string | null;
      altText?: string | null;
      label?: string | null;
      extension?: string | null;
      mimeType?: string | null;
      originalFilename?: string | null;
      source?: {
        __typename?: "SanityAssetSourceData";
        url?: string | null;
        name?: string | null;
        id?: string | null;
      } | null;
      metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
    } | null;
    crop?: {
      __typename?: "SanityImageCrop";
      bottom?: number | null;
      left?: number | null;
      right?: number | null;
      top?: number | null;
    } | null;
  } | null;
  author?: {
    __typename?: "Author";
    name?: string | null;
    image?: {
      __typename: "Image";
      _key?: string | null;
      _type?: string | null;
      asset?: {
        __typename?: "SanityImageAsset";
        description?: string | null;
        title?: string | null;
        size?: number | null;
        url?: string | null;
        altText?: string | null;
        label?: string | null;
        extension?: string | null;
        mimeType?: string | null;
        originalFilename?: string | null;
        source?: {
          __typename?: "SanityAssetSourceData";
          url?: string | null;
          name?: string | null;
          id?: string | null;
        } | null;
        metadata?: { __typename?: "SanityImageMetadata"; blurHash?: string | null } | null;
      } | null;
      crop?: {
        __typename?: "SanityImageCrop";
        bottom?: number | null;
        left?: number | null;
        right?: number | null;
        top?: number | null;
      } | null;
    } | null;
    slug?: { __typename?: "Slug"; current?: string | null } | null;
  } | null;
  categories?: Array<{
    __typename?: "Category";
    title?: string | null;
    description?: string | null;
  } | null> | null;
};

export const ImageFragmentFragmentDoc = gql`
  fragment ImageFragment on Image {
    _key
    _type
    __typename
    asset {
      description
      title
      size
      url
      altText
      label
      extension
      mimeType
      originalFilename
      source {
        url
        name
        id
      }
      metadata {
        blurHash
      }
    }
    crop {
      bottom
      left
      right
      top
    }
  }
`;
export const PostFragmentFragmentDoc = gql`
  fragment PostFragment on Post {
    _id
    _createdAt
    publishedAt
    title
    description
    slug {
      current
    }
    tags
    mainImage {
      ...ImageFragment
    }
    author {
      name
      image {
        ...ImageFragment
      }
      slug {
        current
      }
    }
    slug {
      current
    }
    content
    viewCount
    categories {
      title
      description
    }
  }
  ${ImageFragmentFragmentDoc}
`;
export const GetOneAuthorDocument = gql`
  query GetOneAuthor($id: ID!) {
    Author(id: $id) {
      _id
      slug {
        current
      }
      bio
      _createdAt
      image {
        ...ImageFragment
      }
    }
  }
  ${ImageFragmentFragmentDoc}
`;

/**
 * __useGetOneAuthorQuery__
 *
 * To run a query within a React component, call `useGetOneAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneAuthorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneAuthorQuery(
  baseOptions: Apollo.QueryHookOptions<GetOneAuthorQuery, GetOneAuthorQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOneAuthorQuery, GetOneAuthorQueryVariables>(GetOneAuthorDocument, options);
}
export function useGetOneAuthorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetOneAuthorQuery, GetOneAuthorQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOneAuthorQuery, GetOneAuthorQueryVariables>(GetOneAuthorDocument, options);
}
export type GetOneAuthorQueryHookResult = ReturnType<typeof useGetOneAuthorQuery>;
export type GetOneAuthorLazyQueryHookResult = ReturnType<typeof useGetOneAuthorLazyQuery>;
export type GetOneAuthorQueryResult = Apollo.QueryResult<GetOneAuthorQuery, GetOneAuthorQueryVariables>;
export const GetAllCategoriesDocument = gql`
  query GetAllCategories($limit: Int, $offset: Int, $sort: [CategorySorting!], $where: CategoryFilter) {
    allCategory(sort: $sort, limit: $limit, offset: $offset, where: $where) {
      _id
      _createdAt
      _key
      _updatedAt
      title
      description
      featured {
        title
        description
        publishedAt
        tags
        author {
          name
          image {
            ...ImageFragment
          }
        }
      }
      mainImage {
        ...ImageFragment
      }
    }
  }
  ${ImageFragmentFragmentDoc}
`;

/**
 * __useGetAllCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(
    GetAllCategoriesDocument,
    options
  );
}
export function useGetAllCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(
    GetAllCategoriesDocument,
    options
  );
}
export type GetAllCategoriesQueryHookResult = ReturnType<typeof useGetAllCategoriesQuery>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesLazyQuery>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<
  GetAllCategoriesQuery,
  GetAllCategoriesQueryVariables
>;
export const GetCategoryByTitleDocument = gql`
  query GetCategoryByTitle($title: String) {
    allCategory(where: { title: { eq: $title } }, limit: 1) {
      _id
      _createdAt
      _key
      _updatedAt
      title
      description
      featured {
        title
        description
        publishedAt
        tags
        author {
          name
          image {
            ...ImageFragment
          }
        }
      }
      mainImage {
        ...ImageFragment
      }
    }
  }
  ${ImageFragmentFragmentDoc}
`;

/**
 * __useGetCategoryByTitleQuery__
 *
 * To run a query within a React component, call `useGetCategoryByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useGetCategoryByTitleQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCategoryByTitleQuery, GetCategoryByTitleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCategoryByTitleQuery, GetCategoryByTitleQueryVariables>(
    GetCategoryByTitleDocument,
    options
  );
}
export function useGetCategoryByTitleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryByTitleQuery, GetCategoryByTitleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCategoryByTitleQuery, GetCategoryByTitleQueryVariables>(
    GetCategoryByTitleDocument,
    options
  );
}
export type GetCategoryByTitleQueryHookResult = ReturnType<typeof useGetCategoryByTitleQuery>;
export type GetCategoryByTitleLazyQueryHookResult = ReturnType<typeof useGetCategoryByTitleLazyQuery>;
export type GetCategoryByTitleQueryResult = Apollo.QueryResult<
  GetCategoryByTitleQuery,
  GetCategoryByTitleQueryVariables
>;
export const GetOneCategoryDocument = gql`
  query GetOneCategory($id: ID!) {
    Category(id: $id) {
      _id
      _createdAt
      _key
      _updatedAt
      title
      description
      featured {
        ...PostFragment
      }
      mainImage {
        ...ImageFragment
      }
    }
  }
  ${PostFragmentFragmentDoc}
  ${ImageFragmentFragmentDoc}
`;

/**
 * __useGetOneCategoryQuery__
 *
 * To run a query within a React component, call `useGetOneCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<GetOneCategoryQuery, GetOneCategoryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOneCategoryQuery, GetOneCategoryQueryVariables>(GetOneCategoryDocument, options);
}
export function useGetOneCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetOneCategoryQuery, GetOneCategoryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOneCategoryQuery, GetOneCategoryQueryVariables>(
    GetOneCategoryDocument,
    options
  );
}
export type GetOneCategoryQueryHookResult = ReturnType<typeof useGetOneCategoryQuery>;
export type GetOneCategoryLazyQueryHookResult = ReturnType<typeof useGetOneCategoryLazyQuery>;
export type GetOneCategoryQueryResult = Apollo.QueryResult<GetOneCategoryQuery, GetOneCategoryQueryVariables>;
export const GetAllFeaturedPostDocument = gql`
  query GetAllFeaturedPost(
    $limit: Int
    $offset: Int
    $sort: [FeaturedArticleSorting!]
    $where: FeaturedArticleFilter
  ) {
    allFeaturedArticle(where: $where, limit: $limit, sort: $sort, offset: $offset) {
      _id
      _createdAt
      _key
      featured {
        ...PostFragment
      }
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __useGetAllFeaturedPostQuery__
 *
 * To run a query within a React component, call `useGetAllFeaturedPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFeaturedPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFeaturedPostQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllFeaturedPostQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllFeaturedPostQuery, GetAllFeaturedPostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllFeaturedPostQuery, GetAllFeaturedPostQueryVariables>(
    GetAllFeaturedPostDocument,
    options
  );
}
export function useGetAllFeaturedPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllFeaturedPostQuery, GetAllFeaturedPostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllFeaturedPostQuery, GetAllFeaturedPostQueryVariables>(
    GetAllFeaturedPostDocument,
    options
  );
}
export type GetAllFeaturedPostQueryHookResult = ReturnType<typeof useGetAllFeaturedPostQuery>;
export type GetAllFeaturedPostLazyQueryHookResult = ReturnType<typeof useGetAllFeaturedPostLazyQuery>;
export type GetAllFeaturedPostQueryResult = Apollo.QueryResult<
  GetAllFeaturedPostQuery,
  GetAllFeaturedPostQueryVariables
>;
export const GetAllPostsDocument = gql`
  query GetAllPosts($limit: Int, $offset: Int, $sort: [PostSorting!], $where: PostFilter) {
    allPost(limit: $limit, where: $where, offset: $offset, sort: $sort) {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
}
export function useGetAllPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
}
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetOnePostDocument = gql`
  query GetOnePost($id: ID!) {
    Post(id: $id) {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __useGetOnePostQuery__
 *
 * To run a query within a React component, call `useGetOnePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOnePostQuery(
  baseOptions: Apollo.QueryHookOptions<GetOnePostQuery, GetOnePostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOnePostQuery, GetOnePostQueryVariables>(GetOnePostDocument, options);
}
export function useGetOnePostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetOnePostQuery, GetOnePostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOnePostQuery, GetOnePostQueryVariables>(GetOnePostDocument, options);
}
export type GetOnePostQueryHookResult = ReturnType<typeof useGetOnePostQuery>;
export type GetOnePostLazyQueryHookResult = ReturnType<typeof useGetOnePostLazyQuery>;
export type GetOnePostQueryResult = Apollo.QueryResult<GetOnePostQuery, GetOnePostQueryVariables>;
export const GetPostBySlugDocument = gql`
  query GetPostBySlug($slug: String) {
    allPost(where: { slug: { current: { eq: $slug } } }, limit: 1) {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __useGetPostBySlugQuery__
 *
 * To run a query within a React component, call `useGetPostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPostBySlugQuery, GetPostBySlugQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>(GetPostBySlugDocument, options);
}
export function useGetPostBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPostBySlugQuery, GetPostBySlugQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>(GetPostBySlugDocument, options);
}
export type GetPostBySlugQueryHookResult = ReturnType<typeof useGetPostBySlugQuery>;
export type GetPostBySlugLazyQueryHookResult = ReturnType<typeof useGetPostBySlugLazyQuery>;
export type GetPostBySlugQueryResult = Apollo.QueryResult<GetPostBySlugQuery, GetPostBySlugQueryVariables>;
export const GetIndexPageDataDocument = gql`
  query GetIndexPageData {
    allFeaturedArticle {
      featured {
        ...PostFragment
      }
    }
    allPost {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __useGetIndexPageDataQuery__
 *
 * To run a query within a React component, call `useGetIndexPageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndexPageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndexPageDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIndexPageDataQuery(
  baseOptions?: Apollo.QueryHookOptions<GetIndexPageDataQuery, GetIndexPageDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetIndexPageDataQuery, GetIndexPageDataQueryVariables>(
    GetIndexPageDataDocument,
    options
  );
}
export function useGetIndexPageDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetIndexPageDataQuery, GetIndexPageDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetIndexPageDataQuery, GetIndexPageDataQueryVariables>(
    GetIndexPageDataDocument,
    options
  );
}
export type GetIndexPageDataQueryHookResult = ReturnType<typeof useGetIndexPageDataQuery>;
export type GetIndexPageDataLazyQueryHookResult = ReturnType<typeof useGetIndexPageDataLazyQuery>;
export type GetIndexPageDataQueryResult = Apollo.QueryResult<
  GetIndexPageDataQuery,
  GetIndexPageDataQueryVariables
>;
