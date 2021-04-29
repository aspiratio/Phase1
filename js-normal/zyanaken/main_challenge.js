// 決定ボタンでセレクトボックスで選んだ手を取得
// もしplayerのtextContentが"player1"ならば
// 	player1の変数に数値をセット
//  player1Handにplayer1:セット完了をセット
// 	playerのtextContentにplayer2をセット
// そうでなければ
// 	player2の変数に数値をセット
//  player2Handにplayer2:セット完了をセット
// 	playerのtextContentに両者セット完了をセット

// いざ勝負ボタンをクリック
// ※今回はswitch文を利用
// player1が
// 	グーのとき
// 	player2がグーなら
// 		引き分けと表示
// 	player2がチョキなら
// 		player1の勝ちと表示
// 	それ以外なら
// 		player2の勝ちと表示
// player1が
// 	チョキのとき
// 	player2がグーなら
// 		player2の勝ちと表示
// 	player2がチョキなら
// 		引き分けと表示
// 	それ以外なら
// 		player1の勝ちと表示
// player1が
// 	パーのとき
// 	player2がグーなら
// 		player1の勝ちと表示
// 	player2がチョキなら
// 		player2の勝ちと表示
// 	それ以外なら
// 		引き分けと表示
// player1が0〜2どれでもなければ
// 	2回以上押さないでくださいとアラート

const player = document.getElementById("player");
const selectHand = document.getElementById("playerHand");
const player1Hand = document.getElementById("player1Hand");
const player2Hand = document.getElementById("player2Hand");
const result = document.getElementById("log");
result.textContent = "結果:"

const setHand = document.getElementById("setHand");
const gameStart = document.getElementById("gameStart");

let player1Num;
let player2Num;
let extraSelect;

setHand.addEventListener("click", function() {
	if (player.textContent === "player1") {
		player1Num = parseInt(selectHand.value);
		player1Hand.textContent = "player1:セット完了";
		player.textContent = "player2";
		playerHand.selectedIndex = 0;
	} else if (player.textContent === "player2") {
		player2Num = parseInt(selectHand.value);
		player2Hand.textContent = "player2:セット完了";
		player.textContent = "両者セット完了";
		playerHand.selectedIndex = 0;
	} else {
		player1Num = null;//連続で手を選択されたときの対策
	}
});

gameStart.addEventListener("click", function() {
	switch (player1Num) {
		case 0:
			if (player2Num === 0) {
				result.textContent = "結果:引き分け";
			} else if (player2Num === 1) {
				result.textContent = "結果:player1の勝ち";
			} else {
				result.textContent = "結果:player2の勝ち";
			}
			break;
		case 1:
			if (player2Num === 0) {
				result.textContent = "結果:player2の勝ち";
			} else if (player2Num === 1) {
				result.textContent = "結果:引き分け";
			} else {
				result.textContent = "結果:player1の勝ち";
			}
			break;
		case 2:
			if (player2Num === 0) {
				result.textContent = "結果:player1の勝ち";
			} else if (player2Num === 1) {
				result.textContent = "結果:player2の勝ち";
			} else {
				result.textContent = "結果:引き分け";
			}
			break;
		default:
			alert("2回以上押さないでください");
			break;
	}

	player1Num = null;
	player2Num = null;
	player.textContent = "player1";
	player1Hand.textContent = "player1:";
	player2Hand.textContent = "player2:";
});