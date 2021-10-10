<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import { setClient } from '@urql/svelte';
	import { page } from '$app/stores';

  import { operationStore, query } from '@urql/svelte';
	import { ArticleBySlugDocument, ArticleBySlugQuery } from '../../generated/graphql'

	import client from '../../_client'
	setClient(client);

  const article = operationStore<ArticleBySlugQuery>(ArticleBySlugDocument, {
    slug: $page.params.slug ?? ''
  });
  query(article);
</script>

<svelte:head>
	<title>{$article?.data?.articleBySlug?.title}</title>
</svelte:head>

{#if $article.fetching}
<p>Loading...</p>
{:else if $article.error}
<p>Oh no... {$article.error.message}</p>
{:else}
<div class="mb-10">
  <div class="border-b-2 border-gray-700 text-2xl font-bold uppercase text-indigo-500">
    {$article.data.articleBySlug.title}
  </div>
  <div class="my-10 text-2xl">{$article.data.articleBySlug.content}</div>
  <div class="flex justify-end mt-5">{$article.data.articleBySlug.author}</div>
</div>
{/if}
