// アロー関数
// 引数と変数の間に＝をつけ、引数の後に矢印
const add = (a, b) => {
  return a + b;
}

// 省略形
// return と{}は省略できる 評価が一個の場合は
const addd = (a, b) => a + b;

// const double = (num) => {
//   return 2 * num;
// }
const double = (num) => 2 * num;
// 引数が一つならば引数の括弧も省略できる
const double1 = num => 2 * num;

const numers = [1,3,5];

console.log(numers.map((number) => 2 * number));
const team = {
  members: ['太郎', '花子'],
  teamName: "スパーチーう",
  // アロー関数でのthis
  teamSummary: function(){
    // アロー関数にするとthisが使用できる
    return this.members.map((member) => {
      // thisを書く場所で変わるアロー関数を囲っている関数の
      // thisをアロー関数の中で使用できる
      return `${member}は${this.teamName}の所属です`;
      // 対応はbindする
    });
  }
}

console.log(team.teamSummary());

const team2 = {
  members: ['太郎', '花子'],
  teamName: "スパーチーう",
  teamSummary: function(){
    // コールバック関数のなかは別世界なのでthisは使えない

    // セルフに入れるか、bindする
    let self =this;
    // thisはteamの中だけ
    return this.members.map(function(member){
      return `${member}は${self.teamName}の所属です`;
      // 対応はbindする
    }.bind(this));
  }
}

// const fibonaccia = function(n) {
//   if (n < 3) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

const fibonacci = (n) =>{
  if(n < 3){
      return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const profile = {
  name: '太郎',
  getName: function() {
      return this.name;
  }
};
