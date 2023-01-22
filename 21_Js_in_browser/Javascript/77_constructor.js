class RailwayForm{

   constructor(givenname,tno,address){
    console.log("CONSTRUCTOR CALLED...."+givenname+" "+tno);
    this.name=givenname;
    this.tno=tno;
    this.address=address;
   }

   preview(){
    alert(`${this.name} your train is ${this.tno} and address is ${this.address} is ready to be submitted`);
   }

    submit(){
        alert(`${this.name} your Form is submitted with train no ${this.tno}`)
    }
    cancel(){
        alert(`${this.name} your form is cancelled with train no ${this.tno} and address ${this.address}`);
        this.tno=0;
    }
    
}

let harshForm = new RailwayForm("Harshwardhan shetty",4536523,"Laxmi colony, ashok nagar near indane gas agency ashoka fort, chavni road, near cantonment. aurangabad 431002, Maharashtra");
let rohanForm = new RailwayForm("Rohan Jogdand",122222,"pethe nagar, aurangabad, maharashtra, pin code 431002");

harshForm.preview();
harshForm.submit();
harshForm.cancel();