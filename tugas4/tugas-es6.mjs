
const transaksi = [
    { id: 1, barang: "Buku", harga: 10000, qty: 2, kategori: "ATK" },
    { id: 2, barang: "Pensil", harga: 3000, qty: 5, kategori: "ATK" },
    { id: 3, barang: "Penghapus", harga: 2000, qty: 3, kategori: "ATK" },
    { id: 4, barang: "Kopi", harga: 8000, qty: 2, kategori: "Makanan" },
    { id: 5, barang: "Roti", harga: 5000, qty: 4, kategori: "Makanan" },
    { id: 6, barang: "Susu", harga: 12000, qty: 1, kategori: "Minuman" }
];

// 1. Filter: menyaring transaksi kategori ATK
const transaksiATK = transaksi.filter(data => data.kategori === 'ATK'
);
console.log(transaksiATK);
// 2. Map: menghitung subtotal setiap barang
const dataSubtotal = transaksi.map(
    ({ id, barang, harga, qty, kategori }) => ({
        id,
        barang,
        harga,
        qty,
        kategori,
        subtotal: harga * qty
    })
);

// 3. Reduce: menghitung total seluruh transaksi
const totalKeseluruhan = dataSubtotal.reduce(
    (total, { subtotal }) => total + subtotal,
    0
);
console.log('dataSubtotal:' , dataSubtotal);
console.log ('total Keseluruhan: Rp' + totalKeseluruhan.toLocaleString('id-ID'));

