// Enum
enum direction {
  up = "up",
  down = "down",
  right = "right",
  left = "left",
}

// Objects
type User = {
  readonly id: number; //read only can't be changed
  name: String;
  age?: number; //optional
};

const user: User = {
  id: 1,
  name: "john",
};

// Interfaces
interface UserInterface {
  id: number;
  name: String;
}

const user1: UserInterface = {
  id: 1,
  name: "john",
};

interface SomeFunc {
  (x: number, y: number): number;
}

const multiply: SomeFunc = (x, y) => x * y;

// classes
class Person {
  id: number;
  name: String;

  constructor(id: number, name: String) {
    this.id = id;
    this.name = name;
  }
}

const p1 = new Person(1, "john");
const p2 = new Person(2, "Doe");
