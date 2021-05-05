// ここは順番はなんでもOK

// 8枚のカードを用意（画像ではなくCSS）
// 1〜4の数字を2組ずつ入れた配列を用意
// 上記配列の要素順をランダムにした配列を作成
// 現在のplayerを表示（初期値player1）
// player1のポイントを表示
// player2のポイントを表示

// ここから順番重要

// 1枚目をクリック
// 配列の同じ順番にある数字を表示(backのclassを削除)
// 2枚目をクリック
// 配列の同じ順番にある数字を表示(backのclassを削除)
// 0.5秒後、もし1枚目と2枚目が同じなら
// 	2枚とも画面から削除（finish）
// 	現在のplayerに+1ポイント
// そうでなければ
// 	元に戻す
// 	現在のplayerを変える

// 全部削除（finish）になったら
// 	終了ですとアラート（勝敗を表示してもいいかも）
// 	リロード

const panel = document.getElementById("panel");
const cardNums = [1, 1, 2, 2, 3, 3, 4, 4];
const nextPlayer = document.getElementById("nextPlayer");
const player1Point = document.getElementById("player1Point");
const player2Point = document.getElementById("player2Point");

let playerNum = 1; //現在のplayerが1か2を示す
let count = 0; //1枚目と2枚目を区別するためのカウンター
let match1 = 0; //player1がそろえたカード組数
let match2 = 0; //player2がそろえたカード組数

let firstNum; //めくったカードの数字
let secondNum;
let firstCard; //めくったカードのインデックス番号
let secondCard;

nextPlayer.textContent = `次はplayer${playerNum}の番です`;
player1Point.textContent = `player1:${match1}`;
player2Point.textContent = `player2:${match2}`;

//8つのインライン要素を作成しclassを設定
for (let i = 0; i < 8; i++) {
	const a = document.createElement("a");
	a.classList.add("card", "back");
	panel.appendChild(a);
}

//配列をランダムに並び替えるアルゴリズム（ダステンフェルドの手法）
for (let i = cardNums.length; 1 < i; i--) { //i=1のとき必ずk=0になるため入れ替えが発生しない、だから1<i
	const k = Math.floor(Math.random() * i);
	[cardNums[k], cardNums[i - 1]] = [cardNums[i - 1], cardNums[k]]; //分割代入
}
console.log(cardNums); //確認用

for (let i = 0; i < cardNums.length; i++) {
	panel.children[i].addEventListener("click", function() {
		//カードを表にする処理
		if (count === 0) { //1枚目
			this.classList.remove("back"); //aタグからclass="back"を削除
			this.textContent = cardNums[i];
			firstNum = cardNums[i];
			firstCard = i; //めくったカードのインデックス番号を記録
			count++;
		} else if (count === 1) { //2枚目
			this.classList.remove("back");
			this.textContent = cardNums[i];
			secondNum = cardNums[i];
			secondCard = i;

			if (firstCard === secondCard) { //イレギュラー（1枚目と2枚目が同じカードだったときの対策）
				return;
			}
			count++; //これがない場合、0.5秒以内に3枚目をクリックされると誤動作を起こす

			setTimeout(function() {
				if (firstNum === secondNum) {
					panel.children[firstCard].classList.add("finish");
					panel.children[secondCard].classList.add("finish");
					if (playerNum === 1) {
						match1++;
					} else {
						match2++;
					}
				} else {
					panel.children[firstCard].classList.add("back");
					panel.children[secondCard].classList.add("back");
					panel.children[firstCard].textContent = "";
					panel.children[secondCard].textContent = "";
					if (playerNum === 1) {
						playerNum = 2;
					} else {
						playerNum = 1;
					}
				}

				nextPlayer.textContent = `次はplayer${playerNum}の番です`;
				player1Point.textContent = `player1:${match1}`;
				player2Point.textContent = `player2:${match2}`;
				
				if (match1 + match2 === 4) {
					if (match1 > match2) {
						alert("player1の勝ち");
					} else if (match2 > match1) {
						alert("player2の勝ち");
					} else {
						alert("引き分け");
					}
					location.reload();
				}
				count = 0;
			}, 500)
		}
	});
}


