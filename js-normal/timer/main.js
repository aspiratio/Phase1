//秒数を記入する
//変更をクリック
//スタートをクリック
//タイマースタート
//もしストップを押したら
	//タイマー停止
	//スタートで再開
//タイマーが0になったら
	//タイマー停止
	//終了とアラート

//数字を表示する場所の要素を取得, 秒数の変数を宣言
const nowTime = document.getElementById("nowTime");
let sec = 10;

//変更ボタンの要素を取得, イベントリスナーを設定　秒数をセット
const setTime = document.getElementById("setTime");
setTime.addEventListener("click", function() {
	sec = document.getElementById("inputTime").value;
	nowTime.textContent = `${sec}:セット完了です`;
});

//スタートボタンの要素を取得
//秒数を1減らし、nowTimeに表示させる関数を作る
//イベントリスナーで関数を起動、上記関数を毎秒1回繰り返す、連続でクリックされた時の対策も
let timer;
const startTimer = document.getElementById("startTimer");
function countDown() {
	sec -= 1;
	nowTime.textContent = sec;
	if (sec === 0) {
		clearInterval(timer);
		alert("終了");
	}
};

startTimer.addEventListener("click", function() {
	clearInterval(timer);
	timer = setInterval("countDown()", 1000);
});

const stopTimer = document.getElementById("stopTimer");
stopTimer.addEventListener("click", function() {
	clearInterval(timer);
	nowTime.textContent = `${sec}:ストップしました`;
});