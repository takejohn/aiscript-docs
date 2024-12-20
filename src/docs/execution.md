# 実行方法
## 1. Playgroundから実行
自分でホストする場合は、以下のコマンドを実行し表示されたリンクをブラウザで開きます。
```
cd playground
npm run build
npm run serve
```

PlaygroundはGitHubでもホストされています：\
<https://aiscript-dev.github.io/aiscript/>

## 2. スクリプトファイルから実行
ファイルの内容を解析して実行します。

プロジェクトルートに`main.ais`を作成し、以下の内容を記述しファイルに保存します。
```aiscript
<: "Hello world!"
```

以下のコマンドを実行します。
```
$ npm run start
```

## 3. スクリプトファイルを解析する (パーサーのデバッグ向け)
ファイルの内容を解析してASTを表示することができます。
主にパーサーのデバッグ向けで、インタプリタの実装状況に関わらずASTの内容を表示することができます。

プロジェクトルートに`main.ais`を作成し、以下の内容を記述しファイルに保存します。
```aiscript
<: "Hello world!"
```

以下のコマンドを実行します。
```
$ npm run parse
```

## 4. REPL上で実行
コマンドライン上で対話的にコードを実行します。
以下のコマンドを実行し、コードを入力します。
```
$npm run repl
```
