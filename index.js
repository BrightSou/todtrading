// 计算交易的总成本
function calculateTransactionCost(amount, feeRate) {
  return amount + calculateTransactionFee(amount, feeRate);
}

// 计算交易的利润或损失
function calculateTransactionProfitOrLoss(amount, costPrice, sellingPrice) {
  return sellingPrice - (costPrice + calculateTransactionFee(amount, feeRate));
}

// 确认交易是否成功
function isTransactionSuccessful(status) {
  return status === 'success';
}

// 检查交易是否已确认
function isTransactionConfirmed(confirmations) {
  return confirmations > 6;
}
