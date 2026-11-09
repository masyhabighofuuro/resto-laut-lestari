const formatPrice = (price) =>
  `Rp ${new Intl.NumberFormat("id-ID").format(price)},-`;

document.addEventListener("alpine:init", () => {
  Alpine.data("menuBundling", () => ({
    items: [
      {
        id: 1,
        name: "Paket Hemat Duo",
        img: "paket-hemat-duo.webp",
        price: 57000,
        originalPrice: 63000,
        fullStars: 5,
        partialStar: null,
      },
      {
        id: 2,
        name: "Paket Bakar Madu",
        img: "paket-bakar-madu.webp",
        price: 76000,
        originalPrice: 85000,
        fullStars: 4,
        partialStar: "star-8",
      },
      {
        id: 3,
        name: "Paket Pepes Nusantara",
        img: "paket-pepes-nusantara.webp",
        price: 69000,
        originalPrice: 77000,
        fullStars: 4,
        partialStar: "star-5",
      },
      {
        id: 4,
        name: "Paket Sop Ikan Hangat",
        img: "paket-sop-ikan-hangat.webp",
        price: 66000,
        originalPrice: 73000,
        fullStars: 4,
        partialStar: "star-6",
      },
      {
        id: 5,
        name: "Paket Goreng Sharing",
        img: "paket-goreng-sharing.webp",
        price: 128000,
        originalPrice: 142000,
        fullStars: 4,
        partialStar: "star-4",
      },
      {
        id: 6,
        name: "Paket Premium Kepiting",
        img: "paket-premium-kepiting.webp",
        price: 166000,
        originalPrice: 184000,
        fullStars: 4,
        partialStar: "star-7",
      },
    ],
    formatPrice(price) {
      return formatPrice(price);
    },
  }));

  Alpine.store("cart", {
    items: [],
    totalHarga: 0,
    qty: 0,
    formatPrice(price) {
      return formatPrice(price);
    },
    add(newItem) {
      // cek apakah ada barang yang sama pada cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      // kalau belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({
          ...newItem,
          qty: 1,
          totalHarga: newItem.price,
        });
        this.qty++;
        this.totalHarga += newItem.price;
      } else {
        // jika barang sudah ada, cek apakah barang sama atau beda dengan ada yang di cart
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id != newItem.id) {
            return item;
          } else {
            // jika barang sama /sudah ada, tambah qty dan totalnya
            item.qty++;
            item.totalHarga = item.price * item.qty;
            this.qty++;
            this.totalHarga += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // Cari item berdasarkan ID; jika tidak ada, keranjang tidak perlu diubah.
      const cartItem = this.items.find((item) => item.id === id);
      if (!cartItem) {
        return;
      }

      // Kurangi jumlah dan total harga setiap kali satu item dihapus.
      this.qty--;
      this.totalHarga -= cartItem.price;

      // Hapus item dari daftar jika jumlahnya tinggal satu.
      if (cartItem.qty === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        return;
      }

      // Jika jumlahnya lebih dari satu, perbarui jumlah dan subtotal item.
      cartItem.qty--;
      cartItem.totalHarga = cartItem.price * cartItem.qty;
    },
  });
});
