// 現在の損益率を計算する
function calculateProfitRate() {
  const currentPrice = document.getElementById("currentPrice").value;
  const purchasePrice = document.getElementById("purchasePrice").value;
  const profitRate = ((currentPrice / purchasePrice) - 1) * 100;
  document.getElementById("result_area").textContent = `${profitRate.toFixed(2)}％`;
}


// 利益率から売値を計算する
function calculateSellPriceFromProfitRate() {
  const purchasePrice = Number(document.getElementById("purchasePrice2").value);
  const profitRate = Number(document.getElementById("profitRate2").value);
  const sellPrice = (purchasePrice * (100 + profitRate)) / 100;
  document.getElementById("result_area2").innerHTML = `${sellPrice.toFixed(0)}円で売りましょう。`;
}


// 目標金額から売値を計算する
function calculateSellPriceFromTargetAmount() {
  const purchasePrice = Number(document.getElementById("purchasePrice3").value);
  const sellingAmount = Number(document.getElementById("sellingAmount").value);
  const targetAmount = Number(document.getElementById("targetAmount").value);

  const sellPrice = (targetAmount + (purchasePrice * sellingAmount)) / sellingAmount;
  document.getElementById("result_area3").innerHTML = `${sellPrice.toFixed(0)}円で売りましょう。`;
}