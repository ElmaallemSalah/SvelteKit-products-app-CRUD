import { writable } from 'svelte/store';

const products = writable([]);
const Savedproducts = writable([]);

export { products, Savedproducts };