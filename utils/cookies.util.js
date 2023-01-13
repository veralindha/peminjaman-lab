export function setCookie(cookieName, cookieValue, nHours) {
  var today = new Date();
  var expire = new Date();
  if (nHours == null || nHours == 0) nHours = 1;
  expire.setTime(today.getTime() + 3600000 * nHours);
  document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
}

export function getCookie(cookieName) {
  var theCookie = "" + document.cookie;
  var ind = theCookie.indexOf(cookieName);
  if (ind == -1 || cookieName == "") return "";
  var ind1 = theCookie.indexOf(';', ind);
  if (ind1 == -1) ind1 = theCookie.length;
  return JSON.parse(unescape(theCookie.substring(ind + cookieName.length + 1, ind1)));
}

export function deleteCookie(cookieName) {
  var today = new Date(null);
  document.cookie = cookieName + "=; expires=" + today.toGMTString();
}