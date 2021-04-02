var products = [
  {name: 'キュリ', type: "フルーツ", quantity: 0, price: 1},
  {name: 'キュリ', type: "野菜", quantity: 3, price: 13},
  {name: 'キュリ', type: "フルーツ", quantity: 0, price: 3},
  {name: 'キュリ', type: "野菜", quantity: 3, price: 3},
  {name: 'キュリ', type: "フルーツ", quantity: 0, price: 1}
];
// 元の情報は変化させないための配列
var filtered = [];


let p = products.filter(function(product){
  // ifの場合
  return product.type  === 'フルーツ'
  && product.quantity === 0
  && product.price === 1;
});

console.log(p);

// filterの使い道
// 投稿に紐づくIDを全部とってきたい
//

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;

filteredNumbers = numbers.filter(function(num){
    return num > 50;
});

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
 ];

 var filteredUsers;
 filteredUsers = users.filter(function(user){
     return user.admin;
 });

 function reject(array, iteratorFunction) {
  return array.filter(function(a){
      return !iteratorFunction(a);
  });
}

var n = [10,20,30];
var l = reject(n, function(number){
  return nmber > 15;
});
l;
