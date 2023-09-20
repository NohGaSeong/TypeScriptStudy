// let 이라서 수정이 가능함, :string이라고 명시 안해줘도 알아서 string 이라고 지정해줌.
// 이런걸 타입추론이라고함.
let car:string = 'bmw';

car = 'benz'

let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon','tue','wed'];
let week2:Array<string> = ['mon','tue','wed'];

// 이런식으로 문자열 배열에 숫자를 집어넣으려고하면 에러가남.
// week1.push(3)

// 튜플
let b:[string, number];

b = ['z', 1];
// b = [1, 'z'] 는 안됨.

b[0].toLowerCase(); 

// void, never

function sayHello():void{
    console.log('hello');
}

// 항상 에러를 반환하거나 무한 루프 도는 함수에 쓸 수 있는 타입임 
function showError():never{
    throw new Error();
}

function infLoop():never{
    while(true){
        //do something
    }
}

// enum
// 비슷한 값들끼리 묶였다고 생각하면 편함

enum Os {
    Window = 10,
    Ios,    // 1
    Android // 2
    // 값을 넣어주지 않으면 0, 1, 2가 됨.
    // 윈도우에 10을 주면 ios 는 11, android는 12로 바뀜.
    // IOS도 3으로 바꾸면 값을 지정해주지 않은 Android는 4로 바뀜.
}

console.log(Os[10]); //을 찍게되면 값이 10인 windows가 출력된다.
console.log(Os['Window']); //를 찍게되면 Window의 값인 10이 출력된다.


// 문자열 값도돼서 이런식으로도 사용 가능함.
enum Food{
    Fruit = 'apple',
    Fastfood = 'hamburger',
    Snack = 'cookie'
}

let myFood:Food;

myFood = Food.Fruit;

// null, undefined

let null_a:null = null;
let undefiend_b:undefined = undefined;