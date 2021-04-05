// for...of
const colors =["red","green","blue"];

// letに宣言した変数でofの配列分ループする
for (let color of colors){
  console.log(color);
}

const numbers = [
  1,2,3,4,56,5
];

let total = 0;

for(let number of numbers){
  total += number;
}
console.log(total);

// generator
// generatorとは
// 何回も出たり入ったりできるもの
// 呼ばれたときに入って、値を返した後、値を戻したところに戻って処理を開始する
// function に*を追加するとgeneratorになる
function* nums(){
  yield;
}

console.log(nums);
const gen = nums();

// 1回目
console.log(gen.next());
// {value: undefined, done: false}

// 2回目
console.log(gen.next());
// {value: undefined, done: true}

// shoppingSTORY
function* shopping(){
  // 歩道
  // 歩いてお店へ
  // お金をもってお店へ（お金をyield）日用品がstuffFormStoreへ入る
  const stuffFromStore = yield "お金";

  // コインランドリーに到着、服を持って入る
  const cleanClothes = yield "汚れた服";
  // 家に帰る
  return [stuffFromStore, cleanClothes]
}

// お店関連の世界
const gen2 = shopping();
console.log(gen2.next()); //家から歩道に出る
console.log(gen2.next("日用品")); //お店で買い物をして日用品を持って歩道へ戻る
console.log(gen2.next("綺麗な服")); //綺麗な服を持って歩道へ戻る
// yieldは複数回行き来できるyieldまで実行し戻る次に呼び出したら途中のyieldからスタートする

// --------------------------- 実際に使ってみる -------------------------
function* colors2(){
  yield 'red';
  yield 'blue';
  yield 'green';
}

// 関数を変数へ代入
const gen3 = colors2();
// 呼び出す ジェネレータへ入る
console.log(gen3.next());
// {value: "red", done: false}
console.log(gen3.next());
// {value: "blue", done: false}
console.log(gen3.next());
// {value: "green", done: false}
console.log(gen3.next());
// {value: undefined, done: true}

// for..ofを使うとジェネレータの中身をいい感じに取り出せる
const myColors = [];
for(let color of colors2()){
  myColors.push(color);
}
console.log(myColors);
//  ["red", "blue", "green"]
// 0: "red"
// 1: "blue"
// 2: "green"


// テストチーム
const testingTeam = {
  lead: "紀子",
  tester: "隆"
}

// ある会社のエンジニアの開発チーム
const engineeringTame = {
  size: 3,
  department: "開発部",
  lead: '太郎',
  manager: "花子",
  engineer: "次郎",
  // testingTeam: testingTeam 省略できる
  testingTeam
};

// 独自でデータを取得したい場合
function* TeamIterator(team){
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  // テストチームを移譲する為、定数にテストチームイテレータを用意する
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  // yieldに*をつけると全て取得できる*をつけると中に入ると考える
  yield* testingTeamGenerator;
}

// テストチームのyieldできる関数を作る
function* TestingTeamIterator(team){
  yield team.lead;
  yield team.tester;
}

//オブジェクトの中身を抜き出セル
// const names = [];
// for(let name of TeamIterator(engineeringTame)){
//   names.push(name);
// }

//オブジェクトの中身を抜き出セル 移譲する
const names = [];
for(let name of TeamIterator(engineeringTame)){
  names.push(name);
}

console.log(names);
//  ["太郎", "花子", "次郎"]

// ジェネレーターのデリゲーしょん
// 二つのチームだった場合二つの別々のものをイテレートしていくには
