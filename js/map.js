let numbers = [1,2,3];
let doubledNumbers = [];

numbers.forEach(function(n){
  console.log(n);
})

let double = numbers.map(function(number){
  // 忘れずに書く
  return number * 2;
});

console.log(double);

var cars = [
  {type: '高級車', price: '高い'},
  {type: '軽自動車', price: '安い' }
]

let price = cars.map(function(car){
  return car.price;
});

console.log(price);

// 使い方はデータを取り出したいものをとる時に使う
// データのコレクションを一覧で表示するときに使う
//
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;

heights = images.map(function(image){
    return image.height;
});

function pluck(array, property) {
  // pluck関数の中身を実装してください
  let colors = array.map(function(colors){
    // objectのプロパティは[]でアクセスする
      return colors[property];
  });
  return colors;
}

var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];

var colorNames = pluck(colorObjects, 'color');
