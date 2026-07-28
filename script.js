const levels = {
  easy: {
    label: 'المستوى السهل',
    startLabel: 'ابدأ المستوى السهل',
    celebration: '🍎 🍌 🍊',
    cards: [
      { id: 'apple', label: 'تفاحة', image: 'apple.webp' },
      { id: 'banana', label: 'موزة', image: 'banana.webp' },
      { id: 'orange', label: 'برتقالة', image: 'orange.webp' }
    ]
  },
  advanced: {
    label: 'المستوى الأكبر',
    startLabel: 'ابدأ المستوى الأكبر',
    celebration: '🍎 🍌 🍊 🍓 🍇 🍉',
    cards: [
      { id: 'apple', label: 'تفاحة', image: 'apple.webp' },
      { id: 'banana', label: 'موزة', image: 'banana.webp' },
      { id: 'orange', label: 'برتقالة', image: 'orange.webp' },
      { id: 'strawberry', label: 'فراولة', image: 'strawberry.webp' },
      { id: 'grapes', label: 'عنب', image: 'grapes.webp' },
      { id: 'watermelon', label: 'بطيخ', image: 'watermelon.webp' }
    ]
  }
};

const animalLevelOne = [
  { id: 'lion', letter: 'أ', label: 'أسد', image: 'lion.webp' },
  { id: 'duck', letter: 'ب', label: 'بطة', image: 'duck.webp' },
  { id: 'crocodile', letter: 'ت', label: 'تمساح', image: 'crocodile.webp' }
];

const videoPlaylists = {
  'juz-amma': {
    title: 'جزء عم',
    itemLabel: 'المقطع',
    playlistId: 'PLpDIigZEd1R8DY3gi0WthA3KWAyIZkmLQ',
    youtubeUrl: 'https://youtube.com/playlist?list=PLpDIigZEd1R8DY3gi0WthA3KWAyIZkmLQ'
  },
  'azzam-diaries': {
    title: 'يوميات عزّام',
    itemLabel: 'الحلقة',
    playlistId: 'PLJ8q6LNI4S5s',
    youtubeUrl: 'https://youtube.com/playlist?list=PLJ8q6LNI4S5s'
  }
};

const homeScreen = document.querySelector('#home-screen');
const gamesMenuScreen = document.querySelector('#games-menu-screen');
const watchMenuScreen = document.querySelector('#watch-menu-screen');
const levelScreen = document.querySelector('#level-screen');
const gameScreen = document.querySelector('#game-screen');
const lettersLevelScreen = document.querySelector('#letters-level-screen');
const lettersGameScreen = document.querySelector('#letters-game-screen');
const allScreens = [homeScreen, gamesMenuScreen, watchMenuScreen, levelScreen, gameScreen, lettersLevelScreen, lettersGameScreen];

const openGamesSectionButton = document.querySelector('#open-games-section');
const openWatchSectionButton = document.querySelector('#open-watch-section');
const gamesMenuHomeButton = document.querySelector('#games-menu-home-button');
const watchMenuHomeButton = document.querySelector('#watch-menu-home-button');

const board = document.querySelector('#game-board');
const memoryGameCard = document.querySelector('#memory-game-card');
const lettersGameCard = document.querySelector('#letters-game-card');
const levelHomeButton = document.querySelector('#level-home-button');
const levelButtons = [...document.querySelectorAll('.level-card[data-level]')];
const startButton = document.querySelector('#start-button');
const resetButton = document.querySelector('#reset-button');
const backButton = document.querySelector('#back-button');
const movesCount = document.querySelector('#moves-count');
const matchedCount = document.querySelector('#matched-count');
const pairsTotal = document.querySelector('#pairs-total');
const gameLevelLabel = document.querySelector('#game-level-label');
const winModal = document.querySelector('#win-modal');
const finalMoves = document.querySelector('#final-moves');
const celebrationFruits = document.querySelector('#celebration-fruits');
const playAgainButton = document.querySelector('#play-again-button');
const homeButton = document.querySelector('#home-button');
const installButton = document.querySelector('#install-button');
const headerSubtitle = document.querySelector('#header-subtitle');

const lettersLevelHomeButton = document.querySelector('#letters-level-home-button');
const lettersStartButton = document.querySelector('#letters-start-button');
const lettersBackButton = document.querySelector('#letters-back-button');
const lettersResetButton = document.querySelector('#letters-reset-button');
const lettersQuestionCount = document.querySelector('#letters-question-count');
const lettersScore = document.querySelector('#letters-score');
const targetLetter = document.querySelector('#target-letter');
const animalOptions = document.querySelector('#animal-options');
const lettersFeedback = document.querySelector('#letters-feedback');
const lettersWinModal = document.querySelector('#letters-win-modal');
const lettersPlayAgainButton = document.querySelector('#letters-play-again-button');
const lettersHomeButton = document.querySelector('#letters-home-button');

const playlistPicker = document.querySelector('#playlist-picker');
const playlistButtons = [...document.querySelectorAll('.playlist-card[data-playlist]')];
const videoBrowserSection = document.querySelector('#video-browser-section');
const videoBrowserBackButton = document.querySelector('#video-browser-back');
const videoBrowserTitle = document.querySelector('#video-browser-title');
const videoListStatus = document.querySelector('#video-list-status');
const videoItemsGrid = document.querySelector('#video-items-grid');
const videoPlayerSection = document.querySelector('#video-player-section');
const videoPlayer = document.querySelector('#video-player');
const activeVideoTitle = document.querySelector('#active-video-title');
const openVideoYoutube = document.querySelector('#open-video-youtube');
const closeVideoPlayerButton = document.querySelector('#close-video-player');
const videoConnectionNote = document.querySelector('#video-connection-note');
const playlistLoader = document.querySelector('#playlist-loader');
const showMoreVideosButton = document.querySelector('#show-more-videos');

const moreMenuButton = document.querySelector('#more-menu-button');
const socialMenu = document.querySelector('#social-menu');
const menuBackdrop = document.querySelector('#menu-backdrop');
const closeSocialMenuButton = document.querySelector('#close-social-menu');
const shareAppButton = document.querySelector('#share-app-button');
const shareAppStatus = document.querySelector('#share-app-status');
const aboutAppButton = document.querySelector('#about-app-button');
const aboutAppModal = document.querySelector('#about-app-modal');
const closeAboutAppButton = document.querySelector('#close-about-app');

let selectedLevel = 'easy';
let activeCards = levels.easy.cards;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matches = 0;
let deferredInstallPrompt = null;

let animalQuestions = [];
let animalQuestionIndex = 0;
let animalCorrectCount = 0;
let animalLocked = false;

let youtubeApiPromise = null;
let discoveryPlayerPromise = null;
let discoveryPlayer = null;
let discoveryPlayerGeneration = 0;
let requestedPlaylistKey = null;
let activePlaylistKey = null;
let playlistPollTimer = null;
let activeVideoIds = [];
let visibleVideoCount = 0;
const VIDEO_PAGE_SIZE = 12;
const playlistVideoCache = new Map();
const videoTitleCache = new Map();

function openSocialMenu() {
  socialMenu.classList.remove('hidden');
  menuBackdrop.classList.remove('hidden');
  socialMenu.setAttribute('aria-hidden', 'false');
  moreMenuButton.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
  closeSocialMenuButton.focus();
}

function closeSocialMenu() {
  socialMenu.classList.add('hidden');
  menuBackdrop.classList.add('hidden');
  socialMenu.setAttribute('aria-hidden', 'true');
  moreMenuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

async function shareApp() {
  const shareData = {
    title: 'ألعاب المعلّم الصغير',
    text: 'جرّب ألعاب المعلّم الصغير التعليمية الممتعة للأطفال.',
    url: 'https://almoallemmemorygame.vercel.app/'
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(shareData.url);
    shareAppStatus.textContent = 'تم نسخ رابط التطبيق ✓';
    window.setTimeout(() => { shareAppStatus.textContent = 'أرسل التطبيق إلى الأصدقاء'; }, 2200);
  } catch (error) {
    if (error && error.name === 'AbortError') return;
    shareAppStatus.textContent = 'تعذرت المشاركة، حاول مرة أخرى';
    window.setTimeout(() => { shareAppStatus.textContent = 'أرسل التطبيق إلى الأصدقاء'; }, 2200);
  }
}

function showAboutApp() {
  closeSocialMenu();
  aboutAppModal.classList.remove('hidden');
  closeAboutAppButton.focus();
}

function closeAboutApp() {
  aboutAppModal.classList.add('hidden');
  moreMenuButton.focus();
}

function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function buildDeck() {
  return shuffle(activeCards.flatMap((fruit) => [
    { ...fruit, uniqueId: `${fruit.id}-1` },
    { ...fruit, uniqueId: `${fruit.id}-2` }
  ]));
}

function createCard(card) {
  const button = document.createElement('button');
  button.className = 'memory-card';
  button.type = 'button';
  button.dataset.fruit = card.id;
  button.setAttribute('aria-label', 'بطاقة مقلوبة');
  button.innerHTML = `
    <span class="card-inner">
      <span class="card-face card-back"><img src="card-back.webp" alt="ظهر بطاقة عزّام" draggable="false"></span>
      <span class="card-face card-front"><img src="${card.image}" alt="${card.label}" draggable="false"></span>
    </span>
  `;
  button.addEventListener('click', () => flipCard(button, card.label));
  return button;
}

function renderGame() {
  activeCards = levels[selectedLevel].cards;
  board.classList.toggle('advanced-board', selectedLevel === 'advanced');
  board.replaceChildren(...buildDeck().map(createCard));
  gameLevelLabel.textContent = levels[selectedLevel].label;
  pairsTotal.textContent = `من ${activeCards.length} أزواج`;
  celebrationFruits.textContent = levels[selectedLevel].celebration;
  resetState();
}

function resetState() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  moves = 0;
  matches = 0;
  movesCount.textContent = '0';
  matchedCount.textContent = '0';
}

function selectLevel(levelName) {
  if (!levels[levelName]) return;
  selectedLevel = levelName;
  levelButtons.forEach((button) => {
    const isSelected = button.dataset.level === selectedLevel;
    button.classList.toggle('selected', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });
  startButton.textContent = levels[selectedLevel].startLabel;
}

function flipCard(card, label) {
  if (lockBoard || card === firstCard || card.classList.contains('matched')) return;
  card.classList.add('flipped');
  card.setAttribute('aria-label', label);
  if (!firstCard) {
    firstCard = card;
    return;
  }
  secondCard = card;
  moves += 1;
  movesCount.textContent = String(moves);
  checkMatch();
}

function checkMatch() {
  const isMatch = firstCard.dataset.fruit === secondCard.dataset.fruit;
  if (isMatch) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    firstCard.disabled = true;
    secondCard.disabled = true;
    matches += 1;
    matchedCount.textContent = String(matches);
    clearTurn();
    if (matches === activeCards.length) window.setTimeout(showWin, 650);
    return;
  }
  lockBoard = true;
  window.setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    firstCard.setAttribute('aria-label', 'بطاقة مقلوبة');
    secondCard.setAttribute('aria-label', 'بطاقة مقلوبة');
    clearTurn();
  }, 850);
}

function clearTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

function createAnimalOption(animal, correctId) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'animal-option';
  button.dataset.animal = animal.id;
  button.setAttribute('aria-label', animal.label);
  button.innerHTML = `<img src="${animal.image}" alt="${animal.label}" draggable="false">`;
  button.addEventListener('click', () => checkAnimalAnswer(button, animal.id === correctId));
  return button;
}

function startAnimalGame() {
  animalQuestions = shuffle(animalLevelOne);
  animalQuestionIndex = 0;
  animalCorrectCount = 0;
  animalLocked = false;
  lettersScore.textContent = '⭐ 0';
  renderAnimalQuestion();
}

function renderAnimalQuestion() {
  const question = animalQuestions[animalQuestionIndex];
  if (!question) {
    showAnimalWin();
    return;
  }
  animalLocked = false;
  lettersQuestionCount.textContent = `السؤال ${animalQuestionIndex + 1} من ${animalQuestions.length}`;
  targetLetter.textContent = question.letter;
  lettersFeedback.textContent = 'اختر بطاقة واحدة';
  lettersFeedback.className = 'letters-feedback';
  const options = shuffle(animalLevelOne).map((animal) => createAnimalOption(animal, question.id));
  animalOptions.replaceChildren(...options);
}

function checkAnimalAnswer(button, isCorrect) {
  if (animalLocked) return;
  if (!isCorrect) {
    button.classList.add('wrong');
    lettersFeedback.textContent = 'حاول مرة أخرى';
    lettersFeedback.className = 'letters-feedback wrong-feedback';
    window.setTimeout(() => button.classList.remove('wrong'), 500);
    return;
  }

  animalLocked = true;
  button.classList.add('correct');
  [...animalOptions.children].forEach((option) => { option.disabled = true; });
  animalCorrectCount += 1;
  lettersScore.textContent = `⭐ ${animalCorrectCount}`;
  lettersFeedback.textContent = 'أحسنت! إجابة صحيحة';
  lettersFeedback.className = 'letters-feedback correct-feedback';
  window.setTimeout(() => {
    animalQuestionIndex += 1;
    renderAnimalQuestion();
  }, 850);
}

function ensureYouTubeApi() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve, reject) => {
    const existingCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof existingCallback === 'function') existingCallback();
      resolve(window.YT);
    };

    let script = document.querySelector('script[data-youtube-iframe-api]');
    if (!script) {
      script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.dataset.youtubeIframeApi = 'true';
      script.onerror = () => reject(new Error('تعذر تحميل مشغّل يوتيوب'));
      document.head.appendChild(script);
    }

    window.setTimeout(() => {
      if (!(window.YT && window.YT.Player)) reject(new Error('انتهت مهلة تحميل مشغّل يوتيوب'));
    }, 15000);
  });

  youtubeApiPromise.catch(() => { youtubeApiPromise = null; });
  return youtubeApiPromise;
}

function recreateDiscoveryMount() {
  const shell = document.querySelector('.youtube-discovery-shell');
  if (!shell) throw new Error('تعذر تجهيز قارئ قائمة التشغيل');

  try {
    if (discoveryPlayer && typeof discoveryPlayer.destroy === 'function') discoveryPlayer.destroy();
  } catch {}

  discoveryPlayer = null;
  discoveryPlayerPromise = null;
  shell.replaceChildren();
  const mount = document.createElement('div');
  mount.id = 'youtube-discovery-player';
  shell.appendChild(mount);
  return mount;
}

function createDiscoveryPlayer(playlistKey) {
  const playlist = videoPlaylists[playlistKey];
  if (!playlist) return Promise.reject(new Error('قائمة غير معروفة'));

  const generation = ++discoveryPlayerGeneration;
  recreateDiscoveryMount();

  discoveryPlayerPromise = ensureYouTubeApi().then(() => new Promise((resolve, reject) => {
    let settled = false;
    const finishResolve = (player) => {
      if (settled || generation !== discoveryPlayerGeneration) return;
      settled = true;
      resolve(player);
    };
    const finishReject = (error) => {
      if (settled || generation !== discoveryPlayerGeneration) return;
      settled = true;
      try {
        if (discoveryPlayer && typeof discoveryPlayer.destroy === 'function') discoveryPlayer.destroy();
      } catch {}
      discoveryPlayer = null;
      discoveryPlayerPromise = null;
      reject(error);
    };

    discoveryPlayer = new window.YT.Player('youtube-discovery-player', {
      width: '480',
      height: '270',
      host: 'https://www.youtube.com',
      playerVars: {
        listType: 'playlist',
        list: playlist.playlistId,
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        playsinline: 1,
        rel: 0,
        hl: 'ar',
        origin: window.location.origin
      },
      events: {
        onReady: (event) => finishResolve(event.target),
        onError: () => finishReject(new Error('تعذر قراءة قائمة التشغيل'))
      }
    });

    window.setTimeout(() => finishReject(new Error('تعذر إنشاء قارئ قائمة التشغيل')), 15000);
  }));

  return discoveryPlayerPromise;
}

function showPlaylistLoadError(playlistKey) {
  if (playlistKey !== activePlaylistKey) return;
  window.clearTimeout(playlistPollTimer);
  playlistLoader.classList.add('hidden');
  const playlist = videoPlaylists[playlistKey];
  videoListStatus.classList.remove('hidden');
  videoListStatus.classList.add('error-status');
  videoListStatus.textContent = `تعذر تحميل مقاطع ${playlist.title} داخل التطبيق الآن.`;
  videoItemsGrid.replaceChildren();
  showMoreVideosButton.classList.add('hidden');
  const link = document.createElement('a');
  link.className = 'youtube-fallback-link playlist-error-link';
  link.href = playlist.youtubeUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'فتح القائمة في يوتيوب';
  videoItemsGrid.appendChild(link);
}

function pollPlaylistVideos(playlistKey, attempt = 0) {
  if (playlistKey !== requestedPlaylistKey || playlistKey !== activePlaylistKey) return;
  let videoIds = [];
  try {
    videoIds = discoveryPlayer && discoveryPlayer.getPlaylist ? discoveryPlayer.getPlaylist() || [] : [];
  } catch {
    videoIds = [];
  }

  if (videoIds.length > 0) {
    playlistVideoCache.set(playlistKey, [...videoIds]);
    playlistLoader.classList.add('hidden');
    renderVideoItems(playlistKey, videoIds);
    return;
  }

  if (attempt >= 30) {
    showPlaylistLoadError(playlistKey);
    return;
  }

  playlistPollTimer = window.setTimeout(() => pollPlaylistVideos(playlistKey, attempt + 1), 400);
}

async function loadPlaylistVideos(playlistKey) {
  const playlist = videoPlaylists[playlistKey];
  if (!playlist) return;

  const cached = playlistVideoCache.get(playlistKey);
  if (cached && cached.length) {
    playlistLoader.classList.add('hidden');
    renderVideoItems(playlistKey, cached);
    return;
  }

  if (!navigator.onLine) {
    showPlaylistLoadError(playlistKey);
    return;
  }

  playlistLoader.classList.remove('hidden');
  videoListStatus.textContent = `جارٍ تحميل مقاطع ${playlist.title}...`;
  videoListStatus.classList.remove('hidden', 'error-status');
  videoItemsGrid.replaceChildren();
  showMoreVideosButton.classList.add('hidden');
  requestedPlaylistKey = playlistKey;
  window.clearTimeout(playlistPollTimer);

  try {
    await createDiscoveryPlayer(playlistKey);
    if (requestedPlaylistKey !== playlistKey) return;
    window.setTimeout(() => pollPlaylistVideos(playlistKey), 450);
  } catch {
    showPlaylistLoadError(playlistKey);
  }
}

function readStoredVideoTitle(videoId) {
  if (videoTitleCache.has(videoId)) return videoTitleCache.get(videoId);
  try {
    const stored = window.localStorage.getItem(`youtube-title:${videoId}`);
    if (stored) {
      videoTitleCache.set(videoId, stored);
      return stored;
    }
  } catch {}
  return '';
}

function storeVideoTitle(videoId, title) {
  if (!title) return;
  videoTitleCache.set(videoId, title);
  try { window.localStorage.setItem(`youtube-title:${videoId}`, title); } catch {}
}

async function fetchVideoTitle(videoId) {
  const cached = readStoredVideoTitle(videoId);
  if (cached) return cached;

  const watchUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
  const endpoints = [
    `https://www.youtube.com/oembed?url=${encodeURIComponent(watchUrl)}&format=json`,
    `https://noembed.com/embed?url=${encodeURIComponent(watchUrl)}`
  ];

  let lastError = null;
  for (const endpoint of endpoints) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 9000);
    try {
      const response = await fetch(endpoint, { signal: controller.signal, mode: 'cors' });
      if (!response.ok) throw new Error('تعذر قراءة اسم الفيديو');
      const data = await response.json();
      const title = typeof data.title === 'string' ? data.title.trim() : '';
      if (!title) throw new Error('اسم الفيديو فارغ');
      storeVideoTitle(videoId, title);
      return title;
    } catch (error) {
      lastError = error;
    } finally {
      window.clearTimeout(timeout);
    }
  }

  throw lastError || new Error('تعذر قراءة اسم الفيديو');
}

function applyVideoTitle(button, videoId, playlistKey, index, title) {
  if (!button.isConnected || button.dataset.videoId !== videoId || !title) return;
  const titleElement = button.querySelector('strong');
  const image = button.querySelector('img');
  if (titleElement) titleElement.textContent = title;
  if (image) image.alt = `صورة ${title}`;
  button.dataset.videoTitle = title;
  button.setAttribute('aria-label', `تشغيل ${title}`);

  if (!videoPlayerSection.classList.contains('hidden') && videoPlayer.dataset.videoId === videoId) {
    activeVideoTitle.textContent = title;
  }
}

function hydrateVideoTitle(button, videoId, playlistKey, index) {
  const cached = readStoredVideoTitle(videoId);
  if (cached) {
    applyVideoTitle(button, videoId, playlistKey, index, cached);
    return;
  }

  fetchVideoTitle(videoId)
    .then((title) => applyVideoTitle(button, videoId, playlistKey, index, title))
    .catch(() => {});
}

function createVideoItem(videoId, index, playlistKey) {
  const playlist = videoPlaylists[playlistKey];
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'video-item-card';
  button.dataset.videoId = videoId;
  button.dataset.videoTitle = '';
  button.setAttribute('aria-label', `تشغيل ${playlist.itemLabel} ${index + 1} من ${playlist.title}`);
  button.innerHTML = `
    <span class="video-thumbnail-wrap">
      <img src="https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/mqdefault.jpg" alt="صورة ${playlist.itemLabel} ${index + 1}" loading="lazy" referrerpolicy="no-referrer">
      <span class="video-item-play" aria-hidden="true">▶</span>
      <span class="video-item-number" aria-hidden="true">${index + 1}</span>
    </span>
    <span class="video-item-copy">
      <strong>${playlist.itemLabel} ${index + 1}</strong>
      <small>اضغط للمشاهدة</small>
    </span>
  `;
  button.addEventListener('click', () => playSingleVideo(playlistKey, videoId, index, button.dataset.videoTitle));
  hydrateVideoTitle(button, videoId, playlistKey, index);
  return button;
}

function appendNextVideoBatch() {
  if (!activePlaylistKey || !activeVideoIds.length) return;
  const nextIds = activeVideoIds.slice(visibleVideoCount, visibleVideoCount + VIDEO_PAGE_SIZE);
  const fragment = document.createDocumentFragment();
  nextIds.forEach((videoId, offset) => {
    fragment.appendChild(createVideoItem(videoId, visibleVideoCount + offset, activePlaylistKey));
  });
  videoItemsGrid.appendChild(fragment);
  visibleVideoCount += nextIds.length;
  showMoreVideosButton.classList.toggle('hidden', visibleVideoCount >= activeVideoIds.length);
  if (visibleVideoCount < activeVideoIds.length) {
    showMoreVideosButton.textContent = `عرض المزيد (${activeVideoIds.length - visibleVideoCount})`;
  }
}

function renderVideoItems(playlistKey, videoIds) {
  if (playlistKey !== activePlaylistKey) return;
  const playlist = videoPlaylists[playlistKey];
  activeVideoIds = [...videoIds];
  visibleVideoCount = 0;
  videoItemsGrid.replaceChildren();
  videoListStatus.textContent = `${videoIds.length} ${playlist.itemLabel === 'الحلقة' ? 'حلقة متاحة' : 'مقطع متاح'} — اختر المقطع الذي تريده`;
  videoListStatus.classList.remove('hidden', 'error-status');
  appendNextVideoBatch();
}

function openVideoBrowser(playlistKey) {
  const playlist = videoPlaylists[playlistKey];
  if (!playlist) return;
  activePlaylistKey = playlistKey;
  playlistButtons.forEach((button) => button.classList.toggle('selected', button.dataset.playlist === playlistKey));
  playlistPicker.classList.add('hidden');
  videoBrowserSection.classList.remove('hidden');
  videoBrowserTitle.textContent = playlist.title;
  stopVideoPlayback();
  window.requestAnimationFrame(() => loadPlaylistVideos(playlistKey));
  window.setTimeout(() => videoBrowserSection.scrollIntoView({ behavior: 'auto', block: 'start' }), 50);
}

function closeVideoBrowser() {
  requestedPlaylistKey = null;
  activePlaylistKey = null;
  window.clearTimeout(playlistPollTimer);
  stopVideoPlayback();
  videoBrowserSection.classList.add('hidden');
  playlistPicker.classList.remove('hidden');
  playlistButtons.forEach((button) => button.classList.remove('selected'));
  activeVideoIds = [];
  visibleVideoCount = 0;
  playlistLoader.classList.add('hidden');
  showMoreVideosButton.classList.add('hidden');
  videoItemsGrid.replaceChildren();
  videoListStatus.textContent = 'جارٍ تحميل المقاطع...';
  videoListStatus.classList.remove('error-status');
}

function stopVideoPlayback() {
  if (!videoPlayer) return;
  videoPlayer.src = 'about:blank';
  videoPlayer.dataset.videoId = '';
  videoPlayerSection.classList.add('hidden');
  videoItemsGrid.querySelectorAll('.video-item-card').forEach((button) => button.classList.remove('playing'));
}

function playSingleVideo(playlistKey, videoId, index, resolvedTitle = '') {
  const playlist = videoPlaylists[playlistKey];
  if (!playlist) return;

  if (!navigator.onLine) {
    videoConnectionNote.textContent = 'لا يوجد اتصال بالإنترنت حاليًا. اتصل بالإنترنت ثم حاول مرة أخرى.';
    videoConnectionNote.classList.add('offline-note');
    videoPlayerSection.classList.remove('hidden');
    videoPlayer.src = 'about:blank';
    return;
  }

  videoConnectionNote.textContent = 'تحتاج مشاهدة المقاطع إلى اتصال بالإنترنت.';
  videoConnectionNote.classList.remove('offline-note');
  const exactTitle = resolvedTitle || readStoredVideoTitle(videoId);
  activeVideoTitle.textContent = exactTitle || `${playlist.itemLabel} ${index + 1} · ${playlist.title}`;
  videoPlayer.dataset.videoId = videoId;
  openVideoYoutube.href = `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}&list=${encodeURIComponent(playlist.playlistId)}`;
  videoPlayer.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&playsinline=1&hl=ar&rel=0`;
  videoPlayerSection.classList.remove('hidden');
  videoItemsGrid.querySelectorAll('.video-item-card').forEach((button) => {
    button.classList.toggle('playing', button.dataset.videoId === videoId);
  });
  window.setTimeout(() => videoPlayerSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
}

function showOnly(screen) {
  if (screen !== watchMenuScreen) closeVideoBrowser();
  allScreens.forEach((item) => item.classList.add('hidden'));
  screen.classList.remove('hidden');
  winModal.classList.add('hidden');
  lettersWinModal.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
  headerSubtitle.textContent = 'اختر القسم الذي يناسبك';
  showOnly(homeScreen);
}

function showGamesMenu() {
  headerSubtitle.textContent = 'اختر لعبتك وابدأ التحدي';
  showOnly(gamesMenuScreen);
}

function showWatchMenu() {
  headerSubtitle.textContent = 'اختر مقطعك وشاهد وتعلّم';
  showOnly(watchMenuScreen);
  closeVideoBrowser();
}

function showLevels() {
  headerSubtitle.textContent = 'اختر المستوى المناسب';
  showOnly(levelScreen);
}

function showGame() {
  headerSubtitle.textContent = 'طابِق الفواكه المتشابهة';
  showOnly(gameScreen);
  renderGame();
}

function showLettersLevels() {
  headerSubtitle.textContent = 'اختر مستوى الحروف والحيوانات';
  showOnly(lettersLevelScreen);
}

function showLettersGame() {
  headerSubtitle.textContent = 'اختر الحيوان الذي يبدأ بالحرف';
  showOnly(lettersGameScreen);
  startAnimalGame();
}

function showWin() {
  finalMoves.textContent = String(moves);
  winModal.classList.remove('hidden');
  playAgainButton.focus();
}

function showAnimalWin() {
  lettersWinModal.classList.remove('hidden');
  lettersPlayAgainButton.focus();
}

moreMenuButton.addEventListener('click', openSocialMenu);
closeSocialMenuButton.addEventListener('click', closeSocialMenu);
menuBackdrop.addEventListener('click', closeSocialMenu);
socialMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeSocialMenu));
shareAppButton.addEventListener('click', shareApp);
aboutAppButton.addEventListener('click', showAboutApp);
closeAboutAppButton.addEventListener('click', closeAboutApp);
aboutAppModal.addEventListener('click', (event) => {
  if (event.target === aboutAppModal) closeAboutApp();
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (!aboutAppModal.classList.contains('hidden')) closeAboutApp();
  else if (!socialMenu.classList.contains('hidden')) closeSocialMenu();
});

openGamesSectionButton.addEventListener('click', showGamesMenu);
openWatchSectionButton.addEventListener('click', showWatchMenu);
gamesMenuHomeButton.addEventListener('click', showHome);
watchMenuHomeButton.addEventListener('click', showHome);

memoryGameCard.addEventListener('click', showLevels);
lettersGameCard.addEventListener('click', showLettersLevels);
levelHomeButton.addEventListener('click', showGamesMenu);
levelButtons.forEach((button) => button.addEventListener('click', () => selectLevel(button.dataset.level)));
startButton.addEventListener('click', showGame);
resetButton.addEventListener('click', renderGame);
backButton.addEventListener('click', showLevels);
playAgainButton.addEventListener('click', showGame);
homeButton.addEventListener('click', showGamesMenu);

lettersLevelHomeButton.addEventListener('click', showGamesMenu);
lettersStartButton.addEventListener('click', showLettersGame);
lettersBackButton.addEventListener('click', showLettersLevels);
lettersResetButton.addEventListener('click', startAnimalGame);
lettersPlayAgainButton.addEventListener('click', showLettersGame);
lettersHomeButton.addEventListener('click', showGamesMenu);

playlistButtons.forEach((button) => button.addEventListener('click', () => openVideoBrowser(button.dataset.playlist)));
videoBrowserBackButton.addEventListener('click', closeVideoBrowser);
showMoreVideosButton.addEventListener('click', appendNextVideoBatch);
closeVideoPlayerButton.addEventListener('click', stopVideoPlayback);
window.addEventListener('offline', () => {
  if (!watchMenuScreen.classList.contains('hidden')) {
    videoConnectionNote.textContent = 'انقطع اتصال الإنترنت. قد يتوقف تشغيل المقاطع مؤقتًا.';
    videoConnectionNote.classList.add('offline-note');
  }
});
window.addEventListener('online', () => {
  videoConnectionNote.textContent = 'تحتاج مشاهدة المقاطع إلى اتصال بالإنترنت.';
  videoConnectionNote.classList.remove('offline-note');
});

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.classList.remove('hidden');
});

installButton.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installButton.classList.add('hidden');
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  installButton.classList.add('hidden');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('service-worker.js');
      registration.update();
    } catch {
      // The app still works online if service-worker registration fails.
    }
  });
}


function shouldAllowTextInteraction(target) {
  return Boolean(target && target.closest && target.closest('input, textarea, [contenteditable="true"]'));
}

document.addEventListener('contextmenu', (event) => {
  if (!shouldAllowTextInteraction(event.target)) event.preventDefault();
});
document.addEventListener('selectstart', (event) => {
  if (!shouldAllowTextInteraction(event.target)) event.preventDefault();
});
document.addEventListener('dragstart', (event) => {
  if (!shouldAllowTextInteraction(event.target)) event.preventDefault();
});
