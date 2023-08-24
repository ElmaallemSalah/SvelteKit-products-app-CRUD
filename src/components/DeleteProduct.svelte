<script>
	import { products } from '../stores/store';
	import api from '../api';
	import Icon from '@iconify/svelte';

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

<button  on:click={deleteProduct}>
	<Icon icon="material-symbols:delete" color="red"   width="30" height="30"  />
</button>

