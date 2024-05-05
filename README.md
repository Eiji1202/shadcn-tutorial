# shadcn/ui を触ってみる

## shadcn/ui とは

- Radix UI と TailwindCSS ベースで作られた UI ライブラリ
  https://ui.shadcn.com/

### Install

- 今回は bun を使ってインストールする

1. プロジェクトの作成
   `bunx --bun create-next-app@latest my-app --typescript --tailwind --eslint
`

2. shadcn をプロジェクトで使えるようにする
   `bunx --bun shadcn-ui@latest init
`

3. 使いたいコンポーネントを呼び出す（Button コンポーネント）
   `bunx --bun shadcn-ui@latest add button
`
