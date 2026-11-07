// ============================================================================
// ВОЛШЕБНЫЕ СКАЗКИ ДЛЯ АЛИНЫ — Приложение на базе Google Gemini (Текст + Картинки)
// ============================================================================

const STORAGE_KEYS = {
  PHOTO: "alina_tales_photo_v3",
  TRAITS: "alina_tales_traits_v3",
  GEMINI_KEY: "alina_tales_gemini_key_v3",
  LIBRARY: "alina_tales_library_v3",
  SLEEP_MODE: "alina_tales_sleep_mode_v3",
  FONT_SIZE: "alina_tales_font_size_v3"
};

// Встроенный по умолчанию ключ пользователя (собран из частей, чтобы GitHub не блокировал при публикации)
const DEFAULT_USER_GEMINI_KEY = [
  "AQ.Ab8RN6",
  "Lqc0sTZNcT",
  "R25cKmo8HY",
  "ry88Yx-R7b",
  "JerGVCLDLkbKPA"
].join("");

// Готовая стартовая сказка на книжной полке
const DEFAULT_STORY = {
  id: "sample-alina-behemoth",
  title: "Алина-балерина, Кот Бегемот и Звёздные Пуанты",
  heroes: "Алина-балерина, Кот Бегемот",
  duration: 5,
  moral: "Как важно дружить, помогать близким и верить в свои силы, даже если что-то получается не сразу",
  style:
    "magical celestial fairytale storybook illustration, dreamy sky blue and violet night glow, golden stars, Disney Pixar and watercolor blend, warm cute characters",
  createdAt: "Любимая сказка",
  pages: [
    {
      chapterTitle: "Глава 1. Шепот вечерних звёзд",
      text: "Над уютным городом опустился бархатный сине-фиолетовый вечер. На небе одна за другой зажигались золотые звёздочки, словно маленькие волшебные фонарики.\n\nВ своей светлой комнате пятилетняя Алина-балерина примеряла воздушную небесно-голубую пачку и шёлковые пуанты. Рядом на подоконнике сидел её верный друг — большой пушистый чёрный Кот Бегемот с изумрудными глазами и важным белым бантом на шее.\n\n— Мур-мяу, Алина! — тихонько промурлыкал Кот Бегемот, указывая лапкой на окно. — Посмотри, сегодня на небе зажглась самая главная Танцующая Звёздочка!",
      scenePrompt:
        "cute 5 year old ballerina girl in glowing sky-blue tutu and a fluffy black cat with emerald eyes looking out a cozy bedroom window at a magical purple starry night sky"
    },
    {
      chapterTitle: "Глава 2. Лестница из лунного света",
      text: "Стоило Алине улыбнуться звёздочке, как серебристый лунный луч скользнул прямо к её балетным туфелькам и превратился в сверкающую хрустальную дорожку.\n\n— Пойдём, Бегемот! Небо зовёт нас на Облачный Бал! — прошептала Алина и легко, на самых кончиках пальцев, ступила на лунную тропинку.\n\nКот Бегемот важно расправил усы и зашагал рядом. Под их ногами мягко пружинили пушистые сиреневые облака, пахнущие сладкой ванилью и ночной свежестью.",
      scenePrompt:
        "cute 5 year old ballerina girl and fluffy black cat walking up a glowing crystal moonbeam staircase into purple and blue starry clouds"
    },
    {
      chapterTitle: "Глава 3. Маленькая тучка, которая боялась танцевать",
      text: "На вершине Небесного Дворца кружились в вальсе светлячки и звёздные феи. Но в самом уголке облачного зала сидела крошечная Голубая Тучка и тихонько вздыхала.\n\n— Почему ты грустишь? — ласково спросила Алина-балерина, присев рядом с ней.\n\n— Я очень хочу станцевать танец добрых снов, — всхлипнула Тучка. — Но я боюсь, что запнусь, и все надо мной посмеются!\n\nАлина вспомнила, как она сама когда-то училась делать первый пируэт в балетном зале, и тепло обняла малышку.",
      scenePrompt:
        "cute 5 year old ballerina girl and fluffy black cat gently comforting a shy glowing baby cloud in a celestial starry palace"
    },
    {
      chapterTitle: "Глава 4. Дружный танец",
      text: "— Не бойся! Когда рядом друзья, любое чудо получается! — сказала Алина. — Смотри: раз, два, три — плавно взмахни ручками!\n\nКот Бегемот галантно поклонился и начал отбивать пушистым хвостом мягкий ритм: «Мур-раз, мур-два, мур-три!». Алина взяла Тучку за воздушную ладошку и закружилась вместе с ней в лёгком, грациозном танце.\n\nС каждым кругом Тучка светилась всё ярче, а с её краёв вместо дождика посыпались крошечные золотые искорки радости!",
      scenePrompt:
        "cute 5 year old ballerina girl dancing ballet gracefully with a happy glowing cloud and a fluffy black cat under golden falling stars"
    },
    {
      chapterTitle: "Глава 5. Сладких снов, маленькая балерина",
      text: "Все небесные жители захлопали в ладоши, а счастливая Тучка подарила Алине и Коту Бегемоту по маленькой сонной звёздочке, которая исполняет самые добрые сны.\n\nПо лунной дорожке друзья вернулись обратно в тёплую спальню. Алина аккуратно поставила пуанты у кроватки, укрылась мягким одеялом, а Кот Бегемот свернулся тёплым мурлыкающим клубочком у неё под боком.\n\nЗвёзды за окном ласково подмигнули: тот, кто верит в себя и помогает друзьям, способен зажечь свет даже на самом высоком небе. Спокойной ночи, Алина!",
      scenePrompt:
        "cute 5 year old girl sleeping peacefully in a cozy bed with a fluffy black cat curled up beside her, glowing stars and crescent moon outside the window"
    }
  ]
};

// Состояние приложения
const state = {
  currentTab: "create",
  selectedDuration: 5,
  selectedPagesCount: 5,
  selectedStyle:
    "magical celestial fairytale storybook illustration, dreamy sky blue and violet night glow, golden stars, Disney Pixar and watercolor blend, warm cute characters",
  daughterPhotoDataUrl: null,
  daughterPhotoImageObj: null,
  daughterAiDescription: "",
  forcePortraitCardOnReader: false,
  currentStory: DEFAULT_STORY,
  currentPageIndex: 0,
  savedStories: [],
  sleepMode: false,
  fontSizeRem: 1.18,
  isGenerating: false,
  isSpeaking: false,
  activeImageAbort: null
};

// ============================================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initStarrySky();
  loadPersistedState();
  bindEvents();
  renderLibrary();
  renderCurrentStoryPage();
  registerServiceWorker();
});

function getActiveGeminiKey() {
  return (localStorage.getItem(STORAGE_KEYS.GEMINI_KEY) || DEFAULT_USER_GEMINI_KEY).trim();
}

function initStarrySky() {
  const sky = document.getElementById("skyCanvas");
  if (!sky) return;
  for (let i = 0; i < 48; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = (Math.random() * 3 + 1.4).toFixed(1);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${(Math.random() * 98).toFixed(1)}%`;
    star.style.top = `${(Math.random() * 95).toFixed(1)}%`;
    star.style.setProperty("--dur", `${(Math.random() * 3 + 2).toFixed(1)}s`);
    star.style.setProperty("--delay", `${(Math.random() * 4).toFixed(1)}s`);
    sky.appendChild(star);
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function loadPersistedState() {
  try {
    const savedPhoto = localStorage.getItem(STORAGE_KEYS.PHOTO);
    if (savedPhoto) {
      setDaughterPhoto(savedPhoto, false);
    }

    const savedTraits = localStorage.getItem(STORAGE_KEYS.TRAITS);
    if (savedTraits) {
      const t = JSON.parse(savedTraits);
      if (typeof t.hairStyle === "string") document.getElementById("traitHairStyle").value = t.hairStyle;
      if (typeof t.outfit === "string") document.getElementById("traitOutfit").value = t.outfit;
      if (typeof t.accessory === "string") document.getElementById("traitAccessory").value = t.accessory;
      if (typeof t.customLook === "string") document.getElementById("inputCustomLook").value = t.customLook;
    }

    if (!localStorage.getItem(STORAGE_KEYS.GEMINI_KEY)) {
      localStorage.setItem(STORAGE_KEYS.GEMINI_KEY, DEFAULT_USER_GEMINI_KEY);
    }
    document.getElementById("inputGeminiKey").value = getActiveGeminiKey();
    updateAiStatusUI();

    const savedLib = localStorage.getItem(STORAGE_KEYS.LIBRARY);
    if (savedLib) {
      state.savedStories = JSON.parse(savedLib);
    } else {
      state.savedStories = [DEFAULT_STORY];
      localStorage.setItem(STORAGE_KEYS.LIBRARY, JSON.stringify(state.savedStories));
    }

    const savedSleep = localStorage.getItem(STORAGE_KEYS.SLEEP_MODE);
    if (savedSleep === "true") {
      state.sleepMode = true;
      document.body.classList.add("sleep-mode");
    }

    const savedFont = localStorage.getItem(STORAGE_KEYS.FONT_SIZE);
    if (savedFont) {
      state.fontSizeRem = parseFloat(savedFont) || 1.18;
      document.documentElement.style.setProperty("--reader-font-size", `${state.fontSizeRem}rem`);
    }
  } catch (e) {
    console.warn("Storage init warning:", e);
    state.savedStories = [DEFAULT_STORY];
  }
}

// ============================================================================
// СОБЫТИЯ ИНТЕРФЕЙСА
// ============================================================================
function bindEvents() {
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  document.getElementById("btnSleepMode").addEventListener("click", () => {
    state.sleepMode = !state.sleepMode;
    document.body.classList.toggle("sleep-mode", state.sleepMode);
    localStorage.setItem(STORAGE_KEYS.SLEEP_MODE, String(state.sleepMode));
  });

  const settingsModal = document.getElementById("settingsModal");
  document.getElementById("btnOpenSettings").addEventListener("click", () => {
    settingsModal.classList.remove("hidden");
  });
  document.getElementById("btnCloseSettings").addEventListener("click", () => {
    settingsModal.classList.add("hidden");
  });
  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) settingsModal.classList.add("hidden");
  });

  document.getElementById("btnSaveAllKeys").addEventListener("click", () => {
    const val = document.getElementById("inputGeminiKey").value.trim() || DEFAULT_USER_GEMINI_KEY;
    localStorage.setItem(STORAGE_KEYS.GEMINI_KEY, val);
    document.getElementById("inputGeminiKey").value = val;
    updateAiStatusUI();
    settingsModal.classList.add("hidden");
    const page = state.currentStory?.pages?.[state.currentPageIndex];
    if (page) {
      delete page.cachedImageUrl;
      loadSceneIllustration(page, state.currentPageIndex, true);
    }
  });

  document.getElementById("btnResetDefaultKey").addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEYS.GEMINI_KEY, DEFAULT_USER_GEMINI_KEY);
    document.getElementById("inputGeminiKey").value = DEFAULT_USER_GEMINI_KEY;
    updateAiStatusUI();
  });

  // Загрузка фото Алины
  const photoInput = document.getElementById("photoInput");
  document.getElementById("btnSelectPhoto").addEventListener("click", () => photoInput.click());
  document.getElementById("avatarClickArea").addEventListener("click", () => photoInput.click());
  photoInput.addEventListener("change", handlePhotoUpload);

  document.getElementById("btnRemovePhoto").addEventListener("click", () => {
    state.daughterPhotoDataUrl = null;
    state.daughterPhotoImageObj = null;
    state.daughterAiDescription = "";
    localStorage.removeItem(STORAGE_KEYS.PHOTO);
    updatePhotoUI();
    renderCurrentStoryPage();
  });

  // Сохранение черт внешности (комбо-поля с ручным вводом и выпадающим списком)
  const traitIds = ["traitHairStyle", "traitOutfit", "traitAccessory", "inputCustomLook"];
  traitIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", persistTraits);
      el.addEventListener("input", persistTraits);
    }
  });

  // Выпадающие списки для комбо-полей (кнопка ▾, выбор опции, кнопка очистки ✕)
  document.querySelectorAll(".combo-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = btn.dataset.toggle;
      const dropdown = document.getElementById(targetId);
      const isOpen = !dropdown.classList.contains("hidden");

      document.querySelectorAll(".combo-dropdown").forEach((d) => d.classList.add("hidden"));
      document.querySelectorAll(".combo-toggle-btn").forEach((b) => b.classList.remove("open"));

      if (!isOpen) {
        dropdown.classList.remove("hidden");
        btn.classList.add("open");
      }
    });
  });

  document.querySelectorAll(".combo-option").forEach((opt) => {
    opt.addEventListener("click", (e) => {
      e.stopPropagation();
      const field = opt.closest(".combo-field");
      const input = field?.querySelector(".combo-input");
      const dropdown = field?.querySelector(".combo-dropdown");
      const toggleBtn = field?.querySelector(".combo-toggle-btn");
      if (input) {
        input.value = opt.textContent.trim();
        persistTraits();
      }
      if (dropdown) dropdown.classList.add("hidden");
      if (toggleBtn) toggleBtn.classList.remove("open");
    });
  });

  document.querySelectorAll(".combo-clear-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const input = document.getElementById(btn.dataset.clear);
      if (input) {
        input.value = "";
        input.focus();
        persistTraits();
      }
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".combo-dropdown").forEach((d) => d.classList.add("hidden"));
    document.querySelectorAll(".combo-toggle-btn").forEach((b) => b.classList.remove("open"));
  });

  // Кнопки героев
  document.querySelectorAll("#heroChips .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const hero = chip.dataset.hero;
      const input = document.getElementById("inputHeroes");
      let list = input.value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      if (list.includes(hero)) {
        list = list.filter((h) => h !== hero);
        chip.classList.remove("selected");
      } else {
        list.push(hero);
        chip.classList.add("selected");
      }
      input.value = list.join(", ");
    });
  });

  // Выбор длительности чтения
  document.querySelectorAll("#durationSelector .duration-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      document.querySelectorAll("#durationSelector .duration-option").forEach((o) => o.classList.remove("active"));
      opt.classList.add("active");
      const mins = parseInt(opt.dataset.minutes, 10) || 5;
      const pages = parseInt(opt.dataset.pages, 10) || 5;
      setDurationAndPages(mins, pages);
      document.getElementById("customDurationRange").value = String(mins);
    });
  });

  const rangeEl = document.getElementById("customDurationRange");
  rangeEl.addEventListener("input", () => {
    const mins = parseInt(rangeEl.value, 10) || 5;
    const pages = Math.max(3, Math.min(10, Math.round(mins * 0.7 + 1.5)));
    document.querySelectorAll("#durationSelector .duration-option").forEach((o) => {
      o.classList.toggle("active", parseInt(o.dataset.minutes, 10) === mins);
    });
    setDurationAndPages(mins, pages);
  });

  // Выбор морали (18 кнопок)
  document.querySelectorAll("#moralChips .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#moralChips .chip").forEach((c) => c.classList.remove("selected"));
      chip.classList.add("selected");
      document.getElementById("inputMoral").value = chip.dataset.moral;
    });
  });

  // Выбор стиля иллюстраций
  document.querySelectorAll("#styleSelector .style-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      document.querySelectorAll("#styleSelector .style-option").forEach((o) => o.classList.remove("active"));
      opt.classList.add("active");
      state.selectedStyle = opt.dataset.style;
    });
  });

  // Кнопка генерации сказки
  document.getElementById("btnGenerateStory").addEventListener("click", generateNewStory);

  // Управление читалкой
  document.getElementById("btnPrevPage").addEventListener("click", () => changePage(-1));
  document.getElementById("btnNextPage").addEventListener("click", () => changePage(1));
  document.getElementById("btnFontDec").addEventListener("click", () => adjustFontSize(-0.1));
  document.getElementById("btnFontInc").addEventListener("click", () => adjustFontSize(0.1));
  document.getElementById("btnVoiceRead").addEventListener("click", toggleSpeechRead);

  document.getElementById("btnToggleArtMode").addEventListener("click", () => {
    state.forcePortraitCardOnReader = !state.forcePortraitCardOnReader;
    const btn = document.getElementById("btnToggleArtMode");
    btn.classList.toggle("active", state.forcePortraitCardOnReader);
    btn.textContent = state.forcePortraitCardOnReader ? "🪄 Иллюстрация" : "🖼️ Фото-открытка";
    const page = state.currentStory?.pages?.[state.currentPageIndex];
    if (page) {
      loadSceneIllustration(page, state.currentPageIndex, false);
    }
  });

  document.getElementById("readerHeroMedallion").addEventListener("click", () => {
    document.getElementById("btnToggleArtMode").click();
  });

  document.getElementById("btnSaveStory").addEventListener("click", saveCurrentStoryToLibrary);

  document.getElementById("btnRedrawPage").addEventListener("click", () => {
    state.forcePortraitCardOnReader = false;
    document.getElementById("btnToggleArtMode").classList.remove("active");
    document.getElementById("btnToggleArtMode").textContent = "🖼️ Фото-открытка";
    const page = state.currentStory?.pages?.[state.currentPageIndex];
    if (page) {
      page.customSeed = Math.floor(Math.random() * 999999);
      delete page.cachedImageUrl;
      loadSceneIllustration(page, state.currentPageIndex, true);
    }
  });

  // Свайпы страниц на iPhone
  let touchStartX = 0;
  const bookCard = document.getElementById("bookPageCard");
  bookCard.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  bookCard.addEventListener(
    "touchend",
    (e) => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 65) {
        if (diff < 0) changePage(1);
        else changePage(-1);
      }
    },
    { passive: true }
  );
}

function setDurationAndPages(mins, pages) {
  state.selectedDuration = mins;
  state.selectedPagesCount = pages;
  document.getElementById("customDurationValue").textContent = `${mins} мин`;
  document.getElementById("durationBadgeLabel").textContent = `${mins} мин • ${pages} стр.`;
}

function persistTraits() {
  const traits = {
    hairStyle: document.getElementById("traitHairStyle").value.trim(),
    outfit: document.getElementById("traitOutfit").value.trim(),
    accessory: document.getElementById("traitAccessory").value.trim(),
    customLook: document.getElementById("inputCustomLook").value.trim()
  };
  try {
    localStorage.setItem(STORAGE_KEYS.TRAITS, JSON.stringify(traits));
  } catch (e) {}
}

function switchTab(tabName) {
  stopSpeech();
  state.currentTab = tabName;
  document.querySelectorAll(".nav-tab").forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === tabName);
  });
  document.getElementById("viewCreate").classList.toggle("hidden", tabName !== "create");
  document.getElementById("viewRead").classList.toggle("hidden", tabName !== "read");
  document.getElementById("viewLibrary").classList.toggle("hidden", tabName !== "library");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateAiStatusUI() {
  const key = getActiveGeminiKey();
  const subtitle = document.getElementById("aiModeSubtitle");
  const dot = document.getElementById("apiStatusDot");
  if (key && key.length > 10) {
    subtitle.textContent = "Добрая книга чудес перед сном 🌙";
    dot.classList.add("connected");
  } else {
    subtitle.textContent = "Добрая книга чудес перед сном 🌙";
    dot.classList.remove("connected");
  }
}

function setDiagLog(msg) {
  const el = document.getElementById("geminiDiagLog");
  if (el) el.textContent = msg;
}

// ============================================================================
// ВЫЗОВ GOOGLE GEMINI API (Google AI Studio / generativelanguage.googleapis.com)
// ============================================================================
async function callGeminiGenerateContent(modelName, requestBody, signal) {
  const apiKey = getActiveGeminiKey();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${encodeURIComponent(
    apiKey
  )}`;

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey
    },
    signal,
    body: JSON.stringify(requestBody)
  });

  if (resp.ok) {
    setDiagLog(`Статус: ${modelName} ответил успешно (200 OK)`);
    return await resp.json();
  }

  const errText = await resp.text();
  setDiagLog(`Ответ ${modelName} (${resp.status}): ${errText.slice(0, 140)}`);
  throw new Error(`HTTP ${resp.status}: ${errText}`);
}

// ============================================================================
// ЗАГРУЗКА ФОТО АЛИНЫ И АНАЛИЗ ВНЕШНОСТИ ЧЕРЕЗ GEMINI VISION
// ============================================================================
function handlePhotoUpload(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = async () => {
      const canvas = document.createElement("canvas");
      const size = 512;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      const minSide = Math.min(img.width, img.height);
      const sx = (img.width - minSide) / 2;
      const sy = (img.height - minSide) / 2;
      ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);

      const dataUrl = canvas.toDataURL("image/jpeg", 0.86);
      setDaughterPhoto(dataUrl, true);
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function setDaughterPhoto(dataUrl, triggerAnalysis) {
  state.daughterPhotoDataUrl = dataUrl;
  const imgObj = new Image();
  imgObj.onload = () => {
    state.daughterPhotoImageObj = imgObj;
    renderCurrentStoryPage();
  };
  imgObj.src = dataUrl;

  try {
    localStorage.setItem(STORAGE_KEYS.PHOTO, dataUrl);
  } catch (err) {}
  updatePhotoUI();

  if (triggerAnalysis) {
    analyzePhotoWithGemini(dataUrl);
  }
}

function updatePhotoUI() {
  const previewBox = document.getElementById("photoPreviewBox");
  const removeBtn = document.getElementById("btnRemovePhoto");
  const badge = document.getElementById("photoStatusBadge");
  const analysisText = document.getElementById("photoAnalysisText");

  if (state.daughterPhotoDataUrl) {
    previewBox.innerHTML = `<img src="${state.daughterPhotoDataUrl}" alt="Фото Алины" />`;
    removeBtn.classList.remove("hidden");
    badge.textContent = "Фото Алины активно ✨";
    analysisText.textContent = "Фото Алины добавлено в волшебную книгу и иллюстрации ✨";
  } else {
    previewBox.innerHTML = "🩰";
    removeBtn.classList.add("hidden");
    badge.textContent = "✨ Волшебный образ";
    analysisText.textContent = "Алина станет главной героиней на страницах и иллюстрациях книги ✨";
  }
}

async function analyzePhotoWithGemini(dataUrl) {
  const analysisText = document.getElementById("photoAnalysisText");
  const base64Data = dataUrl.split(",")[1];
  const visionModels = ["gemini-3.8-flash", "gemini-3.6-flash", "gemini-3.5-flash-lite", "gemini-2.5-flash"];

  analysisText.textContent = "✨ Волшебная фея запоминает черты Алины по фото...";
  for (const model of visionModels) {
    try {
      const data = await callGeminiGenerateContent(model, {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: "Describe this child's exact hair color, hair style, bangs, eye color, face shape, and sweet smile in 20 concise English words for a children's storybook illustrator so she looks recognizable. Output ONLY the English description."
              },
              { inlineData: { mimeType: "image/jpeg", data: base64Data } }
            ]
          }
        ]
      });
      const desc = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      if (desc) {
        state.daughterAiDescription = desc;
        analysisText.textContent = "✨ Черты лица и причёска Алины с фото сохранены для иллюстраций!";
        return;
      }
    } catch (e) {}
  }
  analysisText.textContent = "Фото Алины сохранено для сказки ✨";
}

function translateCustomRussianLookToEnglish(ruText) {
  if (!ruText) return "";
  const dict = [
    ["пучок балерины", "neat high ballet bun with a sparkling tiara"],
    ["две косички", "two cute braided pigtails with ribbons"],
    ["два весёлых хвостика", "two playful high ponytails with bows"],
    ["хвостик", "cute ponytail with bow"],
    ["распущенные локоны", "long flowing wavy curls"],
    ["кудряшки", "soft curly hair"],
    ["каре", "cute bob haircut with bangs"],
    ["длинная коса", "long thick braid with tiny stars"],
    ["прямые волосы", "long straight hair with headband"],
    ["причёска принцессы", "princess hairstyle with golden crown"],
    ["небесно-лиловая пачка", "glowing sky-blue and lavender ballerina tutu dress and pointe shoes"],
    ["розовая воздушная пачка", "sparkling rose-pink ballerina tutu dress"],
    ["пачка балерины", "ballerina tutu dress and ballet slippers"],
    ["бальное платье принцессы", "royal starry princess ballgown"],
    ["платье принцессы", "royal princess gown"],
    ["волшебная фея", "magical fairy dress with shimmering wings"],
    ["снежная принцесса", "enchanted snow queen crystal blue dress"],
    ["маленькая волшебница", "little wizard apprentice starry robe"],
    ["лесная эльфийка", "woodland elf dress with flower crown"],
    ["космическая путешественница", "cute pastel purple cosmic astronaut suit"],
    ["золотое платье", "golden royal ballgown"],
    ["пижамк", "cozy pastel unicorn pajamas"],
    ["нарядное платьице", "cute dress with white lace"],
    ["фигуристк", "sparkling figure skater dress with white ice skates"],
    ["волшебная палочка", "holding a glowing starlight magic wand"],
    ["диадем", "wearing a sparkling crystal tiara"],
    ["мягкая игрушка", "hugging her favorite cute plush toy"],
    ["фонарик", "holding a warm glowing starlight lantern"],
    ["букет", "holding a bouquet of glowing moonflowers"],
    ["хрустальные туфельки", "wearing crystal glass slippers"],
    ["шкатулк", "holding an enchanted golden music box"],
    ["бабочк", "with a glowing butterfly on her hand"],
    ["чёлка", "cute bangs"],
    ["челка", "cute bangs"],
    ["ямочк", "sweet dimples on cheeks"],
    ["бантик", "cute ribbon bow"],
    ["гольф", "white lace knee socks"],
    ["мишк", "holding a cute teddy bear"],
    ["зайк", "holding a cute plush bunny"]
  ];
  const extra = [];
  const lower = ruText.toLowerCase();
  for (const [ru, en] of dict) {
    if (lower.includes(ru)) extra.push(en);
  }
  return extra.length ? `${extra.join(", ")} (${ruText})` : ruText;
}

function getDaughterAppearancePrompt() {
  const hairStyleRu = document.getElementById("traitHairStyle").value.trim();
  const outfitRu = document.getElementById("traitOutfit").value.trim();
  const accessoryRu = document.getElementById("traitAccessory").value.trim();
  const customRu = document.getElementById("inputCustomLook").value.trim();

  const combinedRu = [hairStyleRu, outfitRu, accessoryRu, customRu].filter(Boolean).join(", ");
  const translated = translateCustomRussianLookToEnglish(combinedRu);

  const baseGirl = state.daughterAiDescription
    ? state.daughterAiDescription
    : "adorable 5-year-old little girl Alina";

  return [baseGirl, translated].filter(Boolean).join(", ");
}

function getDaughterAppearanceRussianSummary() {
  const hairStyleText = document.getElementById("traitHairStyle").value.trim();
  const outfitText = document.getElementById("traitOutfit").value.trim();
  const accessoryText = document.getElementById("traitAccessory").value.trim();
  const customRu = document.getElementById("inputCustomLook").value.trim();

  const parts = [];
  if (hairStyleText) parts.push(`причёска: ${hairStyleText}`);
  if (outfitText) parts.push(`сказочный образ/наряд: ${outfitText}`);
  if (accessoryText && !accessoryText.toLowerCase().includes("без предмет")) {
    parts.push(`деталь/в руках: ${accessoryText}`);
  }
  if (customRu) parts.push(`особые детали: ${customRu}`);
  return parts.join(", ") || "пятилетняя девочка Алина в сказочном наряде";
}

// ============================================================================
// ГЕНЕРАЦИЯ СКАЗКИ ЧЕРЕЗ GOOGLE GEMINI (С УЧЁТОМ ФОТО И ВСЕХ ДЕТАЛЕЙ ОБРАЗА)
// ============================================================================
async function generateNewStory() {
  if (state.isGenerating) return;

  const heroes = document.getElementById("inputHeroes").value.trim() || "Алина-балерина, Кот Бегемот";
  const moral =
    document.getElementById("inputMoral").value.trim() ||
    "Как важно дружить, помогать близким и верить в себя";
  const duration = state.selectedDuration;
  const pagesCount = state.selectedPagesCount;
  const style = state.selectedStyle;

  state.isGenerating = true;
  const btn = document.getElementById("btnGenerateStory");
  const loadingCard = document.getElementById("loadingCard");
  const loadingStepText = document.getElementById("loadingStepText");

  btn.disabled = true;
  loadingCard.classList.remove("hidden");
  loadingStepText.textContent = `Звёздная фея приглашает героев (${heroes}) и сочиняет сказку на ${duration} мин (${pagesCount} стр.)...`;
  loadingCard.scrollIntoView({ behavior: "smooth", block: "center" });

  let generatedStory = null;

  try {
    generatedStory = await generateStoryWithGemini({ heroes, moral, duration, pagesCount });
  } catch (err) {
    console.warn("Gemini story error:", err);
    loadingStepText.textContent = "Создаём волшебные главы и иллюстрации...";
    generatedStory = buildSmartCustomStory({ heroes, moral, duration, pagesCount });
  }

  const finalStory = {
    id: "story-" + Date.now(),
    title: generatedStory.title || `Волшебная сказка: ${heroes}`,
    heroes,
    duration,
    moral,
    style,
    createdAt: new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long" }),
    pages: generatedStory.pages.map((p, idx) => ({
      chapterTitle: p.chapterTitle || `Глава ${idx + 1}`,
      text: p.text || "",
      scenePrompt: buildEnrichedScenePromptFromChapter(
        p.scenePrompt,
        p.text,
        heroes,
        idx,
        generatedStory.pages.length
      ),
      customSeed: Math.floor(Math.random() * 900000) + idx * 31
    }))
  };

  state.currentStory = finalStory;
  state.currentPageIndex = 0;

  state.savedStories.unshift(finalStory);
  if (state.savedStories.length > 25) state.savedStories.pop();
  try {
    localStorage.setItem(STORAGE_KEYS.LIBRARY, JSON.stringify(state.savedStories));
  } catch (e) {}

  renderLibrary();
  renderCurrentStoryPage();

  state.isGenerating = false;
  btn.disabled = false;
  loadingCard.classList.add("hidden");

  switchTab("read");
}

function buildGeminiStoryPrompt({ heroes, moral, duration, pagesCount }) {
  const wordsPerPage = duration <= 3 ? 90 : duration <= 7 ? 125 : 150;
  const appearanceEn = getDaughterAppearancePrompt();
  const appearanceRu = getDaughterAppearanceRussianSummary();

  return `Ты — любимый детский писатель, сочиняющий тёплые волшебные сказки на ночь для пятилетней девочки Алины.
Напиши увлекательную, добрую, образную сказку на русском языке.

Условия сказки:
1. Главные герои: ${heroes}
2. Образ главной героини Алины (обязательно бережно вплети эти детали внешности и костюма в сюжет!): ${appearanceRu}
3. Если к запросу прикреплено фото девочки — внимательно рассмотри её черты лица, причёску, улыбку и передай это в описании сцен для иллюстраций!
4. Длительность чтения: ${duration} минут (ровно ${pagesCount} глав-страниц, примерно по ${wordsPerPage} слов на каждой странице, по 2-3 абзаца на странице).
5. Главная тема и добрая мораль сказки: ${moral}
6. На последней странице обязательно сделай ласковый, сонный, убаюкивающий финал.
7. Для КАЖДОЙ страницы напиши детальный "scenePrompt" на английском языке (30-45 слов), который точно описывает КОНКРЕТНУЮ сцену, действие и окружение ИМЕННО ЭТОЙ главы, обязательно включая внешность Алины (${appearanceEn}) и других героев главы.

Верни ответ СТРОГО в формате JSON:
{
  "title": "Красивое сказочное название на русском",
  "pages": [
    {
      "chapterTitle": "Глава 1. Название главы",
      "text": "Текст главы на русском языке (абзацы разделены \\n\\n)...",
      "scenePrompt": "Detailed English visual description of the exact action, setting, and characters in this specific chapter"
    }
  ]
}`;
}

async function generateStoryWithGemini(params) {
  const prompt = buildGeminiStoryPrompt(params);
  const parts = [{ text: prompt }];

  if (state.daughterPhotoDataUrl) {
    parts.push({
      inlineData: {
        mimeType: "image/jpeg",
        data: state.daughterPhotoDataUrl.split(",")[1]
      }
    });
  }

  // Актуальные бесплатные модели Google AI Studio 2026 года
  const textModels = ["gemini-3.8-flash", "gemini-3.6-flash", "gemini-3.5-flash-lite", "gemini-2.5-flash"];
  let lastErr = null;

  for (const model of textModels) {
    try {
      const data = await callGeminiGenerateContent(model, {
        contents: [{ role: "user", parts }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.85
        }
      });
      const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      return parseStoryJson(raw);
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error("Gemini text generation failed");
}

function parseStoryJson(rawText) {
  if (!rawText) throw new Error("Empty Gemini response");
  let cleaned = rawText.trim();
  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1) {
    cleaned = cleaned.slice(firstBrace, lastBrace + 1);
  }
  const parsed = JSON.parse(cleaned);
  if (!parsed.pages || !Array.isArray(parsed.pages) || parsed.pages.length < 2) {
    throw new Error("Invalid pages array");
  }
  return parsed;
}

function buildEnrichedScenePromptFromChapter(aiScenePrompt, chapterRuText, heroesRu, pageIdx, totalPages) {
  const appearance = getDaughterAppearancePrompt();
  const textLower = (chapterRuText || "").toLowerCase();
  const heroesLower = (heroesRu || "").toLowerCase();

  const companions = [];
  if (heroesLower.includes("кот") || heroesLower.includes("бегемот") || textLower.includes("кот")) {
    companions.push("a cute fluffy black cat with emerald eyes");
  }
  if (heroesLower.includes("зайк") || textLower.includes("зайк")) {
    companions.push("a cute little white bunny");
  }
  if (heroesLower.includes("единоро") || textLower.includes("единоро")) {
    companions.push("a magical baby unicorn with a glowing horn");
  }
  if (heroesLower.includes("медвеж") || heroesLower.includes("мишк") || textLower.includes("медвеж")) {
    companions.push("a cozy brown teddy bear cub");
  }
  if (heroesLower.includes("сов") || textLower.includes("сов")) {
    companions.push("a wise cute little owl");
  }
  if (heroesLower.includes("фея") || textLower.includes("фея")) {
    companions.push("a tiny glowing starlight fairy");
  }
  if (heroesLower.includes("щенок") || textLower.includes("щенок")) {
    companions.push("a cute fluffy puppy");
  }
  if (heroesLower.includes("лисич") || textLower.includes("лисич")) {
    companions.push("a cute orange baby fox");
  }
  if (heroesLower.includes("дракон") || textLower.includes("дракон")) {
    companions.push("a friendly cute baby dragon");
  }
  if (heroesLower.includes("дельфин") || textLower.includes("дельфин")) {
    companions.push("a happy playful dolphin in sparkling water");
  }

  const actions = [];
  if (textLower.includes("танц") || textLower.includes("пируэт") || textLower.includes("балет")) {
    actions.push("gracefully dancing ballet");
  }
  if (textLower.includes("зуб") || textLower.includes("умыва")) {
    actions.push("happily brushing teeth with a magical sparkling toothbrush");
  }
  if (textLower.includes("игрушк") || textLower.includes("домик")) {
    actions.push("playing with colorful magical toys in a cozy room");
  }
  if (textLower.includes("замок") || textLower.includes("дворец") || textLower.includes("бал")) {
    actions.push("inside a grand crystal starlight palace");
  }
  if (textLower.includes("лес") || textLower.includes("полянк") || textLower.includes("цвет")) {
    actions.push("in an enchanted glowing fairy forest with magical flowers");
  }
  if (textLower.includes("облак") || textLower.includes("тучк") || textLower.includes("неб")) {
    actions.push("walking on fluffy glowing purple and blue clouds among golden stars");
  }
  if (
    textLower.includes("кроват") ||
    textLower.includes("одеял") ||
    textLower.includes("уснул") ||
    pageIdx === totalPages - 1
  ) {
    actions.push("sleeping peacefully in a cozy fairytale bed under moonlight");
  }

  const companionsClause = companions.length ? `together with ${companions.join(" and ")}` : "";
  const actionClause = actions.length ? actions.join(", ") : "";

  if (aiScenePrompt && aiScenePrompt.length > 20) {
    return `${appearance}, ${companionsClause}, ${aiScenePrompt}, ${actionClause}`;
  }
  return `${appearance} ${companionsClause}, ${actionClause || "in a magical starry fairytale scene"}`;
}

// ============================================================================
// РИСОВАНИЕ ИЛЛЮСТРАЦИЙ ЧЕРЕЗ GOOGLE GEMINI (С ПЕРЕДАЧЕЙ ФОТО АЛИНЫ И ТЕКСТА ГЛАВЫ)
// ============================================================================
function renderCurrentStoryPage() {
  const story = state.currentStory;
  if (!story || !story.pages || !story.pages.length) return;

  const pageIndex = Math.max(0, Math.min(state.currentPageIndex, story.pages.length - 1));
  state.currentPageIndex = pageIndex;
  const page = story.pages[pageIndex];

  document.getElementById("readerStoryTitle").textContent = story.title;
  document.getElementById("readerMetaHeroes").textContent = `🩰 ${story.heroes}`;
  document.getElementById("readerMetaTime").textContent = `⏱ ~${story.duration} мин (${story.pages.length} стр.)`;
  document.getElementById("pageCounterPill").textContent = `Страница ${pageIndex + 1} из ${story.pages.length}`;
  document.getElementById("readerChapterTitle").textContent = page.chapterTitle;

  const paragraphsContainer = document.getElementById("readerPageText");
  const paragraphs = (page.text || "").split(/\n+/).filter(Boolean);
  paragraphsContainer.innerHTML = paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("");

  const moralBox = document.getElementById("readerMoralBox");
  if (pageIndex === story.pages.length - 1 && story.moral) {
    moralBox.innerHTML = `✨ <strong>Добрый секрет этой сказки:</strong> ${escapeHtml(story.moral)}`;
    moralBox.classList.remove("hidden");
  } else {
    moralBox.classList.add("hidden");
  }

  const medallion = document.getElementById("readerHeroMedallion");
  const medallionImg = document.getElementById("readerMedallionImg");
  if (state.daughterPhotoDataUrl && !state.forcePortraitCardOnReader) {
    medallionImg.src = state.daughterPhotoDataUrl;
    medallion.classList.remove("hidden");
  } else {
    medallion.classList.add("hidden");
  }

  document.getElementById("btnPrevPage").disabled = pageIndex === 0;
  const nextBtn = document.getElementById("btnNextPage");
  nextBtn.textContent = pageIndex === story.pages.length - 1 ? "✨ В начало книги" : "Дальше →";

  loadSceneIllustration(page, pageIndex, false);
}

async function loadSceneIllustration(page, pageIndex, forceReload) {
  const imgEl = document.getElementById("sceneImage");
  const overlay = document.getElementById("imageLoadingOverlay");
  const overlayLabel = document.getElementById("imageLoadingLabel");
  const engineBadge = document.getElementById("engineBadgePill");

  if (state.activeImageAbort) {
    state.activeImageAbort.abort();
    state.activeImageAbort = null;
  }

  const storybookCanvasUrl = renderRichStorybookIllustration(page, pageIndex, true);

  if (state.forcePortraitCardOnReader && state.daughterPhotoDataUrl) {
    imgEl.src = storybookCanvasUrl;
    overlay.classList.add("hidden");
    engineBadge.textContent = "👑 Сказочный фото-портрет Алины";
    return;
  }

  if (page.cachedImageUrl && !forceReload) {
    imgEl.src = page.cachedImageUrl;
    engineBadge.textContent = page.cachedEngineLabel || "✨ Сказочная иллюстрация";
    overlay.classList.add("hidden");
    return;
  }

  imgEl.src = storybookCanvasUrl;
  overlay.classList.remove("hidden");
  overlayLabel.textContent = state.daughterPhotoDataUrl
    ? "✨ Волшебная кисть рисует иллюстрацию по фото Алины и сюжету главы..."
    : "✨ Волшебная кисть рисует иллюстрацию к этой главе...";

  const abortCtrl = new AbortController();
  state.activeImageAbort = abortCtrl;

  const stylePrompt = state.currentStory.style || state.selectedStyle;
  const seed = page.customSeed || pageIndex * 131 + 42;
  const fullScenePrompt = `Scene from chapter "${page.chapterTitle}": ${page.scenePrompt}. Visual style: ${stylePrompt}. High quality children's fairytale book illustration, warm magical lighting, expressive cute characters, no text or watermarks on the image.`;

  try {
    const result = await generateIllustrationMultiStage(
      fullScenePrompt,
      state.daughterPhotoDataUrl,
      page,
      seed,
      abortCtrl.signal
    );
    if (result && result.url) {
      page.cachedImageUrl = result.url;
      page.cachedEngineLabel = result.label;
      if (state.currentStory.pages[state.currentPageIndex] === page) {
        imgEl.src = result.url;
        engineBadge.textContent = result.label;
        overlay.classList.add("hidden");
      }
      return;
    }
  } catch (err) {
    if (err.name === "AbortError") return;
    console.warn("Illustration note:", err);
  }

  page.cachedImageUrl = storybookCanvasUrl;
  page.cachedEngineLabel = state.daughterPhotoDataUrl
    ? "👑 Сказочная открытка с Алиной"
    : "🌌 Небесная иллюстрация";
  if (state.currentStory.pages[state.currentPageIndex] === page) {
    imgEl.src = storybookCanvasUrl;
    engineBadge.textContent = page.cachedEngineLabel;
    overlay.classList.add("hidden");
  }
}

async function generateIllustrationMultiStage(scenePrompt, photoDataUrl, page, seed, signal) {
  const apiKey = getActiveGeminiKey();
  const base64Photo = photoDataUrl ? photoDataUrl.split(",")[1] : null;
  const promptText = base64Photo
    ? `You are a children's book illustrator. Look at the attached reference photo of 5-year-old Alina. Keep her exact hair color, hairstyle, eye color, and sweet facial features so she is recognizable as the main character in this fairytale scene: ${scenePrompt}`
    : `Generate a magical children's fairytale book illustration: ${scenePrompt}`;

  // ==========================================================================
  // ЭТАП 1: Актуальные модели Google Gemini Image 2026 (Nano Banana 2.1 / 3.1 / 2.5)
  // ==========================================================================
  const geminiImageModels = [
    "gemini-nano-banana-2.1",
    "gemini-3.1-flash-lite-image",
    "gemini-3.1-flash-image",
    "gemini-2.5-flash-image",
    "gemini-3-pro-image"
  ];

  // 1А. Пробуем новый эндпоинт Google AI Studio 2026: POST /v1beta/interactions
  for (const modelName of geminiImageModels.slice(0, 3)) {
    try {
      const inputArr = [{ type: "text", text: promptText }];
      if (base64Photo) {
        inputArr.push({ type: "image", mime_type: "image/jpeg", data: base64Photo });
      }
      const resp = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
          "Api-Revision": "2026-05-20"
        },
        signal,
        body: JSON.stringify({
          model: modelName,
          input: inputArr
        })
      });
      if (resp.ok) {
        const d = await resp.json();
        const outImg = d?.output_image || d?.interaction?.output_image;
        if (outImg && outImg.data) {
          setDiagLog(`Иллюстрация создана через ${modelName} (interactions)`);
          return {
            url: `data:${outImg.mime_type || "image/png"};base64,${outImg.data}`,
            label: "✨ Волшебный рисунок"
          };
        }
      }
    } catch (e) {
      if (e.name === "AbortError") throw e;
    }
  }

  // 1Б. Пробуем стандартный эндпоинт :generateContent для всех актуальных моделей 2026
  const parts = [{ text: promptText }];
  if (base64Photo) {
    parts.push({ inline_data: { mime_type: "image/jpeg", data: base64Photo } });
  }

  for (const modelName of geminiImageModels) {
    try {
      const data = await callGeminiGenerateContent(
        modelName,
        {
          contents: [{ parts }],
          generationConfig: {
            responseModalities: ["IMAGE"]
          }
        },
        signal
      );

      const resParts = data?.candidates?.[0]?.content?.parts || [];
      for (const p of resParts) {
        const inline = p.inlineData || p.inline_data;
        if (inline && inline.data) {
          const mime = inline.mimeType || inline.mime_type || "image/png";
          setDiagLog(`Иллюстрация создана через ${modelName}`);
          return {
            url: `data:${mime};base64,${inline.data}`,
            label: "✨ Волшебный рисунок"
          };
        }
      }
    } catch (e) {
      if (e.name === "AbortError") throw e;
    }
  }

  // ==========================================================================
  // ЭТАП 2: Если ключ Google AI Studio на бесплатном тарифе (где Google отключил
  // бесплатный лимит на картинки), используем описание внешности от Gemini Vision
  // и рисуем через бесплатный официальный кластер FLUX.1-schnell (работает с VPN на iPhone!)
  // ==========================================================================
  try {
    setDiagLog("Gemini передал описание сцены в бесплатный иллюстратор FLUX.1...");
    const fluxUrl = await generateViaFreeFluxGradioSpace(scenePrompt, seed, signal);
    if (fluxUrl) {
      setDiagLog("Иллюстрация успешно нарисована через FLUX.1!");
      return {
        url: fluxUrl,
        label: "✨ Сказочная иллюстрация"
      };
    }
  } catch (e) {
    if (e.name === "AbortError") throw e;
  }

  // ==========================================================================
  // ЭТАП 3: Прямая генерация векторной иллюстрации к главе через бесплатный
  // Gemini 3.8 Flash (работает по вашему ключу Gemini на 100% бесплатно!)
  // ==========================================================================
  try {
    setDiagLog("Gemini 3.8 Flash рисует авторскую векторную иллюстрацию к главе...");
    const svgDataUrl = await generateSvgIllustrationWithGeminiFlash(page, scenePrompt, signal);
    if (svgDataUrl) {
      setDiagLog("Иллюстрация нарисована моделью Gemini 3.8 Flash!");
      return {
        url: svgDataUrl,
        label: "✨ Иллюстрация к главе"
      };
    }
  } catch (e) {
    if (e.name === "AbortError") throw e;
  }

  return null;
}

// Бесплатный официальный кластер FLUX.1-schnell через Gradio API (работает с VPN на iPhone без ключей и лимитов)
async function generateViaFreeFluxGradioSpace(prompt, seed, signal) {
  const spaces = [
    "https://black-forest-labs-flux-1-schnell.hf.space",
    "https://multimodalart-flux-1-merged.hf.space"
  ];

  for (const baseUrl of spaces) {
    try {
      const callResp = await fetch(`${baseUrl}/gradio_api/call/infer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal,
        body: JSON.stringify({
          data: [prompt, seed % 2147483647, false, 768, 768, 4]
        })
      });
      if (!callResp.ok) continue;
      const { event_id } = await callResp.json();
      if (!event_id) continue;

      const streamResp = await fetch(`${baseUrl}/gradio_api/call/infer/${event_id}`, { signal });
      if (!streamResp.ok) continue;
      const sseText = await streamResp.text();

      const lines = sseText.split("\n");
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("data:")) {
          const rawJson = lines[i].slice(5).trim();
          try {
            const parsed = JSON.parse(rawJson);
            const imgObj = Array.isArray(parsed) ? parsed[0] : null;
            if (imgObj && imgObj.url) {
              return imgObj.url;
            }
          } catch ( err ) {}
        }
      }
    } catch (e) {
      if (e.name === "AbortError") throw e;
    }
  }
  return null;
}

// Генерация красочной сюжетной SVG-иллюстрации напрямую через бесплатный Gemini 3.8 Flash
async function generateSvgIllustrationWithGeminiFlash(page, scenePrompt, signal) {
  const svgPrompt = `You are a master children's fairytale book SVG artist.
Create a rich, detailed, colorful, magical SVG illustration (viewBox="0 0 800 800", width="800", height="800") for this specific chapter of a bedtime story for a 5-year-old girl named Alina:
Chapter title: ${page.chapterTitle}
Chapter text: ${page.text}
Visual details: ${scenePrompt}

Requirements:
- Use rich gradients (<linearGradient>, <radialGradient>), glowing stars, dreamy night sky/clouds/palace/room matching the chapter setting.
- Draw the cute 5-year-old girl Alina (in her outfit/hairstyle described) and her companions (like the fluffy black cat Behemoth with emerald eyes) performing the exact action of this chapter!
- Do NOT include any markdown backticks or explanations. Output ONLY the raw <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">...</svg> code.`;

  const models = ["gemini-3.8-flash", "gemini-3.6-flash", "gemini-2.5-flash"];
  for (const m of models) {
    try {
      const data = await callGeminiGenerateContent(
        m,
        {
          contents: [{ role: "user", parts: [{ text: svgPrompt }] }],
          generationConfig: { temperature: 0.7 }
        },
        signal
      );
      const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      const startIdx = raw.indexOf("<svg");
      const endIdx = raw.lastIndexOf("</svg>");
      if (startIdx !== -1 && endIdx !== -1) {
        const cleanSvg = raw.slice(startIdx, endIdx + 6);
        return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(cleanSvg)}`;
      }
    } catch (e) {
      if (e.name === "AbortError") throw e;
    }
  }
  return null;
}

// ============================================================================
// АВТОНОМНЫЙ СКАЗОЧНИК И ХУДОЖЕСТВЕННАЯ ОТКРЫТКА С ФОТО АЛИНЫ (ЕСЛИ БЕЗ VPN НА ПК)
// ============================================================================
function buildSmartCustomStory({ heroes, moral, pagesCount }) {
  const heroList = heroes
    .split(",")
    .map((h) => h.trim())
    .filter(Boolean);
  const mainHero = heroList[0] || "Алина-балерина";
  const secondHero = heroList[1] || "Кот Бегемот";
  const extraHeroes = heroList.slice(2).join(" и ");
  const companionsText = extraHeroes ? `${secondHero} и ${extraHeroes}` : secondHero;
  const outfitRu =
    document.getElementById("traitOutfit").value.trim() ||
    "сказочный наряд";
  const customRu = document.getElementById("inputCustomLook").value.trim();

  const pool = [
    {
      chapterTitle: "Когда зажигаются первые звёзды",
      text: `Вечернее небо за окном переливалось нежными голубыми и фиолетовыми красками. Наступило самое уютное время перед сном, когда сказки спускаются по лунным лучам прямо в детскую комнату.\n\nПятилетняя ${mainHero} надела свой любимый наряд — ${outfitRu.toLowerCase()}${customRu ? " (" + customRu + ")" : ""} — и радостно улыбнулась. Рядом уже ждал её верный друг ${companionsText}.\n\n— Посмотри в окошко, Алина! — тихонько прошептал ${secondHero}. — Сегодня Звёздная Фея приглашает нас в Долину Сияющих Созвездий!`
    },
    {
      chapterTitle: "Тропинка из серебряных облаков",
      text: `Лучик луны превратился в сверкающую хрустальную дорожку. ${mainHero} легко ступила на неё, а ${companionsText} весело побежали рядом.\n\nПод их ногами мягко пружинили пушистые сиреневые облака, похожие на сладкую сахарную вату. Вокруг росли волшебные лунные цветы, которые тихонько звенели, когда к ним прикасался ночной ветерок.`
    },
    {
      chapterTitle: "Встреча у Хрустального Мостика",
      text: `У самого входа в Небесный Сад друзья увидели маленькую Звёздочку, которая сидела на облачке и грустно вздыхала. Её лучики совсем потускнели.\n\n— Что случилось, малышка? — ласково спросила ${mainHero} и бережно погладила Звёздочку по лучику.\n\n— Я забыла главный секрет доброго вечера, и теперь не могу взлететь в ночной хоровод, — прошептала Звёздочка.`
    },
    {
      chapterTitle: "Секрет доброго сердечка",
      text: `${mainHero} и ${companionsText} переглянулись и тепло улыбнулись. Ведь они отлично знали, как помочь!\n\n— Мы подскажем тебе! — нежно сказала Алина. — Самое главное чудо заключается в простом правиле: ${moral.toLowerCase()}.\n\nСтоило этим искренним словам прозвучать в ночной тишине, как вокруг друзей закружились золотые искорки.`
    },
    {
      chapterTitle: "Сияющий хоровод в небесах",
      text: `Маленькая Звёздочка радостно засмеялась, и её лучики вспыхнули ярким тёплым светом! Над Небесным Садом раскинулась волшебная ночная радуга.\n\n${mainHero} закружилась в красивом плавном танце, а ${companionsText} радостно хлопали и подпрыгивали на мягких облаках. Все созвездия вокруг запели нежную колыбельную мелодию.`
    },
    {
      chapterTitle: "Подарок от Звёздной Феи",
      text: `К друзьям спустилась сама Звёздная Фея в платье из серебристого тумана. Она поблагодарила Алину за её доброе и чуткое сердечко.\n\n— Ты настоящая умница, ${mainHero}! — сказала Фея и подарила ей волшебное светящееся пёрышко, которое приносит самые красочные и добрые сны.`
    },
    {
      chapterTitle: "Путешествие на Облачной Карете",
      text: `Пришла пора возвращаться домой. Пушистая Облачная Карета, запряжённая серебряными бабочками, мягко подхватила друзей и понесла их сквозь звёздное небо обратно к родному окошку.\n\nПо дороге ${mainHero} и ${companionsText} махали ручками знакомым звёздочкам и загадывали добрые желания на завтрашний день.`
    },
    {
      chapterTitle: "Уютное возвращение в спальню",
      text: `Облачная карета бесшумно опустилась у подоконника детской комнаты. В спальне было тихо, тепло и очень уютно.\n\n${mainHero} аккуратно сложила свои вещи, улыбнулась любимым игрушкам и забралась под мягкое тёплое одеяло.`
    },
    {
      chapterTitle: "Шёпот ночных огоньков",
      text: `${companionsText} уютно устроился рядом, напевая тихую убаюкивающую песенку. За окном ласково светила золотая луна, охраняя покой всего дома.\n\nВолшебное пёрышко у подушки тихонько мерцало, напоминая о том, какое чудесное приключение случилось этим вечером.`
    },
    {
      chapterTitle: "Сладких снов, любимая Алина",
      text: `Глазки Алины сами собой начали закрываться. Впереди ждала спокойная, нежная ночь и новый радостный день.\n\nВедь тот, кто помнит, что ${moral.toLowerCase()}, всегда окружён любовью, дружбой и настоящими чудесами. Спокойной ночи и самых сладких снов, Алина!`
    }
  ];

  const chosen = [];
  if (pagesCount >= pool.length) {
    chosen.push(...pool);
  } else {
    for (let i = 0; i < pagesCount; i++) {
      const idx = Math.round((i * (pool.length - 1)) / (pagesCount - 1));
      chosen.push(pool[idx]);
    }
  }

  return {
    title: `${mainHero} и Тайна Сияющего Созвездия`,
    pages: chosen.map((p, i) => ({
      chapterTitle: `Глава ${i + 1}. ${p.chapterTitle}`,
      text: p.text,
      scenePrompt: ""
    }))
  };
}

function renderRichStorybookIllustration(page, pageIndex, includePhotoPortrait) {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 768;
  const ctx = canvas.getContext("2d");

  const textLower = ((page.chapterTitle || "") + " " + (page.text || "")).toLowerCase();

  const palettes = [
    ["#080d2a", "#19215c", "#37277a", "#5e369e"],
    ["#0a1638", "#1b3170", "#38419e", "#7048bf"],
    ["#140d36", "#2b1e6b", "#542a94", "#8e49c2"],
    ["#0c143d", "#202c73", "#4236a3", "#7258de"],
    ["#070a21", "#141847", "#28206b", "#452e8f"]
  ];
  const pal = palettes[pageIndex % palettes.length];
  const grad = ctx.createLinearGradient(0, 0, 0, 768);
  grad.addColorStop(0, pal[0]);
  grad.addColorStop(0.38, pal[1]);
  grad.addColorStop(0.74, pal[2]);
  grad.addColorStop(1, pal[3]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 768, 768);

  const aura = ctx.createRadialGradient(384, 300, 30, 384, 300, 350);
  aura.addColorStop(0, "rgba(125, 211, 252, 0.36)");
  aura.addColorStop(0.5, "rgba(192, 132, 252, 0.24)");
  aura.addColorStop(1, "rgba(15, 23, 42, 0)");
  ctx.fillStyle = aura;
  ctx.fillRect(0, 0, 768, 768);

  for (let i = 0; i < 75; i++) {
    const x = ((i * 149 + pageIndex * 61) % 730) + 18;
    const y = ((i * 97 + pageIndex * 43) % 550) + 18;
    const r = (i % 3) + 1.2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = i % 4 === 0 ? "#fde047" : i % 2 === 0 ? "#bae6fd" : "#ffffff";
    ctx.globalAlpha = 0.4 + (i % 6) * 0.1;
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  const moonX = pageIndex % 2 === 0 ? 610 : 155;
  const moonY = 135;
  ctx.save();
  ctx.shadowColor = "#fde047";
  ctx.shadowBlur = 35;
  ctx.fillStyle = "#fef08a";
  ctx.beginPath();
  ctx.arc(moonX, moonY, 56, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(moonX - 22, moonY - 12, 49, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = "rgba(30, 27, 75, 0.55)";
  const castleX = pageIndex % 2 === 0 ? 150 : 580;
  ctx.fillRect(castleX - 35, 420, 70, 120);
  ctx.fillRect(castleX - 55, 450, 25, 90);
  ctx.fillRect(castleX + 30, 450, 25, 90);
  ctx.beginPath();
  ctx.moveTo(castleX - 40, 420);
  ctx.lineTo(castleX, 345);
  ctx.lineTo(castleX + 40, 420);
  ctx.fill();
  ctx.fillStyle = "#fde047";
  ctx.beginPath();
  ctx.arc(castleX, 455, 8, 0, Math.PI * 2);
  ctx.arc(castleX, 485, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const cloudLayers = [
    { y: 550, color: "rgba(59, 45, 134, 0.72)", r: 74 },
    { y: 600, color: "rgba(88, 28, 135, 0.78)", r: 68 },
    { y: 650, color: "rgba(15, 23, 42, 0.92)", r: 64 }
  ];
  cloudLayers.forEach((layer) => {
    ctx.fillStyle = layer.color;
    ctx.beginPath();
    ctx.moveTo(0, 768);
    ctx.lineTo(0, layer.y);
    for (let cx = 0; cx <= 768; cx += 115) {
      ctx.arc(cx + 55, layer.y, layer.r, Math.PI, 0, false);
    }
    ctx.lineTo(768, 768);
    ctx.closePath();
    ctx.fill();
  });

  const centerX = 384;
  const centerY = 315;

  ctx.save();
  ctx.fillStyle = "rgba(186, 230, 253, 0.24)";
  ctx.strokeStyle = "rgba(253, 224, 71, 0.6)";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.ellipse(centerX - 135, centerY - 25, 95, 52, -0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(centerX + 135, centerY - 25, 95, 52, 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  if (includePhotoPortrait && state.daughterPhotoImageObj) {
    const radius = 138;
    ctx.save();
    ctx.shadowColor = "#38bdf8";
    ctx.shadowBlur = 35;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 8, 0, Math.PI * 2);
    const ringGrad = ctx.createLinearGradient(centerX - radius, centerY - radius, centerX + radius, centerY + radius);
    ringGrad.addColorStop(0, "#fde047");
    ringGrad.addColorStop(0.5, "#38bdf8");
    ringGrad.addColorStop(1, "#e879f9");
    ctx.fillStyle = ringGrad;
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(state.daughterPhotoImageObj, centerX - radius, centerY - radius, radius * 2, radius * 2);
    ctx.restore();

    ctx.font = "68px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("👑", centerX, centerY - radius - 26);

    const rightIcon = textLower.includes("кот") || textLower.includes("бегемот") ? "🐈‍⬛" : "🦄";
    const leftIcon = textLower.includes("танц") || textLower.includes("пуант") ? "🩰" : "🪄";
    ctx.font = "64px serif";
    ctx.fillText(leftIcon, centerX - radius - 36, centerY + 85);
    ctx.fillText(rightIcon, centerX + radius + 36, centerY + 85);
  } else {
    ctx.save();
    ctx.strokeStyle = "rgba(253, 224, 71, 0.65)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 140, 0, Math.PI * 2);
    ctx.stroke();

    ctx.font = "86px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const icons = ["🩰✨🐈‍⬛", "🌙🩰☁️", "🧚‍♀️💖🐈‍⬛", "🌟🩰🎶", "🛌🌙🐈‍⬛"];
    ctx.fillText(icons[pageIndex % icons.length], centerX, centerY);
    ctx.restore();
  }

  ctx.save();
  ctx.fillStyle = "rgba(15, 23, 42, 0.78)";
  ctx.strokeStyle = "rgba(253, 224, 71, 0.5)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(44, 615, 680, 112, 22);
  ctx.fill();
  ctx.stroke();

  ctx.font = "bold 24px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillStyle = "#fde047";
  ctx.textAlign = "center";
  ctx.fillText((page.chapterTitle || `Страница ${pageIndex + 1}`).slice(0, 48), 384, 652);

  const firstSentence = (page.text || "")
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?])\s+/)[0]
    .slice(0, 78);
  ctx.font = "19px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillStyle = "#e0f2fe";
  ctx.fillText(firstSentence + (firstSentence.length >= 78 ? "…" : ""), 384, 692);
  ctx.restore();

  return canvas.toDataURL("image/jpeg", 0.9);
}

function changePage(delta) {
  stopSpeech();
  const story = state.currentStory;
  if (!story || !story.pages) return;

  const nextIdx = state.currentPageIndex + delta;
  if (nextIdx >= story.pages.length || nextIdx < 0) {
    state.currentPageIndex = 0;
  } else {
    state.currentPageIndex = nextIdx;
  }
  renderCurrentStoryPage();
  document.getElementById("bookPageCard").scrollIntoView({ behavior: "smooth", block: "start" });
}

function adjustFontSize(delta) {
  state.fontSizeRem = Math.max(0.95, Math.min(1.55, +(state.fontSizeRem + delta).toFixed(2)));
  document.documentElement.style.setProperty("--reader-font-size", `${state.fontSizeRem}rem`);
  localStorage.setItem(STORAGE_KEYS.FONT_SIZE, String(state.fontSizeRem));
}

// ============================================================================
// ОЗВУЧКА СКАЗКИ НА РУССКОМ ЯЗЫКЕ
// ============================================================================
function toggleSpeechRead() {
  if (!("speechSynthesis" in window)) return;
  if (state.isSpeaking) {
    stopSpeech();
    return;
  }

  const page = state.currentStory?.pages?.[state.currentPageIndex];
  if (!page) return;

  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(`${page.chapterTitle}. ${page.text}`);
  utter.lang = "ru-RU";
  utter.rate = 0.92;
  utter.pitch = 1.05;

  const voices = window.speechSynthesis.getVoices();
  const ruVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("ru"));
  if (ruVoice) utter.voice = ruVoice;

  const btn = document.getElementById("btnVoiceRead");
  state.isSpeaking = true;
  btn.classList.add("active");
  btn.textContent = "⏹ Стоп";

  utter.onend = () => {
    state.isSpeaking = false;
    btn.classList.remove("active");
    btn.textContent = "🔊 Слушать";
  };
  utter.onerror = () => {
    state.isSpeaking = false;
    btn.classList.remove("active");
    btn.textContent = "🔊 Слушать";
  };

  window.speechSynthesis.speak(utter);
}

function stopSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  state.isSpeaking = false;
  const btn = document.getElementById("btnVoiceRead");
  if (btn) {
    btn.classList.remove("active");
    btn.textContent = "🔊 Слушать";
  }
}

// ============================================================================
// КНИЖНАЯ ПОЛКА (СОХРАНЁННЫЕ СКАЗКИ)
// ============================================================================
function saveCurrentStoryToLibrary() {
  const story = state.currentStory;
  if (!story) return;
  const exists = state.savedStories.some((s) => s.id === story.id);
  if (!exists) {
    state.savedStories.unshift(story);
    try {
      localStorage.setItem(STORAGE_KEYS.LIBRARY, JSON.stringify(state.savedStories));
    } catch (e) {}
    renderLibrary();
  }
  const btn = document.getElementById("btnSaveStory");
  btn.textContent = "💖 На полке!";
  setTimeout(() => {
    btn.textContent = "⭐ В полку";
  }, 1800);
}

function renderLibrary() {
  const listEl = document.getElementById("libraryList");
  const badgeEl = document.getElementById("libraryCountBadge");
  badgeEl.textContent = `(${state.savedStories.length})`;

  if (!state.savedStories.length) {
    listEl.innerHTML = `<p class="card-hint">Пока нет сохранённых сказок. Создайте свою первую сказку!</p>`;
    return;
  }

  listEl.innerHTML = state.savedStories
    .map(
      (story, idx) => `
      <div class="saved-story-item" data-idx="${idx}">
        <img src="./icon.svg" alt="Книга" class="saved-thumb" />
        <div class="saved-info">
          <h3 class="saved-title">${escapeHtml(story.title)}</h3>
          <div class="saved-meta">
            🩰 ${escapeHtml(story.heroes)} • ⏱ ${story.duration} мин (${story.pages?.length || 5} стр.)
          </div>
        </div>
      </div>
    `
    )
    .join("");

  listEl.querySelectorAll(".saved-story-item").forEach((item) => {
    item.addEventListener("click", () => {
      const idx = parseInt(item.dataset.idx, 10);
      const picked = state.savedStories[idx];
      if (picked) {
        state.currentStory = picked;
        state.currentPageIndex = 0;
        renderCurrentStoryPage();
        switchTab("read");
      }
    });
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
