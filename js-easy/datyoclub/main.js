let counter = 0;
const cntUp = function () {
	counter++;
	console.log(counter);//回数確認用
};
// 変数counterを宣言, 初期値0
// 俺がやるをクリックすると関数が動く
// 	counterを1増やす


/* repeatを使った書き方 */
const reply = function() {
	const string = "どうぞどうぞ";
	const rptimes = string.repeat(counter);
	alert(rptimes);
	counter = 0;
};
/* チャレンジ問題 */
const cntDown = function() {
	if (counter >= 1) {
		counter --;
	} else {
		alert("もう誰もいない、、、");
	}
}

// 俺はやらないをクリックすると関数が動く
// もしcounterが1以上ならば
// 	counterから1引く
// それ以外なら
// 	もう誰もいないとアラート

/* IEでも動く書き方(自分の回答) */
// const reply = function() {
// 	let rptimes = "";
// 	for (i = 0; i < counter; i++) {
// 		rptimes += "どうぞどうぞ";
// 	}
// 	alert(rptimes);
// 	counter = 0;
// }

// どうぞどうぞをクリックすると関数が動く
// 	変数rptimesを宣言, 初期値空白
// 	for文でcounterの数値をiに代入して繰り返し処理
// 		rptimesにどうぞどうぞを足す
// 	アラートでrptimesを表示する
// 	counterを0にする

/* IEでも動く書き方(教材の回答) */
// const reply = function() {
// 	const action = Array(1 * counter + 1).join('どうぞどうぞ');
// 	alert(action);
// 	counter = 0;
// };

//Array(n)は要素がn個の配列
//.join(a)で要素と要素の間にaを挿入している　n a n a n