// サイコロをふるをクリック
// 繰り返し処理を開始
// 3秒後に終了

const startBtn = document.getElementById("diceBtn");
const body = document.getElementsByTagName("body");
const dice = document.createElement("img");

body.appendChild(dice);
dice.style.width = "100%";
dice.style.height = "100%";

let num = ;