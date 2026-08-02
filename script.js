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

const animalLevels = {
  one: {
    label: 'المستوى الأول',
    startLabel: 'ابدأ المستوى الأول',
    cards: [
      { id: 'lion', letter: 'أ', label: 'أسد', image: 'lion.webp' },
      { id: 'duck', letter: 'ب', label: 'بطة', image: 'duck.webp' },
      { id: 'crocodile', letter: 'ت', label: 'تمساح', image: 'crocodile.webp' }
    ]
  },
  two: {
    label: 'المستوى الثاني',
    startLabel: 'ابدأ المستوى الثاني',
    cards: [
      { id: 'monkey', letter: 'ق', label: 'قرد', image: 'monkey.webp' },
      { id: 'chicken', letter: 'د', label: 'دجاجة', image: 'chicken.webp' },
      { id: 'turtle', letter: 'س', label: 'سلحفاة', image: 'turtle.webp' },
      { id: 'giraffe', letter: 'ز', label: 'زرافة', image: 'giraffe.webp' },
      { id: 'rabbit', letter: 'أ', label: 'أرنب', image: 'rabbit.webp' },
      { id: 'camel', letter: 'ج', label: 'جمل', image: 'camel.webp' },
      { id: 'bear', letter: 'د', label: 'دب', image: 'bear.webp' },
      { id: 'cow', letter: 'ب', label: 'بقرة', image: 'cow.webp' },
      { id: 'elephant', letter: 'ف', label: 'فيل', image: 'elephant.webp' },
      { id: 'sheep', letter: 'خ', label: 'خروف', image: 'sheep.webp' }
    ]
  }
};


// نصوص الآيات بالرسم العثماني، مع حفظ مفتاح السورة والآية للتدقيق.
const quranLevelOneQuestions = [
  {
    id: '105-1', verseKey: '105:1', surah: 'الفيل',
    verse: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَـٰبِ ٱلْفِيلِ',
    options: ['قريش', 'الفيل', 'الماعون']
  },
  {
    id: '106-2', verseKey: '106:2', surah: 'قريش',
    verse: 'إِۦلَـٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ',
    options: ['النصر', 'الفيل', 'قريش']
  },
  {
    id: '107-3', verseKey: '107:3', surah: 'الماعون',
    verse: 'وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ',
    options: ['الماعون', 'المسد', 'الكافرون']
  },
  {
    id: '108-1', verseKey: '108:1', surah: 'الكوثر',
    verse: 'إِنَّآ أَعْطَيْنَـٰكَ ٱلْكَوْثَرَ',
    options: ['الإخلاص', 'الكوثر', 'النصر']
  },
  {
    id: '109-2', verseKey: '109:2', surah: 'الكافرون',
    verse: 'لَآ أَعْبُدُ مَا تَعْبُدُونَ',
    options: ['الناس', 'الإخلاص', 'الكافرون']
  },
  {
    id: '110-2', verseKey: '110:2', surah: 'النصر',
    verse: 'وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًۭا',
    options: ['الفيل', 'النصر', 'قريش']
  },
  {
    id: '111-3', verseKey: '111:3', surah: 'المسد',
    verse: 'سَيَصْلَىٰ نَارًۭا ذَاتَ لَهَبٍۢ',
    options: ['الفلق', 'الكوثر', 'المسد']
  },
  {
    id: '112-2', verseKey: '112:2', surah: 'الإخلاص',
    verse: 'ٱللَّهُ ٱلصَّمَدُ',
    options: ['الناس', 'الإخلاص', 'الفلق']
  },
  {
    id: '113-3', verseKey: '113:3', surah: 'الفلق',
    verse: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
    options: ['المسد', 'الفلق', 'الناس']
  },
  {
    id: '114-4', verseKey: '114:4', surah: 'الناس',
    verse: 'مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ',
    options: ['الكافرون', 'الفلق', 'الناس']
  },
  {
    id: '105-2', verseKey: '105:2', surah: 'الفيل',
    verse: 'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍۢ',
    options: ['قريش', 'الفيل', 'النصر']
  },
  {
    id: '106-3', verseKey: '106:3', surah: 'قريش',
    verse: 'فَلْيَعْبُدُوا۟ رَبَّ هَـٰذَا ٱلْبَيْتِ',
    options: ['الكافرون', 'الفيل', 'قريش']
  },
  {
    id: '107-5', verseKey: '107:5', surah: 'الماعون',
    verse: 'ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ',
    options: ['المسد', 'الماعون', 'الكوثر']
  },
  {
    id: '108-2', verseKey: '108:2', surah: 'الكوثر',
    verse: 'فَصَلِّ لِرَبِّكَ وَٱنْحَرْ',
    options: ['الإخلاص', 'الكوثر', 'النصر']
  },
  {
    id: '109-6', verseKey: '109:6', surah: 'الكافرون',
    verse: 'لَكُمْ دِينُكُمْ وَلِىَ دِينِ',
    options: ['الناس', 'قريش', 'الكافرون']
  },
  {
    id: '110-3', verseKey: '110:3', surah: 'النصر',
    verse: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ ۚ إِنَّهُۥ كَانَ تَوَّابًۢا',
    options: ['الفيل', 'النصر', 'الماعون']
  },
  {
    id: '111-5', verseKey: '111:5', surah: 'المسد',
    verse: 'فِى جِيدِهَا حَبْلٌۭ مِّن مَّسَدٍۭ',
    options: ['الفلق', 'الكافرون', 'المسد']
  },
  {
    id: '112-3', verseKey: '112:3', surah: 'الإخلاص',
    verse: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
    options: ['الناس', 'الإخلاص', 'الفلق']
  },
  {
    id: '113-5', verseKey: '113:5', surah: 'الفلق',
    verse: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
    options: ['المسد', 'الفلق', 'الناس']
  },
  {
    id: '114-6', verseKey: '114:6', surah: 'الناس',
    verse: 'مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ',
    options: ['الإخلاص', 'الفلق', 'الناس']
  }
];



// المستوى الثاني: سور التين والعلق والقدر والبينة والزلزلة والعاديات والقارعة والتكاثر والعصر والهمزة.
const quranLevelTwoQuestions = [
  {
    id: '95-4', verseKey: '95:4', surah: 'التين',
    verse: 'لَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍۢ',
    options: ['العلق', 'التين', 'القدر']
  },
  {
    id: '96-5', verseKey: '96:5', surah: 'العلق',
    verse: 'عَلَّمَ ٱلْإِنسَـٰنَ مَا لَمْ يَعْلَمْ',
    options: ['البينة', 'العلق', 'التين']
  },
  {
    id: '97-3', verseKey: '97:3', surah: 'القدر',
    verse: 'لَيْلَةُ ٱلْقَدْرِ خَيْرٌۭ مِّنْ أَلْفِ شَهْرٍۢ',
    options: ['الزلزلة', 'القدر', 'البينة']
  },
  {
    id: '98-3', verseKey: '98:3', surah: 'البينة',
    verse: 'فِيهَا كُتُبٌۭ قَيِّمَةٌۭ',
    options: ['العاديات', 'البينة', 'القدر']
  },
  {
    id: '99-7', verseKey: '99:7', surah: 'الزلزلة',
    verse: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًۭا يَرَهُۥ',
    options: ['القارعة', 'الزلزلة', 'العاديات']
  },
  {
    id: '100-6', verseKey: '100:6', surah: 'العاديات',
    verse: 'إِنَّ ٱلْإِنسَـٰنَ لِرَبِّهِۦ لَكَنُودٌۭ',
    options: ['العصر', 'العاديات', 'التكاثر']
  },
  {
    id: '101-6', verseKey: '101:6', surah: 'القارعة',
    verse: 'فَأَمَّا مَن ثَقُلَتْ مَوَٰزِينُهُۥ',
    options: ['الهمزة', 'القارعة', 'الزلزلة']
  },
  {
    id: '102-8', verseKey: '102:8', surah: 'التكاثر',
    verse: 'ثُمَّ لَتُسْـَٔلُنَّ يَوْمَئِذٍ عَنِ ٱلنَّعِيمِ',
    options: ['العصر', 'التكاثر', 'الهمزة']
  },
  {
    id: '103-2', verseKey: '103:2', surah: 'العصر',
    verse: 'إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ',
    options: ['التكاثر', 'العصر', 'التين']
  },
  {
    id: '104-1', verseKey: '104:1', surah: 'الهمزة',
    verse: 'وَيْلٌۭ لِّكُلِّ هُمَزَةٍۢ لُّمَزَةٍ',
    options: ['القارعة', 'الهمزة', 'العاديات']
  },
  {
    id: '95-5', verseKey: '95:5', surah: 'التين',
    verse: 'ثُمَّ رَدَدْنَـٰهُ أَسْفَلَ سَـٰفِلِينَ',
    options: ['العلق', 'العصر', 'التين']
  },
  {
    id: '96-8', verseKey: '96:8', surah: 'العلق',
    verse: 'إِنَّ إِلَىٰ رَبِّكَ ٱلرُّجْعَىٰٓ',
    options: ['القدر', 'العلق', 'البينة']
  },
  {
    id: '97-5', verseKey: '97:5', surah: 'القدر',
    verse: 'سَلَـٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ',
    options: ['التين', 'القدر', 'الزلزلة']
  },
  {
    id: '98-7', verseKey: '98:7', surah: 'البينة',
    verse: 'إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ أُو۟لَـٰٓئِكَ هُمْ خَيْرُ ٱلْبَرِيَّةِ',
    options: ['العاديات', 'البينة', 'الهمزة']
  },
  {
    id: '99-6', verseKey: '99:6', surah: 'الزلزلة',
    verse: 'يَوْمَئِذٍۢ يَصْدُرُ ٱلنَّاسُ أَشْتَاتًۭا لِّيُرَوْا۟ أَعْمَـٰلَهُمْ',
    options: ['القارعة', 'الزلزلة', 'التكاثر']
  },
  {
    id: '100-9', verseKey: '100:9', surah: 'العاديات',
    verse: 'أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِى ٱلْقُبُورِ',
    options: ['العصر', 'العاديات', 'القارعة']
  },
  {
    id: '101-8', verseKey: '101:8', surah: 'القارعة',
    verse: 'وَأَمَّا مَنْ خَفَّتْ مَوَٰزِينُهُۥ',
    options: ['الزلزلة', 'الهمزة', 'القارعة']
  },
  {
    id: '102-5', verseKey: '102:5', surah: 'التكاثر',
    verse: 'كَلَّا لَوْ تَعْلَمُونَ عِلْمَ ٱلْيَقِينِ',
    options: ['التين', 'التكاثر', 'القدر']
  },
  {
    id: '103-3', verseKey: '103:3', surah: 'العصر',
    verse: 'إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ',
    options: ['البينة', 'العلق', 'العصر']
  },
  {
    id: '104-3', verseKey: '104:3', surah: 'الهمزة',
    verse: 'يَحْسَبُ أَنَّ مَالَهُۥٓ أَخْلَدَهُۥ',
    options: ['التكاثر', 'الهمزة', 'العاديات']
  }
];

const quranLevels = {
  one: {
    label: 'المستوى الأول',
    questions: quranLevelOneQuestions
  },
  two: {
    label: 'المستوى الثاني',
    questions: quranLevelTwoQuestions
  }
};


const puzzleImages = {
  cat: { id: 'cat', label: 'إطعام القطة', image: 'puzzle-cat.webp' },
  plant: { id: 'plant', label: 'سقاية النبتة', image: 'puzzle-plant.webp' },
  toys: { id: 'toys', label: 'ترتيب الألعاب', image: 'puzzle-toys.webp' },
  trash: { id: 'trash', label: 'المحافظة على النظافة', image: 'puzzle-trash.webp' },
  elder: { id: 'elder', label: 'مساعدة الرجل الكبير', image: 'puzzle-elder.webp' },
  books: { id: 'books', label: 'مساعدة الطفل', image: 'puzzle-books.webp' }
};

const puzzleLevels = {
  one: {
    label: 'المستوى الأول',
    rows: 2,
    cols: 2,
    images: [puzzleImages.cat, puzzleImages.plant]
  },
  two: {
    label: 'المستوى الثاني',
    rows: 3,
    cols: 3,
    images: [puzzleImages.toys, puzzleImages.trash, puzzleImages.elder, puzzleImages.books]
  }
};



const letterHuntLevels = {
  one: {
    label: 'المستوى الأول',
    goal: 10,
    spawnInterval: 940,
    speedMin: 72,
    speedMax: 100,
    targetChance: 0.43,
    targetPool: ['أ', 'ب', 'د', 'س', 'م', 'ن', 'و', 'ك'],
    letterPool: ['أ', 'ب', 'د', 'س', 'م', 'ن', 'و', 'ك', 'ر', 'ل']
  },
  two: {
    label: 'المستوى الثاني',
    goal: 15,
    spawnInterval: 730,
    speedMin: 105,
    speedMax: 148,
    targetChance: 0.38,
    targetPool: ['ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'س', 'ش', 'د', 'ذ'],
    letterPool: ['ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'س', 'ش', 'د', 'ذ'],
    similarGroups: [
      ['ب', 'ت', 'ث'],
      ['ج', 'ح', 'خ'],
      ['س', 'ش'],
      ['د', 'ذ']
    ]
  }
};

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
const quranLevelScreen = document.querySelector('#quran-level-screen');
const quranGameScreen = document.querySelector('#quran-game-screen');
const puzzleLevelScreen = document.querySelector('#puzzle-level-screen');
const puzzleGameScreen = document.querySelector('#puzzle-game-screen');
const letterHuntLevelScreen = document.querySelector('#letter-hunt-level-screen');
const letterHuntGameScreen = document.querySelector('#letter-hunt-game-screen');
const allScreens = [homeScreen, gamesMenuScreen, watchMenuScreen, levelScreen, gameScreen, lettersLevelScreen, lettersGameScreen, quranLevelScreen, quranGameScreen, puzzleLevelScreen, puzzleGameScreen, letterHuntLevelScreen, letterHuntGameScreen];

const openGamesSectionButton = document.querySelector('#open-games-section');
const openWatchSectionButton = document.querySelector('#open-watch-section');
const gamesMenuHomeButton = document.querySelector('#games-menu-home-button');
const watchMenuHomeButton = document.querySelector('#watch-menu-home-button');

const board = document.querySelector('#game-board');
const memoryGameCard = document.querySelector('#memory-game-card');
const lettersGameCard = document.querySelector('#letters-game-card');
const quranGameCard = document.querySelector('#quran-game-card');
const puzzleGameCard = document.querySelector('#puzzle-game-card');
const letterHuntGameCard = document.querySelector('#letter-hunt-game-card');
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
const lettersLevelButtons = [...document.querySelectorAll('.letters-level-card[data-animal-level]')];
const lettersStartButton = document.querySelector('#letters-start-button');
const lettersBackButton = document.querySelector('#letters-back-button');
const lettersResetButton = document.querySelector('#letters-reset-button');
const lettersGameLevelLabel = document.querySelector('#letters-game-level-label');
const lettersQuestionCount = document.querySelector('#letters-question-count');
const lettersScore = document.querySelector('#letters-score');
const targetLetter = document.querySelector('#target-letter');
const animalOptions = document.querySelector('#animal-options');
const lettersFeedback = document.querySelector('#letters-feedback');
const lettersWinModal = document.querySelector('#letters-win-modal');
const lettersWinText = document.querySelector('#letters-win-text');
const lettersCelebrationAnimals = document.querySelector('#letters-celebration-animals');
const lettersPlayAgainButton = document.querySelector('#letters-play-again-button');
const lettersHomeButton = document.querySelector('#letters-home-button');


const quranLevelHomeButton = document.querySelector('#quran-level-home-button');
const quranLevelButtons = [...document.querySelectorAll('.quran-level-card[data-quran-level]')];
const quranStartButton = document.querySelector('#quran-start-button');
const quranBackButton = document.querySelector('#quran-back-button');
const quranResetButton = document.querySelector('#quran-reset-button');
const quranGameLevelLabel = document.querySelector('#quran-game-level-label');
const quranQuestionCount = document.querySelector('#quran-question-count');
const quranScore = document.querySelector('#quran-score');
const quranVerseText = document.querySelector('#quran-verse-text');
const quranOptions = document.querySelector('#quran-options');
const quranFeedback = document.querySelector('#quran-feedback');
const quranWinModal = document.querySelector('#quran-win-modal');
const quranPlayAgainButton = document.querySelector('#quran-play-again-button');
const quranHomeButton = document.querySelector('#quran-home-button');

const puzzleLevelHomeButton = document.querySelector('#puzzle-level-home-button');
const puzzleLevelButtons = [...document.querySelectorAll('.puzzle-level-card[data-puzzle-level]')];
const puzzleImagePicker = document.querySelector('#puzzle-image-picker');
const puzzleImageButtons = [...document.querySelectorAll('.puzzle-choice-button[data-puzzle-image]')];
const puzzleBackButton = document.querySelector('#puzzle-back-button');
const puzzleGameLevelLabel = document.querySelector('#puzzle-game-level-label');
const puzzlePieceCount = document.querySelector('#puzzle-piece-count');
const puzzleImageLabel = document.querySelector('#puzzle-image-label');
const puzzlePreviewOverlay = document.querySelector('#puzzle-preview-overlay');
const puzzlePreviewImage = document.querySelector('#puzzle-preview-image');
const puzzleWorkspace = document.querySelector('#puzzle-workspace');
const puzzleBoard = document.querySelector('#puzzle-board');
const puzzleTray = document.querySelector('#puzzle-tray');
const puzzleFeedback = document.querySelector('#puzzle-feedback');
const puzzleResetButton = document.querySelector('#puzzle-reset-button');
const puzzleWinModal = document.querySelector('#puzzle-win-modal');
const puzzlePlayAgainButton = document.querySelector('#puzzle-play-again-button');
const puzzleLevelsButton = document.querySelector('#puzzle-levels-button');
const puzzleHomeButton = document.querySelector('#puzzle-home-button');




const letterHuntLevelHomeButton = document.querySelector('#letter-hunt-level-home-button');
const letterHuntLevelButtons = [...document.querySelectorAll('.letter-hunt-level-card[data-letter-hunt-level]')];
const letterHuntBackButton = document.querySelector('#letter-hunt-back-button');
const letterHuntGameLevelLabel = document.querySelector('#letter-hunt-game-level-label');
const letterHuntScore = document.querySelector('#letter-hunt-score');
const letterHuntLives = document.querySelector('#letter-hunt-lives');
const letterHuntTarget = document.querySelector('#letter-hunt-target');
const letterHuntField = document.querySelector('#letter-hunt-field');
const letterHuntLettersLayer = document.querySelector('#letter-hunt-letters-layer');
const letterHuntBasket = document.querySelector('#letter-hunt-basket');
const letterHuntFeedback = document.querySelector('#letter-hunt-feedback');
const letterHuntResetButton = document.querySelector('#letter-hunt-reset-button');
const letterHuntWinModal = document.querySelector('#letter-hunt-win-modal');
const letterHuntWinText = document.querySelector('#letter-hunt-win-text');
const letterHuntPlayAgainButton = document.querySelector('#letter-hunt-play-again-button');
const letterHuntHomeButton = document.querySelector('#letter-hunt-home-button');
const letterHuntLoseModal = document.querySelector('#letter-hunt-lose-modal');
const letterHuntLoseText = document.querySelector('#letter-hunt-lose-text');
const letterHuntTryAgainButton = document.querySelector('#letter-hunt-try-again-button');
const letterHuntLoseHomeButton = document.querySelector('#letter-hunt-lose-home-button');

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
const socialLinksToggleButton = document.querySelector('#social-links-toggle');
const socialLinksSubmenu = document.querySelector('#social-links-submenu');
const shareAppButton = document.querySelector('#share-app-button');
const shareAppStatus = document.querySelector('#share-app-status');
const aboutAppButton = document.querySelector('#about-app-button');
const soundToggleButton = document.querySelector('#sound-toggle-button');
const soundToggleStatus = document.querySelector('#sound-toggle-status');
const soundToggleIcon = document.querySelector('#sound-toggle-icon');
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

const SOUND_STORAGE_KEY = 'almoallem-sound-enabled';
let soundEnabled = true;
let audioContext = null;
const SPOKEN_AUDIO_PATHS = {
  'أحسنت': './audio/ahsant.wav',
  'رائع': './audio/raaie.wav',
  'ممتاز يا بطل': './audio/mumtaz.wav',
  'حاول مرة أخرى': './audio/hawel.wav',
  'رائع يا بطل، أنهيت المستوى': './audio/win.wav',
  'رائع يا بطل، أكملت المستوى': './audio/win.wav',
  'ما شاء الله': './audio/mashallah.wav',
  'ما شاء الله، زادك الله حبًّا وحفظًا للقرآن': './audio/quran-level-complete.wav',
  'انتهت المحاولات، حاول مرة أخرى': './audio/letter-hunt-lose.wav'
};
const spokenAudioCache = new Map();
let activeSpokenAudio = null;

try {
  const savedSoundSetting = window.localStorage.getItem(SOUND_STORAGE_KEY);
  soundEnabled = savedSoundSetting !== 'false';
} catch {
  soundEnabled = true;
}

function updateSoundToggle() {
  if (!soundToggleButton) return;
  soundToggleButton.setAttribute('aria-pressed', String(soundEnabled));
  soundToggleStatus.textContent = soundEnabled ? 'مفعّلة' : 'متوقفة';
  soundToggleIcon.textContent = soundEnabled ? '🔊' : '🔇';
}

function ensureAudioContext() {
  if (!soundEnabled) return null;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioContext) audioContext = new AudioContextClass();
  if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
  return audioContext;
}

function playFeedbackTone(kind = 'correct') {
  if (!soundEnabled) return;
  const context = ensureAudioContext();
  if (!context) return;
  const now = context.currentTime;
  const notes = kind === 'wrong'
    ? [{ frequency: 235, at: 0, duration: 0.13 }, { frequency: 185, at: 0.14, duration: 0.18 }]
    : kind === 'win'
      ? [
          { frequency: 523, at: 0, duration: 0.13 },
          { frequency: 659, at: 0.14, duration: 0.13 },
          { frequency: 784, at: 0.28, duration: 0.24 }
        ]
      : [{ frequency: 659, at: 0, duration: 0.12 }, { frequency: 880, at: 0.13, duration: 0.18 }];

  notes.forEach(({ frequency, at, duration }) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, now + at);
    gain.gain.setValueAtTime(0.0001, now + at);
    gain.gain.exponentialRampToValueAtTime(0.16, now + at + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + at + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now + at);
    oscillator.stop(now + at + duration + 0.03);
  });
}

function getSpokenAudio(path) {
  if (!spokenAudioCache.has(path)) {
    const audio = new Audio(path);
    audio.preload = 'auto';
    audio.playsInline = true;
    spokenAudioCache.set(path, audio);
  }
  return spokenAudioCache.get(path);
}

function stopSpokenAudio() {
  if (!activeSpokenAudio) return;
  activeSpokenAudio.pause();
  activeSpokenAudio.currentTime = 0;
  activeSpokenAudio = null;
}

function playEncouragement(kind, phrase) {
  if (!soundEnabled) return;
  const path = SPOKEN_AUDIO_PATHS[phrase];
  if (!path) {
    playFeedbackTone(kind);
    return;
  }

  stopSpokenAudio();
  const audio = getSpokenAudio(path);
  activeSpokenAudio = audio;
  audio.currentTime = 0;
  audio.volume = 1;
  audio.play().catch(() => playFeedbackTone(kind));
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  try { window.localStorage.setItem(SOUND_STORAGE_KEY, String(soundEnabled)); } catch {}
  if (!soundEnabled) stopSpokenAudio();
  updateSoundToggle();
  if (soundEnabled) playFeedbackTone('correct');
}

updateSoundToggle();
Object.values(SPOKEN_AUDIO_PATHS).forEach((path) => getSpokenAudio(path));

let selectedAnimalLevel = 'one';
let activeAnimalCards = animalLevels.one.cards;
let animalQuestions = [];
let animalQuestionIndex = 0;
let animalCorrectCount = 0;
let animalLocked = false;

const QURAN_ROUND_SIZE = 10;
const QURAN_QUEUE_STORAGE_PREFIX = 'almoallem-quran-level-queue-v2';
let selectedQuranLevel = 'one';
let activeQuranQuestions = quranLevels.one.questions;
let quranRoundQuestions = [];
let quranQuestionIndex = 0;
let quranCorrectCount = 0;
let quranLocked = false;
const quranQueueMemoryStates = {
  one: { remainingIds: [], lastRoundIds: [] },
  two: { remainingIds: [], lastRoundIds: [] }
};

selectQuranLevel('one');



const PUZZLE_LEVEL_ONE_STORAGE_KEY = 'almoallem-puzzle-level-one-next-v1';
let selectedPuzzleLevel = 'one';
let activePuzzleImage = puzzleLevels.one.images[0];
let puzzlePieces = [];
let puzzlePlacedCount = 0;
let puzzlePreviewTimer = null;
let puzzleResizeTimer = null;
let puzzleLayoutToken = 0;



let selectedLetterHuntLevel = 'one';
let letterHuntRunning = false;
let letterHuntAnimationFrame = null;
let letterHuntLastFrame = 0;
let letterHuntNextSpawnAt = 0;
let letterHuntFallingLetters = [];
let letterHuntScoreValue = 0;
let letterHuntLivesValue = 3;
let letterHuntTargetValue = '';
let letterHuntLastTarget = '';
let letterHuntBasketX = 0;
let letterHuntSpawnsSinceTarget = 0;
let letterHuntFeedbackTimer = null;
let letterHuntResizeTimer = null;

function selectLetterHuntLevel(levelName) {
  if (!letterHuntLevels[levelName]) return;
  selectedLetterHuntLevel = levelName;
  letterHuntLevelButtons.forEach((button) => {
    const selected = button.dataset.letterHuntLevel === selectedLetterHuntLevel;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function chooseLetterHuntTarget() {
  const pool = letterHuntLevels[selectedLetterHuntLevel].targetPool;
  const choices = pool.filter((letter) => letter !== letterHuntLastTarget);
  const source = choices.length ? choices : pool;
  letterHuntTargetValue = source[Math.floor(Math.random() * source.length)];
  letterHuntLastTarget = letterHuntTargetValue;
  letterHuntSpawnsSinceTarget = 0;
  letterHuntTarget.textContent = letterHuntTargetValue;
}

function updateLetterHuntHud() {
  const level = letterHuntLevels[selectedLetterHuntLevel];
  letterHuntGameLevelLabel.textContent = level.label;
  letterHuntScore.textContent = `⭐ ${letterHuntScoreValue} / ${level.goal}`;
  letterHuntLives.textContent = `${'❤️ '.repeat(letterHuntLivesValue)}${'🤍 '.repeat(Math.max(0, 3 - letterHuntLivesValue))}`.trim();
  letterHuntLives.setAttribute('aria-label', `${letterHuntLivesValue} محاولات متبقية`);
}

function clearLetterHuntFeedbackTimer() {
  if (letterHuntFeedbackTimer) window.clearTimeout(letterHuntFeedbackTimer);
  letterHuntFeedbackTimer = null;
}

function setLetterHuntFeedback(message, type = '') {
  clearLetterHuntFeedbackTimer();
  letterHuntFeedback.textContent = message;
  letterHuntFeedback.className = `letter-hunt-feedback${type ? ` ${type}-feedback` : ''}`;
  if (letterHuntRunning && type) {
    letterHuntFeedbackTimer = window.setTimeout(() => {
      if (!letterHuntRunning) return;
      letterHuntFeedback.textContent = `اصطد حرف ${letterHuntTargetValue}`;
      letterHuntFeedback.className = 'letter-hunt-feedback';
    }, 900);
  }
}

function clearLetterHuntLetters() {
  letterHuntFallingLetters.forEach((item) => item.element.remove());
  letterHuntFallingLetters = [];
  letterHuntLettersLayer.replaceChildren();
}

function stopLetterHuntGame(options = {}) {
  letterHuntRunning = false;
  if (letterHuntAnimationFrame) cancelAnimationFrame(letterHuntAnimationFrame);
  letterHuntAnimationFrame = null;
  letterHuntLastFrame = 0;
  if (letterHuntResizeTimer) window.clearTimeout(letterHuntResizeTimer);
  letterHuntResizeTimer = null;
  clearLetterHuntFeedbackTimer();
  if (options.clear !== false) clearLetterHuntLetters();
}

function positionLetterHuntBasket(nextX) {
  const fieldWidth = letterHuntField.clientWidth;
  const basketWidth = letterHuntBasket.offsetWidth || 82;
  const maxX = Math.max(0, fieldWidth - basketWidth);
  letterHuntBasketX = Math.max(0, Math.min(maxX, nextX));
  letterHuntBasket.style.transform = `translate3d(${letterHuntBasketX}px, 0, 0)`;
  const percent = maxX > 0 ? Math.round((letterHuntBasketX / maxX) * 100) : 50;
  letterHuntBasket.setAttribute('aria-valuenow', String(percent));
}

function centerLetterHuntBasket() {
  const maxX = Math.max(0, letterHuntField.clientWidth - (letterHuntBasket.offsetWidth || 82));
  positionLetterHuntBasket(maxX / 2);
}

function getLetterHuntDistractors() {
  const level = letterHuntLevels[selectedLetterHuntLevel];
  if (level.similarGroups) {
    const group = level.similarGroups.find((items) => items.includes(letterHuntTargetValue));
    if (group && Math.random() < 0.78) {
      const similar = group.filter((letter) => letter !== letterHuntTargetValue);
      if (similar.length) return similar;
    }
  }
  return level.letterPool.filter((letter) => letter !== letterHuntTargetValue);
}

function spawnLetterHuntLetter(timestamp) {
  if (!letterHuntRunning) return;
  const level = letterHuntLevels[selectedLetterHuntLevel];
  const forceTarget = letterHuntSpawnsSinceTarget >= 4;
  const isTarget = forceTarget || Math.random() < level.targetChance;
  const distractors = getLetterHuntDistractors();
  const letter = isTarget
    ? letterHuntTargetValue
    : distractors[Math.floor(Math.random() * distractors.length)];
  const size = selectedLetterHuntLevel === 'one'
    ? 58 + Math.floor(Math.random() * 8)
    : 52 + Math.floor(Math.random() * 9);
  const maxX = Math.max(0, letterHuntField.clientWidth - size - 8);
  const element = document.createElement('span');
  element.className = `falling-letter tone-${1 + Math.floor(Math.random() * 4)}`;
  element.textContent = letter;
  element.style.width = `${size}px`;
  element.style.height = `${size}px`;
  letterHuntLettersLayer.appendChild(element);
  const item = {
    element,
    letter,
    isTarget,
    size,
    x: 4 + Math.random() * maxX,
    y: -size - 8,
    speed: level.speedMin + Math.random() * (level.speedMax - level.speedMin)
  };
  element.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
  letterHuntFallingLetters.push(item);
  letterHuntSpawnsSinceTarget = isTarget ? 0 : letterHuntSpawnsSinceTarget + 1;
  const jitter = (Math.random() * 160) - 80;
  letterHuntNextSpawnAt = timestamp + level.spawnInterval + jitter;
}

function animateLetterHuntBasket(className) {
  letterHuntBasket.classList.remove('basket-pop', 'basket-shake');
  void letterHuntBasket.offsetWidth;
  letterHuntBasket.classList.add(className);
  window.setTimeout(() => letterHuntBasket.classList.remove(className), 420);
}

function removeLetterHuntItem(index) {
  const [item] = letterHuntFallingLetters.splice(index, 1);
  if (item) item.element.remove();
  return item;
}

function finishLetterHuntGame(won) {
  stopLetterHuntGame();
  if (won) {
    const level = letterHuntLevels[selectedLetterHuntLevel];
    letterHuntWinText.textContent = `جمعت ${level.goal} حروف صحيحة وأنهيت ${level.label} بنجاح.`;
    letterHuntWinModal.classList.remove('hidden');
    playEncouragement('win', 'رائع يا بطل، أنهيت المستوى');
    letterHuntPlayAgainButton.focus();
    return;
  }
  letterHuntLoseText.textContent = `جمعت ${letterHuntScoreValue} حروف صحيحة. لا بأس، جرّب من جديد وانتبه إلى الحرف المطلوب.`;
  letterHuntLoseModal.classList.remove('hidden');
  playEncouragement('wrong', 'انتهت المحاولات، حاول مرة أخرى');
  letterHuntTryAgainButton.focus();
}

function handleLetterHuntCatch(index) {
  const item = removeLetterHuntItem(index);
  if (!item || !letterHuntRunning) return;

  if (item.letter === letterHuntTargetValue) {
    letterHuntScoreValue += 1;
    updateLetterHuntHud();
    animateLetterHuntBasket('basket-pop');
    const praises = ['أحسنت', 'رائع', 'ممتاز يا بطل'];
    playEncouragement('correct', praises[Math.floor(Math.random() * praises.length)]);
    setLetterHuntFeedback('أحسنت! التقطت الحرف الصحيح', 'correct');
    clearLetterHuntLetters();
    if (letterHuntScoreValue >= letterHuntLevels[selectedLetterHuntLevel].goal) {
      letterHuntRunning = false;
      if (letterHuntAnimationFrame) cancelAnimationFrame(letterHuntAnimationFrame);
      letterHuntAnimationFrame = null;
      window.setTimeout(() => finishLetterHuntGame(true), 260);
      return;
    }
    chooseLetterHuntTarget();
    updateLetterHuntHud();
    letterHuntNextSpawnAt = performance.now() + 620;
    return;
  }

  letterHuntLivesValue -= 1;
  updateLetterHuntHud();
  animateLetterHuntBasket('basket-shake');
  if (letterHuntLivesValue <= 0) {
    letterHuntRunning = false;
    if (letterHuntAnimationFrame) cancelAnimationFrame(letterHuntAnimationFrame);
    letterHuntAnimationFrame = null;
    setLetterHuntFeedback('انتهت المحاولات', 'wrong');
    window.setTimeout(() => finishLetterHuntGame(false), 220);
    return;
  }
  playEncouragement('wrong', 'حاول مرة أخرى');
  setLetterHuntFeedback(`هذا حرف ${item.letter}، المطلوب حرف ${letterHuntTargetValue}`, 'wrong');
}

function letterHuntLoop(timestamp) {
  if (!letterHuntRunning) return;
  if (!letterHuntLastFrame) letterHuntLastFrame = timestamp;
  const delta = Math.min(0.045, (timestamp - letterHuntLastFrame) / 1000);
  letterHuntLastFrame = timestamp;

  if (timestamp >= letterHuntNextSpawnAt) spawnLetterHuntLetter(timestamp);

  const fieldHeight = letterHuntField.clientHeight;
  const basketTop = letterHuntBasket.offsetTop;
  const basketWidth = letterHuntBasket.offsetWidth || 82;
  const basketHeight = letterHuntBasket.offsetHeight || 58;

  for (let index = letterHuntFallingLetters.length - 1; index >= 0; index -= 1) {
    const item = letterHuntFallingLetters[index];
    item.y += item.speed * delta;
    item.element.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;

    const itemBottom = item.y + item.size;
    const itemCenterX = item.x + (item.size / 2);
    const itemCenterY = item.y + (item.size * 0.58);
    const catchInset = basketWidth * 0.27;
    const catchLeft = letterHuntBasketX + catchInset;
    const catchRight = letterHuntBasketX + basketWidth - catchInset;
    const horizontalHit = itemCenterX >= catchLeft && itemCenterX <= catchRight;
    const verticalHit = itemBottom >= basketTop + 10
      && itemCenterY >= basketTop + 8
      && itemCenterY <= basketTop + basketHeight - 6;
    if (horizontalHit && verticalHit) {
      const caughtTarget = item.letter === letterHuntTargetValue;
      handleLetterHuntCatch(index);
      if (!letterHuntRunning) return;
      if (caughtTarget) {
        letterHuntAnimationFrame = requestAnimationFrame(letterHuntLoop);
        return;
      }
      continue;
    }
    if (item.y > fieldHeight + 12) removeLetterHuntItem(index);
  }

  letterHuntAnimationFrame = requestAnimationFrame(letterHuntLoop);
}

function startLetterHuntGame() {
  stopSpokenAudio();
  stopLetterHuntGame();
  letterHuntWinModal.classList.add('hidden');
  letterHuntLoseModal.classList.add('hidden');
  letterHuntScoreValue = 0;
  letterHuntLivesValue = 3;
  letterHuntSpawnsSinceTarget = 0;
  chooseLetterHuntTarget();
  updateLetterHuntHud();
  setLetterHuntFeedback(`اصطد حرف ${letterHuntTargetValue}`);
  letterHuntRunning = true;
  letterHuntLastFrame = 0;
  letterHuntNextSpawnAt = performance.now() + 450;
  ensureAudioContext();
  requestAnimationFrame(() => {
    centerLetterHuntBasket();
    if (letterHuntRunning) letterHuntAnimationFrame = requestAnimationFrame(letterHuntLoop);
  });
}

function restartLetterHuntGame() {
  startLetterHuntGame();
}

function beginLetterHuntBasketDrag(event) {
  if (!letterHuntRunning) return;
  event.preventDefault();
  ensureAudioContext();
  const fieldRect = letterHuntField.getBoundingClientRect();
  const pointerId = event.pointerId;
  const offsetX = event.clientX - fieldRect.left - letterHuntBasketX;
  letterHuntBasket.setPointerCapture(pointerId);

  const move = (moveEvent) => {
    if (moveEvent.pointerId !== pointerId) return;
    moveEvent.preventDefault();
    const rect = letterHuntField.getBoundingClientRect();
    positionLetterHuntBasket(moveEvent.clientX - rect.left - offsetX);
  };
  const end = (endEvent) => {
    if (endEvent.pointerId !== pointerId) return;
    letterHuntBasket.removeEventListener('pointermove', move);
    letterHuntBasket.removeEventListener('pointerup', end);
    letterHuntBasket.removeEventListener('pointercancel', end);
  };
  letterHuntBasket.addEventListener('pointermove', move);
  letterHuntBasket.addEventListener('pointerup', end);
  letterHuntBasket.addEventListener('pointercancel', end);
}


let requestedPlaylistKey = null;
let activePlaylistKey = null;
let activeVideoItems = [];
let visibleVideoCount = 0;
const VIDEO_PAGE_SIZE = 12;
const playlistVideoCache = new Map();


function selectPuzzleLevel(levelName) {
  if (!puzzleLevels[levelName]) return;
  selectedPuzzleLevel = levelName;
  puzzleLevelButtons.forEach((button) => {
    const isSelected = button.dataset.puzzleLevel === selectedPuzzleLevel;
    button.classList.toggle('selected', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });
  puzzleImagePicker.classList.toggle('hidden', selectedPuzzleLevel !== 'two');
  if (selectedPuzzleLevel === 'two') {
    window.setTimeout(() => puzzleImagePicker.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
  }
}

function getNextLevelOnePuzzleImage() {
  const images = puzzleLevels.one.images;
  let nextIndex = 0;
  try {
    const stored = Number.parseInt(window.localStorage.getItem(PUZZLE_LEVEL_ONE_STORAGE_KEY) || '0', 10);
    if (Number.isInteger(stored) && stored >= 0) nextIndex = stored % images.length;
    window.localStorage.setItem(PUZZLE_LEVEL_ONE_STORAGE_KEY, String((nextIndex + 1) % images.length));
  } catch {
    nextIndex = activePuzzleImage && activePuzzleImage.id === images[0].id ? 1 : 0;
  }
  return images[nextIndex];
}

function findPuzzleImage(levelName, imageId) {
  const level = puzzleLevels[levelName];
  if (!level) return null;
  return level.images.find((item) => item.id === imageId) || null;
}

function setActivePuzzle(levelName, imageId = '') {
  selectedPuzzleLevel = puzzleLevels[levelName] ? levelName : 'one';
  activePuzzleImage = findPuzzleImage(selectedPuzzleLevel, imageId) || puzzleLevels[selectedPuzzleLevel].images[0];
  selectPuzzleLevel(selectedPuzzleLevel);
}

function stopPuzzleTimers() {
  if (puzzlePreviewTimer) window.clearTimeout(puzzlePreviewTimer);
  if (puzzleResizeTimer) window.clearTimeout(puzzleResizeTimer);
  puzzlePreviewTimer = null;
  puzzleResizeTimer = null;
}

function clearPuzzlePieces() {
  puzzlePieces.forEach((piece) => {
    if (piece.element && piece.pointerDownHandler) {
      piece.element.removeEventListener('pointerdown', piece.pointerDownHandler);
    }
    if (piece.element) piece.element.remove();
  });
  puzzlePieces = [];
  puzzleBoard.replaceChildren();
}

function getPuzzleEdgeMaps(rows, cols) {
  const horizontal = Array.from({ length: Math.max(0, rows - 1) }, (_, row) => (
    Array.from({ length: cols }, (_, col) => ((row + col) % 2 === 0 ? 1 : -1))
  ));
  const vertical = Array.from({ length: rows }, (_, row) => (
    Array.from({ length: Math.max(0, cols - 1) }, (_, col) => ((row + col) % 2 === 0 ? -1 : 1))
  ));
  return { horizontal, vertical };
}

function getPieceEdges(row, col, rows, cols, maps) {
  return {
    top: row === 0 ? 0 : -maps.horizontal[row - 1][col],
    right: col === cols - 1 ? 0 : maps.vertical[row][col],
    bottom: row === rows - 1 ? 0 : maps.horizontal[row][col],
    left: col === 0 ? 0 : -maps.vertical[row][col - 1]
  };
}

function formatPuzzleNumber(value) {
  return Number(value.toFixed(2));
}

function addPuzzleEdge(parts, startX, startY, endX, endY, normalX, normalY, sign, depth) {
  const dx = endX - startX;
  const dy = endY - startY;
  const point = (ratio, offset = 0) => [
    formatPuzzleNumber(startX + (dx * ratio) + (normalX * offset)),
    formatPuzzleNumber(startY + (dy * ratio) + (normalY * offset))
  ];
  if (!sign) {
    parts.push(`L ${formatPuzzleNumber(endX)} ${formatPuzzleNumber(endY)}`);
    return;
  }
  const offset = sign * depth;
  const p35 = point(0.35);
  const p40 = point(0.40);
  const p40a = point(0.40, offset * 0.34);
  const p50 = point(0.50, offset);
  const p60a = point(0.60, offset * 0.34);
  const p60 = point(0.60);
  const p65 = point(0.65);
  const end = point(1);
  parts.push(`L ${p35[0]} ${p35[1]}`);
  parts.push(`C ${p40[0]} ${p40[1]} ${p40a[0]} ${p40a[1]} ${p40a[0]} ${p40a[1]}`);
  parts.push(`C ${p40a[0]} ${p40a[1]} ${point(0.43, offset)[0]} ${point(0.43, offset)[1]} ${p50[0]} ${p50[1]}`);
  parts.push(`C ${point(0.57, offset)[0]} ${point(0.57, offset)[1]} ${p60a[0]} ${p60a[1]} ${p60a[0]} ${p60a[1]}`);
  parts.push(`C ${p60a[0]} ${p60a[1]} ${p60[0]} ${p60[1]} ${p65[0]} ${p65[1]}`);
  parts.push(`L ${end[0]} ${end[1]}`);
}

function buildPuzzlePieceGeometry(cellSize, edges) {
  const depth = cellSize * 0.19;
  const leftExtension = edges.left > 0 ? depth : 0;
  const rightExtension = edges.right > 0 ? depth : 0;
  const topExtension = edges.top > 0 ? depth : 0;
  const bottomExtension = edges.bottom > 0 ? depth : 0;
  const x0 = leftExtension;
  const y0 = topExtension;
  const x1 = x0 + cellSize;
  const y1 = y0 + cellSize;
  const parts = [`M ${formatPuzzleNumber(x0)} ${formatPuzzleNumber(y0)}`];
  addPuzzleEdge(parts, x0, y0, x1, y0, 0, -1, edges.top, depth);
  addPuzzleEdge(parts, x1, y0, x1, y1, 1, 0, edges.right, depth);
  addPuzzleEdge(parts, x1, y1, x0, y1, 0, 1, edges.bottom, depth);
  addPuzzleEdge(parts, x0, y1, x0, y0, -1, 0, edges.left, depth);
  parts.push('Z');
  return {
    path: parts.join(' '),
    width: cellSize + leftExtension + rightExtension,
    height: cellSize + topExtension + bottomExtension,
    leftExtension,
    topExtension
  };
}

function createPuzzleTarget(piece, boardLeft, boardTop) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('puzzle-target-piece');
  svg.setAttribute('width', String(piece.geometry.width));
  svg.setAttribute('height', String(piece.geometry.height));
  svg.setAttribute('viewBox', `0 0 ${piece.geometry.width} ${piece.geometry.height}`);
  svg.style.left = `${piece.col * piece.cellSize - piece.geometry.leftExtension}px`;
  svg.style.top = `${piece.row * piece.cellSize - piece.geometry.topExtension}px`;
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', piece.geometry.path);
  path.setAttribute('fill', 'rgba(255,255,255,0.36)');
  path.setAttribute('stroke', 'rgba(31,113,153,0.42)');
  path.setAttribute('stroke-width', '2');
  path.setAttribute('stroke-dasharray', '7 5');
  svg.appendChild(path);
  puzzleBoard.appendChild(svg);
  piece.targetLeft = boardLeft + (piece.col * piece.cellSize) - piece.geometry.leftExtension;
  piece.targetTop = boardTop + (piece.row * piece.cellSize) - piece.geometry.topExtension;
}

function createPuzzlePieceElement(piece, boardSize) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('puzzle-piece');
  svg.setAttribute('width', String(piece.geometry.width));
  svg.setAttribute('height', String(piece.geometry.height));
  svg.setAttribute('viewBox', `0 0 ${piece.geometry.width} ${piece.geometry.height}`);
  svg.setAttribute('role', 'button');
  svg.setAttribute('aria-label', `قطعة البزل ${piece.index + 1}`);
  svg.tabIndex = 0;

  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
  const clipId = `puzzle-clip-${puzzleLayoutToken}-${piece.index}`;
  clipPath.setAttribute('id', clipId);
  const clipShape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  clipShape.setAttribute('d', piece.geometry.path);
  clipPath.appendChild(clipShape);
  defs.appendChild(clipPath);
  svg.appendChild(defs);

  const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  image.setAttribute('href', activePuzzleImage.image);
  image.setAttribute('x', String(piece.geometry.leftExtension - (piece.col * piece.cellSize)));
  image.setAttribute('y', String(piece.geometry.topExtension - (piece.row * piece.cellSize)));
  image.setAttribute('width', String(boardSize));
  image.setAttribute('height', String(boardSize));
  image.setAttribute('preserveAspectRatio', 'none');
  image.setAttribute('clip-path', `url(#${clipId})`);
  svg.appendChild(image);

  const outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  outline.setAttribute('d', piece.geometry.path);
  outline.setAttribute('fill', 'none');
  outline.setAttribute('stroke', 'rgba(255,255,255,0.92)');
  outline.setAttribute('stroke-width', '3');
  outline.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(outline);

  piece.element = svg;
  piece.pointerDownHandler = (event) => beginPuzzleDrag(event, piece);
  svg.addEventListener('pointerdown', piece.pointerDownHandler);
  svg.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      snapPuzzlePiece(piece);
    }
  });
  puzzleWorkspace.appendChild(svg);
}

function beginPuzzleDrag(event, piece) {
  if (piece.placed || !piece.element) return;
  event.preventDefault();
  const workspaceRect = puzzleWorkspace.getBoundingClientRect();
  const currentLeft = Number.parseFloat(piece.element.style.left) || 0;
  const currentTop = Number.parseFloat(piece.element.style.top) || 0;
  const offsetX = event.clientX - workspaceRect.left - currentLeft;
  const offsetY = event.clientY - workspaceRect.top - currentTop;
  const pointerId = event.pointerId;
  piece.element.setPointerCapture(pointerId);
  piece.element.classList.add('dragging');

  const move = (moveEvent) => {
    if (moveEvent.pointerId !== pointerId) return;
    moveEvent.preventDefault();
    const rect = puzzleWorkspace.getBoundingClientRect();
    piece.element.style.left = `${moveEvent.clientX - rect.left - offsetX}px`;
    piece.element.style.top = `${moveEvent.clientY - rect.top - offsetY}px`;
  };

  const end = (endEvent) => {
    if (endEvent.pointerId !== pointerId) return;
    piece.element.classList.remove('dragging');
    piece.element.removeEventListener('pointermove', move);
    piece.element.removeEventListener('pointerup', end);
    piece.element.removeEventListener('pointercancel', end);
    const left = Number.parseFloat(piece.element.style.left) || 0;
    const top = Number.parseFloat(piece.element.style.top) || 0;
    const distance = Math.hypot(left - piece.targetLeft, top - piece.targetTop);
    if (distance <= piece.cellSize * 0.42) snapPuzzlePiece(piece);
    else returnPuzzlePieceHome(piece);
  };

  piece.element.addEventListener('pointermove', move);
  piece.element.addEventListener('pointerup', end);
  piece.element.addEventListener('pointercancel', end);
}

function returnPuzzlePieceHome(piece) {
  if (!piece.element || piece.placed) return;
  piece.element.style.left = `${piece.homeLeft}px`;
  piece.element.style.top = `${piece.homeTop}px`;
  puzzleFeedback.textContent = 'حاول مرة أخرى، قرّب القطعة من مكانها الصحيح';
  puzzleFeedback.className = 'puzzle-feedback wrong-feedback';
  playEncouragement('wrong', 'حاول مرة أخرى');
  window.setTimeout(() => {
    if (puzzlePlacedCount < puzzlePieces.length) {
      puzzleFeedback.textContent = 'ركّب الصورة قطعة قطعة';
      puzzleFeedback.className = 'puzzle-feedback';
    }
  }, 1100);
}

function snapPuzzlePiece(piece) {
  if (piece.placed || !piece.element) return;
  piece.placed = true;
  piece.element.classList.remove('dragging');
  piece.element.classList.add('placed');
  piece.element.style.left = `${piece.targetLeft}px`;
  piece.element.style.top = `${piece.targetTop}px`;
  piece.element.setAttribute('aria-label', `القطعة ${piece.index + 1} في مكانها الصحيح`);
  puzzlePlacedCount += 1;
  puzzlePieceCount.textContent = `${puzzlePlacedCount} من ${puzzlePieces.length} قطع`;
  puzzleFeedback.textContent = puzzlePlacedCount === puzzlePieces.length ? 'اكتملت الصورة!' : 'أحسنت! القطعة في مكانها الصحيح';
  puzzleFeedback.className = 'puzzle-feedback correct-feedback';
  playEncouragement('correct', 'أحسنت');
  if (puzzlePlacedCount === puzzlePieces.length) {
    puzzleBoard.classList.add('completed');
    window.setTimeout(showPuzzleWin, 650);
  }
}

function layoutPuzzle() {
  if (puzzleGameScreen.classList.contains('hidden') || puzzleWorkspace.classList.contains('hidden')) return;
  puzzleLayoutToken += 1;
  const level = puzzleLevels[selectedPuzzleLevel];
  const workspaceWidth = Math.max(260, puzzleGameScreen.clientWidth - 8);
  const heightCap = Math.max(245, Math.min(340, window.innerHeight * 0.41));
  const widthCap = selectedPuzzleLevel === 'two' ? 330 : 360;
  const boardSize = Math.floor(Math.min(workspaceWidth - 18, widthCap, heightCap));
  const cellSize = boardSize / level.cols;
  const maps = getPuzzleEdgeMaps(level.rows, level.cols);
  const boardLeft = (workspaceWidth - boardSize) / 2;
  const boardTop = 0;
  const trayTop = boardSize + 28;
  const trayHeight = boardSize + (cellSize * 0.34);
  const trayLeft = (workspaceWidth - boardSize) / 2;

  puzzleWorkspace.style.width = `${workspaceWidth}px`;
  puzzleWorkspace.style.height = `${trayTop + trayHeight}px`;
  puzzleBoard.style.width = `${boardSize}px`;
  puzzleBoard.style.height = `${boardSize}px`;
  puzzleBoard.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url('${activePuzzleImage.image}')`;
  puzzleBoard.classList.remove('completed');
  puzzleTray.style.top = `${trayTop}px`;
  puzzleTray.style.width = `${boardSize}px`;
  puzzleTray.style.height = `${trayHeight}px`;

  clearPuzzlePieces();
  puzzlePlacedCount = 0;
  puzzlePieceCount.textContent = `0 من ${level.rows * level.cols} قطع`;

  const pieces = [];
  let index = 0;
  for (let row = 0; row < level.rows; row += 1) {
    for (let col = 0; col < level.cols; col += 1) {
      const edges = getPieceEdges(row, col, level.rows, level.cols, maps);
      pieces.push({
        index,
        row,
        col,
        cellSize,
        geometry: buildPuzzlePieceGeometry(cellSize, edges),
        placed: false,
        element: null,
        homeLeft: 0,
        homeTop: 0,
        targetLeft: 0,
        targetTop: 0
      });
      index += 1;
    }
  }

  const shuffledSlots = shuffle(pieces.map((_, slotIndex) => slotIndex));
  pieces.forEach((piece, pieceIndex) => {
    createPuzzleTarget(piece, boardLeft, boardTop);
    const slotIndex = shuffledSlots[pieceIndex];
    const slotRow = Math.floor(slotIndex / level.cols);
    const slotCol = slotIndex % level.cols;
    piece.homeLeft = trayLeft + (slotCol * cellSize) - piece.geometry.leftExtension;
    piece.homeTop = trayTop + (slotRow * cellSize) - piece.geometry.topExtension + (cellSize * 0.12);
    createPuzzlePieceElement(piece, boardSize);
    piece.element.style.left = `${piece.homeLeft}px`;
    piece.element.style.top = `${piece.homeTop}px`;
  });
  puzzlePieces = pieces;
}

function startPuzzleGame() {
  stopPuzzleTimers();
  clearPuzzlePieces();
  const level = puzzleLevels[selectedPuzzleLevel];
  puzzleGameLevelLabel.textContent = level.label;
  puzzleImageLabel.textContent = activePuzzleImage.label;
  puzzlePreviewImage.src = activePuzzleImage.image;
  puzzlePreviewImage.alt = activePuzzleImage.label;
  puzzlePieceCount.textContent = `0 من ${level.rows * level.cols} قطع`;
  puzzleFeedback.textContent = 'شاهد الصورة أولًا ثم ابدأ التركيب';
  puzzleFeedback.className = 'puzzle-feedback';
  puzzleWinModal.classList.add('hidden');
  puzzlePreviewOverlay.classList.remove('hidden');
  puzzleWorkspace.classList.add('hidden');
  puzzlePreviewTimer = window.setTimeout(() => {
    puzzlePreviewOverlay.classList.add('hidden');
    puzzleWorkspace.classList.remove('hidden');
    puzzleFeedback.textContent = 'ركّب الصورة قطعة قطعة';
    window.requestAnimationFrame(layoutPuzzle);
  }, 1900);
}

function resetPuzzleGame() {
  puzzleWinModal.classList.add('hidden');
  startPuzzleGame();
}

function restartPuzzleGame() {
  puzzleWinModal.classList.add('hidden');
  if (selectedPuzzleLevel === 'one') {
    activePuzzleImage = getNextLevelOnePuzzleImage();
    const replacement = normalizeRouteState({
      ...currentRouteState,
      view: 'puzzle-game',
      puzzleLevel: 'one',
      puzzleImageId: activePuzzleImage.id,
      depth: currentRouteState.depth
    });
    window.history.replaceState(replacement, '');
    currentRouteState = replacement;
  }
  startPuzzleGame();
}

function showPuzzleWin() {
  puzzleWinModal.classList.remove('hidden');
  playEncouragement('win', 'رائع يا بطل، أكملت المستوى');
  puzzlePlayAgainButton.focus();
}

function setSocialLinksExpanded(expanded) {
  if (!socialLinksToggleButton || !socialLinksSubmenu) return;
  socialLinksToggleButton.setAttribute('aria-expanded', String(expanded));
  socialLinksSubmenu.classList.toggle('hidden', !expanded);
  socialLinksSubmenu.setAttribute('aria-hidden', String(!expanded));
}

function toggleSocialLinks() {
  const expanded = socialLinksToggleButton.getAttribute('aria-expanded') === 'true';
  setSocialLinksExpanded(!expanded);
}

function openSocialMenu() {
  setSocialLinksExpanded(false);
  socialMenu.classList.remove('hidden');
  menuBackdrop.classList.remove('hidden');
  socialMenu.setAttribute('aria-hidden', 'false');
  moreMenuButton.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
  closeSocialMenuButton.focus();
}

function closeSocialMenu() {
  setSocialLinksExpanded(false);
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
    playEncouragement('correct', 'أحسنت');
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
  playEncouragement('wrong', 'حاول مرة أخرى');
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

function selectAnimalLevel(levelName) {
  if (!animalLevels[levelName]) return;
  selectedAnimalLevel = levelName;
  activeAnimalCards = animalLevels[selectedAnimalLevel].cards;
  lettersLevelButtons.forEach((button) => {
    const isSelected = button.dataset.animalLevel === selectedAnimalLevel;
    button.classList.toggle('selected', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });
  lettersStartButton.textContent = animalLevels[selectedAnimalLevel].startLabel;
}

function buildAnimalOptions(question) {
  if (selectedAnimalLevel === 'one') return shuffle(activeAnimalCards);

  const distractors = shuffle(activeAnimalCards.filter((animal) => (
    animal.id !== question.id && animal.letter !== question.letter
  ))).slice(0, 3);

  return shuffle([question, ...distractors]);
}

function startAnimalGame() {
  activeAnimalCards = animalLevels[selectedAnimalLevel].cards;
  animalQuestions = shuffle(activeAnimalCards);
  animalQuestionIndex = 0;
  animalCorrectCount = 0;
  animalLocked = false;
  lettersScore.textContent = '⭐ 0';
  lettersGameLevelLabel.textContent = animalLevels[selectedAnimalLevel].label;
  animalOptions.classList.toggle('level-two-options', selectedAnimalLevel === 'two');
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
  const options = buildAnimalOptions(question).map((animal) => createAnimalOption(animal, question.id));
  animalOptions.replaceChildren(...options);
}

function checkAnimalAnswer(button, isCorrect) {
  if (animalLocked) return;
  if (!isCorrect) {
    button.classList.add('wrong');
    lettersFeedback.textContent = 'حاول مرة أخرى';
    lettersFeedback.className = 'letters-feedback wrong-feedback';
    playEncouragement('wrong', 'حاول مرة أخرى');
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
  const praisePhrases = ['أحسنت', 'رائع', 'ممتاز يا بطل'];
  playEncouragement('correct', praisePhrases[Math.floor(Math.random() * praisePhrases.length)]);
  window.setTimeout(() => {
    animalQuestionIndex += 1;
    renderAnimalQuestion();
  }, 850);
}


function getQuranQueueStorageKey(levelKey = selectedQuranLevel) {
  return `${QURAN_QUEUE_STORAGE_PREFIX}-${levelKey}`;
}

function loadQuranQueueState(levelKey = selectedQuranLevel) {
  const fallback = quranQueueMemoryStates[levelKey] || { remainingIds: [], lastRoundIds: [] };
  try {
    const raw = window.localStorage.getItem(getQuranQueueStorageKey(levelKey));
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    quranQueueMemoryStates[levelKey] = {
      remainingIds: Array.isArray(parsed.remainingIds) ? parsed.remainingIds : [],
      lastRoundIds: Array.isArray(parsed.lastRoundIds) ? parsed.lastRoundIds : []
    };
  } catch {
    // Keep the in-memory queue when storage is unavailable.
  }
  return quranQueueMemoryStates[levelKey];
}

function saveQuranQueueState(levelKey, state) {
  quranQueueMemoryStates[levelKey] = {
    remainingIds: [...state.remainingIds],
    lastRoundIds: [...state.lastRoundIds]
  };
  try {
    window.localStorage.setItem(getQuranQueueStorageKey(levelKey), JSON.stringify(quranQueueMemoryStates[levelKey]));
  } catch {}
}

function selectQuranLevel(levelKey) {
  if (!quranLevels[levelKey]) return;
  selectedQuranLevel = levelKey;
  activeQuranQuestions = quranLevels[levelKey].questions;
  quranGameLevelLabel.textContent = quranLevels[levelKey].label;
  quranStartButton.textContent = `ابدأ ${quranLevels[levelKey].label}`;
  quranLevelButtons.forEach((button) => {
    const selected = button.dataset.quranLevel === levelKey;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function getNextQuranRound() {
  const levelKey = selectedQuranLevel;
  const questionById = new Map(activeQuranQuestions.map((question) => [question.id, question]));
  const state = loadQuranQueueState(levelKey);
  let remainingIds = state.remainingIds.filter((id) => questionById.has(id));

  if (remainingIds.length < QURAN_ROUND_SIZE) {
    remainingIds = shuffle(activeQuranQuestions.map((question) => question.id));
    const previousSet = new Set(state.lastRoundIds);
    const firstSet = new Set(remainingIds.slice(0, QURAN_ROUND_SIZE));
    const repeatsEntireRound = previousSet.size === QURAN_ROUND_SIZE && [...firstSet].every((id) => previousSet.has(id));
    if (repeatsEntireRound) remainingIds = [...remainingIds.slice(5), ...remainingIds.slice(0, 5)];
  }

  const roundIds = remainingIds.slice(0, QURAN_ROUND_SIZE);
  saveQuranQueueState(levelKey, {
    remainingIds: remainingIds.slice(QURAN_ROUND_SIZE),
    lastRoundIds: roundIds
  });
  return roundIds.map((id) => questionById.get(id)).filter(Boolean);
}

function createQuranOption(optionName, correctSurah) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'quran-option';
  button.textContent = `سورة ${optionName}`;
  button.addEventListener('click', () => checkQuranAnswer(button, optionName === correctSurah));
  return button;
}

function startQuranGame() {
  stopSpokenAudio();
  quranGameLevelLabel.textContent = quranLevels[selectedQuranLevel].label;
  quranWinModal.classList.add('hidden');
  puzzleWinModal.classList.add('hidden');
  if (quranGameScreen.classList.contains('hidden')) showOnly(quranGameScreen);
  quranRoundQuestions = getNextQuranRound();
  quranQuestionIndex = 0;
  quranCorrectCount = 0;
  quranLocked = false;
  quranScore.textContent = '⭐ 0';
  renderQuranQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartMemoryGame() {
  stopSpokenAudio();
  headerSubtitle.textContent = 'طابِق الفواكه المتشابهة';
  showOnly(gameScreen);
  renderGame();
}

function restartAnimalGame() {
  stopSpokenAudio();
  headerSubtitle.textContent = 'اختر الحيوان الذي يبدأ بالحرف';
  showOnly(lettersGameScreen);
  startAnimalGame();
}

function restartQuranGame() {
  stopSpokenAudio();
  headerSubtitle.textContent = 'اقرأ الآية واختر السورة';
  showOnly(quranGameScreen);
  startQuranGame();
}

function renderQuranQuestion() {
  const question = quranRoundQuestions[quranQuestionIndex];
  if (!question) {
    showQuranWin();
    return;
  }

  quranLocked = false;
  quranQuestionCount.textContent = `السؤال ${quranQuestionIndex + 1} من ${quranRoundQuestions.length}`;
  quranVerseText.textContent = `﴿ ${question.verse} ﴾`;
  quranFeedback.textContent = 'اختر إجابة واحدة';
  quranFeedback.className = 'quran-feedback';
  quranOptions.replaceChildren(...shuffle(question.options).map((option) => createQuranOption(option, question.surah)));
}

function checkQuranAnswer(button, isCorrect) {
  if (quranLocked) return;

  if (!isCorrect) {
    button.classList.add('wrong');
    quranFeedback.textContent = 'حاول مرة أخرى';
    quranFeedback.className = 'quran-feedback wrong-feedback';
    playEncouragement('wrong', 'حاول مرة أخرى');
    window.setTimeout(() => button.classList.remove('wrong'), 520);
    return;
  }

  quranLocked = true;
  button.classList.add('correct');
  [...quranOptions.children].forEach((option) => { option.disabled = true; });
  quranCorrectCount += 1;
  quranScore.textContent = `⭐ ${quranCorrectCount}`;
  const praise = Math.random() < 0.5 ? 'ممتاز يا بطل' : 'ما شاء الله';
  quranFeedback.textContent = `${praise}! إجابة صحيحة`;
  quranFeedback.className = 'quran-feedback correct-feedback';
  playEncouragement('correct', praise);

  window.setTimeout(() => {
    quranQuestionIndex += 1;
    renderQuranQuestion();
  }, 1000);
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
  if (screen !== letterHuntGameScreen) stopLetterHuntGame();
  allScreens.forEach((item) => item.classList.add('hidden'));
  screen.classList.remove('hidden');
  winModal.classList.add('hidden');
  lettersWinModal.classList.add('hidden');
  quranWinModal.classList.add('hidden');
  puzzleWinModal.classList.add('hidden');
  letterHuntWinModal.classList.add('hidden');
  letterHuntLoseModal.classList.add('hidden');
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

function showQuranLevels() {
  headerSubtitle.textContent = 'اختبر معرفتك بسور جزء عم';
  showOnly(quranLevelScreen);
}

function showQuranGame() {
  headerSubtitle.textContent = 'اقرأ الآية واختر السورة';
  showOnly(quranGameScreen);
  startQuranGame();
}


function showPuzzleLevels() {
  headerSubtitle.textContent = 'اختر مستوى بزل عزّام';
  showOnly(puzzleLevelScreen);
  selectPuzzleLevel(selectedPuzzleLevel);
}

function showPuzzleGame() {
  headerSubtitle.textContent = 'اسحب قطع البزل إلى مكانها';
  showOnly(puzzleGameScreen);
  startPuzzleGame();
}



function showLetterHuntLevels() {
  headerSubtitle.textContent = 'اختر مستوى صيد الحرف';
  showOnly(letterHuntLevelScreen);
  selectLetterHuntLevel(selectedLetterHuntLevel);
}

function showLetterHuntGame() {
  headerSubtitle.textContent = 'حرّك السلة والتقط الحرف المطلوب';
  showOnly(letterHuntGameScreen);
  startLetterHuntGame();
}

function showWin() {
  finalMoves.textContent = String(moves);
  winModal.classList.remove('hidden');
  playEncouragement('win', 'رائع يا بطل، أنهيت المستوى');
  playAgainButton.focus();
}

function showQuranWin() {
  quranWinModal.classList.remove('hidden');
  playEncouragement('win', 'ما شاء الله، زادك الله حبًّا وحفظًا للقرآن');
  quranPlayAgainButton.focus();
}

function showAnimalWin() {
  const total = activeAnimalCards.length;
  lettersWinText.textContent = total === 3
    ? 'تعرّفت إلى الحيوانات الثلاثة واختَرت الإجابات الصحيحة.'
    : `تعرّفت إلى ${total} حيوانات واختَرت الإجابات الصحيحة.`;
  lettersCelebrationAnimals.textContent = selectedAnimalLevel === 'one'
    ? '🦁 🦆 🐊'
    : '🐒 🐔 🐢 🦒 🐇 🐫 🐻 🐄 🐘 🐑';
  lettersWinModal.classList.remove('hidden');
  playEncouragement('win', 'رائع يا بطل، أكملت المستوى');
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
    'quran-levels',
    'quran-game',
    'puzzle-levels',
    'puzzle-game',
    'letter-hunt-levels',
    'letter-hunt-game',
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
    videoTitle: typeof candidate.videoTitle === 'string' ? candidate.videoTitle : '',
    puzzleLevel: puzzleLevels[candidate.puzzleLevel] ? candidate.puzzleLevel : 'one',
    puzzleImageId: typeof candidate.puzzleImageId === 'string' ? candidate.puzzleImageId : '',
    letterHuntLevel: letterHuntLevels[candidate.letterHuntLevel] ? candidate.letterHuntLevel : 'one'
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
    case 'quran-levels':
      showQuranLevels();
      break;
    case 'quran-game':
      showQuranGame();
      break;
    case 'puzzle-levels':
      showPuzzleLevels();
      break;
    case 'puzzle-game':
      setActivePuzzle(state.puzzleLevel, state.puzzleImageId);
      showPuzzleGame();
      break;
    case 'letter-hunt-levels':
      showLetterHuntLevels();
      break;
    case 'letter-hunt-game':
      selectLetterHuntLevel(state.letterHuntLevel);
      showLetterHuntGame();
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
  }, { replace: currentRouteState.view === 'watch-video' });
}

window.addEventListener('popstate', (event) => {
  applyRouteState(event.state);
});

moreMenuButton.addEventListener('click', openSocialMenu);
closeSocialMenuButton.addEventListener('click', closeSocialMenu);
socialLinksToggleButton.addEventListener('click', toggleSocialLinks);
menuBackdrop.addEventListener('click', closeSocialMenu);
socialMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeSocialMenu));
shareAppButton.addEventListener('click', shareApp);
aboutAppButton.addEventListener('click', showAboutApp);
soundToggleButton.addEventListener('click', toggleSound);
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
quranGameCard.addEventListener('click', () => navigateToRoute({ view: 'quran-levels' }));
puzzleGameCard.addEventListener('click', () => navigateToRoute({ view: 'puzzle-levels' }));
letterHuntGameCard.addEventListener('click', () => navigateToRoute({ view: 'letter-hunt-levels' }));
levelHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
levelButtons.forEach((button) => button.addEventListener('click', () => {
  selectLevel(button.dataset.level);
  navigateToRoute({ view: 'memory-game' }, { replace: true });
}));
startButton.addEventListener('click', () => navigateToRoute({ view: 'memory-game' }, { replace: true }));
resetButton.addEventListener('click', restartMemoryGame);
backButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
playAgainButton.addEventListener('click', (event) => {
  event.preventDefault();
  restartMemoryGame();
});
homeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));

lettersLevelHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
lettersLevelButtons.forEach((button) => button.addEventListener('click', () => {
  selectAnimalLevel(button.dataset.animalLevel);
  navigateToRoute({ view: 'letters-game' }, { replace: true });
}));
lettersStartButton.addEventListener('click', () => navigateToRoute({ view: 'letters-game' }, { replace: true }));
lettersBackButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
lettersResetButton.addEventListener('click', restartAnimalGame);
lettersPlayAgainButton.addEventListener('click', (event) => {
  event.preventDefault();
  restartAnimalGame();
});
lettersHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));

quranLevelHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
quranLevelButtons.forEach((button) => button.addEventListener('click', () => {
  selectQuranLevel(button.dataset.quranLevel);
  navigateToRoute({ view: 'quran-game' }, { replace: true });
}));
quranStartButton.addEventListener('click', () => navigateToRoute({ view: 'quran-game' }, { replace: true }));
quranBackButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
quranResetButton.addEventListener('click', restartQuranGame);
quranPlayAgainButton.addEventListener('click', (event) => {
  event.preventDefault();
  restartQuranGame();
});
quranHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));

puzzleLevelHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
puzzleLevelButtons.forEach((button) => button.addEventListener('click', () => {
  const levelName = button.dataset.puzzleLevel;
  selectPuzzleLevel(levelName);
  if (levelName === 'one') {
    activePuzzleImage = getNextLevelOnePuzzleImage();
    navigateToRoute({
      view: 'puzzle-game',
      puzzleLevel: 'one',
      puzzleImageId: activePuzzleImage.id
    }, { replace: true });
  }
}));
puzzleImageButtons.forEach((button) => button.addEventListener('click', () => {
  const image = findPuzzleImage('two', button.dataset.puzzleImage);
  if (!image) return;
  activePuzzleImage = image;
  selectedPuzzleLevel = 'two';
  navigateToRoute({
    view: 'puzzle-game',
    puzzleLevel: 'two',
    puzzleImageId: image.id
  }, { replace: true });
}));
puzzleBackButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
puzzleResetButton.addEventListener('click', resetPuzzleGame);
puzzlePlayAgainButton.addEventListener('click', (event) => {
  event.preventDefault();
  restartPuzzleGame();
});
puzzleLevelsButton.addEventListener('click', () => navigateToRoute({ view: 'puzzle-levels' }, { replace: true }));
puzzleHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
window.addEventListener('resize', () => {
  if (puzzleGameScreen.classList.contains('hidden') || puzzleWorkspace.classList.contains('hidden')) return;
  if (puzzleResizeTimer) window.clearTimeout(puzzleResizeTimer);
  puzzleResizeTimer = window.setTimeout(layoutPuzzle, 180);
});




letterHuntLevelHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
letterHuntLevelButtons.forEach((button) => button.addEventListener('click', () => {
  const levelName = button.dataset.letterHuntLevel;
  selectLetterHuntLevel(levelName);
  navigateToRoute({ view: 'letter-hunt-game', letterHuntLevel: levelName }, { replace: true });
}));
letterHuntBackButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
letterHuntResetButton.addEventListener('click', restartLetterHuntGame);
letterHuntPlayAgainButton.addEventListener('click', (event) => {
  event.preventDefault();
  restartLetterHuntGame();
});
letterHuntTryAgainButton.addEventListener('click', (event) => {
  event.preventDefault();
  restartLetterHuntGame();
});
letterHuntHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
letterHuntLoseHomeButton.addEventListener('click', () => navigateBack({ view: 'games-menu' }));
letterHuntBasket.addEventListener('pointerdown', beginLetterHuntBasketDrag);
letterHuntBasket.addEventListener('keydown', (event) => {
  if (!letterHuntRunning) return;
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    positionLetterHuntBasket(letterHuntBasketX - 28);
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    positionLetterHuntBasket(letterHuntBasketX + 28);
  }
});
window.addEventListener('resize', () => {
  if (letterHuntGameScreen.classList.contains('hidden')) return;
  if (letterHuntResizeTimer) window.clearTimeout(letterHuntResizeTimer);
  letterHuntResizeTimer = window.setTimeout(centerLetterHuntBasket, 160);
});


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
  let refreshingForNewWorker = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshingForNewWorker) return;
    refreshingForNewWorker = true;
    window.location.reload();
  });

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
