
<script setup>
import ProductCard from '../components/ProductCard.vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()

const products = [
  {
    id: 1,
    nama: 'Skincare',
    harga: 75000,
    kategori: 'Kecantikan',
    gambar: '🧴'
  },
  {
    id: 2,
    nama: 'Tas Wanita',
    harga: 120000,
    kategori: 'Fashion',
    gambar: '👜'
  },
  {
    id: 3,
    nama: 'Sepatu',
    harga: 150000,
    kategori: 'Fashion',
    gambar: '👟'
  }
]


function beliProduk(product) {
  cart.addToCart(product)
  alert(product.nama + ' berhasil ditambahkan ke keranjang!')
}
</script>

<template>
  <div class="container">
    <h1>Katalog Produk</h1>
    <p>Selamat datang di Princess Store!</p>

    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @buy="beliProduk"
      />
    </div>
  </div>
</template>
