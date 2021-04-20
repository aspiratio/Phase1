/* 追加チャレンジ問題 */

// player1がサイコロをふる
// 繰り返し処理
// player2がサイコロをふる
// 繰り返し処理
// 1と2の数字を比較
// 勝者を決定

//imgタグの要素を取得
const dice1 = document.getElementById("setPlayer1dice");
const dice2 = document.getElementById("setPlayer2dice");

//imgタグのsrc属性に画像の相対パスを追加
let diceNum1 = "./img/saikoro1.png";
let diceNum2 = "./img/saikoro1.png";
dice1.setAttribute("src", diceNum1);
dice2.setAttribute("src", diceNum2);

//変数timerの宣言
let timer1;
let timer2;

//ボタンの要素を取得
const startBtn1 = document.getElementById("player1Btn");
const startBtn2 = document.getElementById("player2Btn");

//数字の出目を入れる変数を宣言
//勝敗を入れる変数を宣言
let randomNum1;	
let randomNum2;
let result = document.getElementById("result");

//関数を設定(まだ動くわけではない)
	// 1〜6のランダムな数字を選び
	// 選んだ数字で画像切り替え
	// imgタグのsrc属性を更新
	// disableを追加
	
const diceroll1 = function() {
	randomNum1 = Math.floor(Math.random() * 6 + 1);
	diceNum1 = `./img/saikoro${randomNum1}.png`;
	dice1.setAttribute("src", diceNum1);
	startBtn1.setAttribute("disabled", true);
}
const diceroll2 = function() {
	randomNum2 = Math.floor(Math.random() * 6 + 1);
	diceNum2 = `./img/saikoro${randomNum2}.png`;
	dice2.setAttribute("src", diceNum2);
	startBtn2.setAttribute("disabled", true);
}

//ボタンをクリックするとイベントリスナーが動く
	//もしresultが？？？でない（勝敗がついてる）ならリセットする（2回目以降用）
	//100ミリ秒（0.1秒)ごとにdiceroll関数を動かす。変数timerに代入
	//3000ミリ秒後にserTimeoutが動く
		//clearIntervalが働く
		//timerを止める
		//もし1と2のサイコロの出目が出揃っていれば
			//勝敗を表示
			//ボタンのdisabledを削除

startBtn1.addEventListener("click", function() {
	if (result.textContent !== "???") {
		result.textContent = "???";
		randomNum2 = undefined;
	}
	timer1 = setInterval("diceroll1()", 100);
	setTimeout(function() {
		clearInterval(timer1);
		if (randomNum1 !== undefined && randomNum2 !== undefined) {
			if (randomNum1 > randomNum2) {
				result.textContent = "player1の勝利";
			} else if (randomNum1 < randomNum2) {
				result.textContent = "player2の勝利";
			} else {
				result.textContent = "引き分け";
			}
			startBtn1.removeAttribute("disabled");
			startBtn2.removeAttribute("disabled");
		}
	}, 3000)
})
startBtn2.addEventListener("click", function() {
	if (result.textContent !== "???") {
		result.textContent = "???";
		randomNum1 = undefined;
	}
	timer2 = setInterval("diceroll2()", 100);
	setTimeout(function() {clearInterval(timer2);
		if (randomNum1 !== undefined && randomNum2 !== undefined) {
			if (randomNum1 > randomNum2) {
				result.textContent = "player1の勝利";
			} else if (randomNum1 < randomNum2) {
				result.textContent = "player2の勝利";
			} else {
				result.textContent = "引き分け";
			}
			startBtn1.removeAttribute("disabled");
			startBtn2.removeAttribute("disabled");
		}
	}, 3000)
})
