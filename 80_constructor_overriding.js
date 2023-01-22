class Employee{

    constructor(name){
        console.log(`${name} Employee Constructor!!`);
    }

    login(){
        console.log("Login...")
    }
    logout(){
        console.log("Logout...")
    }

    requestLeaves(leaves){
        console.log(`${leaves} leaves has been granted to you - Auto approved`);
    }
}

class Programmer extends Employee{

    constructor(name) {
        //this.name=name wont work because super should be called first
        super(name);
        /* 
        if you have to write your own constructor in child class then before
        calling your or this constructor, u have to call super one 

        check rules for writing constructor overriding this will also help in java
        */
       console.log(`${name} this is programmer constructor...`)
    } //even if you dont write this it will be executed by js engine

    /* 
    if you dont provide the constructor in child class then 
    javascript engine by default provides the constructor by themselves
    like this 
    constructor(...args){
        super(...args);
    }
     */

    requestLeaves(leaves){
        super.requestLeaves(leaves+1);
        console.log("One extra leave granted");
    }
}

let p = new Programmer("Harshwardhan");

p.requestLeaves(9);