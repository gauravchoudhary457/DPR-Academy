// Swiper slider setup
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Contact form validation + AJAX submission
document.querySelector(".contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Prepare form data to send
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert("Thank you for your message! We'll get back to you soon.");
      form.reset();
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  })
  .catch(() => {
    alert("Oops! There was a problem submitting your form.");
  });
});

// Background image slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 5000);

// Navbar scroll behavior
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
    nav.classList.remove("gradient-background");
  } else {
    nav.classList.remove("scrolled");
    nav.classList.add("gradient-background");
  }
});
