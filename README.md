# 参拝.jp モックサイト

神社仏閣まとめサイト「参拝.jp」のNode.js + Expressモックです。

## ローカルでの起動

```bash
npm install
npm start
```

ブラウザで http://localhost:3000 を開く。

## Renderへのデプロイ手順

1. このプロジェクトをGitHubリポジトリにプッシュ
2. [Render](https://render.com) にログイン
3. **New +** → **Web Service** をクリック
4. GitHubリポジトリを接続して選択
5. 以下の設定を入力:
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
6. **Deploy Web Service** をクリック
7. 数分後、`https://<service-name>.onrender.com` のURLが発行されます

## ファイル構成

```
jinja-mock/
├── public/
│   └── index.html    # サイト本体のHTML
├── server.js         # Expressサーバー
├── package.json
├── .gitignore
└── README.md
```

## 注意

- Render無料プランは15分アクセスがないとスリープし、復帰に30秒〜1分かかります
- `process.env.PORT` を使用しているため、Renderのポート自動割り当てに対応済み
