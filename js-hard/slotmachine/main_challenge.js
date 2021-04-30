// スタートをクリック
// 3つのボタンのdisable解除
// 中央の3つの数字が0.1秒に1ずつ増える0〜9（初期値0）
// 上の数字は初期値9、下の数字は初期値1で中央と同じ動き

// 3つそれぞれのストップをクリック
// 数字の変更を停止
// ボタンをdisableする

// 3つの数字がストップしたら
// 	3つの数字が等しいとき
// 		成功！とアラート
// 	そうでなければ
// 		再挑戦とアラート

//背景色
document.getElementsByClassName("middle-slot")[0].style.backgroundColor = "coral";

//表示時間の要素を取得(for文を使えば短く書ける)
const nowTime1 = document.getElementById("nowTime");
const nowTime2 = document.getElementById("nowTime2");
const nowTime3 = document.getElementById("nowTime3");
const nowTime4 = document.getElementById("nowTime4");
const nowTime5 = document.getElementById("nowTime5");
const nowTime6 = document.getElementById("nowTime6");
const nowTime7 = document.getElementById("nowTime7");
const nowTime8 = document.getElementById("nowTime8");
const nowTime9 = document.getElementById("nowTime9");

//ストップボタン
const setTime1 = document.getElementById("setTime1");
const setTime2 = document.getElementById("setTime2");
const setTime3 = document.getElementById("setTime3");
//スタートボタン
const startTimer = document.getElementById("startTimer");

//表示時間のtextContent初期値
nowTime1.textContent = 0;
nowTime2.textContent = 0;
nowTime3.textContent = 0;
nowTime4.textContent = 9;
nowTime5.textContent = 9;
nowTime6.textContent = 9;
nowTime7.textContent = 1;
nowTime8.textContent = 1;
nowTime9.textContent = 1;

//繰り返し処理を代入する変数
let timer = [];
for (i = 1; i < 10; i++) {
	timer[i] = null;
}

//0~9のスロット用関数
function countUp(nowTime) {
	if (nowTime.textContent < 9) {
		nowTime.textContent++;
	} else {
		nowTime.textContent = 0;
	}
}

startTimer.addEventListener("click", function() {
	for (i = 1; i < 10; i++) {
		clearInterval(timer[i]);
		timer[i] = setInterval(`countUp(${"nowTime" + i})`, 100);
	}
	setTime1.disabled = false;
	setTime2.disabled = false;
	setTime3.disabled = false;
});

setTime1.addEventListener("click", function() {
	clearInterval(timer[1]);
	clearInterval(timer[4]);
	clearInterval(timer[7]);
	this.disabled = true;
	if (setTime2.disabled === true
		& setTime3.disabled === true) {
			if (nowTime1.textContent === nowTime2.textContent
				&& nowTime1.textContent === nowTime3.textContent) {
					alert("成功！！");
				} else {
					alert("再挑戦(T ^ T)");
				}
	}
})
setTime2.addEventListener("click", function() {
	clearInterval(timer[2]);
	clearInterval(timer[5]);
	clearInterval(timer[8]);
	this.disabled = true;
	if (setTime1.disabled === true
		& setTime3.disabled === true) {
			if (nowTime1.textContent === nowTime2.textContent
				&& nowTime1.textContent === nowTime3.textContent) {
					alert("成功！！");
				} else {
					alert("再挑戦(T ^ T)");
				}
	}
})
setTime3.addEventListener("click", function() {
	clearInterval(timer[3]);
	clearInterval(timer[6]);
	clearInterval(timer[9]);
	this.disabled = true;
	if (setTime1.disabled === true
		& setTime2.disabled === true) {
			if (nowTime1.textContent === nowTime2.textContent
				&& nowTime1.textContent === nowTime3.textContent) {
					alert("成功！！");
				} else {
					alert("再挑戦(T ^ T)");
				}
	}
})