//time初期値0
//ボタン要素を取得
//スタートをクリック,イベントリスナー
//タイマースタート

//1秒でtimeを1増やす
//タイマーが40を超えたら終了してアラート
	//timeを0に戻す

//確認をクリック
	//タイマーを停止
	//timeの数字とメッセージをアラート
	//timeを0に戻す

let time = 0;
const confirmTime = document.getElementById("confirmTime");
const startTimer = document.getElementById("startTimer");

function countUp() {
	time++;
	console.log(1);//確認用
	if (time >= 40) {
		clearInterval(timer);
		alert("遅すぎ( ；∀；)");
		time = 0;
	}
}

let timer;

startTimer.addEventListener("click", function() {
	clearInterval(timer);//連続でスタートを押されたときの対策
	timer = setInterval("countUp()", 1000);
});

confirmTime.addEventListener("click", function() {
	clearInterval(timer);
	if (time === 20) {
		alert(`すばらしい！大正解！`);
	} else if (time === 19 || time === 21) {
		alert(`惜しい！${time}秒！`);
	} else if (time < 19) {
		alert(`まだ${time}秒、、、やりなおしだ`);
	} else {
		alert(`残念！もう${time}秒`)
	}
	time = 0;
});

/* 追加チャレンジ問題 */
//ボタン要素の取得と開始時刻を入れる変数の宣言
//スタートをクリック,イベントリスナー
//現在の日時を取得、変数startに代入

//startの秒＋40秒で終了してアラート

//確認をクリック
	//タイマーを停止
	//startの秒から終了時刻を引いた秒数をアラート

const confirmTime2 = document.getElementById("confirmTime2");
const startTimer2 = document.getElementById("startTimer2");
let start;
let finish;
let timeout;

startTimer2.addEventListener("click", function() {
	start = Date.now();
	timeout =setTimeout(function() {
		alert("遅すぎ( ；∀；)");
		start = null;
	}, 40000);
});

confirmTime2.addEventListener("click", function() {
	finish = Date.now();
	time2 = Math.floor((finish - start) / 1000)
	if (time2 === 20) {
		alert(`すばらしい！大正解！`);
	} else if (time2 === 19 || time2 === 21) {
		alert(`惜しい！${time2}秒！`);
	} else if (time2 < 19) {
		alert(`まだ${time2}秒、、、やりなおしだ`);
	} else {
		alert(`残念！もう${time2}秒`)
	}
	clearTimeout(timeout);
})
