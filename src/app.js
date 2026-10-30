document.addEventListener("alpine:init", () => {
  Alpine.data("menu-bundling", () => ({
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
      return `Rp ${new Intl.NumberFormat("id-ID").format(price)},-`;
    },
  }));
});
