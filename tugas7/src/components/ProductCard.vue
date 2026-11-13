
<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['buy'])
</script>

<template>
  <div class="product-card">
    <div class="product-icon">{{ product.gambar }}</div>

    <h3>{{ product.nama }}</h3>

    <p>{{ product.kategori }}</p>

    <h3 class="harga">
      Rp {{ product.harga.toLocaleString('id-ID') }}
    </h3>

    <button @click="$emit('buy', product)">
      Beli Sekarang
    </button>
  </div>
</template>
