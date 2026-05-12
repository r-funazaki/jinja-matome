const express = require('express');
const path = require('path');

const app = express();
// Renderは環境変数PORTを自動で割り当てるので、これに従う必要があります
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
