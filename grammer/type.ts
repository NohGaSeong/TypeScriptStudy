// Literal Types

// 정해진 string을 가진걸 String Literal Types 라고함.
const userName1 = "Bob";
let userName2: string | number = "Tom";
userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User{
    name: string;
    job: Job;
}

const user:User = {
    name: "Bob",
    job: "developer",
}

interface HighSchoolStudent{
    // name 에서 사용된 타입을 유니온 타입이라고함.
    name: number | string;
    grade: 1 | 2 | 3;
}

// Union Types
interface Car {
    name: "car";
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift:Car | Mobile){
    console.log(gift.color);
    if (gift.name == "car"){
        gift.start();
    } else{
        gift.call();
    }
}

// Intersection(교차) Type

interface Car2 {
    name : string;
    start(): void;
}

interface Toy {
    name: string;
    color: string;
    price: number;
}

const toyCar : Toy & Car2 = {
    name : "타요",
    start(){},
    color: "blue",
    price: 1000
};


export{}

