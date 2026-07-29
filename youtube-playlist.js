const ALLOWED_PLAYLISTS = new Set([
  'PLpDIigZEd1R8DY3gi0WthA3KWAyIZkmLQ',
  'PLJ8q6LNI4S5s'
]);

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, s-maxage=300, stale-while-revalidate=3600',
      ...extraHeaders
    }
  });
}

function pickThumbnail(snippet, videoId) {
  const thumbnails = snippet && snippet.thumbnails ? snippet.thumbnails : {};
  return (
    thumbnails.maxres?.url ||
    thumbnails.standard?.url ||
    thumbnails.high?.url ||
    thumbnails.medium?.url ||
    thumbnails.default?.url ||
    `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
  );
}

export default {
  async fetch(request) {
    if (request.method !== 'GET') {
      return json({ error: 'الطريقة غير مدعومة' }, 405, { allow: 'GET' });
    }

    const requestUrl = new URL(request.url);
    const playlistId = (requestUrl.searchParams.get('playlistId') || '').trim();
    if (!ALLOWED_PLAYLISTS.has(playlistId)) {
      return json({ error: 'قائمة التشغيل غير معتمدة' }, 400);
    }

    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
      return json({ error: 'مفتاح يوتيوب غير مفعّل على الخادم' }, 500, { 'cache-control': 'no-store' });
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

        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?${params.toString()}`);
        const data = await response.json();
        if (!response.ok) {
          console.error('YouTube API error', response.status, data?.error?.errors?.[0]?.reason || 'unknown');
          return json({ error: 'تعذر قراءة قائمة يوتيوب. تحقق من تفعيل المفتاح وقيوده.' }, 502, { 'cache-control': 'no-store' });
        }

        for (const entry of data.items || []) {
          const snippet = entry.snippet || {};
          const videoId = entry.contentDetails?.videoId || snippet.resourceId?.videoId || '';
          const title = typeof snippet.title === 'string' ? snippet.title.trim() : '';
          if (!videoId || !title || title === 'Deleted video' || title === 'Private video') continue;
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
      return json({ playlistId, count: items.length, items });
    } catch (error) {
      console.error('Playlist function failed', error);
      return json({ error: 'حدث خطأ أثناء الاتصال بيوتيوب' }, 500, { 'cache-control': 'no-store' });
    }
  }
};
