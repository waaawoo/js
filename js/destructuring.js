// 家計簿のイメージ
let expense = {
  type: "交際費",
  amount: "4500 JPY"
};

// 取り出す方法が冗長
// let type = expense.type;
// let amount = expense.amount;

// ES6の場合
// typeにexpenseのtypeを代入している
// const { type } = expense;
// const { amount } = expense;
// 同じオブジェクトの中なら同時に取り出せる
const {type, amount} = expense;

// console.log(type,amount);
// 交際費 4500 JPY

// オブジェクトのシンボルと変数名は同じものしかダメ
// キーバリューの形でかけば変数名を変えられる
// 存在しない値は存在しないになる
const { type: myType, amount: myAmount } = expense;
console.log(myType,myAmount);
//[結果] 交際費 4500 JPY

// 関数の引数で渡された値を分割代入
let savedFile = {
  extension: 'jpg',
  name: 'profile',
  size: 14000
}

// ファイルの内容を出力する
function fileSummary({ name, extension, size }, { username }){//(file){
  // 冗長になる-> 分割代入する（関数の引数で分割代入する
  return `${name}.${extension}の容量は${size}です分割代入で表示${username}`
  //reutrn `${file.name}.${file.extension}の容量は${file.size}です`;
}

console.log(fileSummary(savedFile, {username: "ken"}));
// profile.jpgの容量は14000です


// 配列から要素を抽出する分割代入
const companies = [
  "google",
  "facebook",
  "uber"
];

// 配列の抽出の場合は[]を使う 要素数以上取得しようとしてもエアーではなく、undefinedが入る
// 取り出したい変数名で0番目から書いた順番の要素を取得できる = 取り出し元の配列の変数
const [ name, name2 ] = companies;
console.log(name);
console.log(name2);

// 下の二つを同じ意味
const firstCompanies = companies[0];
const [ firs ] = companies

// []は配列
// {}はオブジェクト

// rest演算子の使い所
const [ com, ...rest ] = companies;
// 1個めとそれ以外を入れとく方法が使える
console.log(com);
console.log(rest);
// 結果
// google
// destructuring.js:70
// (2) ["facebook", "uber"]
// 0: "facebook"
// 1: "uber"

const a = [
  {name: "google", lo: "マウンテンビュー"},
  {name: "facebook", lo: "メンロパーク"},
  {name: "uber", lo: "サンフランシスコ"}
];

//１個目の配列の中のオブジェクトのロケーションを取得する
// 複数をとる場合
const [ {lo},{ lo: lo2 } ] = a;
console.log(lo);
// マウンテンビュー
console.log(lo2);
// メンロパーク

const Google = {
  locations: ["マウンテンビュー", "ニューヨーク", "ロサンゼルス"]
};

// 配列を取り出す(変数Googleのlocationsをlocationsへ代入)配列をとして取得し
// 先頭をとってくる
const { locations: first } = Google;
console.log(first);
let [first_index] = first
// 配列の先頭をfirst_indexへ代入
console.log(first_index);


// ユーザーを作る処理 引数が多い場合大変 引数をオブジェクトにすれば良いのではないか{}をつけて分割代入にすれば順番を
// プロパティを抽出して行う
function signup({username, password, email, birthday, city}){

}

const user = {
  username: "user",
  password: "pass",
  email: "mail",
  birthday: "2001/11/11",
  city: "東京"
}

// オブジェクトを渡す
signup(user);

// APIから取得した値をいい感じにする
const points = [
  [4,5],
  [5,1],
  [3,5]
];

// 下の形に整形したい場合
// [
//   {x: 4, y: 5},
//   {x: 4, y: 5},
//   {x: 4, y: 5},
// ]

// Mapで
let pon = points.map(([x, y]) => {
  return { x, y};
});

console.log(pon);
// 0: {x: 4, y: 5}
// 1: {x: 5, y: 1}
// 2: {x: 3, y: 5}


const profile = {
  title: 'エンジニア',
  department: '開発部'
};

function isEngineer({ title, department }) {
  return title === 'エンジニア' && department === '開発部';
}

console.log(isEngineer(profile));
// true

const classes = [
  [ '化学', '1時限目', '鈴木先生' ],
  [ '物理', '2時限目', '佐藤先生'],
  [ '数学', '3時限目', '木村先生' ]
];

const classesAsObject = classes.map(([ subject, time, teacher]) => {
  return { subject, time, teacher };
});

console.log(classesAsObject);
// 0: {subject: "化学", time: "1時限目", teacher: "鈴木先生"}
// 1: {subject: "物理", time: "2時限目", teacher: "佐藤先生"}
// 2: {subject: "数学", time: "3時限目", teacher: "木村先生"}

const numbers = [1, 2, 3];
function double([ head, ...rest ]) {
  // 配列が空ならそのまま返す
  if (!head) { return []; }
  // 再び配列を呼び出して、残りの配列を設置している
  return [ 2 * head, ...double(rest) ];
}
console.log(double(numbers));
// 0: 2
// 1: 4
// 2: 6
