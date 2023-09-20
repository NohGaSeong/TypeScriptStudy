class Car{
  // color: string;
  constructor(public color: string){
    this.color = color; 
  }
  start(){
    console.log("Start")
  }
}

const bmw = new Car("red");

// 접근 제한자 - public, private, protected
// public : 자식 클래스나 클래스 인스턴스에서 접근 가능. 아무것도 표기하지 않고 작성하면 모두 public
// private : 
// protected
class Car2 {
  // private 로 변경시 에러. car2 class 내부에서만 사용할 수 있게됨.
  // # 로도 표현가능함. #name = private name
  // protected로 바꾸면 자식 클래스에서 접근이 가능함.
  // protected는 public이랑 뭐가 다르냐? 클래스 인스턴스로는 참조가 안됨. (자식 클래스에서 접근 가능.)
  // readonly 해주면 변경 안됨.
  readonly name: string = "car";
  color: string;
  static wheels = 4;
  constructor(color: string, name: string){
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(this.name);
    console.log(Car2.wheels);
  }
}

class Bmw extends Car2 {
  constructor(color: string, name: string){
    super(color, name);
  }
  showName() {
    console.log(super.name);
  }
}

const z4 = new Bmw("black", "zzz3");
console.log(Car2.wheels);

// 추상 class
abstract class Car3{
  color: string
  constructor(color: string) {
    this.color = color;
  }

  start() {
    console.log("start")
  }
  abstract doSomething():void;
}


class Bmw2 extends Car3 {
  constructor(color: string){
    super(color)
  }
  doSomething(): void {
      alert(3)
  }
}

const z7 = new Bmw2("black")

export{}