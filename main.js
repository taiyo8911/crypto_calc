//現在の損益率を計算する
function calc1() {
  var now_price = document.getElementById("nowprice").value;
  var tanka = document.getElementById("tanka").value;
  var result = (now_price / tanka - 1) * 100;
  document.getElementById("result_area").textContent = result + "％";
}

//利益率から売値を計算する
function calc2() {
  var tanka2 = document.getElementById("tanka2").value;
  var profitRate = document.getElementById("profitRate").value;
  var rate = Number(tanka2) * Number(profitRate) / 100;
  var result2 = rate + Number(tanka2);
  document.getElementById("result_area2").innerHTML = result2 + "円で売りましょう。";
}

//目標金額から売値を計算する
function calc3() {
  var tanka3 = document.getElementById("tanka3").value;
  var sellAmount = document.getElementById("sellAmount").value;
  var targetAmount = document.getElementById("targetAmount").value;

  var ans1 = Number(targetAmount) + (Number(tanka3) * Number(sellAmount));
  var ans2 = Number(ans1) / Number(sellAmount);
  document.getElementById("result_area3").innerHTML = ans2 + "円で売りましょう。";
}
