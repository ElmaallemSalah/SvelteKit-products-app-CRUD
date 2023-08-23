<script>
	import SearchProducts from './SearchProducts.svelte';
	import { page } from '$app/stores';
</script>

<nav class="bg-blue-500 text-white py-4">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="text-xl font-semibold">My Store</a>
		<ul class="flex space-x-4">
			<li><a href="/">Home</a></li>
			<li><a href="/products/create">Create Product</a></li>

			{#if $page.route.id == '/'}
				<li><SearchProducts /></li>
			{/if}

			<!-- Add more navigation links as needed -->
		</ul>
	</div>
</nav>

<style>
	/* Add your styles here */
</style>
