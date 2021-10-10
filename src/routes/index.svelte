<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { setClient } from '@urql/svelte';
	import { operationStore, query } from '@urql/svelte';
	import { ArticlesDocument, ArticlesQuery } from '../generated/graphql';

	import client from '../_client'
	setClient(client);

  const articles = operationStore<ArticlesQuery>(ArticlesDocument);
	query(articles);
</script>

<svelte:head>
	<title>Articles</title>
</svelte:head>

{#if $articles.fetching}
	<p>Loading...</p>
{:else if $articles.error}
	<p>Oh no... {$articles.error.message}</p>
{:else}
{#each $articles.data.articles as article}
<div class="mb-10">
  <div class="border-b-2 border-gray-700">
    <a href={`/articles/${article.slug}`} class="text-2xl font-bold uppercase text-indigo-500"
      >{article.title}</a
    >
  </div>
  <div class="my-10 text-2xl">{article.content}</div>
  <div class="flex justify-end mt-5">{article.author}</div>
</div>
{/each}
{/if}