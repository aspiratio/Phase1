//ボタンの要素を取得
//進化するのイベントリスナー
//表示している画像を消す
//0~9の数字をランダムに選択
//画像1を入れる
	//4以上なら画像2を入れる
	//7以上なら画像3を入れる
	//9以上なら画像4を入れる
//リセットのイベントリスナー
//表示している画像を消す

const setBtn = document.getElementById("setBtn");
const resetBtn = document.getElementById("resetBtn");
const showImg = document.getElementById("showImg");

setBtn.addEventListener("click", function() {
	showImg.innerHTML = "";
	const randomNum = Math.random() * 10;
  
	const image1 = document.createElement("div");
	image1.innerHTML = "<img src='./img/evolution1.png' alt='原人'>"+"<p>原人</p>";
	showImg.appendChild(image1);
	if (randomNum >= 4) {
    const image2 = document.createElement("div");
    image2.innerHTML = "<img src='./img/evolution2.png' alt='旧人'>"+"<p>旧人</p>";
    showImg.appendChild(image2);
	}
	if (randomNum >= 7) {
    const image3 = document.createElement("div");
    image3.innerHTML = "<img src='./img/evolution3.png' alt='新人'>"+"<p>新人</p>";
    showImg.appendChild(image3);
	}
	if (randomNum >= 9) {
    const image4 = document.createElement("div");
    image4.innerHTML = "<img src='./img/evolution4.png' alt='現代人'>"+"<p>現代人</p>";
    showImg.appendChild(image4);
  }
	console.log(randomNum);//数値確認用
});

resetBtn.addEventListener("click", function() {
	showImg.innerHTML = "";
});