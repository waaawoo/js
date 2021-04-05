function add(numbers){
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
// console.log(add([1,2,3,4,5,6]));

// 渡す引数を可変長にしたい => restを使う
// ...を使うといくつ入ってきても配列にして返してくれる
function add(...numbers){
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(add(1,5,6,4,5,6));

// spread演算子はまとまっているものを展開してくれる
const colors = ["あか", "緑"];
const users = ["A", "B"];
const seasons = ["春", "夏"];

// 配列同士をまとめる
console.log([...seasons,...colors, ...users]);
//  結果 ["あか", "緑", "A", "B"]


// spreadの使い所
// 引数に入っていきたitemsを配列にする(...items)
function validateShoppingList(...items){
  // indexOfは配列の中にある文字があるか探してその位置を返してくれる ない場合は負の値を返す
  if(items.indexOf('牛乳') < 0){
    // 牛乳がない場合は増やして配列を返す
    return ["牛乳", ...items];
  }
}

console.log(
validateShoppingList(`オレンジ`,`パン`));


const MathLibrary = {
  calculateProduct(...rest){
    return this.multiply(...rest);
  },
  multiply(a, b){
    return a * b;
  }
};

