<script>
	import { products, Savedproducts } from '../stores/store';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	let searchTerm = '';

	function filterProducts() {
		if (searchTerm != '') {
			$products = $products.filter((product) =>
				product.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
			console.log();
			if ($page.route.id != '/') {
				goto('/');
			}
		} else {
			$products = $Savedproducts;
		}
	}
</script>

<div class="">
	<input
		type="text"
		id="searchInput"
		bind:value={searchTerm}
		on:input={filterProducts}
		style="color: black;"
		class="w-full border p-1"
		placeholder="Type to search..."
	/>
</div>
