"use strict";
// Enum
var direction;
(function (direction) {
    direction["up"] = "up";
    direction["down"] = "down";
    direction["right"] = "right";
    direction["left"] = "left";
})(direction || (direction = {}));
const user = {
    id: 1,
    name: "john",
};
const user1 = {
    id: 1,
    name: "john",
};
const multiply = (x, y) => x * y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const p1 = new Person(1, "john");
const p2 = new Person(2, "Doe");
