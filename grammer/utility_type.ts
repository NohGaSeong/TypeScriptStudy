// keyof

interface User{
  id : number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk:UserKey = "name"

// Partial<T>

let admin: Partial<User> = {
  id: 1,
  name : "Bob",
}

// Required <T>

interface User2{
  id : number;
  name: string;
  age?: number;
}

let admin2: Partial<User2> = {
  id: 1,
  name : "Bob",
  age: 30,
};

// ReadOnly<T>

interface User3{
  id: number;
  name: string;
  age?: number;
}

let admin3: Readonly<User3> = {
  id: 1,
  name: "Bob"
}

// admin3.id = 4  ... 하면 에러 발생

// Record <K,T>
type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D" | "F";

const score: Record<Grade, Score> = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
};

// Pick<T,K>
// 반대인 개념은 Omit<T, K> 임
interface User4{
  id: number;
  name: string;
  age: number;
  gender: "M" | "W";
}

const admin5: Pick<User4, "id" | "name"> = {
  id: 0,
  name: "Bob"
}

// Exclude<T1, T2>
// type1 에서 type2를 제외하고 사용하는 방법

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// NonNullable<Type>

type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>



export {}