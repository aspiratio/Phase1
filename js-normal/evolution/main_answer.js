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

const setBtn = document.getElementById('setBtn');
const reset = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');

setBtn.addEventListener('click', function() {
  showImg.innerHTML = '';
  const checkEvo = Math.floor(Math.random() * 10);

  const first = document.createElement('div');
  first.innerHTML = "<img src='./img/evolution1.png' alt='原人'  />";
  showImg.appendChild(first);

  if (checkEvo >= 4) {
    const second = document.createElement('div');
    second.innerHTML = "<img src='./img/evolution2.png' alt='旧人'  />";
    showImg.appendChild(second);
  }
  if (checkEvo >= 7) {
    const third = document.createElement('div');
    third.innerHTML = "<img src='./img/evolution3.png' alt='新人'/>";
    showImg.appendChild(third);
  }
  if (checkEvo >= 9) {
    const fourth = document.createElement('div');
    fourth.innerHTML = "<img src='./img/evolution4.png' alt='現代人'/>";
    showImg.appendChild(fourth);
  }
});

reset.addEventListener('click', function() {
  showImg.innerHTML = '';
});