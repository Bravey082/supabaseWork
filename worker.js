const SUPABASE_URL = ENV.SUPABASE_URL;
const SUPABASE_KEY = ENV.SUPABASE_KEY;
async function handleRequest(request) {
  // 这里可以根据需要自定义您的请求
  const response = await fetch(`${SUPABASE_URL}/rest/v1/text`, {
    method: 'GET',  // 使用适当的 HTTP 方法（GET, POST, PUT, DELETE 等）
    headers: {
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  // 检查请求的响应状态
  if (response.ok) {
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response('Error fetching data from Supabase', { status: 500 });
  }
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
