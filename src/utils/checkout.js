const vnp_TmnCode = process.env.VUE_APP_vnp_TmnCode;
const vnp_HashSecret = process.env.VUE_APP_vnp_HashSecret;
const vnp_Url = process.env.VUE_APP_vnp_Url;
const vnp_ReturnUrl = process.env.VUE_APP_vnp_ReturnUrl;

function sortObject(o) {
  let sorted = {},
    key,
    a = [];
  for (key in o) {
    if (o.hasOwnProperty(key)) {
      a.push(key);
    }
  }
  a.sort();
  for (key = 0; key < a.length; key++) {
    sorted[a[key]] = o[a[key]];
  }
  return sorted;
}

export const checkout = () => {
  const dateFormat = require("dateformat");

  const date = new Date();

  var createDate = dateFormat(date, "yyyymmddHHmmss");
  var orderId = dateFormat(date, "HHmmss");

  var currCode = "VND";
  var vnp_Params = {};
  vnp_Params["vnp_Version"] = "2";
  vnp_Params["vnp_Command"] = "pay";
  vnp_Params["vnp_TmnCode"] = vnp_TmnCode;
  // vnp_Params['vnp_Merchant'] = ''
  vnp_Params["vnp_Locale"] = "vn";
  vnp_Params["vnp_CurrCode"] = currCode;
  vnp_Params["vnp_TxnRef"] = orderId;
  vnp_Params["vnp_OrderInfo"] = "Ductt";
  vnp_Params["vnp_OrderType"] = "billpayment";
  vnp_Params["vnp_Amount"] = 1000000 * 100;
  vnp_Params["vnp_ReturnUrl"] = vnp_ReturnUrl;
  // vnp_Params["vnp_IpAddr"] = "127.0.0.1";
  vnp_Params["vnp_CreateDate"] = createDate;
  vnp_Params["vnp_BankCode"] = "NCB";

  vnp_Params = sortObject(vnp_Params);

  var querystring = require("qs");
  var signData =
    vnp_HashSecret + querystring.stringify(vnp_Params, { encode: false });

  const sha256 = require("sha256");

  const secureHash = sha256(signData);

  vnp_Params["vnp_SecureHashType"] = "SHA256";
  vnp_Params["vnp_SecureHash"] = secureHash;
  const url =
    vnp_Url + "?" + querystring.stringify(vnp_Params, { encode: true });
  window.open(url);
};
