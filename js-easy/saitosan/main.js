// if文ver
function setBtn() {
	const hoge = (Math.random()*10);
	console.log(hoge);//数値の確認用
	if (hoge < 5) {
		window.alert("ぺっぺっぺー");
	} else {
		window.alert("斉藤さんだぞ");
	}
};

// 三項演算子ver
function sankoBtn() {
	const hoge = (Math.random()*10);
	console.log(hoge);//数値の確認用
	window.alert(hoge < 5 ? "ぺっぺっぺー" : "斉藤さんだぞ");
}
// クリックで関数が動く
// 0から9までの数字をランダムで一つ作る
// 0から5以上ならば
// 	ぺっぺっぺーとアラート
// 	それ以外ならば
// 	斉藤さんだぞとアラート

// チャレンジ問題
const word1 = "寿司が食べたい"
const word2 = "ステーキが食べたい"

function foodBtn() {
	const hoge = (Math.random()*10);
	console.log(hoge);//数値の確認用
	if (hoge < 5) {
		if (window.confirm(word1)) {
			window.alert(word1);
		} else {
			window.alert(word2);
		}
	} else {
		if (window.confirm(word2)) {
			window.alert(word2);
		} else {
			window.alert(word1);
		}
	}
};

// クリックで関数が動く
// 0から9までの数字をランダムで一つ作る
// 0から5以上ならば
	// "寿司が食べたい"とconfirm
		// OKならば"寿司が食べたい"とアラート
		// キャンセルならば"ステーキが食べたい"とアラート
// それ以外ならば
	// "ステーキが食べたい"とconfirm
		// OKならば"ステーキが食べたい"とアラート
		// キャンセルならば"寿司が食べたい"とアラート

