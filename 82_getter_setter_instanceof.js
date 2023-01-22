class Animal{
    constructor(name){
        this._name = name; // you cannot use this.name it will throw error
    }

    fly(){
        console.log("mera dil udra hai");
    }

    get name(){
        return this._name;
    }
    set name(newName){
        this._name =  newName;
    }
}
class Rabbit extends Animal{
    
}
let a = new Rabbit("bruno");
a.fly();
a.name="SHobe"
console.log(a.name);
console.log(a instanceof Animal); // it will give boolean value
console.log(a instanceof Rabbit); 
