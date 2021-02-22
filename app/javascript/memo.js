// 関数を定義
function post(){
  // submitのIDを取得する
  const submit =document.getElementById("submit");

  // クリック時にイベント発火
  submit.addEventListener("click", (e) => {
    // 既定のイベントを無効化して重複して動作しないようにするメソッド(e)に対してなのでクリックイベント全体を指している
    e.preventDefault();
    // 入力された値を取得
    const form = document.getElementById("form");
    // 取得したID（form）の値を取得する
    const formData = new FormData(form);
    // JavaScriptからAjaxにリクエストを行うのに必要な処理
    const XHR = new XMLHttpRequest();
    // リクエストの初期化
    XHR.open("post", "/posts", true);
    // // レスポンス形式を記載
    XHR.responseType = "json";
    // // リクエスト送信するsendメソッドを使用する
    XHR.send(formData);
  });
}

// ページの読み込みを完了後、関数を実行
window.addEventListener('load', post);
