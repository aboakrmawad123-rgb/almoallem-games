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

let requestedPlaylistKey = null;
let activePlaylistKey = null;
let activeVideoItems = [];
let visibleVideoCount = 0;
const VIDEO_PAGE_SIZE = 12;
const playlistVideoCache = new Map();

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
    title: 'المعلّم الصغير',
    text: 'جرّب تطبيق المعلّم الصغير: ألعاب ومقاطع تعليمية ممتعة للأطفال.',
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

function getStoredPlaylist(playlistKey) {
  try {
    const raw = window.localStorage.getItem(`youtube-playlist:${playlistKey}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items)) return null;
    const items = parsed.items.filter((item) => (
      item &&
      typeof item.videoId === 'string' &&
      typeof item.title === 'string' &&
      item.videoId.length > 5 &&
      item.title.trim()
    ));
    return items.length ? items : null;
  } catch {
    return null;
  }
}

function storePlaylist(playlistKey, items) {
  try {
    window.localStorage.setItem(`youtube-playlist:${playlistKey}`, JSON.stringify({
      savedAt: Date.now(),
      items
    }));
  } catch {
    // The live list still works if storage is unavailable.
  }
}

function showPlaylistLoadError(playlistKey, message = '') {
  if (playlistKey !== activePlaylistKey) return;
  playlistLoader.classList.add('hidden');
  showMoreVideosButton.classList.add('hidden');
  const playlist = videoPlaylists[playlistKey];
  videoListStatus.textContent = message || `تعذر تحميل مقاطع ${playlist.title} الآن.`;
  videoListStatus.classList.remove('hidden');
  videoListStatus.classList.add('error-status');
  videoItemsGrid.replaceChildren();

  const actions = document.createElement('div');
  actions.className = 'playlist-error-actions';

  const retry = document.createElement('button');
  retry.type = 'button';
  retry.className = 'secondary-button';
  retry.textContent = 'إعادة المحاولة';
  retry.addEventListener('click', () => loadPlaylistVideos(playlistKey, true));

  const link = document.createElement('a');
  link.className = 'youtube-fallback-link playlist-error-link';
  link.href = playlist.youtubeUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'فتح القائمة في يوتيوب';

  actions.append(retry, link);
  videoItemsGrid.appendChild(actions);
}

async function fetchPlaylistFromServer(playlistKey) {
  const playlist = videoPlaylists[playlistKey];
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20000);
  try {
    const endpoint = `/api/youtube-playlist?playlistId=${encodeURIComponent(playlist.playlistId)}`;
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      signal: controller.signal
    });
    let data = null;
    try { data = await response.json(); } catch {}
    if (!response.ok) {
      throw new Error(data && data.error ? data.error : 'تعذر الاتصال بخدمة يوتيوب');
    }
    const items = Array.isArray(data && data.items) ? data.items.filter((item) => (
      item &&
      typeof item.videoId === 'string' &&
      typeof item.title === 'string' &&
      item.videoId.length > 5 &&
      item.title.trim()
    )) : [];
    if (!items.length) throw new Error('لم نجد مقاطع متاحة في هذه القائمة');
    return items;
  } finally {
    window.clearTimeout(timeout);
  }
}

async function loadPlaylistVideos(playlistKey, forceRefresh = false) {
  const playlist = videoPlaylists[playlistKey];
  if (!playlist) return;

  requestedPlaylistKey = playlistKey;
  const memoryItems = !forceRefresh ? playlistVideoCache.get(playlistKey) : null;
  const storedItems = !forceRefresh ? getStoredPlaylist(playlistKey) : null;
  const firstAvailable = memoryItems || storedItems;

  if (firstAvailable && playlistKey === activePlaylistKey) {
    renderVideoItems(playlistKey, firstAvailable);
  } else {
    playlistLoader.classList.remove('hidden');
    videoListStatus.textContent = `جارٍ تحميل مقاطع ${playlist.title}...`;
    videoListStatus.classList.remove('hidden', 'error-status');
    videoItemsGrid.replaceChildren();
    showMoreVideosButton.classList.add('hidden');
  }

  if (!navigator.onLine) {
    if (!firstAvailable) showPlaylistLoadError(playlistKey, 'لا يوجد اتصال بالإنترنت حاليًا.');
    return;
  }

  try {
    const items = await fetchPlaylistFromServer(playlistKey);
    if (requestedPlaylistKey !== playlistKey || activePlaylistKey !== playlistKey) return;
    playlistVideoCache.set(playlistKey, items);
    storePlaylist(playlistKey, items);
    playlistLoader.classList.add('hidden');
    renderVideoItems(playlistKey, items);
  } catch (error) {
    if (requestedPlaylistKey !== playlistKey || activePlaylistKey !== playlistKey) return;
    playlistLoader.classList.add('hidden');
    if (!firstAvailable) {
      const message = error && error.name === 'AbortError'
        ? 'استغرق تحميل المقاطع وقتًا طويلًا. حاول مرة أخرى.'
        : (error && error.message ? error.message : 'تعذر تحميل المقاطع الآن.');
      showPlaylistLoadError(playlistKey, message);
    }
  }
}

function createVideoItem(item, index, playlistKey) {
  const playlist = videoPlaylists[playlistKey];
  const title = item.title.trim();
  const videoId = item.videoId;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'video-item-card';
  button.dataset.videoId = videoId;
  button.dataset.videoTitle = title;
  button.setAttribute('aria-label', `تشغيل ${title}`);
  button.innerHTML = `
    <span class="video-thumbnail-wrap">
      <img src="https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/mqdefault.jpg" alt="" loading="lazy" referrerpolicy="no-referrer">
      <span class="video-item-play" aria-hidden="true">▶</span>
      <span class="video-item-number" aria-hidden="true">${index + 1}</span>
    </span>
    <span class="video-item-copy">
      <strong></strong>
      <small>اضغط للمشاهدة</small>
    </span>
  `;
  const image = button.querySelector('img');
  const titleElement = button.querySelector('strong');
  image.alt = `صورة ${title}`;
  titleElement.textContent = title;
  button.addEventListener('click', () => playSingleVideo(playlistKey, videoId, index, title));
  return button;
}

function appendNextVideoBatch() {
  if (!activePlaylistKey || !activeVideoItems.length) return;
  const nextItems = activeVideoItems.slice(visibleVideoCount, visibleVideoCount + VIDEO_PAGE_SIZE);
  const fragment = document.createDocumentFragment();
  nextItems.forEach((item, offset) => {
    fragment.appendChild(createVideoItem(item, visibleVideoCount + offset, activePlaylistKey));
  });
  videoItemsGrid.appendChild(fragment);
  visibleVideoCount += nextItems.length;
  showMoreVideosButton.classList.toggle('hidden', visibleVideoCount >= activeVideoItems.length);
  if (visibleVideoCount < activeVideoItems.length) {
    showMoreVideosButton.textContent = `عرض المزيد (${activeVideoItems.length - visibleVideoCount})`;
  }
}

function renderVideoItems(playlistKey, items) {
  if (playlistKey !== activePlaylistKey) return;
  const playlist = videoPlaylists[playlistKey];
  activeVideoItems = [...items];
  visibleVideoCount = 0;
  videoItemsGrid.replaceChildren();
  videoListStatus.textContent = `${items.length} ${playlist.itemLabel === 'الحلقة' ? 'حلقة متاحة' : 'مقطع متاح'} — اختر المقطع الذي تريده`;
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
  stopVideoPlayback();
  videoBrowserSection.classList.add('hidden');
  playlistPicker.classList.remove('hidden');
  playlistButtons.forEach((button) => button.classList.remove('selected'));
  activeVideoItems = [];
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

function playSingleVideoNow(playlistKey, videoId, index, resolvedTitle = '') {
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
  const exactTitle = resolvedTitle;
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


const APP_ROUTE_MARKER = 'almoallem-small-teacher-route';
let currentRouteState = { appRoute: APP_ROUTE_MARKER, view: 'home', depth: 0 };
let applyingHistoryState = false;

function normalizeRouteState(state) {
  const candidate = state && state.appRoute === APP_ROUTE_MARKER ? state : {};
  const validViews = new Set([
    'home',
    'games-menu',
    'watch-menu',
    'memory-levels',
    'memory-game',
    'letters-levels',
    'letters-game',
    'watch-playlist',
    'watch-video'
  ]);
  const view = validViews.has(candidate.view) ? candidate.view : 'home';
  return {
    appRoute: APP_ROUTE_MARKER,
    view,
    depth: Number.isInteger(candidate.depth) && candidate.depth >= 0 ? candidate.depth : 0,
    playlistKey: typeof candidate.playlistKey === 'string' ? candidate.playlistKey : '',
    videoId: typeof candidate.videoId === 'string' ? candidate.videoId : '',
    videoIndex: Number.isInteger(candidate.videoIndex) ? candidate.videoIndex : 0,
    videoTitle: typeof candidate.videoTitle === 'string' ? candidate.videoTitle : ''
  };
}

function applyRouteState(rawState) {
  const state = normalizeRouteState(rawState);
  currentRouteState = state;
  applyingHistoryState = true;

  switch (state.view) {
    case 'games-menu':
      showGamesMenu();
      break;
    case 'watch-menu':
      showWatchMenu();
      break;
    case 'memory-levels':
      showLevels();
      break;
    case 'memory-game':
      showGame();
      break;
    case 'letters-levels':
      showLettersLevels();
      break;
    case 'letters-game':
      showLettersGame();
      break;
    case 'watch-playlist':
      showWatchMenu();
      if (videoPlaylists[state.playlistKey]) openVideoBrowser(state.playlistKey);
      break;
    case 'watch-video':
      showWatchMenu();
      if (videoPlaylists[state.playlistKey]) {
        openVideoBrowser(state.playlistKey);
        if (state.videoId) {
          playSingleVideoNow(
            state.playlistKey,
            state.videoId,
            state.videoIndex,
            state.videoTitle
          );
        }
      }
      break;
    case 'home':
    default:
      showHome();
      break;
  }

  applyingHistoryState = false;
}

function navigateToRoute(route, options = {}) {
  const replace = Boolean(options.replace);
  const nextDepth = replace ? currentRouteState.depth : currentRouteState.depth + 1;
  const state = normalizeRouteState({
    ...route,
    appRoute: APP_ROUTE_MARKER,
    depth: nextDepth
  });
  const method = replace ? 'replaceState' : 'pushState';
  window.history[method](state, '');
  applyRouteState(state);
}

function navigateBack(fallbackRoute) {
  if (currentRouteState.depth > 0) {
    window.history.back();
    return;
  }
  navigateToRoute(fallbackRoute, { replace: true });
}

function playSingleVideo(playlistKey, videoId, index, resolvedTitle = '') {
  navigateToRoute({
    view: 'watch-video',
    playlistKey,
    videoId,
    videoIndex: index,
    videoTitle: resolvedTitle
  });
}

window.addEventListener('popstate', (event) => {
  applyRouteState(event.state);
});

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

openGamesSectionButton.addEventListener('click', () => navigateToRoute({ view: 'games-menu' }));
openWatchSectionButton.addEventListener('click', () => navigateToRoute({ view: 'watch-menu' }));
gamesMenuHomeButton.addEventListener('click', () => navigateBack({ view: 'home' }));
watchMenuHomeButton.addEventListener('click', () => navigateBack({ view: 'home' }));

memoryGameCard.addEventListener('click', () => navigateToRoute({ view: 'memory-levels' }));
lettersGameCard.addEventListener('click', () => navigateToRoute({ view: 'letters-levels' }));
levelHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
levelButtons.forEach((button) => button.addEventListener('click', () => selectLevel(button.dataset.level)));
startButton.addEventListener('click', () => navigateToRoute({ view: 'memory-game' }));
resetButton.addEventListener('click', renderGame);
backButton.addEventListener('click', () => navigateBack({ view: 'memory-levels' }));
playAgainButton.addEventListener('click', renderGame);
homeButton.addEventListener('click', () => navigateToRoute({ view: 'games-menu' }));

lettersLevelHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
lettersStartButton.addEventListener('click', () => navigateToRoute({ view: 'letters-game' }));
lettersBackButton.addEventListener('click', () => navigateBack({ view: 'letters-levels' }));
lettersResetButton.addEventListener('click', startAnimalGame);
lettersPlayAgainButton.addEventListener('click', startAnimalGame);
lettersHomeButton.addEventListener('click', () => navigateToRoute({ view: 'games-menu' }));

playlistButtons.forEach((button) => button.addEventListener('click', () => navigateToRoute({
  view: 'watch-playlist',
  playlistKey: button.dataset.playlist
})));
videoBrowserBackButton.addEventListener('click', () => navigateBack({ view: 'watch-menu' }));
showMoreVideosButton.addEventListener('click', appendNextVideoBatch);
closeVideoPlayerButton.addEventListener('click', () => navigateBack({
  view: 'watch-playlist',
  playlistKey: activePlaylistKey || currentRouteState.playlistKey
}));
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



const initialRouteState = normalizeRouteState(window.history.state);
window.history.replaceState(initialRouteState, '');
applyRouteState(initialRouteState);


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
