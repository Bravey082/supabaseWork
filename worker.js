// 使用 import 语法加载 Supabase SDK
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// 你的 Supabase URL 和 API 密钥
const SUPABASE_URL = ENV.SUPABASE_URL;
const SUPABASE_KEY = ENV.SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  // 示例：从 Supabase 获取数据
  const { data, error } = await supabase
    .from('text')
    .select('*')
  
  if (error) {
    return new Response('Error fetching data from Supabase', { status: 500 });
  }

  // 返回数据
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}
