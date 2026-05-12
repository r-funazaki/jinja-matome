const express = require('express');
const path = require('path');

const app = express();
// Renderは環境変数PORTを自動で割り当てるので、これに従う
const PORT = process.env.PORT || 3000;

// publicフォルダを静的ファイルとして配信
app.use(express.static(path.join(__dirname, 'public')));

// ルートアクセスでindex.htmlを返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`👉 Local: http://localhost:${PORT}`);
});
