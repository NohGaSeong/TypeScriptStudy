// let user:object;

// user = {
//     naem : 'xx',
//     age: 30
}

// 오브젝트는 특정 속성값에 대한 정보가 없기에 에러가남.
// console.log(user.name)

type Score = 'A' | 'B' | 'C' | 'F';

interface User{
    name : string;
    age : number;
    // optional 옵션은 ?로 줄 수 있음.
    gender? : string;
    // 읽기 전용 속성을 줄땐 readonly를 주면됨.
    readonly birthYear : number;

    [grade:number] : Score;
}

let user : User = {
    name : 'xx',
    age : 30,
    birthYear : 2005,
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'A',
}

// 이런식으로 변경도 가능
user.age = 10;

user.gender = "male"

console.log(user.age)


interface Add{
    (num1:number, num2:number) : number;
}

const add : Add = function(x, y){
    return x + y;
}

add(10,20)

// type a = (a: number, b: number) => number

interface IsAdult {
    (age:number):boolean; 
}

const a56:IsAdult = (age) => {
    return age > 19;
}

a56(33);


//implenets

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

// extends
interface Benz extends Car {
    door: number;
    stop(): void;
}

const benz : Benz = {
    door : 5,
    stop(){
        console.log('stop');
    },
    color : 'black',
    wheels: 4,
    start(){}
}
class Bmw implements Car{
    color;
    wheels = 4;

    constructor(c:string){
        this.color = c;
    }

    start(){
        console.log('go..')
    }
}

const b5 = new Bmw('green');
console.log(b)
b5.start()

interface Toy{
    name: string;
}

interface ToyCar extends Car, Toy {
    price : number;
}