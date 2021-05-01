//カレンダーで日付を指定
//検索をクリック
//指定した時間の0時0分0秒をセット

//セットした時間と現在の時間の差をミリ秒で取得
//ミリ秒を日時間分秒に変換
//残り時間を表示
//1秒毎に更新

const dateSet = document.getElementById("dateSet");
const dateSearch = document.getElementById("dateSearch");
const diffTime = document.getElementById("diffTime");

function countDown() {
	const date = moment(dateSet.value);
	const diff = date.diff(moment());
	const formatedDate = date.format("YYYY-MM-DD")
	const duration = moment.duration(diff);
	const days = Math.trunc(duration.asDays());
	const hours = duration.hours();
	const minutes = duration.minutes();
	const seconds = duration.seconds();
	diffTime.textContent = `${formatedDate}まで後${days}日${hours}時間${minutes}分${seconds}秒`;
}

dateSearch.addEventListener("click", function() {
	setInterval("countDown()", 1000);
})
