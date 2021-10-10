<script lang="ts">
	import { setClient } from '@urql/svelte';
	import { writable } from 'svelte/store';

  import { mutation } from '@urql/svelte';
	import { AddArticleDocument, AddArticleMutationVariables } from '../../generated/graphql';

	import client from '../../_client'
	setClient(client);

  let article = writable<AddArticleMutationVariables>({
		title: '',
		content: '',
		author: ''
	});

  const addArticle = mutation<AddArticleMutationVariables>({ query: AddArticleDocument });

  const handleAdd = async () => {
		await addArticle($article);
    $article.content = '';
    $article.title = '';
	};
</script>

<form class="mt-10">
	<div class="grid form-grid gap-5">
		<label for="title" class="text-2xl mt-2 font-bold">Title</label>
		<input
			id="title"
			type="text"
			bind:value={$article.title}
			class="border border-gray-600 rounded-lg p-2 text-2xl"
		/>
		<label for="content" class="text-2xl mt-2 font-bold">Content</label>
		<textarea
			id="content"
			type="text"
			bind:value={$article.content}
			class="border border-gray-600 rounded-lg p-2 text-2xl"
		/>
		<label for="author" class="text-2xl mt-2 font-bold">Author</label>
		<input
			id="author"
			type="text"
			bind:value={$article.author}
			class="border border-gray-600 rounded-lg p-2 text-2xl"
		/>
	</div>
</form>

<div class="flex justify-end">
	<button on:click={handleAdd} class="mt-5 px-10 py-2 bg-blue-800 text-white rounded-lg font-bold"
		>Add</button
	>
</div>

<style>
	.form-grid {
		grid-template-columns: 1fr 5fr;
	}
</style>
