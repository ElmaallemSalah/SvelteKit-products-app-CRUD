<script>
import { page } from "$app/stores";
import EditProduct from "../../../../components/EditProduct.svelte";
</script>

<h1>{$page.params.id} </h1>
<EditProduct productId={$page.params.id} />


