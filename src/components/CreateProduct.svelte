<script>
 import api from '../api';
 import { products} from "../stores/store"
 import { goto } from '$app/navigation';
 import { page } from '$app/stores';
 
  
    let title = '';
    let price = '';
    let description = '';
  
    async function createProduct() {
      try {
        const response = await api.post('/products', {
          title,
          price: parseFloat(price),
          description,
          image: 'https://i.pravatar.cc',
          category: 'electronic'
        });


        $products.unshift(response.data);
        $products=$products;
   
        console.log('Product created:', response.data);
        // Use window.location to navigate
       // window.location.href = '/';
       goto("/");
      } catch (error) {
        console.error('Error creating product:', error);
      }
    }
  </script>
  
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-semibold mb-4">Create New Product</h2>
    <form class="space-y-4">
      <div>
        <label for="title" class="block font-semibold">Title</label>
        <input type="text" id="title" bind:value={title} class="w-full border p-2" />
      </div>
      <div>
        <label for="price" class="block font-semibold">Price</label>
        <input type="number" id="price" bind:value={price} class="w-full border p-2" />
      </div>
      <div>
        <label for="description" class="block font-semibold">Description</label>
        <textarea id="description" bind:value={description} rows="4" class="w-full border p-2"></textarea>
      </div>
      <button type="button" class="bg-blue-500 text-white py-2 px-4 rounded" on:click={createProduct}>Create</button>
      <!-- Use an anchor tag for navigation -->
      <a href="/" class="text-blue-500">Back to Home</a>
    </form>
  </div>
  
  <style>
    /* Add your styles here */
  </style>
  