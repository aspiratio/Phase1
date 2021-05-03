// ランダムで0〜9の数字を3つ選択（同じ数字は選ばない）

// 答え合わせをクリック

// 入力された数字を配列に1桁ずつ入れる
// 配列に入った数字が3つでなければ
// 	3桁の数字を入力してくださいとアラート
//  return
// 同じ数字があれば（正規表現？）
// 	同じ数字を2回使ってはいけませんとアラート
//  return

// 入力された数字の配列と答えの配列を比較
// 数字と順番が正しければ
// 	EATに1足す
// 数字は含まれるが順番が間違っていれば
// 	BITEに1足す

// ◯EAT, ◯BITとアラート
// もしEATが3なら
//  正解ですとアラート
//  リロード

//確認用
console.log("外すと残り回数が減る")
console.log("残り回数0でメッセージ")

//ランダムで重複しない3つの数字の配列を作る
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //0〜9の配列を作る
const rightArray = []; //ここにランダムな数字を3つ入れる

for (i = 0; i < 3; i++) {
	const n = array.length //配列のデータ数
	const k = Math.floor(Math.random() * n); //0〜9の数字を一つ生成
	
	rightArray.push(array[k]); //配列のk番目の数字を解答配列に入れる
	array.splice(k, 1); //代入した数字を配列から削除
}
console.log(rightArray); //答え確認用
const answerNum = document.getElementById("answerNum");
const numCheck = document.getElementById("numCheck");
const remainTurn = document.getElementById("remainTurn");

let turn = 3;
remainTurn.textContent = `あと残り${turn}回です`

numCheck.addEventListener("click", function() {
	let eat = 0;
	let bit = 0;
	
	const answerArray = answerNum.value.split(""); //回答欄に書かれた数字を(文字列として）1桁ずつの配列に変える
	function duplicateCheck() {
		return new Set(answerArray).size !== answerArray.length; //回答配列に同じ文字列があればtrueになる
	}
	answerNum.value = ""; //フォームの中身をクリアする（配列を作った後でないといけない）
	
	if (answerArray.length !== 3) { //上記配列の要素数が3つか確認する
		alert("3桁の数字を入力してください");
		return;
	} else if (duplicateCheck()) {
		alert("同じ数字を2回以上使ってはいけません");
		return;
	}
	
	turn--;

	for (i = 0; i < 3; i++) { //for文を重ねることでi=0~2のときのanserArrayの要素と、j=0~2のときのrightArrayの要素を一つずつ総当たりする
		for (j = 0; j < 3; j++) {
			if (answerArray[i] == rightArray[j]) { //answerArrayの要素は文字列、rightArrayの要素は数値だから"=="で比較する
				if (i === j) {
					eat++;
				} else {
					bit++;
				}
			}
		}
	}
	alert(`${eat}EAT, ${bit}BIT`);
	if (eat === 3) {
		alert("正解です！！！");
		location.reload();
	} else if (turn === 0) {
		remainTurn.textContent = `ゲームオーバー！答えは${rightArray}でした`
	} else {
		remainTurn.textContent = `あと残り${turn}回です`
	}
})

