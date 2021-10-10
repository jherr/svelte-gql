<script>
  import "../styles/tailwind-output.css";
</script>

<main class="max-w-6xl mx-auto">
	<div class="bg-blue-900 px-5 py-10">
		<a href="/" class="text-white text-2xl font-bold">Home</a>
	</div>
	<div class="mt-10">
		<slot />
	</div>
</main>
