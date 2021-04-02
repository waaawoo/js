var colors = ["red", 'blue', 'green'];

for (var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

// ここでのfunctionはコールバック関数
colors.forEach(function(color){
  console.log(`forEach:${color}`);
})

// 数字の配列
let numbers = [1,2,3,4,5]
// 合計保持
let sum = 0;
// 配列の一つ一つをたす
numbers.forEach(function(number){
  sum += number
});
// 合計を表示
console.log(sum);

// forEachへリファクタリングする
function handlePosts() {
  var posts = [
    { id: 23, title: 'JSニュース' },
    { id: 52, title: 'リファクター・シティ' },
    { id: 105, title: 'Rubyの良いところ' }
  ];

  // for (var i = 0; i < posts.length; i++) {
  //   savePost(posts[i]);
  // }
  posts.forEach(function(post){
    console.log(`NEWS[${post.id}_${post.title}]`);
  })
}
handlePosts()

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

 images.forEach(function(image){
   areas.push(image.height * image.width);
   console.log(areas);
 })
