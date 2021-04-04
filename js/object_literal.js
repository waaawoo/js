// 合計を出す場合はreduce
// 情報を探したい場合はfind

function createBookShop(inventory){
  // オブジェクトで返す
  return {
    // keyとvalueが重複している場合省略できる
    inventory,// inventory:  inventory,
    // 全ての価格を足して返す

    inventoryValue: function(){
      // reduceを使う reduceは引数の一個めが初期値 初期値のスタートの値は reduceの第二引数へ設定する
      //
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    // 本のタイトルのアクセスがあったら価格を返す find
    //// objectのvalueがfunctionの場合省略できる
    priceForTitle(title){//priceForTitle: function(title){
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  {title: 'ハリーポッター', price: 1000},
  {title: 'javascript入門', price: 1500}
];

console.log(inventory);

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("ハリーポッター"));

