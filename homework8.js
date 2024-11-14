// создание объектов через функцию-конструктор

function Animal(name, eyes) {
    this.name = name;
    this.eyes = eyes;
    this.breed = function () {
        console.log(`${this.name} can breed`)
    }
    this.breathe = function () {
        console.log(`${this.name} can breathe`)
    }
}

function Mammal(name, eyes, skin, legs, food) {
    Animal.call(this, name, eyes)
    this.skin = skin
    this.legs = legs
    this.food = food
    this.canEat = function () {
        console.log(`${this.name} can eat ${this.food}`)
    }
    this.showBodyParts = function () {
        console.log(`${this.name} has ${this.legs} legs, ${this.skin}.`)
    }
}

function Predator(name, eyes, skin, legs, food, claws, sound) {
    Mammal.call(this, name, eyes, skin, legs, food)
    this.claws = claws;
    this.sound = sound;
    this.canEat = function () {
        console.log(`${this.name} can eat ${this.food} using ${this.claws} claws`)
    }
    this.makeSound = function () {
        console.log(`${this.name} can make the sound of ${this.sound}`)
    }
}

let predator1 = new Predator("Tiger", "blue", "fur", "4", "meat", "very sharp", "Rrrr")
console.log(predator1)

function Cat(name, eyes, skin, legs, food, claws, sound, toy) {
    Predator.call(this, name, eyes, skin, legs, food, claws, sound)
    this.toy = toy;
    this.canEat = function () {
        console.log(`${this.name} can eat ${this.food}`)
    }
    this.canPlay = function () {
        console.log(`${this.name} can play with a ${toy}`)
    }
}

// создание объектов через класс 

class Animals {
    constructor(name, eyes) {
        this.name = name;
        this.eyes = eyes;
    }

    height = 2000;

    breed() {
        console.log(`${this.name} can breed`)
    }
    breathe() {
        console.log(`${this.name} can breathe`)
    }
}

class Mammals extends Animals {
    constructor(name, eyes, skin, legs, food) {
        super(name, eyes)
        this.skin = skin
        this.legs = legs
        this.food = food
    }

    canEat() {
        console.log(`${this.name} can eat ${this.food}`)
    }
    showBodyParts() {
        console.log(`${this.name} has ${this.legs} legs, ${this.skin}.`)
    }
}

class Predators extends Mammals {
    constructor(name, eyes, skin, legs, food, claws, sound) {
        super(name, eyes, skin, legs, food);
        this.claws = claws;
        this.sound = sound;
    }

    canEat() {
        console.log(`${this.name} can eat ${this.food} using ${this.claws} claws`)
    }
    makeSound() {
        console.log(`${this.name} can make the sound of ${this.sound}`)
    }
}

class Cats extends Predators {
    constructor(name, eyes, skin, legs, food, claws, sound, toy) {
        super(name, eyes, skin, legs, food, claws, sound);
        this.toy = toy;
    }

    canEat() {
        console.log(`${this.name} can eat ${this.food}`)
    }
    canPlay() {
        console.log(`${this.name} can play with a ${toy}`)
    }
}

let cats1 = new Cats("Kotya", "yellow", "fur", "4", "cheese", "sharp", "Meo-o-w", "a mouse toy")




