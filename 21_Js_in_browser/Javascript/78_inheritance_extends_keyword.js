class Animal{
    constructor(name,color) {
        this.name=name;
        this.color=color;
    }
    run(){
        console.log(`${this.name} is running`);
    }
    shout(){
        console.log(`${this.name} is shouting..`);
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(`${this.name} is eating banana`);
    }
}

let animal = new Animal("Kaalu", "black");
let m = new Monkey("Chimpu","orange");

m.run();
m.eatBanana();