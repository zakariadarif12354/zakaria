/* ============================
   MSAFER SMART — JAVASCRIPT
   ============================ */

// ========== DESTINATION DATA ==========

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
    price: 1200,
    priceLabel: "$1,200",
    budget: "mid",
    duration: "week",
    weather: "mild",
    style: "relaxation",
    badge: "Popular",
    rating: 4.9,
    tags: ["Beach", "Romantic", "Scenic"]
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    price: 800,
    priceLabel: "$800",
    budget: "mid",
    duration: "twoweeks",
    weather: "tropical",
    style: "relaxation",
    badge: "Best Value",
    rating: 4.8,
    tags: ["Tropical", "Culture", "Nature"]
  },
  {
    name: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
    price: 2200,
    priceLabel: "$2,200",
    budget: "premium",
    duration: "week",
    weather: "mild",
    style: "culture",
    badge: "Trending",
    rating: 4.9,
    tags: ["Culture", "Food", "City"]
  },
  {
    name: "Marrakech",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80",
    price: 450,
    priceLabel: "$450",
    budget: "budget",
    duration: "weekend",
    weather: "dry",
    style: "culture",
    badge: "Budget Pick",
    rating: 4.6,
    tags: ["Culture", "Markets", "Historic"]
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",
    price: 3500,
    priceLabel: "$3,500",
    budget: "luxury",
    duration: "week",
    weather: "cold",
    style: "adventure",
    badge: "Luxury",
    rating: 4.9,
    tags: ["Snow", "Skiing", "Mountains"]
  },
  {
    name: "Cancún",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=600&q=80",
    price: 900,
    priceLabel: "$900",
    budget: "mid",
    duration: "week",
    weather: "tropical",
    style: "nightlife",
    badge: "Fun & Sun",
    rating: 4.7,
    tags: ["Beach", "Nightlife", "Party"]
  },
  {
    name: "Patagonia",
    country: "Argentina",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80",
    price: 1800,
    priceLabel: "$1,800",
    budget: "premium",
    duration: "twoweeks",
    weather: "cold",
    style: "adventure",
    badge: "Adventure",
    rating: 4.8,
    tags: ["Hiking", "Nature", "Wild"]
  },
  {
    name: "Orlando",
    country: "USA",
    image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=600&q=80",
    price: 1500,
    priceLabel: "$1,500",
    budget: "mid",
    duration: "week",
    weather: "tropical",
    style: "family",
    badge: "Family Fun",
    rating: 4.7,
    tags: ["Theme Parks", "Family", "Fun"]
  },
  {
    name: "Reykjavik",
    country: "Iceland",
    image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&q=80",
    price: 2800,
    priceLabel: "$2,800",
    budget: "premium",
    duration: "week",
    weather: "cold",
    style: "adventure",
    badge: "Unique",
    rating: 4.8,
    tags: ["Northern Lights", "Nature", "Geysers"]
  }
];

// ========== RENDER CARDS ==========

function renderDestinations(data) {
  const grid = document.getElementById("destinationsGrid");
  const noResults = document.getElementById("noResults");

  if (data.length === 0) {
    grid.innerHTML = "";
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";
  grid.innerHTML = data.map((d, i) => `
    <div class="dest-card" style="animation-delay: ${i * 0.1}s">
      <div class="dest-card-img">
        <img src="${d.image}" alt="${d.name}" loading="lazy">
        <span class="dest-card-badge">${d.badge}</span>
        <span class="dest-card-price">From ${d.priceLabel}</span>
      </div>
      <div class="dest-card-body">
        <h3>${d.name}</h3>
        <div class="location">
          <i class="fas fa-map-marker-alt"></i> ${d.country}
        </div>
        <div class="dest-card-tags">
          ${d.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="dest-card-footer">
          <span class="rating"><i class="fas fa-star"></i> ${d.rating}</span>
          <a href="#cta" class="btn btn-primary">Book Now</a>
        </div>
      </div>
    </div>
  `).join("");
}

// ========== FILTER LOGIC ==========

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const budget = document.getElementById("budget").value;
  const duration = document.getElementById("duration").value;
  const weather = document.getElementById("weather").value;
  const style = document.getElementById("style").value;

  const filtered = destinations.filter(d => {
    if (budget && d.budget !== budget) return false;
    if (duration && d.duration !== duration) return false;
    if (weather && d.weather !== weather) return false;
    if (style && d.style !== style) return false;
    return true;
  });

  renderDestinations(filtered);

  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
});

// ========== NAVBAR SCROLL ==========

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// ========== MOBILE MENU ==========

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// ========== CTA FORM ==========

document.getElementById("ctaForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = this.querySelector("input");
  const email = input.value;

  if (email) {
    this.innerHTML = `
      <div style="text-align:center; padding: 10px 0;">
        <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 8px;"></i>
        <p style="font-size: 1.1rem; font-weight: 600;">Thanks! We'll send travel picks to <span id="confirmedEmail"></span></p>
      </div>
    `;
    document.getElementById("confirmedEmail").textContent = email;
  }
});

// ========== INITIAL RENDER ==========

renderDestinations(destinations);
