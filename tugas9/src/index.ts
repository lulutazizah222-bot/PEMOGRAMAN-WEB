
import { Hono } from 'hono'

import { serve } from '@hono/node-server'

const app = new Hono()

// Data inventaris laboratorium
let inventaris = [
  {
    id: 1,
    nama: 'Komputer',
    jumlah: 20,
    kondisi: 'Baik'
  },
  {
    id: 2,
    nama: 'Proyektor',
    jumlah: 3,
    kondisi: 'Baik'
  },
  {
    id: 3,
    nama: 'Switch',
    jumlah: 5,
    kondisi: 'Baik'
  },
  {
    id: 4,
    nama: 'Router',
    jumlah: 2,
    kondisi: 'Rusak'
  }
]

// GET: Menampilkan semua inventaris
app.get('/api/inventaris', (c) => {
  return c.json(inventaris)
})

// GET: Menampilkan detail inventaris berdasarkan ID
app.get('/api/inventaris/:id', (c) => {
  const id = Number(c.req.param('id'))
  const barang = inventaris.find((item) => item.id === id)

  if (!barang) {
    return c.json({ pesan: 'Barang tidak ditemukan' }, 404)
  }

  return c.json(barang)
})

// POST: Menambahkan inventaris baru
app.post('/api/inventaris', async (c) => {
  const data = await c.req.json()

  const barangBaru = {
    id: inventaris.length > 0
      ? Math.max(...inventaris.map((item) => item.id)) + 1
      : 1,
    nama: data.nama,
    jumlah: data.jumlah,
    kondisi: data.kondisi
  }

  inventaris.push(barangBaru)

  return c.json({
    pesan: 'Barang berhasil ditambahkan',
    data: barangBaru
  }, 201)
})
serve({
  fetch: app.fetch,
  port: 3000
})

console.log('Server berjalan di http://localhost:3000')
