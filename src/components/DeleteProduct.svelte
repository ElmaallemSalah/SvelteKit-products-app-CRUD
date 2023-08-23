<script>
	import { products } from '../stores/store';
	import api from '../api';

	/**
	 * @type {any}
	 */
	export let productId;

	async function deleteProduct() {
		try {
			await api.delete(`/products/${productId}`);
			// Filter out the deleted product from the products list
			// @ts-ignore
			products.update((oldProducts) => oldProducts.filter((product) => product.id !== productId));
		} catch (error) {
			console.error('Error deleting product:', error);
		}
	}
</script>

<button class="bg-red-500 text-white py-2 px-4 rounded" on:click={deleteProduct}>Delete</button>
