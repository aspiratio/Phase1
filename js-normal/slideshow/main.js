//連想配列に季節名と画像をセット
//季節カウンターの初期値を0にセット
//季節ボタンをクリックする
//現在の数字を確認、条件分岐で季節カウンターが0〜3のときにそれぞれ表示される季節ボタンを変える
//季節カウンターを1増やす、3なら0に戻す

//季節に合わせた画像が表示される
//別の季節名のボタンが表示される

const winter = {img: "./img/slide1.png", text: "春へ"};
const spring = {img: "./img/slide2.png", text: "夏へ"};
const summer = {img: "./img/slide3.png", text: "秋へ"};
const automn = {img: "./img/slide4.png", text: "冬へ"};

const data = [winter, spring, summer, automn];

// console.log(data[0]);
// console.log(data[2]["text"]);
// //または
// console.log(data[2].text);

let imgNum = 0;
const pushBtn = document.getElementById("pushBtn");
const viewImg = document.getElementById("viewImg");
viewImg.setAttribute("src", data[0].img);

pushBtn.textContent = data[imgNum].text;
pushBtn.addEventListener("click", function() {
	if (imgNum === 3) {
		imgNum = 0;
	} else {
		imgNum++;
	}
	pushBtn.textContent = data[imgNum].text;
	viewImg.src = data[imgNum].img;
	console.log(typeof(imgNum));
});

/* <!-- 追加チャレンジ問題 --> */
const seasonSelect = document.getElementById("seasonNum");
const skipBtn = document.getElementById("skipBtn");

skipBtn.addEventListener("click", function() {
	imgNum = seasonSelect.value;
	pushBtn.textContent = data[imgNum].text;
	viewImg.src = data[imgNum].img;
	console.log(typeof(imgNum));
});