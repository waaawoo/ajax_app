// コード整理
const buildHTML = (XHR) => {
  // 新しい投稿をHTMLへ生成する処理
  // XHR.のサーバーからのレスポンスpost変数に入っている情報を変数へ格納
  const item = XHR.response.post
        // HTMLを作成
        const html = `
        <div class="post">
          <div class="post-date">
            投稿日時:${item.created_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>
      `;
      return html
}

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
    // リクエストの初期化 ルーティングの指定
    XHR.open("post", "/posts", true);
    // // レスポンス形式を記載
    XHR.responseType = "json";
    // // リクエスト送信するsendメソッドを使用する
    XHR.send(formData);

    // コントローラー処理後の実行
    // onloadAjax通信成功時の処理
    XHR.onload = () => {
      // 通信でエラーが発生した場合
      // XHR.statusにはステータスコードが格納
      if(XHR.status != 200){

        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        // この後の処理を行わないようにする記述 return nullはjsから抜け出す
        return null;
      }
      // 挿入する箇所を指定する
      const list = document.getElementById("list");
      // Ajax通信後のフォーム入力値リセット
      const formText = document.getElementById("content");
      // HTML要素を指定の箇所へ挿入
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      // 入力保持を消す
      formText.value = "";
    };
  });
}

// ページの読み込みを完了後、関数を実行
window.addEventListener('load', post);
