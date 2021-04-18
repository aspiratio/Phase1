// サイコロをふるをクリック
// 繰り返し処理を開始
// 3秒後に終了

//bodyタグの1番始めの要素を取得
const body = document.querySelector("body");

//bodyの子要素にimgタグを追加
const dice = document.createElement("img");
body.appendChild(dice);

//初期のダイス画像を設定し、imgタグに反映
let num = "./img/saikoro1.png";
dice.setAttribute("src", num);

//変数timerを宣言、bottnの要素を取得
let timer;
const startBtn = document.getElementById("diceBtn");

//関数を設定
	//ランダムで1〜6の数字を選び、画像を切り替え
	//disabled属性を追加（changeNum関数を動かせなくなる）
const changeNum = function() {
	num = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
	dice.setAttribute("src", num);
	startBtn.setAttribute("disabled", true);
}

//ボタンをクリックするとイベントリスナー関数が動く
	//100ミリ秒（0.1秒)ごとにchangeNum関数を動かす。変数timerに代入
	//3000ミリ秒後にclearIntervalが働き、timerを止める
	//disabled属性を削除（changeNum関数を動かせるようになる）
startBtn.addEventListener("click", function() {
	if (startBtn.disabled === false) {
		timer = window.setInterval("changeNum()", 100);
		window.setTimeout(function() {
			clearInterval(timer);
			startBtn.removeAttribute("disabled");
		}, 3000);
	}
})
