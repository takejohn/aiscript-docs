# AiScript Docs

## ビルド方法
[rustup](https://www.rust-lang.org/tools/install/)によりCargoをインストールし、以下のコマンドを実行します。
```sh
cargo install mdbook
mdbook build
```

## Translation into English
Run the following commands:
```sh
cargo install mdbook-i18n-helpers
MDBOOK_OUTPUT='{"xgettext": {}}' mdbook build -d po
```

Then edit `po/en.po` using a PO editor such as [Poedit](https://poedit.net/).
Note that you need to update the translation by `message.pot`.

Translated docs can be built with:
```sh
MDBOOK_BOOK__LANGUAGE=en mdbook build -d book/en
```
