const player1Btn = document.getElementById('player1Btn');//startBtn1
const player2Btn = document.getElementById('player2Btn');//startBtn2
const body = document.querySelector('body');//必要ない？

const setPlayer1dice = document.getElementById('setPlayer1dice');//dice1
const setPlayer2dice = document.getElementById('setPlayer2dice');//dice2

const result = document.getElementById('result');

let player1Timer;//timer1
let player2Timer;//timer2

let player1Num = 1;//randomNum1
let player2Num = 1;//randomNum2

let turn = 2;//残り回数（1と2がサイコロをふる回数）

let player1Dice = `./img/saikoro${player1Num}.png`;//数字の出目を入れる変数の宣言と初期値の代入を同時に
setPlayer1dice.setAttribute('src', player1Dice);//imgタグのsrc属性に相対パスを追加

let player2Dice = `./img/saikoro${player2Num}.png`;
setPlayer2dice.setAttribute('src', player2Dice);

// サイコロを振る（同じ書き方）
const player1Random = function() {
  player1Num = Math.floor(Math.random() * 6 + 1);
  player1Dice = `./img/saikoro${player1Num}.png`;
  setPlayer1dice.setAttribute('src', player1Dice);
};

const player2Random = function() {
  player2Num = Math.floor(Math.random() * 6 + 1);
  player2Dice = `./img/saikoro${player2Num}.png`;
  setPlayer2dice.setAttribute('src', player2Dice);
};

// ボタン
player1Btn.addEventListener('click', function() {
  clearInterval(player1Timer);
  player1Timer = setInterval('player1Random()', 100);
  player1Btn.disabled = true;
  func1();
});

player2Btn.addEventListener('click', function() {
  clearInterval(player2Timer);
  player2Timer = setInterval('player2Random()', 100);
  player2Btn.disabled = true;
  func2();
});

function check() {
	if (turn !== 0) { //0でないときはここで関数を切り上げる
		return;
	}
	if (player1Num > player2Num) {
		result.textContent = 'player1の勝利';
	} else if (player1Num === player2Num) {
		result.textContent = '引き分け';
	} else {
		result.textContent = 'player2の勝利';
	}
	player1Btn.disabled = false; //ボタンにつけていたdisableを削除
	player2Btn.disabled = false;
	turn = 2; //残り回数をもとに戻す
}

//player1用
function func1() {
	asyncFunc1();
}

function asyncFunc1() {
	function random() {
		return new Promise(function (resolve) { //new Promiseでインスタンス生成、引数には関数を指定
			result.textContent = '???'; //その関数の中に実行したい処理を書く
			setTimeout(() => {
				resolve();
				clearInterval(player1Timer);
			}, 3000);
		});
	};

	await random(); //random()が終わるまで次の処理には進まない
	turn -= 1;
	check();
}

//player2用
function func2() {
	asyncFunc2();
}

function asyncFunc2() {
	const random = () => {
		return new Promise((resolve) => {
			result.textContent = '???';
			setTimeout(() => {
				resolve();
				clearInterval(player2Timer);
			}, 3000);
		});
	};

	await random();
	turn -= 1;
	check();
}