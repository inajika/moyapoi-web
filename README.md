# moyapoi-web
もやもやぽいぽいのソースコードです。

## はじめに
以下のツールを開発PCにインストールしてください。
- [Docker](https://www.docker.com/ja-jp/)
- [Git](https://git-scm.com/downloads)
- [VSCode](https://code.visualstudio.com/#alt-downloads)

### 開発コンテナの初回ビルド手順
1. リポジトリをクローンする
    ```bash
    git clone https://github.com/inajika/moyapoi-web.git
    ```

2. プロジェクトルートをVSCodeで開く
    ```bash
    code moyapoi-web
    ```
    ※ macOSで`code`コマンドが利用できないときは[ここ](https://code.visualstudio.com/docs/setup/mac)を参照してください。

3. `.devcontainer/.env.sample`をコピーし、`.devcontainer/.env`を作成する
    ```bash
    cp .devcontainer/.env.sample .devcontainer/.env
    ```

4. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (macOSの場合は<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>)でコマンドパレットを開き、「開発コンテナー: コンテナーで再度開く」を選択する

## 利用しているもの
- TypeScript
- Next.js
- Tailwind CSS
- Shadcn/ui
- Biome
- Storybook

## 開発コンテナでアプリをビルドする
一時的に`NODE_ENV`を`production`に変更する必要があります。
```bash
NODE_ENV=production npm run build
```
