# html-sample01

HTML学習用。  
PugをgulpでコンパイルしてHTML作ります。  

## globalでinstallが必要なnpmモジュール

* npm install -g gulp
* npm install -g gulp-cli
* npm install -g pug-cli
* npm install -g node-sass

## メモ

* node_modulesからcssとjsをインポートするのは面倒なので、それぞれ置きなおしています
  * css
    * skeleton.css
  * js
    * jquery.min.js
* htmlとcssは面倒なので糖衣構文で書く
  * htmlはpugで書く
  * cssはsassで書く
  * ビルドはgulpで行う
  * gulpの実行は、npm run buildでやる
  * build実行すると変換したものをそれぞれ対応したフォルダに格納する
    * ファイル名変えた場合は変える前のhtmlとcssは自分で消してください(TODOいつか直す)
  * 今のところhtmlやcssは階層構造にするつもりはないので、階層構造にする場合はgulpfile.jsを修正する