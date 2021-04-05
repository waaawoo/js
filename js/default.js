// デフォルトの引数を指定 引数に＝で指定できる
function makeAjaxRequest(url, method = 'GET'){

  return method;
}

console.log(makeAjaxRequest('google'));
// methodを空にしたいならnullを入れる
console.log(makeAjaxRequest('google', null));
