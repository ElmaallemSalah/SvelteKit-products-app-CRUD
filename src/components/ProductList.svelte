<script>
	import { onMount } from 'svelte';
	import api from '../api';
	import { products, Savedproducts } from '../stores/store';
	import DeleteProduct from './DeleteProduct.svelte';

	onMount(async () => {
		if ($products.length == 0) {
			try {
				const response = await api.get('/products');
				$products = response.data;
				$Savedproducts = $products;
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		}
	});
</script>

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
	{#if $products.length == 0}
		waiting..
	{/if}

	{#each $products as product (product.id)}
		<div class="bg-white shadow-md p-4 rounded-lg">
			<div class="flex items-center justify-center h-40 mb-4">
				<img class="max-h-full w-auto object-contain" src={product.image} alt={product.title} />
			</div>
			<h3 class="text-xl font-semibold mb-2">{product.title}</h3>
			<p class="text-gray-700 mb-2">${product.price}</p>
			<p class="text-gray-500 line-clamp-3">{product.description}</p>
			<div class="mt-4 flex space-x-2">
				<DeleteProduct productId={product.id} />
				<a href={`/products/update/${product.id}`} class="bg-blue-500 text-white py-2 px-4 rounded"
					>Update</a
				>
			</div>
		</div>
	{/each}
</div>
