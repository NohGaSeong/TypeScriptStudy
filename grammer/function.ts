// 함수
function add(num1:number, num2:number):number {
    return num1 + num2
}

function isAdult(age: number):boolean {
    return age > 19;
}

function hello(name?: string) {
    return `Hello, ${name || "World"}`; 
}

function hello2(name = 'World') {
    return `Hello, ${name}`; 
}

const result = hello();
const result2 = hello("John");

// optional 이 필수 매개변수보다 앞으로오면안됨.
function hello3(name: string, age?:number): string {
  if (age != undefined){
		return `Hello, ${name}. You are ${age}.`;
  } else {
		return `Hello, ${name}`;
	}
}

console.log(hello3("John"))
console.log(hello3("John", 20))

// 앞에 두고 optional 하게 사용하고 싶다면
// 이런 느낌으로 작성하면됨/
function hello4(age: number | undefined, name: string): string{
	if (age != undefined){
		return `Hello, ${name}. You are ${age}.`;
  } else {
		return `Hello, ${name}`;
	}
}

console.log(hello4(20, "John"));
console.log(hello4(undefined, "John"));

// 나머지 매개변수의 타입 작성법
function add_function(...nums: number[]){
	return nums.reduce((result, num) => result + num, 0);
}

add_function(1, 2, 3)	// 6
add_function(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) //55

// this와 관련된 내용
interface User {
	name: string;
}

const John: User = {name:'John'}

function showName(this:User, age:number, gender:'m'|'f'){
	console.log(this.name, age, gender);
}

const a = showName.bind(John)
a(30, 'm');

interface User2{
	name: string;
	age: number;
}

function join(name: string, age: string): string;
function join(name: string, age:number): User2;
function join(name:string, age:number|string): User2 | string {
	if (typeof age === "number") {
		return {
			name,
			age,
		};
	} else {
		return "나이는 숫자로 입력해주세요.";
	}
}

const sam: User2 = join("Sam", 30);
const jane: string = join("Jane", "30");


export{}