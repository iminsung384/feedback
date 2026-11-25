// Vercel 빌드 시 환경변수로 config.js 생성 (정적 앱에서 설정값 사용)
const fs = require("fs");
const { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  console.error("SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY are required");
  process.exit(1);
}
fs.rmSync("public", { recursive: true, force: true });
fs.mkdirSync("public");
fs.copyFileSync("index.html", "public/index.html");
fs.writeFileSync(
  "public/config.js",
  `window.APP_CONFIG=${JSON.stringify({ SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY })};\n`
);
