let nums = [10,20,30];

// reduceは第二引数に初期値をいれるそして次のループに引き継がれる
a = nums.reduce(function(sum, num){
  return sum + num;
}, 0)//初期値が入る

console.log(a);

let primaryColors = [
  { color: 'red'},
  { color: 'blue'},
  { color: 'green'},
  { color: 'yellow'},
];

// function(初期値用の変数 ,まとまりの方を取り出す値)
a = primaryColors.reduce(function(previous, color){
  //
  previous.push(color.color);
  return previous;
  // 配列を作りたい場合は初期値にからの配列をいれる
}, []);

console.log(a);
// '(((((())))))'

function balanceParens(string){
  return !string.split('').reduce(function(previous, char){
    if(previous < 0){return previous;}
    if(char === '('){return previous + 1;}
    if(char === ')'){return previous - 1;}
  },0);
}

console.log(balanceParens("())"));

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip){
    return sum + trip.distance;
}, 0);


var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    if(desk.type === "sitting"){return {sitting:previous.sitting + 1, standing:previous.standing }}
    if(desk.type === "standing"){return {sitting:previous.sitting , standing:previous.standing + 1 }}
}, { sitting: 0, standing: 0 });

console.log(deskTypes);
