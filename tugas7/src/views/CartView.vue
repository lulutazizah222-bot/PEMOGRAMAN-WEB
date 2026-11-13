
<script setup>
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
</script>

<template>
  <div class="container">
    <h1>Keranjang Belanja 🛒</h1>

    <div v-if="cart.items.length === 0">
      <h3>Keranjang masih kosong.</h3>
      <p>Silakan pilih produk di halaman beranda.</p>
    </div>

    <div v-else>
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="cart-item"
      >
        <div>
          <h3>{{ item.gambar }} {{ item.nama }}</h3>
          <p>Harga: Rp {{ item.harga.toLocaleString('id-ID') }}</p>
          <p>Jumlah: {{ item.qty }}</p>
          <p>
            Subtotal:
            Rp {{ (item.harga * item.qty).toLocaleString('id-ID') }}
          </p>
        </div>

        <button @click="cart.removeFromCart(item.id)">
          Hapus
        </button>
      </div>

      <h2>Total Barang: {{ cart.totalItems }}</h2>

      <h2>
        Total Harga: Rp
        {{ cart.totalPrice.toLocaleString('id-ID') }}
      </h2>
    </div>
  </div>
</template>
