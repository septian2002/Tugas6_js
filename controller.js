// controller.js
import data from './data.js';

// Fungsi untuk melihat data
const lihatData = () => {
    console.log("Data Pengguna:");
    data.map((item, index) => {
        console.log(`${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`);
    });
};

// Fungsi untuk menambah data
const tambahData = (nama, umur, alamat, email) => {
    const newData = { nama, umur, alamat, email };
    data.push(newData);
    console.log(`Data baru telah ditambahkan: ${JSON.stringify(newData)}`);
};

// Fungsi untuk menghapus data berdasarkan nama
const hapusData = (nama) => {
    const index = data.findIndex(item => item.nama === nama);
    if (index !== -1) {
        const deletedData = data.splice(index, 1);
        console.log(`Data telah dihapus: ${JSON.stringify(deletedData[0])}`);
    } else {
        console.log(`Data dengan nama ${nama} tidak ditemukan.`);
    }
};

// Contoh penggunaan
lihatData(); // Melihat data awal

// Menambah data baru
tambahData("Lina", 23, "Jakarta", "lina@example.com");
tambahData("Maya", 32, "Bandung", "maya@example.com");

// Melihat data setelah penambahan
lihatData();

// Menghapus data
hapusData("Andi");

// Melihat data setelah penghapusan
lihatData();