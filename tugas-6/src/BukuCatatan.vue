
<script setup>
import { ref, computed } from 'vue'

const judul = ref('')
const kategori = ref('Novel')
const sudahDibaca = ref(false)

const daftarBuku = ref([])

function tambahBuku() {
  if (judul.value.trim() === '') {
    alert('Judul buku harus diisi!')
    return
  }

  daftarBuku.value.push({
    id: Date.now(),
    judul: judul.value,
    kategori: kategori.value,
    sudahDibaca: sudahDibaca.value
  })

  judul.value = ''
  kategori.value = 'Novel'
  sudahDibaca.value = false
}

const jumlahSelesai = computed(() => {
  return daftarBuku.value.filter(
    buku => buku.sudahDibaca
  ).length
})
</script>

<template>
  <div class="container">
    <h1>📚 Buku Catatan</h1>

    <label>Judul Buku</label>
    <input v-model="judul" placeholder="Masukkan judul buku">

    <label>Kategori Buku</label>
    <select v-model="kategori">
      <option>Novel</option>
      <option>Pendidikan</option>
      <option>Teknologi</option>
      <option>Sejarah</option>
    </select>

    <label>
      <input type="checkbox" v-model="sudahDibaca">
      Sudah selesai dibaca
    </label>

    <button @click="tambahBuku">Tambahkan Buku</button>

    <h2>Daftar Buku</h2>

    <p>Jumlah selesai dibaca: {{ jumlahSelesai }}</p>

    <p v-if="daftarBuku.length === 0">
      Belum ada buku.
    </p>

    <div v-for="(buku, index) in daftarBuku" :key="buku.id">
      <h3>{{ index + 1 }}. {{ buku.judul }}</h3>
      <p>Kategori: {{ buku.kategori }}</p>
      <p>Status: {{ buku.sudahDibaca ? 'Sudah dibaca' : 'Belum dibaca' }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 30px auto;
  padding: 25px;
  font-family: Arial;
  background: #fff0f6;
  border-radius: 12px;
}

h1 {
  color: #d63384;
}

label {
  display: block;
  margin-top: 15px;
}

input, select {
  padding: 10px;
  margin: 8px 0;
}

button {
  display: block;
  margin-top: 15px;
  padding: 10px;
  background: #d63384;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
