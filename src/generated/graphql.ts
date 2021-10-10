import type { OperationStore } from '@urql/svelte';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addArticle?: Maybe<Article>;
};


export type MutationAddArticleArgs = {
  author: Scalars['String'];
  content: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  articleBySlug?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
};


export type QueryArticleBySlugArgs = {
  slug: Scalars['String'];
};

export type AddArticleMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
  author: Scalars['String'];
}>;


export type AddArticleMutation = { __typename?: 'Mutation', addArticle?: { __typename?: 'Article', slug?: string | null | undefined, title?: string | null | undefined, content?: string | null | undefined, author?: string | null | undefined } | null | undefined };

export type ArticleBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ArticleBySlugQuery = { __typename?: 'Query', articleBySlug?: { __typename?: 'Article', title?: string | null | undefined, content?: string | null | undefined, author?: string | null | undefined } | null | undefined };

export type ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', title?: string | null | undefined, slug?: string | null | undefined, content?: string | null | undefined, author?: string | null | undefined } | null | undefined> | null | undefined };


export const AddArticleDocument = gql`
    mutation addArticle($title: String!, $content: String!, $author: String!) {
  addArticle(title: $title, content: $content, author: $author) {
    slug
    title
    content
    author
  }
}
    `;
export const ArticleBySlugDocument = gql`
    query ArticleBySlug($slug: String!) {
  articleBySlug(slug: $slug) {
    title
    content
    author
  }
}
    `;
export const ArticlesDocument = gql`
    query Articles {
  articles {
    title
    slug
    content
    author
  }
}
    `;
export type AddArticleMutationStore = OperationStore<AddArticleMutation, AddArticleMutationVariables>;
export type ArticleBySlugQueryStore = OperationStore<ArticleBySlugQuery, ArticleBySlugQueryVariables>;
export type ArticlesQueryStore = OperationStore<ArticlesQuery, ArticlesQueryVariables>;