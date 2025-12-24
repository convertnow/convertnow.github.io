// Slider functionality
class ImageSlider {
  constructor() {
    this.track = document.querySelector(".slider-track")
    this.prevBtn = document.querySelector(".slider-prev")
    this.nextBtn = document.querySelector(".slider-next")
    this.items = document.querySelectorAll(".slider-item")
    this.currentIndex = 0
    this.autoPlayInterval = null

    if (this.prevBtn && this.nextBtn) {
      this.init()
    }
  }

  init() {
    this.prevBtn.addEventListener("click", () => this.prev())
    this.nextBtn.addEventListener("click", () => this.next())
    this.startAutoPlay()

    // Pause on hover
    this.track?.parentElement?.addEventListener("mouseenter", () => this.stopAutoPlay())
    this.track?.parentElement?.addEventListener("mouseleave", () => this.startAutoPlay())
  }

  updateSlider() {
    if (this.track) {
      const offset = -this.currentIndex * 100
      this.track.style.transform = `translateX(${offset}%)`
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length
    this.updateSlider()
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length
    this.updateSlider()
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.next(), 5000)
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval)
  }
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "slideInUp 0.6s ease-out forwards"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".feature-card, .converter-card, .testimonial-card").forEach((el) => {
    observer.observe(el)
  })
}

// Initialize slider
const slider = new ImageSlider()

// Initialize animations
document.addEventListener("DOMContentLoaded", initScrollAnimations)

// Scroll to converters function
function scrollToConverters() {
  const convertersSection = document.querySelector(".all-converters") || document.querySelector(".popular-converters")
  if (convertersSection) {
    convertersSection.scrollIntoView({ behavior: "smooth" })
  }
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  })
})

// Highlight active nav link
function updateActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.style.color = "var(--primary-blue)"
      link.style.borderBottomColor = "var(--primary-blue)"
    } else {
      link.style.color = "inherit"
      link.style.borderBottomColor = "transparent"
    }
  })
}

document.addEventListener("DOMContentLoaded", updateActiveNavLink)

// Fade in body on load
window.addEventListener("load", () => {
  document.body.style.animation = "fadeIn 0.5s ease-in"
})
