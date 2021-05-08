// ここは順番はなんでもOK

// 52枚のカードを用意（画像ではなくCSS）
// 1〜13（11〜13はJ,Q,K）の数字をマークごとに4組ずつ入れた配列を用意
// ハートとダイヤは赤にする　textContentを表示するときに場合分け？
// 上記配列の要素順をランダムにした配列を作成
// 現在のplayerの文字色を赤色に変更（初めはplayer1）
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
// 	現在のplayerを変える（文字色も変える）

// 全部削除（finish）になったら
// 	勝敗を表示するアラート
// 	リロード

const panel = document.getElementById("panel");

//[数字, 表示テキスト]の二次元配列を作る
const cardNums = [];
function makeCard(x, y) {
	cardNums.push([x, `♠${y}`]);
	cardNums.push([x, `♣${y}`]);
	cardNums.push([x, `♥${y}`]);
	cardNums.push([x, `♦${y}`]);
}

for (let i = 1; i <= 13; i++) {
	switch (true) {
		case i === 1:
			makeCard(i, "A");
			break;
		case i < 11 && i !== 1:
			makeCard(i, i);
			break;
		case i === 11:
			makeCard(i, "J");
			break;
		case i === 12:
			makeCard(i, "Q");
			break;
		case i === 13:
			makeCard(i, "K");
			break;
	}
}

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

player1Point.textContent = `player1 : ${match1}点`;
player2Point.textContent = `player2 : ${match2}点`;
player1Point.classList.add("red");

//8つのインライン要素を作成しclassを設定
for (let i = 0; i < 52; i++) {
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
		if (/^[♥♦]/.test(cardNums[i][1])) { //先頭の文字がハートまたはダイヤのときにtrue
			this.classList.add("red");
		}
		//カードを表にする処理
		if (count === 0) { //1枚目
			this.classList.remove("back"); //aタグからclass="back"を削除
			this.textContent = cardNums[i][1]; //テキストの表示
			firstNum = cardNums[i][0]; //計算用の数字
			firstCard = i; //めくったカードのインデックス番号を記録
			count++;
		} else if (count === 1) { //2枚目
			this.classList.remove("back");
			this.textContent = cardNums[i][1];
			secondNum = cardNums[i][0];
			secondCard = i;
			
			if (firstCard === secondCard) { //イレギュラー（1枚目と2枚目が同じカードだったときの対策）
				return;
			}
			count++; //これがない場合、0.5秒以内に3枚目をクリックされると誤動作を起こす
			
			setTimeout(function() {
				if (firstNum === secondNum) { //揃ったカードを見えなくさせる
					panel.children[firstCard].classList.add("finish");
					panel.children[secondCard].classList.add("finish");
					if (playerNum === 1) {
						match1++;
					} else {
						match2++;
					}
				} else {
					panel.children[firstCard].classList.add("back"); //揃わなかったカードを裏返す
					panel.children[secondCard].classList.add("back");
					panel.children[firstCard].textContent = "";
					panel.children[secondCard].textContent = "";

					const turnDeg1 = Math.random() * 24 - 12; //ランダムで-8〜+8の数字を選択
					const turnDeg2 = Math.random() * 24 - 12;
					panel.children[firstCard].style.transform = `rotate(${turnDeg1}deg)`; //1枚目に指定したaタグを-8〜+8度回転
					panel.children[secondCard].style.transform = `rotate(${turnDeg2}deg)`;

					if (playerNum === 1) {
						playerNum = 2;
						player2Point.classList.add("red");
						player1Point.classList.remove("red");
					} else {
						playerNum = 1;
						player1Point.classList.add("red");
						player2Point.classList.remove("red");
					}
				}
				
				player1Point.textContent = `player1 : ${match1}点`;
				player2Point.textContent = `player2 : ${match2}点`;
				
				if (match1 + match2 === 26) {
					if (match1 > match2) {
						alert(`${match1}対${match2}でplayer1の勝ち！`);
					} else if (match2 > match1) {
						alert(`${match1}対${match2}でplayer2の勝ち！`);
					} else {
						alert("引き分け！");
					}
					location.reload();
				}
				count = 0;
			}, 500)
		}
	});
}


