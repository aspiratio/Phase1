// BINGOの配列を作成

// 1〜15の重複しない5つの数字の配列を作成
// Math.random使用、includeで重複を検知し、falseなら配列に入れる、whileで要素数5になるまで繰り返し
// 16〜30、31〜45、46〜60、61〜75でも同様
// ただし、46〜60の真ん中はfree

// 上記5つの配列で2次元配列を作成し、縦横を入れ替える

// 配列の中身をテーブルに追加する

// 以下、チャレンジ問題のフロー

// freeの背景色を変更する（class=hit-numをつける）
// セットをクリック
// ランダムで1〜75の数字を選択(重複なし)
// アラートで表示
// 選択された数字がテーブルにあれば
// 	セルの背景色を変更する
// カウントを1減らす
// カウントが0なら
// 	セットボタンを押せなくする

const bingo = ["B", "I", "N", "G", "O"];

const column1 = [];
const column2 = [];
const column3 = [];
const column4 = [];
const column5 = [];

function randomNum(max, min, column) {
	while (column.length < 5) { //要素数5になるまで繰り返す
		const num = Math.floor(Math.random() * (max - min + 1) + min); //min以上、max以下の整数をランダム取得
		if (!column.includes(num)) { //すでにある数字と重複がないときのみnumを配列に追加
			column.push(num);
		}
	}
}

randomNum(15, 1, column1); //1-15
randomNum(30, 16, column2); //16-30
randomNum(45, 31, column3); //31-45 3番目はfree
column3[2] = "free";
randomNum(60, 46, column4); //46-60
randomNum(75, 61, column5); //61-75

const columns = [column1, column2, column3, column4, column5]; //二次元配列作成
console.log(columns); //確認用

// 行と列を入れ替える関数(解説はexplain.jsに記載)
// function transpose(a) {
// 	return a[0].map(function (_, c) {
// 			return a.map(function (r) {
// 					return r[c];
// 				});
// 		});
// }

// 上記は理解できなかったため自分で関数作成(中の一次元配列の要素数が全て同じときのみ使用可)
function transpose(x) {
	const transArrays = [];

	for (i = 0; i < x.length; i++) {
		const array = [];
		for (j = 0; j < x[0].length; j++) {
			array.push(x[j][i]);
		}
		transArrays.push(array);
	}
	return transArrays;
}

// 繰り返し処理を使わない場合は下記の通り（上記関数と同じ処理）
// const lines = [];

// const line1 = [];
// line1.push(columns[0][0]);
// line1.push(columns[1][0]);
// line1.push(columns[2][0]);
// line1.push(columns[3][0]);
// line1.push(columns[4][0]);
// lines.push(line1);

// const line2 = [];
// line2.push(columns[0][1]);
// line2.push(columns[1][1]);
// line2.push(columns[2][1]);
// line2.push(columns[3][1]);
// line2.push(columns[4][1]);
// lines.push(line2);

// const line3 = [];
// line3.push(columns[0][2]);
// line3.push(columns[1][2]);
// line3.push(columns[2][2]);
// line3.push(columns[3][2]);
// line3.push(columns[4][2]);
// lines.push(line3);

// const line4 = [];
// line4.push(columns[0][3]);
// line4.push(columns[1][3]);
// line4.push(columns[2][3]);
// line4.push(columns[3][3]);
// line4.push(columns[4][3]);
// lines.push(line4);

// const line5 = [];
// line5.push(columns[0][4]);
// line5.push(columns[1][4]);
// line5.push(columns[2][4]);
// line5.push(columns[3][4]);
// line5.push(columns[4][4]);
// lines.push(line5);


const lines = transpose(columns); //行と列を入れ替えた二次元配列
lines.unshift(bingo); //最初に作ったbingoの配列を挿入
console.log(lines); //確認用

const table = document.getElementById("view");

for (i = 0; i < lines.length; i++) { //二次元配列の要素数だけ繰り返す
	const row = table.insertRow(-1); //tableに行を追加、"-1"で末尾に挿入する
	for (j = 0; j < lines[0].length; j++) { //中の1次元配列の要素数だけ繰り返す
		const cell = row.insertCell(-1); //行にセルを追加
		cell.textContent = lines[i][j]; //セルに値を入れる
	}
}

// 以下、チャレンジ問題

//表のx行目、y列目（一番端は0行目、0列目）のセルにclassを追加する関数
function addClass(x, y) {
	const tableLine = table.rows;
	const hitCell = tableLine[x].querySelector(`td:nth-child(${y + 1})`); //nth-childは1からカウントするため、インデックス番号＋1
	hitCell.classList.add("hit-num");
}

//任意の数字が含まれるセルを特定し、classを追加する関数
function searchCell(num) {
	const lineNum = lines.findIndex(function(element) {
		return element.includes(num); //2次元配列にnumを含む要素（配列）があるか確認する、見つかればインデックス番号が帰る、見つからなければ-1が帰る
	});
	if (lineNum !== -1) { //上記でnumを含む配列が見つかれば
		const columnNum = lines[lineNum].indexOf(num); //その配列の何番目の要素にnumが含まれるか確認する、インデックス番号が帰る
		addClass(lineNum, columnNum);
	}
}

searchCell("free"); //freeの背景色変更

const hitNum = document.getElementById("hitNum"); //ボタン要素取得

const nonSelectedNum = []; //1~75の数値が入った配列を作成
for (i = 1; i <= 75; i++) {
	nonSelectedNum.push(i);
}

hitNum.addEventListener("click", function() {
	if (nonSelectedNum.length !== 0) {
		const n = nonSelectedNum.length;
		const k = Math.floor(Math.random() * n);
		
		const selectedNum = nonSelectedNum[k]; //配列のk番目の数字を取得
		nonSelectedNum.splice(k, 1); //取得した数字を配列から除く
		
		alert(`数字は${selectedNum}番です！`);
		
		searchCell(selectedNum);
	}
})
