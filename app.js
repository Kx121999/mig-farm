const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const themeToggle = document.querySelector(".theme-toggle");

const products = [
  {
    title: "برسيم نجم الصيف (ALFALFA NAJEM ALSEAYF)",
    price: "Dhs. 140.00",
    image: "assets/product-alfalfa.webp",
    url: "product-alfalfa.html",
    action: "عرض الخيارات",
  },
  {
    title: "عشبة الفيل حزمة 1kg",
    price: "Dhs. 22.00",
    image: "assets/product-elephant-grass.webp",
    url: "product-elephant-grass.html",
    action: "عرض المنتج",
  },
  {
    title: "عشب بونيكام برازيلي 1 كجم",
    price: "Dhs. 95.00",
    image: "assets/product-brazilian-bunicam.webp",
    url: "product-brazilian-bunicam.html",
    action: "عرض المنتج",
  },
  {
    title: "بذور عشبة كاتامبورا رودس 1 كجم",
    price: "Dhs. 52.00 - Dhs. 520.00",
    image: "assets/product-katambora-rhodes.webp",
    url: "product-katambora-rhodes.html",
    action: "عرض الخيارات",
  },
  {
    title: "عشب السودان حزمة 1kg",
    price: "Dhs. 22.00",
    image: "assets/product-sudan-grass.webp",
    url: "product-sudan-grass.html",
    action: "عرض المنتج",
  },
];

function productCard(product) {
  return `
    <article class="product-card cinematic-card">
      <a class="product-image" href="${product.url}">
        <img src="${product.image}" alt="${product.title}" loading="lazy" />
      </a>
      <div class="product-info">
        <h2>${product.title}</h2>
        <p>${product.price}</p>
        <a class="product-action ${product.action.includes("خيارات") ? "options" : ""}" href="${product.url}">${product.action}</a>
      </div>
    </article>
  `;
}

function renderProductRails() {
  document.querySelectorAll("[data-featured-products]").forEach((container) => {
    container.innerHTML = products.map(productCard).join("");
  });

  const main = document.querySelector(".product-page");
  if (!main || document.querySelector(".related-products")) return;

  const currentFile = location.pathname.split("/").pop();
  const related = products.filter((product) => product.url !== currentFile);
  const section = document.createElement("section");
  section.className = "related-products reveal";
  section.innerHTML = `
    <div class="section-heading">
      <p>منتجات مرتبطة</p>
      <h2>منتجات أخرى قد تناسبك</h2>
      <span>كروت قابلة للتعديل لاحقًا داخل Shopify أو أي نظام إدارة محتوى.</span>
    </div>
    <div class="product-grid">${related.map(productCard).join("")}</div>
  `;
  main.appendChild(section);
}

function bootMenu() {
  if (!menuToggle || !header) return;
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function bootTheme() {
  const savedTheme = localStorage.getItem("migfarm-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark");
  }

  function updateThemeLabel() {
    if (!themeToggle) return;
    themeToggle.textContent = document.body.classList.contains("dark") ? "الوضع النهاري" : "الوضع الليلي";
  }

  updateThemeLabel();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("migfarm-theme", document.body.classList.contains("dark") ? "dark" : "light");
      updateThemeLabel();
    });
  }
}

function bootQuantityControls() {
  document.querySelectorAll("[data-qty]").forEach((stepper) => {
    const value = stepper.querySelector("span");
    const minus = stepper.querySelector("[data-qty-minus]");
    const plus = stepper.querySelector("[data-qty-plus]");

    minus.addEventListener("click", () => {
      const nextValue = Math.max(1, Number(value.textContent) - 1);
      value.textContent = String(nextValue);
    });

    plus.addEventListener("click", () => {
      const nextValue = Math.min(99, Number(value.textContent) + 1);
      value.textContent = String(nextValue);
    });
  });
}

function bootCinematicReveal() {
  document.body.classList.add("cinematic-ready");

  const loader = document.createElement("div");
  loader.className = "cinematic-loader";
  loader.innerHTML = `
    <div>
      <img src="assets/migfarm-logo.png" alt="Mig Farm" />
      <span>Premium Agriculture Experience</span>
    </div>
  `;
  document.body.prepend(loader);
  window.setTimeout(() => loader.classList.add("is-hidden"), 900);
  window.setTimeout(() => loader.remove(), 1500);

  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  reveals.forEach((element) => observer.observe(element));
}

bootMenu();
bootTheme();
renderProductRails();
bootQuantityControls();
bootCinematicReveal();
