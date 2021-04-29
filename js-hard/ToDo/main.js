// 追加するをクリック
// 入力したテキストを変数に代入と完了ボタンがulタグに追加される

// 完了をクリック
// 追加したテキストと完了ボタンが削除される

const addText = document.getElementById("add-area");
const addBtn = document.getElementsByClassName("add-btn")[0];
const todo = document.getElementById("todo");

addBtn.addEventListener("click", function() {
	const task = document.createElement("li"); //liタグ作成
	task.textContent = addText.value; //liタグのテキストを設定
	todo.appendChild(task); //ulタグの子要素にliタグを追加

	const taskBtn = document.createElement("button"); //buttonタグを作成
	taskBtn.textContent = "完了"; //buttonタグのテキストを設定
	task.appendChild(taskBtn); //liタグの子要素にbuttonタグを追加

	taskBtn.addEventListener("click", function() {
		this.parentNode.remove(); //taskBtnの親要素のliタグを削除
	});
});

