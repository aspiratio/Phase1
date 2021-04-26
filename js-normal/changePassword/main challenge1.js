//現在のパスワードはaaaaaと表示
//古いパスワードを入力
//新しいパスワードを入力
//変更をクリック

//入力された古いパスワードを現在のパスワードと比べる
//一致していれば
	//古いパスワードと新しいパスワードが不一致ならば
		//新しいパスワードがxxx-yyyyの形式ならば
			//現在のパスワードを新しいパスワードに変更
			//現在のパスワードを表示する
			//新しいパスワードは〇〇ですとアラート
		//それ以外（形式が違うなら）
			//xxx-yyyyの形式で入力して下さい。とアラート
	//それ以外なら（古いパスワードと新しいパスワードが一致していれば）
			//同じパスワードは使えませんとアラート
//一致していなければ
	//古いパスワードが間違っていますとアラート

const nowPassword = document.getElementById("nowPassword");
let currentPw = "aaaaa";
nowPassword.textContent = `現在のパスワードは${currentPw}`;

const changeBtn = document.getElementById("setPassword");
changeBtn.addEventListener("click", function() {
	const oldPw = document.getElementById("confirmPassword").value;
	const newPw = document.getElementById("newPassword").value;

	//正規表現（郵便番号）
	const pattern = /^\d{3}-\d{4}$/g;

	if (currentPw === oldPw) {
		if (currentPw !== newPw) {
			if (pattern.test(newPw)) {
				currentPw = newPw;
				nowPassword.textContent = `現在のパスワードは${currentPw}`;
				alert(`新しいパスワードは${newPw}です`);	
			} else {
				alert("xxx-yyyyの形式で入力して下さい!")
			}
		} else {
			alert("同じパスワードは使えません!");
		}
	} else {
		alert("古いパスワードが間違っています!");
	}
});