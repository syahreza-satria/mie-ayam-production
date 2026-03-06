const swiper = new Swiper(".expertiseSwiper", {
  slidesPerView: "auto", // Mengizinkan lebar chip menyesuaikan teks
  spaceBetween: 20, // Jarak antar chip
  loop: true, // Berjalan terus menerus (infinite)
  speed: 3000, // Kecepatan laju scroll (semakin besar semakin lambat)
  allowTouchMove: false, // Mematikan scroll manual dengan sentuhan (opsional)
  autoplay: {
    delay: 0, // Tanpa jeda
    disableOnInteraction: false, // Tidak berhenti jika diklik
  },
});
