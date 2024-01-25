// 선언 할당 스코프 호이스팅 
// var greeting = 'hello'; 재선언o 재할당o
// console.log(greeting)
    
// var greeting = 'hi';
// console.log(greeting)

// var greeting = 'how are you?';
// console.log(greeting)

// let greeting = 'hello'; 재선언x 재할당o
// console.log(greeting)
    
// greeting = 'hi';
// console.log(greeting)

// greeting = 'how are you?';
// console.log(greeting)

const greeting = 'hello'; 
console.log(greeting)
    // 재선언x 재할당x

    let b = 'b';
// 유효한 참조 범위 
// var => 함수 레벨 스코프

function funa() {
  if (true) {
    var a= 'a';
    console.log(a);
  }
}
funa();

// 유효한 참조 범위 
// let,const => block 레벨 스코프
func();
function func() {
  if (true) {
    console.log(b);
    b = 'k';
  }
}


funb();
function funb(){
  console.log('hoisting test');
}