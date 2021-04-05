// jsでいうクラスはプロトタイプチェーン
// jsで使うclassはプロトタイプチェーンが動いている
function Car(options){
  this.title = options.title;
}

//処理を増やしたい場合はprototypeをつけ、メソッドを付け足す
Car.prototype.dirive = function(){
  return "booooon";
}

function Toyota(options){
  this.color = options.color;
}

let car = new Car({title: "プリウス"});
console.log(car)
// Car {title: "プリウス"}
console.log(car.dirive());


// プロトタイプチェーン
let toyota = new Toyota({color: "red", title: "アクア"});
console.log(toyota);
// titleはToyotaメソッドでは宣言していないのでcolorしか出ない
// Toyota {color: "red"}

function Toyota2(options){
  // 継承をES5でやると Car関数を呼び出し入れる
  Car.call(this,options);
  this.color = options.color;
}

// driveを呼べるように
Toyota2.prototype = Object.create(Car.prototype);
Toyota2.prototype.constructor = Toyota2;
// 新しい関数作成
Toyota2.prototype.honk = function(){
  return "ぶぶー！";
}

let toyota2 = new Toyota2({color: "red", title: "アクア"});
console.log(toyota2);
// Toyota2 {title: "アクア", color: "red"}
console.log(toyota2.dirive());
console.log(toyota2.honk());

// ES6で記載する場合
class Car2{
  // newするときにタイトルを渡したい場合constructor()を使用する(初期化)
  // 分割代入で省略
  // constructor(options){
  //   this.title = options.title;
  constructor(options){
      this.title = options.title;
  }
  // メソッドを作成する場合、オブジェクトリテラルで記載
  drive(){
    return 'ウイーン';
  }
}

// インスタンス作成時
const car2 = new Car2({title: "アクア"});
console.log(car2);

// 継承する extendsをしよう
class Toyo extends Car2{
  // コンストラクタ定義 分割代入で自分自身に入れる
  constructor(options){
    // superを使用する => 親コンストラクトを呼ぶ
    super(options);
    this.color = options.color;

  }
  honk(){
    return 'bbbboon';
  }
}

const toyo = new Toyo({color: "red", title: "アクア"});
console.log(toyo.drive());


// classの使い所

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    bite(targetSnake){
        targetSnake.health -= 10;
    }
}
