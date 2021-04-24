//キーボードが押されるたびに入力された文字数を取得
//400から文字数を引く
//残りの文字数を表示
//リセットで文字をクリア

let wordCount = 0;
let sampleForm = document.getElementById("sampleForm");
let textCnt = document.getElementById("textCounter");
const maxNum = 400;
let wordLength = 0;
textCnt.textContent = `あと ${maxNum - wordLength}文字`;

//イベントリスナーを使う場合
sampleForm.addEventListener("keyup", function() {
	wordLength = sampleForm.value.length;
	textCnt.textContent = `あと ${maxNum - wordLength}文字`;
});

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function() {
	textCnt.textContent = `あと ${maxNum}文字`;
});

const iniDel = document.getElementById("iniDel");
const endDel = document.getElementById("endDel");

iniDel.addEventListener("click", function() {
	sampleForm.value = sampleForm.value.slice(1);
	wordLength = sampleForm.value.length;
	textCnt.textContent = `あと ${maxNum - wordLength}文字`;
});
endDel.addEventListener("click", function() {
	sampleForm.value = sampleForm.value.slice(0, -1);
	wordLength = sampleForm.value.length;
	textCnt.textContent = `あと ${maxNum - wordLength}文字`;
});

//イベントリスナーを使わない場合
// sampleForm.onkeyup = keyTouch;
// function keyTouch() {
// 	wordLength = sampleForm.value.length;
// 	textCnt.textContent = `あと ${maxNum - wordLength}文字`;
// }