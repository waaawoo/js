var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

// everyは全部trueならtrueを返す
let a =  accounts.every(function(a){
  return a.balance < 5;
});

// 一つでもtrueがあればtrueを返す
let b =  accounts.some(function(a){
  return a.balance < 5;
});

console.log(a);
console.log(b);


let names = [
  "件",
  "鼻毛",
  "宗一郎"
];

// 全部3以上なら
a  = names.every(function(name){
  return name.length >= 3;
});

// 一つでも3以上なら
b = names.some(function(name){
  return name.length >= 3;
});

console.log(a);
console.log(b);


function Field(value){
  this.value = value;
}

Field.prototype.validate = function(){
  return this.value.length > 0;
}

let username = new Field("my_username");
let password = new Field("my_password");

let fields = [
  username,
  password
];

// 一つでもfalseならfalse
let isValid = fields.every(function(field){
  return field.validate();
});

console.log(isValid);

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user){
   return user.hasSubmitted;
});
