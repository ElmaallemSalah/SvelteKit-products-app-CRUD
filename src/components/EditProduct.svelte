<script>
	import { products } from '../stores/store';
	import api from '../api';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	/**
	 * @type {any}
	 */
	export let productId;

	let updatedTitle = '';
	let updatedPrice = '';
	let updateDescription = '';

	onMount(async () => {
		try {
			const response = await api.get(`/products/${productId}`);

			updatedTitle = response.data.title;
			updatedPrice = response.data.price;
			updateDescription = response.data.description;
		} catch (error) {
			console.error('Error fetching product:', error);
		}
	});

	async function updateProduct() {
		//   try {
		const response = await api.put(`/products/${productId}`, {
			title: updatedTitle,
			price: parseFloat(updatedPrice),
			description: updateDescription
		});

		let objIndex = $products.findIndex((obj) => obj.id == productId);

		//Log object to Console.
		console.log('Before update: ', $products[objIndex]);

		//Update object's name property.
		$products[objIndex].title = updatedTitle;
		$products[objIndex].price = updatedPrice;
		$products[objIndex].description = updateDescription;
		$products = $products;
		goto('/');

		console.log('Product updated:', $products);
		// Update products list or perform any necessary actions after updating
		/*   } catch (error) {
        console.error('Error updating product:', error);
      }*/
	}
</script>

<div class="container mx-auto p-4">
	<h2 class="text-2xl font-semibold mb-4">Edit Product</h2>
	<form class="space-y-4">
		<div>
			<label for="updatedTitle" class="block font-semibold">Updated Title</label>
			<input type="text" id="updatedTitle" bind:value={updatedTitle} class="w-full border p-2" />
		</div>
		<div>
			<label for="updatedTitle" class="block font-semibold">Updated discription</label>
			<input
				type="text"
				id="updatedTitle"
				bind:value={updateDescription}
				class="w-full border p-2"
			/>
		</div>
		<div>
			<label for="updatedPrice" class="block font-semibold">Updated Price</label>
			<input type="number" id="updatedPrice" bind:value={updatedPrice} class="w-full border p-2" />
		</div>
		<button type="button" class="bg-blue-500 text-white py-2 px-4 rounded" on:click={updateProduct}
			>Update</button
		>
	</form>
</div>
