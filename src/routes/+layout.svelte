<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
</script>

<div>
  <header>
    <Navbar />
  </header>
  <main>
 
    <slot></slot>
  </main>
</div>