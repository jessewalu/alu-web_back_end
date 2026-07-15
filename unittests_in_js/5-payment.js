const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const totalPrice = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalPrice}`);
}

module.exports = sendPaymentRequestToApi;
