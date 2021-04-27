// 配列「グー、チョキ、パー」を作成
// 決定をクリック
// ランダムで0〜2の数字を選択＝相手の数字
// 数字に対応して「グー、チョキ、パー」のどれかを表示（相手の手）
// セレクトボックスで選択された手のvalueを数字に変換＝自分の数字
// 自分の数字と相手の数字が同じなら
// 	引き分けと表示（結果）
// そうでなければもし、自分:0かつ相手:1、または自分:1かつ相手:2、または自分:2かつ相手:0なら
// 	勝ちと表示（結果）
// そうでなければ
// 	負けと表示（結果）

const hands = ["グー", "チョキ", "パー"];
const myHand = document.getElementById("myHand");
const gameStart = document.getElementById("gameStart");
const cpHand = document.getElementById("cpHand");
const result = document.getElementById("log");

cpHand.textContent = "相手の手：";
result.textContent = "結果：";

gameStart.addEventListener("click", function() {
	const cpNum = Math.floor(Math.random() * 3);
	cpHand.textContent = `相手の手：${hands[cpNum]}`;
	const myNum = parseInt(myHand.value);
	if (myNum === cpNum) {
		result.textContent = "結果：引き分け";
	} else if ((myNum === 0 && cpNum === 0)
				|| (myNum === 1 && cpNum === 2)
				|| (myNum === 2 && cpNum === 0)) {
		result.textContent = "結果：勝ち";
	} else {
		result.textContent = "結果：負け";
	}
});
