class Complex{
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary=imaginary;
    }
    add(num){
        this.real = this.real+num.real;
        this.imaginary=this.imaginary+num.imaginary;
    }

    get real(){
        return this._real;
    }
    get imaginary(){
        return this._imaginary;
    }
    set real(real){
        this._real = real;
    }
    set imaginary(imaginary){
         this._imaginary=imaginary;
    }
}

let a = new Complex(5,2);
a.imaginary = 10;
a.real = 10;
let b = new Complex(6,11);
a.add(b);
console.log(a);
console.log(`${a.real}+${a.imaginary}i`);