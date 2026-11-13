
<script setup>
import { useCartStore } from './stores/cart'

const cart = useCartStore()
</script>

<template>
  <header class="navbar">
    <h2>Princess Store 🛍️</h2>

    <nav>
      <RouterLink to="/">Beranda</RouterLink>

      <RouterLink to="/cart">
        Keranjang ({{ cart.totalItems }})
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
