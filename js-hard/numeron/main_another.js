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
console.log("3桁でないとき")
console.log("同じ数字のとき")
console.log("外れたとき")
console.log("当たったとき")
console.log("当てたあと答えが変わること")

//ランダムで重複しない3つの数字の配列を作る
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //0〜9の配列を作る
const rightArray = []; //正解配列

for (i = 1; i < 4; i++) {
	const n = array.length //配列のデータ数
	const k = Math.floor(Math.random() * n); //0〜9の数字を一つ生成
	
	rightArray.push([i, array[k]]); //数字の順番iと正解の数字を正解配列に入れる
	array.splice(k, 1); //代入した数字を配列から削除
}

console.log(rightArray); //答え確認用

const answerNum = document.getElementById("answerNum");
const numCheck = document.getElementById("numCheck");

numCheck.addEventListener("click", function() {
	let eat = 0;
	let bit = 0;
	const answerArray = [];
	for (i = 1; i <= answerNum.value.length; i++) {
		answerArray.push([i, Number(answerNum.value.charAt(i-1))]); //数字の順番iと回答欄に書かれた数字を1桁ずつ配列に入れる、valueで取得した数字は文字列なので数値に変換
	}

	function duplicateCheck() { //回答配列が[[1,2], [2,5], [3,9]]だとすると、2と5と9が等しくないか調べるための関数
		return answerArray[0][1] === answerArray[1][1]
				|| answerArray[0][1] === answerArray[2][1]
				|| answerArray[1][1] === answerArray[2][1];
	}
	answerNum.value = ""; //フォームの中身をクリアする（配列を作った後でないといけない）

	if (answerArray.length !== 3) { //上記配列の要素数が3つか確認する
		alert("3桁の数字を入力してください");
		return;
	} else if (duplicateCheck()) {
		alert("同じ数字を2回以上使ってはいけません");
		return;
	}

	for (i = 0; i < 3; i++) { //for文を重ねることでi=0~2のときのanserArrayの要素と、j=0~2のときのrightArrayの要素を一つずつ総当たりする
		if (answerArray[i][1] === rightArray[i][1]) {
			eat++;
		} else {
			for (j = 0; j < 3; j++) {
				if (answerArray[i][1] === rightArray[j][1]) {
					bit++;
				}
			}
		}
	}
	alert(`${eat}EAT, ${bit}BIT`);
	if (eat === 3) {
		alert("正解です！！！");
		location.reload();
	}
})

