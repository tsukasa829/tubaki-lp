# Copilot Instructions

このプロジェクトは11ty（Eleventy）を使用した静的サイトジェネレーターです。以下のルールに従って開発してください。

## 基本原則

### 11tyのベストプラクティスに従う
- コンテンツとプレゼンテーションを明確に分離する
- `content/`ディレクトリにMarkdownファイルを配置
- `_includes/layouts/`にレイアウトテンプレートを配置
- `_includes/components/`に再利用可能なコンポーネントを配置
- データは可能な限りYAML front matterまたは`_data/`ディレクトリで管理

### Markdownファイルの取り扱い
**重要：`.md`ファイルには絶対にHTMLタグを書かないこと**

#### ✅ 正しい記述方法
```markdown
---
layout: layouts/index.njk
title: ページタイトル
data:
  heading: "見出し"
  description: "説明文"
---
```

#### ❌ 禁止事項
```markdown
---
layout: layouts/index.njk
---

<div class="container">
  <h1>見出し</h1>
  <p>これはダメです</p>
</div>
```

### HTML構造の管理
- すべてのHTML構造は`.njk`テンプレートファイルで記述
- Markdownのデータを`{{ variable }}`や`{% for %}`で参照
- 複雑なレイアウトはコンポーネントに分割

## ディレクトリ構造

```
lp/
├── content/              # コンテンツファイル（Markdownのみ）
│   ├── index.md         # YAML front matterのみ
│   └── tokushoho.md     # YAML front matterまたはMarkdownテーブル
├── _includes/
│   ├── layouts/         # ページレイアウト
│   │   ├── base.njk    # 基本レイアウト
│   │   ├── index.njk   # トップページ用
│   │   └── tokushoho.njk # 特商法ページ用
│   └── components/      # 再利用可能なコンポーネント
├── _data/               # グローバルデータ（JSON/JS）
├── sample/              # 静的アセット（CSS/JS/画像）
└── .eleventy.js         # 11ty設定ファイル
```

## 編集時のルール

### コンテンツを変更する場合
1. `content/*.md`のYAML front matterを編集
2. HTMLタグは**絶対に**書かない
3. データ構造を適切に定義

### デザイン・レイアウトを変更する場合
1. `_includes/layouts/*.njk`を編集
2. Nunjucksテンプレート構文を使用
3. Markdownのデータを参照して動的に生成

### 新しいセクションを追加する場合
1. `content/*.md`にデータを追加
2. `_includes/layouts/*.njk`で対応するHTMLを追加
3. 必要に応じて`_includes/components/`にコンポーネントを作成

## 例：データとテンプレートの分離

### content/index.md（データのみ）
```yaml
---
about:
  title: "私について"
  description: "説明文"
  items:
    - text: "項目1"
    - text: "項目2"
---
```

### _includes/layouts/index.njk（HTML構造）
```html
<section class="about">
  <h1>{{ about.title }}</h1>
  <p>{{ about.description }}</p>
  <ul>
    {% for item in about.items %}
    <li>{{ item.text }}</li>
    {% endfor %}
  </ul>
</section>
```

## 禁止事項まとめ
- ❌ `.md`ファイルに`<div>`, `<p>`, `<h1>`などのHTMLタグを書く
- ❌ `.md`ファイルにインラインスタイルを書く
- ❌ `.md`ファイルにJavaScriptを書く
- ❌ コンテンツとプレゼンテーションを混在させる

## Bulma CSSフレームワークの使用

このプロジェクトではBulma CSSフレームワークを使用しています。Bulmaのベストプラクティスに従ってコードを追加・編集してください。

### Bulmaの基本原則
- **Modifierクラスを活用**：`is-primary`, `is-large`, `is-fullwidth`などのModifierクラスで見た目を調整
- **Flexboxベースのグリッドシステム**：`columns`と`column`を使用してレスポンシブレイアウトを構築
- **セマンティックなクラス名**：`hero`, `section`, `container`, `box`, `card`などBulmaの意図通りに使用
- **カスタムCSSは最小限に**：Bulmaのクラスで実現できることはBulmaで完結させる

### よく使うBulmaパターン

#### レイアウト構造
```html
<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <!-- コンテンツ -->
      </div>
    </div>
  </div>
</section>
```

#### ヒーローセクション
```html
<section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">タイトル</h1>
      <h2 class="subtitle">サブタイトル</h2>
    </div>
  </div>
</section>
```

#### ボタン
```html
<button class="button is-primary is-large">
  ボタン
</button>
```

#### フォーム
```html
<div class="field">
  <label class="label">ラベル</label>
  <div class="control">
    <input class="input" type="text" placeholder="入力">
  </div>
</div>
```

### Bulmaのレスポンシブブレークポイント
- **mobile**: 〜768px
- **tablet**: 769px〜1023px
- **desktop**: 1024px〜1215px
- **widescreen**: 1216px〜1407px
- **fullhd**: 1408px〜

レスポンシブクラス例：`is-half-desktop`, `is-hidden-mobile`

### カスタムCSS追加時の注意
- Bulmaの既存クラスを上書きしない
- 必要な場合のみ、Bulmaのクラスに追加する形でカスタムCSSを記述
- `!important`は可能な限り避ける
- カスタムクラス名は`custom-`などのプレフィックスを付ける

### 禁止事項
- ❌ Bulmaのクラス名を直接上書き
- ❌ インラインスタイルの多用
- ❌ Bulmaで実現できることをゼロからCSSで書く
- ❌ グリッドシステムを無視した独自レイアウト

### 推奨事項
- ✅ Bulmaのドキュメントを参照して適切なクラスを使用
- ✅ Modifierクラスで見た目をカスタマイズ
- ✅ `columns`と`column`でレスポンシブレイアウト
- ✅ カスタムCSSは`sample/showcase.css`に追加

## 推奨事項
- ✅ データはYAML front matterで管理
- ✅ HTML構造は`.njk`テンプレートで管理
- ✅ スタイルは外部CSSファイルで管理
- ✅ コンポーネントを再利用可能な単位に分割
- ✅ セマンティックなHTML要素を使用
