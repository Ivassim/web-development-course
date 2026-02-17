const themeSelect = document.getElementById('theme-select');
const THEME_KEY = 'site-theme';
const LANG_KEY = 'site-lang';

const translations = {
  en: {
    nav_past: 'Past',
    nav_history: 'History',
    nav_present: 'Present',
    main_title: 'Seven Wonders of the World',
    ancient_title: 'Ancient Wonders',
    ancient_desc: 'The ancient wonders were extraordinary creations of human ingenuity and artistic skill.<br>They represented the pinnacle of architecture, engineering, and culture in their time.<br>These structures inspired awe and admiration, leaving a legacy that continues to capture our imagination even thousands of years later.',
    present_title: 'Present Wonders',
    present_desc: 'The modern wonders celebrate human creativity and cultural achievement across the globe.<br>Selected through international recognition, they symbolize the diversity, history, and craftsmanship of different civilizations.<br>These sites continue to attract millions of visitors every year, reflecting their timeless appeal and importance in our shared heritage.',
    slider_prev: 'Previous',
    slider_next: 'Next',
    contact_title: 'Contact Us',
    contact_name_label: 'Name:',
    contact_message_label: 'Message:',
    contact_send: 'Send Message',
    contact_name_ph: 'Enter your name',
    contact_message_ph: 'Write your message here...',
    faq_title: 'FAQ',
    faq_q1: 'What are the Seven Wonders of the World?',
    faq_a1: 'The Seven Wonders are remarkable human-made monuments, celebrated for their history and cultural value.',
    faq_q2: 'Are the ancient wonders still standing?',
    faq_a2: 'Only the Great Pyramid of Giza still exists today; the others are known from historical records.',
    faq_q3: 'How were the new wonders chosen?',
    faq_a3: 'The new wonders were selected by a global vote organized by the New7Wonders Foundation.',
    sub1_title: 'Ancient Wonders',
    sub1_giza_title: 'Great Pyramid of Giza',
    sub1_giza_desc: 'Built around 2560 BC in Egypt by Pharaoh Khufu, it is the only ancient wonder still standing today.',
    sub1_babylon_title: 'Hanging Gardens of Babylon',
    sub1_babylon_desc: 'Legendary terraced gardens built in Babylon (modern Iraq) by King Nebuchadnezzar II around 600 BC, though their existence is debated.',
    sub1_zeus_title: 'Statue of Zeus at Olympia',
    sub1_zeus_desc: 'A giant gold and ivory statue of Zeus, created by sculptor Phidias around 435 BC in Greece.',
    sub1_artemis_title: 'Temple of Artemis at Ephesus',
    sub1_artemis_desc: 'Located in Turkey, built around 550 BC, dedicated to the goddess Artemis. It was rebuilt several times before its destruction.',
    sub1_mausoleum_title: 'Mausoleum at Halicarnassus',
    sub1_mausoleum_desc: 'Built in Turkey around 350 BC for Mausolus, a Persian satrap, it was famous for its grandeur and sculptures.',
    sub1_colossus_title: 'Colossus of Rhodes',
    sub1_colossus_desc: 'A giant bronze statue of the sun god Helios, built around 280 BC in Greece, standing over 30 meters tall.',
    sub1_lighthouse_title: 'Lighthouse of Alexandria',
    sub1_lighthouse_desc: 'Constructed on the island of Pharos, Egypt, around 280 BC to guide sailors safely into the harbor of Alexandria.',
    sub1_more_info: 'For more Information:',
    sub2_title: 'New Wonders',
    sub2_greatwall_title: 'Great Wall of China',
    sub2_greatwall_desc: 'Built over several dynasties, mainly during the Ming dynasty (14th–17th century), to protect China from invasions.',
    sub2_petra_title: 'Petra',
    sub2_petra_desc: 'Ancient city carved into rose-colored rock in Jordan, developed by the Nabataeans around the 5th century BC.',
    sub2_christ_title: 'Christ the Redeemer',
    sub2_christ_desc: 'Iconic statue in Rio de Janeiro, Brazil, built between 1922 and 1931 to symbolize peace and Christianity.',
    sub2_machu_title: 'Machu Picchu',
    sub2_machu_desc: 'Incan citadel in Peru, built in the 15th century by Emperor Pachacuti, hidden in the Andes mountains.',
    sub2_chichen_title: 'Chichen Itza',
    sub2_chichen_desc: 'Mayan city in Mexico, built around 600-1200 AD, famous for its pyramid and astronomical alignments.',
    sub2_colosseum_title: 'Colosseum',
    sub2_colosseum_desc: 'Roman amphitheater in Rome, Italy, built between 70-80 AD, used for gladiatorial games and public spectacles.',
    sub2_taj_title: 'Taj Mahal',
    sub2_taj_desc: 'White marble mausoleum in Agra, India, built by Emperor Shah Jahan between 1632-1653 in memory of his wife Mumtaz Mahal.',
    sub2_more_info: 'For more Information:'
  },
  fr: {
    nav_past: 'Passe',
    nav_history: 'Histoire',
    nav_present: 'Present',
    main_title: 'Les sept merveilles du monde',
    ancient_title: 'Merveilles antiques',
    ancient_desc: "Les merveilles antiques etaient des creations extraordinaires de l'ingeniosite humaine et du talent artistique.<br>Elles representaient le sommet de l'architecture, de l'ingenierie et de la culture de leur epoque.<br>Ces structures inspiraient l'admiration, laissant un heritage qui continue de nourrir notre imagination.",
    present_title: 'Merveilles modernes',
    present_desc: "Les merveilles modernes celebrent la creativite humaine et les reussites culturelles a travers le monde.<br>Choisies par une reconnaissance internationale, elles symbolisent la diversite, l'histoire et le savoir-faire de differentes civilisations.<br>Ces sites attirent encore des millions de visiteurs chaque annee, reflet de leur attrait intemporel et de leur importance.",
    slider_prev: 'Precedent',
    slider_next: 'Suivant',
    contact_title: 'Contactez-nous',
    contact_name_label: 'Nom :',
    contact_message_label: 'Message :',
    contact_send: 'Envoyer',
    contact_name_ph: 'Entrez votre nom',
    contact_message_ph: 'Ecrivez votre message ici...',
    faq_title: 'FAQ',
    faq_q1: 'Quelles sont les sept merveilles du monde ?',
    faq_a1: 'Les sept merveilles sont des monuments remarquables, celebres pour leur histoire et leur valeur culturelle.',
    faq_q2: 'Les merveilles antiques existent-elles encore ?',
    faq_a2: "Seule la grande pyramide de Gizeh existe encore aujourd'hui ; les autres sont connues par les sources historiques.",
    faq_q3: 'Comment les nouvelles merveilles ont-elles ete choisies ?',
    faq_a3: 'Les nouvelles merveilles ont ete choisies par un vote mondial organise par la fondation New7Wonders.',
    sub1_title: 'Merveilles antiques',
    sub1_giza_title: 'Grande pyramide de Gizeh',
    sub1_giza_desc: "Construite vers 2560 av. J.-C. en Egypte par le pharaon Khufu, c'est la seule merveille antique encore debout.",
    sub1_babylon_title: 'Jardins suspendus de Babylone',
    sub1_babylon_desc: "Jardins en terrasses legendaires construits a Babylone (Irak actuel) par Nabuchodonosor II vers 600 av. J.-C., bien que leur existence soit discutee.",
    sub1_zeus_title: "Statue de Zeus a Olympie",
    sub1_zeus_desc: 'Une statue geante de Zeus en or et ivoire, realisee par le sculpteur Phidias vers 435 av. J.-C. en Grece.',
    sub1_artemis_title: "Temple d'Artemis a Ephese",
    sub1_artemis_desc: "Situe en Turquie, construit vers 550 av. J.-C., dedie a la deesse Artemis. Il fut reconstruit plusieurs fois avant sa destruction.",
    sub1_mausoleum_title: 'Mausolee d’Halicarnasse',
    sub1_mausoleum_desc: "Construit en Turquie vers 350 av. J.-C. pour Mausole, satrape perse, il etait celebre pour sa grandeur et ses sculptures.",
    sub1_colossus_title: 'Colosse de Rhodes',
    sub1_colossus_desc: "Immense statue en bronze du dieu Helios, construite vers 280 av. J.-C. en Grece, haute de plus de 30 metres.",
    sub1_lighthouse_title: "Phare d'Alexandrie",
    sub1_lighthouse_desc: "Construit sur l'ile de Pharos en Egypte vers 280 av. J.-C. pour guider les marins vers le port d'Alexandrie.",
    sub1_more_info: 'Pour plus d’informations :',
    sub2_title: 'Nouvelles merveilles',
    sub2_greatwall_title: 'Grande Muraille de Chine',
    sub2_greatwall_desc: "Construite sur plusieurs dynasties, surtout sous les Ming (XIVe–XVIIe siecle), pour proteger la Chine des invasions.",
    sub2_petra_title: 'Petra',
    sub2_petra_desc: "Ville antique sculptee dans la roche rose en Jordanie, developpee par les Nabateens vers le Ve siecle av. J.-C.",
    sub2_christ_title: 'Christ Redempteur',
    sub2_christ_desc: "Statue iconique a Rio de Janeiro (Bresil), construite entre 1922 et 1931, symbole de paix et de christianisme.",
    sub2_machu_title: 'Machu Picchu',
    sub2_machu_desc: "Citadelle inca au Perou, construite au XVe siecle par l'empereur Pachacuti, cachee dans les Andes.",
    sub2_chichen_title: 'Chichen Itza',
    sub2_chichen_desc: "Cite maya au Mexique, construite vers 600-1200 apr. J.-C., celebre pour sa pyramide et ses alignements astronomiques.",
    sub2_colosseum_title: 'Colisee',
    sub2_colosseum_desc: "Amphitheatre romain a Rome, construit entre 70 et 80 apr. J.-C., utilise pour des combats de gladiateurs et des spectacles publics.",
    sub2_taj_title: 'Taj Mahal',
    sub2_taj_desc: "Mausolee de marbre blanc a Agra (Inde), construit par l'empereur Shah Jahan entre 1632 et 1653 en memoire de son epouse Mumtaz Mahal.",
    sub2_more_info: 'Pour plus d’informations :'
  }
};

function applyTheme(theme) {
  document.body.dataset.theme = theme;
}

const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
applyTheme(savedTheme);

if (themeSelect) {
  themeSelect.value = savedTheme;
  themeSelect.addEventListener('change', (event) => {
    const theme = event.target.value;
    applyTheme(theme);
    localStorage.setItem(THEME_KEY, theme);
  });
}

const languageSelect = document.getElementById('language-select');

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (!key || dictionary[key] === undefined) return;
    element.textContent = dictionary[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.getAttribute('data-i18n-html');
    if (!key || dictionary[key] === undefined) return;
    element.innerHTML = dictionary[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (!key || dictionary[key] === undefined) return;
    element.setAttribute('placeholder', dictionary[key]);
  });
}

const savedLang = localStorage.getItem(LANG_KEY) || 'en';
applyLanguage(savedLang);

if (languageSelect) {
  languageSelect.value = savedLang;
  languageSelect.addEventListener('change', (event) => {
    const lang = event.target.value;
    applyLanguage(lang);
    localStorage.setItem(LANG_KEY, lang);
  });
}

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  if (!question) return;

  question.addEventListener('click', () => {
    faqItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove('is-open');
      }
    });
    item.classList.toggle('is-open');
  });
});

const ancientBaseImages = [
  "image_slider/ancien/1.png",
  "image_slider/ancien/2.png",
  "image_slider/ancien/3.png",
  "image_slider/ancien/4.png",
  "image_slider/ancien/5.png",
  "image_slider/ancien/6.png",
  "image_slider/ancien/7.png"
];

const newBaseImages = [
  "image_slider/nouveau/1.webp",
  "image_slider/nouveau/2.webp",
  "image_slider/nouveau/3.jpeg",
  "image_slider/nouveau/4.webp",
  "image_slider/nouveau/5.jpg",
  "image_slider/nouveau/6.avif",
  "image_slider/nouveau/7.jpg"
];

function buildSequence(baseImages, allPath) {
  return baseImages.flatMap((src) => [allPath, src]);
}

function initSlider(containerId, images) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const slider = container.querySelector('.slider');
  const nextButton = container.querySelector('.next');
  const prevButton = container.querySelector('.prev');

  let currentSlide = 0;

  function renderImages() {
    slider.innerHTML = '';
    images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Image ${index + 1}`;
      img.classList.add('slide');
      slider.appendChild(img);
    });
  }

  function showSlide(index) {
    currentSlide = (index + images.length) % images.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
  prevButton.addEventListener('click', () => showSlide(currentSlide - 1));

  renderImages();
  showSlide(currentSlide);
}

initSlider(
  'image-slider-ancient',
  buildSequence(ancientBaseImages, "image_slider/ancien/all.png")
);
initSlider(
  'image-slider-new',
  buildSequence(newBaseImages, "image_slider/nouveau/all.png")
);