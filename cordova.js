// import { ISIXIAMEN } from '@/common/util/constants.js'
var u = navigator.userAgent;
const isEmpty = (v) => {
  if (v && typeof v === "object") {
    return Object.keys(v).length === 0;
  } else if (Array.isArray(v)) {
    return v.length === 0;
  }
  return (
    v === "" ||
    v === "undefined" ||
    v === undefined ||
    v === null ||
    v === "null"
  );
};
let yblogin = JSON.parse(localStorage.getItem("is-ixiamen"))
  ? JSON.parse(localStorage.getItem("is-ixiamen"))
  : false;
console.log(yblogin);
if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
  // if (typeof checkAndroidCordova == 'undefined') {
  // 	document.write("<script src='/static/mztAppWeb/app/js/cordovaOld.js'></script>");
  // } else {
  // 	document.write("<script src='/static/mztAppWeb/app/js/cordovaNew.js'></script>");
  // }
  // document.write("<script src='/static/mztAppWeb/app/js/cordovaNew.js'></script>");
} else if (
  (u.indexOf("iPhone") > -1 || u.indexOf("iPad") > -1) &&
  yblogin.data
) {
  console.log("sss");
  document.write(
    "<script src='/static/mztAppWeb/app/js/iOSBridge.js'></script>"
  );
  document.write(
    "<script src='/static/mztAppWeb/app/js/iOSBridgeInit.js'></script>"
  );
}
