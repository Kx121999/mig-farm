const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const themeToggle = document.querySelector(".theme-toggle");

const products = [
  {
    title: "برسيم نجم الصيف (ALFALFA NAJEM ALSEAYF)",
    price: "Dhs. 140.00",
    image: "assets/product-alfalfa.jpg",
    url: "product-alfalfa.html",
    action: "عرض الخيارات",
  },
  {
    title: "عشبة الفيل حزمة 1kg",
    price: "Dhs. 22.00",
    image: "assets/product-elephant-grass.jpg",
    url: "product-elephant-grass.html",
    action: "عرض المنتج",
  },
  {
    title: "عشب بونيكام برازيلي 1 كجم",
    price: "Dhs. 95.00",
    image: "assets/product-brazilian-bunicam.jpg",
    url: "product-brazilian-bunicam.html",
    action: "عرض المنتج",
  },
  {
    title: "بذور عشبة كاتامبورا رودس 1 كجم",
    price: "Dhs. 52.00 - Dhs. 520.00",
    image: "assets/product-katambora-rhodes.jpg",
    url: "product-katambora-rhodes.html",
    action: "عرض الخيارات",
  },
  {
    title: "عشب السودان حزمة 1kg",
    price: "Dhs. 22.00",
    image: "assets/product-sudan-grass.jpg",
    url: "product-sudan-grass.html",
    action: "عرض المنتج",
  },
];

const translations = {
  "شحن مجاني للطلبات فوق 500 درهم داخل الإمارات": "Free shipping for orders over AED 500 across the UAE",
  "العودة للرئيسية": "Back to Home",
  "العودة لقسم الخضروات": "Back to Vegetable Seeds",
  "العودة لأنواع الخيار": "Back to Cucumber Types",
  "العودة لقسم النخيل": "Back to Palm Section",
  "العودة للقسم": "Back to Section",
  "الميكروجيرين": "Microgreens",
  "قسم النخيل": "Palm Section",
  "بذور الزهور": "Flower Seeds",
  "بذور الخضروات": "Vegetable Seeds",
  "الوضع الليلي": "Dark Mode",
  "الوضع النهاري": "Light Mode",
  "السلة": "Cart",
  "مشاركة": "Share",
  "يشارك": "Share",
  "توصيل مجاني في متجرنا": "Free pickup available at our store",
  "متجرنا": "our store",
  "الباركود": "Barcode",
  "غير شامل. ضريبة القيمة المضافة": "VAT excluded",
  "أضف إلى السلة": "Add to Cart",
  "إضافة إلى السلة": "Add to Cart",
  "عرض المنتج": "View Product",
  "عرض الخيارات": "View Options",
  "اختار نوعك المفضل": "Choose Your Favorite Type",
  "اختار نوعك المفضل من بين أنواع كثيرة": "Choose your favorite type from many varieties",
  "وصف": "Description",
  "الوصف العام": "General Description",
  "المميزات الفنية": "Technical Features",
  "بيانات المنتج": "Product Data",
  "توصية للمزارعين": "Farmer Recommendation",
  "التعليقات": "Reviews",
  "تقييم المنتج": "Product Rating",
  "أكتب مراجعة": "Write a Review",
  "4 من أصل 5 نجمه": "4 out of 5 stars",
  "4 من أصل 5 نجمة": "4 out of 5 stars",
  "قسم المنتجات": "Products Section",
  "منتجات الخضروات": "Vegetable Products",
  "أنواع بذور الخضروات": "Vegetable Seed Varieties",
  "بذور الخيار": "Cucumber Seeds",
  "أنواع الخيار": "Cucumber Types",
  "اختار نوعك المفضل من الخيار": "Choose Your Favorite Cucumber Type",
  "أنواع بذور الخيار": "Cucumber Seed Varieties",
  "مجموعة مختارة من بذور الخيار F1 بأحجام متعددة تناسب التجربة الصغيرة والمزارع التجارية.": "A selected range of F1 cucumber seeds in different pack sizes for trials and commercial farms.",
  "بذور خضروات مختارة للمزارع والبيوت المحمية، بجودة عالية تساعد على بداية قوية ونمو منتظم للمحصول.": "Selected vegetable seeds for farms and greenhouses, with high quality for strong starts and consistent crop growth.",
  "منتجات مرتبطة": "Related Products",
  "منتجات أخرى قد تناسبك": "Other Products You May Like",
  "كروت قابلة للتعديل لاحقًا داخل Shopify أو أي نظام إدارة محتوى.": "Cards can be edited later inside Shopify or any content management system.",
  "خدمة المتعاملين": "Customer Service",
  "إن كانت تواجهك مشكلة الرجاء التواصل معنا": "If you have any issue, please contact us",
  "اطرح أسئلتك على الواتساب": "Ask us on WhatsApp",
  "متجر زراعي متخصص في البذور والمنتجات الزراعية داخل الإمارات.": "A specialized agricultural store for seeds and farming products in the UAE.",
  "طرق الدفع": "Payment Methods",
  "size": "Size",
  "مقاس": "Size",
  "كل الصندوق": "Full Box",
  "1 ورقة": "1 Sheet",
  "1 piece": "1 piece",
  "250 piece": "250 pieces",
  "1000 piece": "1000 pieces",
  "سيتم تحديد السعر": "Price to be confirmed",
  "سيتم إضافته لاحقًا": "To be added later",

  "برسيم نجم الصيف (ALFALFA NAJEM ALSEAYF)": "Alfalfa Najem Alseayf",
  "عشبة الفيل حزمة 1kg": "Elephant Grass Full Packet 1kg",
  "عشب بونيكام برازيلي 1 كجم": "Brazilian Bunicam Grass 1kg",
  "بذور عشبة كاتامبورا رودس 1 كجم": "Katambora Rhodes Grass Seed 1kg",
  "عشب السودان حزمة 1kg": "Sudan Grass Full Packet 1kg",

  "خيار جبارة f1 (CUCUMBER JABAARA F1)": "Cucumber Jabaara F1",
  "خيار جبارة f1 MINI PACKET 30 SEEDS": "Cucumber Jabaara F1 Mini Packet 30 Seeds",
  "خيار جبارة f1 (CUCUMBER JABAARA F1) MINI PACKET 30 SEEDS": "Cucumber Jabaara F1 Mini Packet 30 Seeds",
  "خيار فتنة F1 (CUCUMBER FITNA F1)": "Cucumber Fitna F1",
  "خيار فتنة F1 MINI PACKET 30 SEEDS": "Cucumber Fitna F1 Mini Packet 30 Seeds",
  "خيار فتنة F1 (CUCUMBER FITNA F1) MINI PACKET 30 SEEDS": "Cucumber Fitna F1 Mini Packet 30 Seeds",
  "خيار وفرة F1 (CUCUMBER F1) 500": "Cucumber Wafra F1 500 Seeds",
  "خيار وفرة F1 (CUCUMBER WAFRA F1) 500": "Cucumber Wafra F1 500 Seeds",
  "خيار وفرة F1 (CUCUMBER F1) 30": "Cucumber Wafra F1 30 Seeds",
  "خيار وفرة F1 (CUCUMBER WAFRA F1) MINI PACKET 30 SEEDS": "Cucumber Wafra F1 Mini Packet 30 Seeds",

  "خيار جبارة F1 هجين خيار قوي للنمو داخل البيوت المحمية، يعطي إنتاجية عالية ومتوازنة. الثمار خضراء لامعة ومضلعة بشكل جميل.": "Cucumber Jabaara F1 is a strong hybrid cucumber for greenhouse cultivation, delivering high and balanced productivity. Fruits are glossy green with an attractive ribbed shape.",
  "خيار جبارة F1 هجين قوي للنمو داخل البيوت المحمية، في عبوة صغيرة مناسبة للتجربة بعدد 30 بذرة.": "Cucumber Jabaara F1 is a strong greenhouse hybrid, offered in a small 30-seed pack for trials.",
  "خيار فتنة F1 هجين مميز للنمو داخل البيوت المحمية. يتميز بثمار خضراء لامعة وإنتاجية عالية وتلاؤم ممتاز مع موسم الصيف.": "Cucumber Fitna F1 is a premium greenhouse hybrid with glossy green fruits, high productivity, and excellent suitability for summer production.",
  "خيار فتنة F1 هجين مميز للبيوت المحمية، في عبوة صغيرة 30 بذرة مناسبة للتجربة أو الزراعة المحدودة.": "Cucumber Fitna F1 is a premium greenhouse hybrid in a 30-seed mini pack for trials or limited planting.",
  "خيار وفرة F1 هجين خيار قوي الإنتاجية مخصص للزراعة في البيوت المحمية خلال الصيف والربيع.": "Cucumber Wafra F1 is a highly productive hybrid cucumber for greenhouse cultivation during summer and spring.",
  "خيار وفرة F1 هجين قوي الإنتاجية مخصص للزراعة في البيوت المحمية، في عبوة صغيرة 30 بذرة.": "Cucumber Wafra F1 is a highly productive greenhouse hybrid offered in a small 30-seed pack.",
  "هجين خيار قوي للنمو داخل البيوت المحمية، يعطي إنتاجية عالية ومتوازنة. الثمار خضراء لامعة، مضلعة بشكل جميل، بطول 16-17 سم، مع عدة ثمار في العقدة الواحدة.": "A strong greenhouse cucumber hybrid with high and balanced yield. Fruits are glossy green, attractively ribbed, 16-17 cm long, with multiple fruits per node.",
  "خيار هجين مميز للنمو داخل البيوت المحمية. يتميز بثمار خضراء لامعة بطول 17-18 سم، مع إنتاجية عالية وتلاؤم ممتاز مع موسم الصيف.": "A premium greenhouse cucumber hybrid with glossy green fruits measuring 17-18 cm, high productivity, and excellent summer suitability.",
  "هجين خيار قوي الإنتاجية مخصص للزراعة في البيوت المحمية خلال الصيف والربيع. الثمار قصيرة بطول 6-8 سم، متجانسة الشكل ولامعة.": "A highly productive greenhouse cucumber hybrid for summer and spring. Fruits are short, 6-8 cm, uniform, and glossy.",
  "جبارة F1 مثالي للإنتاج الصيفي والربيعي في الإمارات داخل البيوت المحمية، حيث يتميز بإنتاج وفير وثبات في الجودة.": "Jabaara F1 is ideal for summer and spring greenhouse production in the UAE, with abundant yield and consistent quality.",
  "خيار فتنة F1 مثالي لمزارعي الإمارات خلال الصيف، حيث يجمع بين التحمل والإنتاجية العالية والثمار الجذابة للسوق المحلي.": "Fitna F1 is ideal for UAE growers during summer, combining tolerance, high productivity, and attractive fruits for the local market.",
  "مثالي لمزارعي الإمارات خلال الصيف، حيث يجمع بين التحمل والإنتاجية العالية والثمار الجذابة للسوق المحلي.": "Ideal for UAE growers during summer, combining tolerance, high productivity, and attractive fruits for the local market.",
  "خيار وفرة F1 مثالي للإنتاج التسويقي السريع بفضل ثماره القصيرة المتجانسة، وهو صنف مرغوب بشدة في الأسواق المحلية.": "Wafra F1 is ideal for fast market production thanks to its short, uniform fruits and strong demand in local markets.",

  "قوة النبات: قوية ومتوازنة.": "Plant vigor: strong and balanced.",
  "النضج: مبكر.": "Maturity: early.",
  "نوع الزراعة: بيوت محمية.": "Cultivation type: greenhouses.",
  "طول الثمرة: 16-17 سم.": "Fruit length: 16-17 cm.",
  "طول الثمرة: 17-18 سم.": "Fruit length: 17-18 cm.",
  "طول الثمرة: 6-8 سم.": "Fruit length: 6-8 cm.",
  "اللون: أخضر لامع.": "Color: glossy green.",
  "عدد الثمار: متعددة في العقدة الواحدة.": "Fruit count: multiple fruits per node.",
  "مقاومة: CVYVT, CMV, SCAB, PM.": "Resistance: CVYVT, CMV, SCAB, PM.",
  "عدد البذور: 500 بذرة.": "Seed count: 500 seeds.",
  "عدد البذور: 30 بذرة.": "Seed count: 30 seeds.",
  "نقاوة: 99.90%.": "Purity: 99.90%.",
  "نسبة الإنبات: 91%.": "Germination rate: 91%.",
  "نسبة الإنبات: 98%.": "Germination rate: 98%.",
  "نسبة الإنبات: 96%.": "Germination rate: 96%.",
  "المعاملة: Fludioxonil (مبيد فطري).": "Treatment: Fludioxonil (fungicide).",
  "التخزين: أقل من 10°م.": "Storage: below 10°C.",
  "بلد المنشأ: الولايات المتحدة الأمريكية.": "Country of origin: United States of America.",

  "كيس النخيل الأبيض": "White Palm Bag",
  "80x100 كيس النخيل الأخضر": "80x100 Green Palm Bag",
  "70x90 كيس النخيل الأخضر green net": "70x90 Green Palm Net Bag",
  "إفدال مكتين 18 EC": "Efdal Mectin 18 EC",
  "طلع تلقيح النخيل": "Palm Pollen for Pollination",
  "تعزيز النخيل 14.8.22": "Palm Boost 14.8.22",
  "سوسة المغناطيس": "Magnet Weevil",
  "فيرورول 1000 ملجم فورمون سوس النخل": "Ferrulure 1000 mg Red Palm Weevil Pheromone",
  "سفنفالو ستار 1 لتر": "Sfenvalo Star 1 Liter",
  "منتجات النخيل": "Palm Products",
  "كل ما يحتاجه موسم النخيل في مكان واحد": "Everything the Palm Season Needs in One Place",

  "الكمية: 1 كجم.": "Quantity: 1 kg.",
  "النمو: سريع وغزير.": "Growth: fast and dense.",
  "مقاومة: جيدة للحرارة والجفاف.": "Tolerance: good heat and drought tolerance.",
};

const phraseTranslations = [
  ["بذور عالية الجودة", "high quality seeds"],
  ["بذور عضوية", "Organic Seeds"],
  ["الشحن السريع", "Fast Shipping"],
  ["إرجاع سهل", "Easy Returns"],
  ["كافة الامارات العربية المتحدة", "Across the UAE"],
  ["في 14 يوما", "within 14 days"],
  ["كل السعادة", "all the happiness"],
  ["جودة عالية", "High Quality"],
  ["إنبات قوي", "Strong Germination"],
  ["محصول وفير", "Abundant Yield"],
  ["مصداقية نضمنها", "Trusted Quality"],
  ["غير شامل", "VAT excluded"],
  ["ضريبة القيمة المضافة", "VAT"],
  ["عدد البذور", "Seed count"],
  ["الباركود", "Barcode"],
  ["الوصف العام", "General Description"],
  ["المميزات الفنية", "Technical Features"],
  ["بيانات المنتج", "Product Data"],
  ["توصية للمزارعين", "Farmer Recommendation"],
  ["البيوت المحمية", "greenhouses"],
  ["مبيد فطري", "fungicide"],
  ["الولايات المتحدة الأمريكية", "United States of America"],
  ["أقل من", "below"],
  ["بذرة", "seeds"],
  ["أخضر لامع", "glossy green"],
  ["مبكر", "early"],
  ["قوية ومتوازنة", "strong and balanced"],
  ["عرض المنتج", "View Product"],
  ["عرض الخيارات", "View Options"],
  ["أضف إلى السلة", "Add to Cart"],
  ["أكتب مراجعة", "Write a Review"],
];

const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
let languageToggle;

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

function translateText(value) {
  const leading = value.match(/^\s*/)[0];
  const trailing = value.match(/\s*$/)[0];
  let core = value.trim();
  if (!core) return value;

  if (translations[core]) return `${leading}${translations[core]}${trailing}`;

  let translated = core;
  phraseTranslations.forEach(([arabic, english]) => {
    translated = translated.split(arabic).join(english);
  });

  if (/[\u0600-\u06ff]/.test(translated)) {
    if (core.length > 70) {
      translated = "High-quality agricultural product from Mig Farm. Full specifications, purchase details, and support information are available on this page.";
    } else if (/(الرئيسية|القسم|العودة)/.test(core)) {
      translated = "Back";
    } else if (/(منتج|منتجات|بذور|خيار|نخيل|عشب|برسيم|كيس|طلع|فورمون|سوسة)/.test(core)) {
      translated = "Mig Farm Product";
    } else if (/(خدمة|تواصل|واتساب|مشكلة)/.test(core)) {
      translated = "Customer Support";
    } else {
      translated = "Mig Farm";
    }
  }

  return `${leading}${translated}${trailing}`;
}

function bootImageFallbacks() {
  document.querySelectorAll("img").forEach((image) => {
    const useFallback = () => {
      const src = image.getAttribute("src") || "";
      if (!src.endsWith(".jpg")) return;
      image.src = src.replace(/\.jpg$/, ".webp");
    };

    if (image.complete && image.naturalWidth === 0) {
      useFallback();
    } else {
      image.addEventListener("error", useFallback, { once: true });
    }
  });
}

function walkTextNodes(root, callback) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(callback);
}

function translateAttributes(language) {
  const attributes = ["alt", "aria-label", "title", "placeholder", "content"];
  document.querySelectorAll("*").forEach((element) => {
    attributes.forEach((attr) => {
      if (!element.hasAttribute(attr)) return;
      const store = originalAttributes.get(element) || {};
      if (!store[attr]) {
        store[attr] = element.getAttribute(attr);
        originalAttributes.set(element, store);
      }
      element.setAttribute(attr, language === "en" ? translateText(store[attr]) : store[attr]);
    });
  });
}

function applyLanguage(language) {
  document.documentElement.lang = language === "en" ? "en" : "ar";
  document.documentElement.dir = language === "en" ? "ltr" : "rtl";
  document.body.classList.toggle("lang-en", language === "en");

  walkTextNodes(document.body, (node) => {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    node.nodeValue = language === "en" ? translateText(original) : original;
  });

  translateAttributes(language);

  if (languageToggle) {
    languageToggle.textContent = language === "en" ? "عربي" : "English";
    languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Arabic" : "Switch to English");
  }

  if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains("dark")
      ? language === "en" ? "Light Mode" : "الوضع النهاري"
      : language === "en" ? "Dark Mode" : "الوضع الليلي";
  }
}

function bootLanguage() {
  const actions = document.querySelector(".header-actions");
  if (!actions) return;

  languageToggle = document.createElement("button");
  languageToggle.className = "lang-toggle";
  languageToggle.type = "button";
  actions.prepend(languageToggle);

  const savedLanguage = localStorage.getItem("migfarm-lang") || "ar";
  applyLanguage(savedLanguage);

  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "en" ? "ar" : "en";
    localStorage.setItem("migfarm-lang", nextLanguage);
    applyLanguage(nextLanguage);
  });
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
    const language = document.documentElement.lang === "en" ? "en" : "ar";
    if (!themeToggle) return;
    themeToggle.textContent = document.body.classList.contains("dark")
      ? language === "en" ? "Light Mode" : "الوضع النهاري"
      : language === "en" ? "Dark Mode" : "الوضع الليلي";
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
bootLanguage();
bootImageFallbacks();
bootCinematicReveal();
