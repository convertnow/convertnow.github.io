// Load Header Component
async function loadHeader() {
  try {
    const response = await fetch("components/header.html")
    const html = await response.text()
    document.getElementById("header-container").innerHTML = html
    setupHeaderEvents()
  } catch (error) {
    console.error("Error loading header:", error)
  }
}

// Load Footer Component
async function loadFooter() {
  try {
    const response = await fetch("components/footer.html")
    const html = await response.text()
    document.getElementById("footer-container").innerHTML = html
  } catch (error) {
    console.error("Error loading footer:", error)
  }
}

// Setup Header Events
function setupHeaderEvents() {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("navMenu")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close menu when link is clicked
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  }
}

// Handle Newsletter Signup
function handleNewsletter(event) {
  event.preventDefault()
  const form = event.target
  const email = form.querySelector('input[type="email"]').value

  // Show success message
  alert(`Thank you for subscribing! Check your email at ${email}`)
  form.reset()
}

// Load components on page load
document.addEventListener("DOMContentLoaded", () => {
  loadHeader()
  loadFooter()
})
