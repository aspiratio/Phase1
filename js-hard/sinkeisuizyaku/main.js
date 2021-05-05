// 8枚のカードを用意（画像ではなくCSS）
// 1〜4の数字を2組ずつ入れた配列を用意
// 上記配列の要素順をランダムにした配列を作成

// 1枚目をクリック
// 配列の同じ順番にある数字を表示(backのclassを削除)
// 2枚目をクリック
// 配列の同じ順番にある数字を表示(backのclassを削除)
// 0.5秒後、もし1枚目と2枚目が同じなら
// 	2枚とも画面から削除（finish）
// そうでなければ
// 	元に戻す
// 全部削除（finish）になったら
// 	終了ですとアラート
// 	リロード

const panel = document.getElementById("panel");

//8つのインライン要素を作成しclassを設定
for (let i = 0; i < 8; i++) {
	const a = document.createElement("a");
	a.classList.add("card", "back");
	panel.appendChild(a);
}

const cardNums = [1, 1, 2, 2, 3, 3, 4, 4];

//配列をランダムに並び替えるアルゴリズム（ダステンフェルドの手法）
for (let i = cardNums.length; 1 < i; i--) { //i=1のとき必ずk=0になるため入れ替えが発生しない、だから1<i
	const k = Math.floor(Math.random() * i);
	[cardNums[k], cardNums[i - 1]] = [cardNums[i - 1], cardNums[k]]; //分割代入
}
console.log(cardNums); //確認用

let count = 0; //1枚目と2枚目を区別するためのカウンター
let match = 0; //そろえたカード枚数のカウンター

let firstNum; //めくったカードの数字
let secondNum;
let firstCard; //めくったカードのインデックス番号
let secondCard;

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
					match++;
				} else {
					panel.children[firstCard].classList.add("back");
					panel.children[secondCard].classList.add("back");
					panel.children[firstCard].textContent = "";
					panel.children[secondCard].textContent = "";
				}
				if (match === 4) {
					alert("おめでとう！")
					location.reload();
				}
				count = 0;
			}, 500)
		}
	});
}


