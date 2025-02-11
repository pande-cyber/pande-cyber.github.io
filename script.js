// Slideshow Foto
let slideIndex = 0;
const slides = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg"];
const slideElement = document.getElementById("slide");

if (slideElement) {
    slideElement.src = slides[slideIndex];
}

function showSlide(index) {
    if (slideElement) {
        slideElement.src = slides[index];
        slideElement.style.animation = "none"; // Reset animasi
        setTimeout(() => slideElement.style.animation = "slideIn 1s ease-in-out", 10);
    }
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Pastikan slideshow hanya berjalan di index.html
if (slideElement) {
    setInterval(nextSlide, 3000);
}

// Animasi Hati Jatuh
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);

// Efek Ketik di Ucapan (Hanya di ucapan.html)
document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.getElementById("typing-text");
    
    if (typingText) {
        const text = typingText.getAttribute("data-text"); // Ambil teks asli dari atribut
        typingText.textContent = ""; // Kosongin dulu biar efek ketik jalan
        
        let index = 0;
        function typeEffect() {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100); // Kecepatan ketik (100ms per huruf)
            } else {
                typingText.style.borderRight = "none"; // Hilangin kursor setelah selesai
            }
        }

        typeEffect(); // Mulai efek ketik
    }
});