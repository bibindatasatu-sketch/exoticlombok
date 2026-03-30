// Fungsi untuk otomatis memilih paket saat tombol diklik
function selectPackage(packageName) {
    const paketDropdown = document.getElementById('paket');
    const bookingSection = document.getElementById('booking');
    
    // Set value dropdown
    paketDropdown.value = packageName;
    
    // Smooth scroll ke section booking
    bookingSection.scrollIntoView({ behavior: 'smooth' });
}

// Handle Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data dari input
    const nama = document.getElementById('nama').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const paket = document.getElementById('paket').value;
    const tanggal = document.getElementById('tanggal').value;
    const orang = document.getElementById('orang').value;
    const hotel = document.getElementById('hotel').value;
    const transport = document.getElementById('transport').value;
    const request = document.getElementById('request').value || "-";

    // Konfigurasi WhatsApp
    const nomorWA = "6282335555442";
    
    // Format Pesan (Gunakan encoding URL untuk enter dan spasi)
    const pesan = `Halo Exotic Lombok, saya mau booking:
    
*Nama:* ${nama}
*No HP:* ${whatsapp}
*Paket:* ${paket}
*Tanggal:* ${tanggal}
*Jumlah Orang:* ${orang} Pax
*Hotel:* ${hotel}
*Transport:* ${transport}
*Request:* ${request}

Mohon diproses lebih lanjut ya. Terima kasih!`;

    const encodedPesan = encodeURIComponent(pesan);
    const waUrl = `https://wa.me/${nomorWA}?text=${encodedPesan}`;

    // Redirect ke WhatsApp
    window.open(waUrl, '_blank');
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#0a0a0a';
        nav.style.padding = '15px 0';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.9)';
        nav.style.padding = '20px 0';
    }
});





// FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".package-card, .testimonial-card, .faq-item");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);

// Efek Loading pada tombol Submit
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    const btn = document.querySelector('.btn-submit');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Menghubungkan ke WhatsApp...';
    btn.style.opacity = '0.7';
    // Logika WA yang lama tetap di bawah sini...
});

// Inisialisasi awal untuk animasi
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".package-card, .testimonial-card, .faq-item");
    cards.forEach(c => c.classList.add("reveal"));
    reveal();
});






// Data Bahasa
const langData = {
    'id': {
        'hero-h1': 'Explore Lombok dengan <br><span class="gold-text">Exotic Lombok Island</span>',
        'hero-p': 'Pengalaman Trip Premium dengan Guide Lokal Terpercaya',
        'btn-book': 'Booking Sekarang',
        'pkg-title': 'Paket Wisata Eksklusif',
        'form-h2': 'Siap untuk Petualangan Anda?',
        'form-p': 'Silakan isi formulir di bawah ini.'
    },
    'en': {
        'hero-h1': 'Explore Lombok with <br><span class="gold-text">Exotic Lombok Island</span>',
        'hero-p': 'Premium Trip Experience with Trusted Local Guide',
        'btn-book': 'Book Now',
        'pkg-title': 'Exclusive Travel Packages',
        'form-h2': 'Ready for Your Adventure?',
        'form-p': 'Please fill out the form below.'
    }
};

// Switch Language Logic
document.getElementById('lang-id').addEventListener('click', () => setLanguage('id'));
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

function setLanguage(lang) {
    // Toggle Active Class
    document.getElementById('lang-id').classList.toggle('active', lang === 'id');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');

    // Update Text Content (Berdasarkan ID atau Data Atribut)
    document.querySelector('.hero h1').innerHTML = langData[lang]['hero-h1'];
    document.querySelector('.hero p').innerText = langData[lang]['hero-p'];
    document.querySelector('.btn-primary').innerText = langData[lang]['btn-book'];
    document.querySelector('.packages .section-title').innerText = langData[lang]['pkg-title'];
    document.querySelector('.booking-info h2').innerText = langData[lang]['form-h2'];
    document.querySelector('.booking-info p').innerText = langData[lang]['form-p'];
    
    // Ubah label form secara dinamis jika perlu
}

// Tambahan: Smooth Animation saat Hover TikTok
const tiktokCard = document.querySelector('.tiktok-grid');
tiktokCard.addEventListener('mouseenter', () => {
    tiktokCard.style.boxShadow = "0 0 30px rgba(197, 160, 89, 0.4)";
});
tiktokCard.addEventListener('mouseleave', () => {
    tiktokCard.style.boxShadow = "none";
});