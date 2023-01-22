class RailwayForm{

    //you cannot create a local variable like java here

    submit(){
        alert(`${this.name} your Form is submitted with train no ${this.tno}`)
    }
    cancel(){
        alert(`${this.name} your form is cancelled with train no ${this.tno}`);
    }
    fill(givenname,tno){
        this.name=givenname;
        this.tno=tno;
    }
}

let rohanform1 = new RailwayForm();
let rohanform2 = new RailwayForm();
rohanform1.fill("Rohan",1213412)
rohanform2.fill("Rohan",22222420)

let harshForm = new RailwayForm();
harshForm.fill("harsh",257891)

harshForm.submit()
rohanform1.submit()
rohanform2.submit()
rohanform1.cancel()