var users = [
  {name: "太郎"},
  {name: "次郎"},
  {name: "三郎"}
];


// find 最初に一致した情報のみ取得できる
user = users.find(function(user){
  return user.name === "次郎";
});
console.log(user);

function Car(model){
  this.model = model;
}

var cars = [
  {id: 1, title: "古い情報"},
  {id: 2, title: "情報"},
];

var comment = { postId: 2, comment: "いいね"};

// 関数作成
function postForComment(posts, comment){
  // 引数に入ってきたpostsの中に一致する情報を探す
  return posts.find(function(post){
    // 配列の中にcomment.postIdに一致するデータを返す
    return post.id === comment.postId;
  });
}

console.log(postForComment(cars, comment));

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;

admin = users.find(function(ad){
  return ad.admin === true;
})
console.log(admin);

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;

function findW(array, c){
  let p = Object.keys(c)[0];
   return array.find(function(arr){
    // console.log(arr[p]);
    // console.log(c[p]);
    return arr[p] === c[p];
  })
}

a = findW(accounts, {balance: 12});
console.log(a);
