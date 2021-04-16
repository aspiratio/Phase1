let i = 0;
const CntUp = document.getElementById("rewriteNum");
function rewriteCntUp() {
	i++;
	if (i % 3 === 0 && i % 5 === 0) {
		CntUp.textContent = "fizzbuzz";
	} else if (i % 3 === 0) {
		CntUp.textContent = "fizz";
	} else if (i % 5 === 0) {
		CntUp.textContent = "buzz";
	} else {
		CntUp.textContent = i;
	}
}
	
// 初期値0
// pタブのIDを取得
// クリックで関数が動く
// カウントを1増やす
// 3の倍数、5の倍数の判定
// textContentを変更

let v = 1;
const counter = document.getElementById("showNum");
function fizzbuzzBtn() {
	if (v % 3 === 0 && v % 5 === 0) {
		counter.textContent = "fizzbuzz";
		v++;
	} else {
		window.alert("ざんねん！");
		window.location.reload();
	}
}
function fizzBtn() {
	if (v % 3 === 0 && v % 5 !== 0) {
		counter.textContent = "fizz";
		v++;
	} else {
		window.alert("ざんねん！");
		window.location.reload();
	}
}
function buzzBtn() {
	if (v % 3 !== 0 && v % 5 === 0) {
		counter.textContent = "buzz";
		v++;
	} else {
		window.alert("ざんねん！");
		window.location.reload();
	}
}
function numBtn() {
	if (v % 3 !== 0 && v % 5 !== 0) {
		counter.textContent = v;
		v++;
	} else {
		window.alert("ざんねん！");
		window.location.reload();
	}
}



// 案②
// 初期値0
// pタブのIDを取得
// fizzbuzzボタンがクリックされたとき
// 	vが3の倍数または5の倍数ならば
// 		fizzbuzzを表示（textContentを変更)
// 		カウントを1増やす
// 	それ以外なら
// 		アラートを出す
// 		画面をリロードする
// fizzボタンが・・・・
