class Employee{
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
    requestLeaves(leaves){
        // console.log(`${leaves + 1 } leaves has been granted to you + one extra leave added to you`);
        super.requestLeaves(leaves+1);
        console.log("One extra leave granted");
    }
}

let p = new Programmer();

p.requestLeaves(9);