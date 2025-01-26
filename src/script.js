document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".flicker").forEach((img) => {
    img.style.animation = `flicker 2s infinite alternate`;
    img.style.animationDelay = `${Math.random() * 2}s`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".bounceIn").forEach((bounce) => {
    const duration = bounce.style.getPropertyValue("--bounceDuration") || 1; // Mengambil durasi dari inline style, default ke 1 jika tidak ada

    gsap.fromTo(
      bounce,
      { y: -100, opacity: 0 }, // Mulai di luar layar dan transparan
      {
        y: 0, // Gerak ke posisi normal (y: 0)
        opacity: 1, // Gradual menjadi terlihat
        duration: parseFloat(duration), // Durasi animasi
        ease: "bounce.out", // Efek bounce pada akhir animasi
        scrollTrigger: {
          trigger: bounce,
          start: "top bottom", // Marker untuk debugging
        },
      }
    );
  });

  gsap.utils.toArray(".fadeIn").forEach((fade) => {
    const duration = fade.style.getPropertyValue("--fadeDuration") || 1; // Mengambil durasi dari inline style, default ke 1 jika tidak ada

    gsap.fromTo(
      fade,
      { opacity: 0 }, // Mulai dari transparan
      {
        opacity: 1, // Gradual menjadi terlihat
        duration: parseFloat(duration), // Gunakan durasi dari gaya inline
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: fade,
          start: "top bottom", // Marker untuk debugging
        },
      }
    );
  });

  gsap.utils.toArray(".slideLeft").forEach((slide) => {
    gsap.fromTo(
      slide,
      { x: "-100%" }, // Mulai dari luar layar (kanan)
      {
        x: "0%", // Gerak ke posisi normal
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: slide,
          start: "top bottom", // Scroll dimulai saat bagian atas slide di viewport
          // Marker untuk debugging
        },
      }
    );
  });

  gsap.utils.toArray(".slideRight").forEach((slide) => {
    gsap.fromTo(
      slide,
      { x: "100%" }, // Mulai dari luar layar (kanan)
      {
        x: "0%", // Gerak ke posisi normal
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: slide,
          start: "top bottom", // Scroll dimulai saat bagian atas slide di viewport
          // Marker untuk debugging
        },
      }
    );
  });

  gsap.utils.toArray(".slideUp").forEach((slide) => {
    gsap.to(slide, {
      scrollTrigger: {
        trigger: slide,
        start: "top bottom",
        onEnter: () => {
          // Memastikan animasi dimulai hanya saat elemen masuk viewport
          gsap.to(slide, {
            y: 0,
            duration: 1,
            ease: "power2.out",
          });
        },
      },
    });
  });
});
