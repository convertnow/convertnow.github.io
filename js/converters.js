// Converter data
const converters = [
  { from: "PNG", to: "JPEG", icon: "🖼️" },
  { from: "JPEG", to: "PNG", icon: "📷" },
  { from: "GIF", to: "PNG", icon: "🎬" },
  { from: "BMP", to: "JPEG", icon: "🎨" },
  { from: "TIFF", to: "PNG", icon: "📸" },
  { from: "WebP", to: "JPEG", icon: "⚡" },
  { from: "HEIC", to: "JPEG", icon: "📱" },
  { from: "SVG", to: "PNG", icon: "✨" },
  { from: "AVIF", to: "JPEG", icon: "🎯" },
  { from: "JPG2000", to: "PNG", icon: "🔄" },
  { from: "PNG", to: "WebP", icon: "💫" },
  { from: "JPEG", to: "WebP", icon: "🚀" },
  { from: "GIF", to: "WebP", icon: "🌟" },
  { from: "PNG", to: "GIF", icon: "🎞️" },
  { from: "JPEG", to: "BMP", icon: "📊" },
  { from: "PNG", to: "SVG", icon: "📐" },
  { from: "HEIC", to: "PNG", icon: "🖼️" },
  { from: "AVIF", to: "PNG", icon: "🎪" },
  { from: "TIFF", to: "JPEG", icon: "🏞️" },
  { from: "BMP", to: "PNG", icon: "🎭" },
]

// Color map for converters
const colorMap = [
  "linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)",
  "linear-gradient(135deg, #ff6b35 0%, #ffa500 100%)",
  "linear-gradient(135deg, #00d084 0%, #00ff88 100%)",
  "linear-gradient(135deg, #ff1493 0%, #ff69b4 100%)",
  "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
]

// Render converters grid
function renderConverters(filter = "", search = "") {
  const grid = document.getElementById("converters-grid")
  if (!grid) return

  grid.innerHTML = ""

  converters
    .filter((converter) => {
      const matchesFilter =
        !filter || converter.from.includes(filter.toUpperCase()) || converter.to.includes(filter.toUpperCase())
      const matchesSearch =
        !search || `${converter.from} to ${converter.to}`.toLowerCase().includes(search.toLowerCase())
      return matchesFilter && matchesSearch
    })
    .forEach((converter, index) => {
      const tile = document.createElement("div")
      tile.className = "converter-tile"
      const color = colorMap[index % colorMap.length]

      tile.innerHTML = `
                <div class="converter-icon" style="animation-delay: ${(index % 5) * 0.2}s">${converter.icon}</div>
                <div class="converter-tile-text">
                    <h3>${converter.from}</h3>
                    <p>to ${converter.to}</p>
                </div>
            `

      // Apply alternating border colors
      const borderColors = ["#0066ff", "#00d084", "#ffa500", "#ff1493", "#7c3aed"]
      tile.style.borderColor = borderColors[index % borderColors.length]
      tile.style.borderLeftColor = borderColors[index % borderColors.length]
      tile.style.borderLeftWidth = "4px"

      tile.addEventListener("click", () => handleConverterClick(converter))
      grid.appendChild(tile)
    })
}

// Handle converter click
function handleConverterClick(converter) {
  alert(`Converter: ${converter.from} → ${converter.to}\n\nConversion tool would load here.`)
  // In a real app, this would navigate to a converter page or open a modal
}

// Search functionality
function setupConverterFilters() {
  const searchInput = document.getElementById("searchInput")
  const formatFilter = document.getElementById("formatFilter")

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderConverters(formatFilter.value, e.target.value)
    })
  }

  if (formatFilter) {
    formatFilter.addEventListener("change", (e) => {
      renderConverters(e.target.value, searchInput.value)
    })
  }
}

// Initialize converters page
document.addEventListener("DOMContentLoaded", () => {
  renderConverters()
  setupConverterFilters()
})
