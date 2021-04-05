// promise ES6からは標準で使える
// jsでは一時的に止まることはない
// リクエストで長時間かかるものに対して、いい感じに処理してくれる
// 何かしら、データが取れてから、処理をする（then）
// 長い処理を行ってから処理をするというもの
// promiseやコールバックを使う必要がある
// promiseには３つの状態がある

// 1 unresolved 未解決状態
// 2 resolved 正常終了 -> then
// 3 rejected 異常終了 -> catch

// コールバックを設定できる

// promiseの作り方
const promise = new Promise((resolve, reject) => {
  // 長時間処理を擬似的に設定 少し経つと実行結果が確認できる
  setTimeout(() =>{
    reject();
  }, 3000)
  // reject();
});
console.log(promise);
// 未解決な状態
// Promise {<pending>}


promise
  // 成功の場合(resolve)の時、promise.then()が全て呼ばれる
  .then(() => console.log("処理が終了しました"))
  .then(() => console.log("これも実行"))
  // 失敗の場合
  .catch(() => console.log("問題発生"))

// fetch promiseを使ってAjaxリクエストをする
// インターネット上のリソースを取りに行く
url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  // レスポンスが返ってくる ステータスコードやなんやらかんやら
  .then(response => console.log(response))
  // 何かしらのエラーが入ってきたら
  .catch(error => console.log("問題発生", error))

// fetchの欠点
// 異常ステータスコードが入ってきてもcatchに入らない
// ネットワークのリクエスト自体がエラーならばcatchに入るがそれ以外の異常はcatchに入らない
// Ajaxを使うなら他のライブラリを使用する方が良い
