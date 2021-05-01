//ドラえもんの誕生日は2112年9月3日

//現在の時間を取得
//現在からドラえもんの誕生日までの差をミリ秒で取得
//ミリ秒を日時間分秒に変換
//1秒毎に更新


const content = document.querySelector("body");

const birthday = moment("2112-09-03 00:00:00"); //ドラえもんの誕生日、


function countDown() {
	const now = moment();
	
	const diff = birthday.diff(now); //差分のミリ秒
	const duration = moment.duration(diff); // 期間のオブジェクトを作成
	
	const days = Math.floor(duration.asDays()); //asをつけると期間全体を日に換算、小数点以下切り捨て
	const hours = duration.hours(); //期間全体ではなく年月日時間分秒に分けた時の数値を表示
	const minutes = duration.minutes();
	const seconds = duration.seconds();
	
	content.innerHTML = `<p>ドラえもんが生まれるまで後${days}日${hours}時間${minutes}分${seconds}秒</p>`;
}

setInterval("countDown()", 1000);