const ALLOWED_PLAYLISTS = new Set([
  'PLpDIigZEd1R8DY3gi0WthA3KWAyIZkmLQ',
  'PLJ8q6LNI4S5s'
]);

function pickThumbnail(snippet, videoId) {
  const thumbnails = snippet && snippet.thumbnails ? snippet.thumbnails : {};
  return (
    (thumbnails.maxres && thumbnails.maxres.url) ||
    (thumbnails.standard && thumbnails.standard.url) ||
    (thumbnails.high && thumbnails.high.url) ||
    (thumbnails.medium && thumbnails.medium.url) ||
    (thumbnails.default && thumbnails.default.url) ||
    `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
  );
}

function sendJson(res, status, data, cacheControl = 'no-store') {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', cacheControl);
  return res.status(status).json(data);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return sendJson(res, 405, { error: 'الطريقة غير مدعومة' });
  }

  const rawPlaylistId = Array.isArray(req.query.playlistId)
    ? req.query.playlistId[0]
    : req.query.playlistId;
  const playlistId = String(rawPlaylistId || '').trim();

  if (!ALLOWED_PLAYLISTS.has(playlistId)) {
    return sendJson(res, 400, { error: 'قائمة التشغيل غير معتمدة' });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return sendJson(res, 500, {
      error: 'مفتاح يوتيوب غير مفعّل على الخادم',
      code: 'MISSING_YOUTUBE_API_KEY'
    });
  }

  try {
    const items = [];
    let pageToken = '';
    let pageCount = 0;

    do {
      const params = new URLSearchParams({
        part: 'snippet,contentDetails',
        playlistId,
        maxResults: '50',
        key: apiKey
      });
      if (pageToken) params.set('pageToken', pageToken);

      const youtubeResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?${params.toString()}`
      );
      const data = await youtubeResponse.json();

      if (!youtubeResponse.ok) {
        const reason =
          data && data.error && data.error.errors && data.error.errors[0]
            ? data.error.errors[0].reason
            : 'unknown';
        console.error('YouTube API error:', youtubeResponse.status, reason);
        return sendJson(res, 502, {
          error: 'تعذر قراءة قائمة يوتيوب. تحقق من تفعيل المفتاح وقيوده.',
          code: 'YOUTUBE_API_ERROR',
          reason
        });
      }

      for (const entry of data.items || []) {
        const snippet = entry.snippet || {};
        const videoId =
          (entry.contentDetails && entry.contentDetails.videoId) ||
          (snippet.resourceId && snippet.resourceId.videoId) ||
          '';
        const title = typeof snippet.title === 'string' ? snippet.title.trim() : '';

        if (!videoId || !title || title === 'Deleted video' || title === 'Private video') {
          continue;
        }

        items.push({
          videoId,
          title,
          position: Number.isFinite(snippet.position) ? snippet.position : items.length,
          thumbnail: pickThumbnail(snippet, videoId)
        });
      }

      pageToken = data.nextPageToken || '';
      pageCount += 1;
    } while (pageToken && pageCount < 10);

    items.sort((a, b) => a.position - b.position);

    return sendJson(
      res,
      200,
      { playlistId, count: items.length, items },
      'public, s-maxage=300, stale-while-revalidate=3600'
    );
  } catch (error) {
    console.error('Playlist function failed:', error);
    return sendJson(res, 500, {
      error: 'حدث خطأ أثناء الاتصال بيوتيوب',
      code: 'PLAYLIST_FUNCTION_FAILED'
    });
  }
};
