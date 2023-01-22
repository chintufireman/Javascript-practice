const x = {
  name: "harsh",
  role: "js developer",
  exp: 30,
  // show: function(){
  //     console.log(this.name);
  // }


  /*
    show: function(){
        console.log(this); 
        let that = this;// till this point this is this object x
        setTimeout(function () {
        // console.log(this);
        // console.log(`the name is ${this.name}\n the role is ${this.role} `);
        console.log(`the name is ${that.name}\n the role is ${that.role} `);
       }, 2000);
    } */

    /* if you create a function  using function keyword then this will be that object
    alone this is going to be global object and if you are using this inside the event
    then this inside the event will refer to the element who received the event 
    */

  show: function () {
    setTimeout(() => {
        //here this wont be window object
      console.log(`the name is ${this.name}\n the role is ${this.role} `);
    }, 2000);
  }

  /* whenever we use arrow function inside the function then this will take 
  automatically from its lexical parent it is called as lexical this */
};
x.show();
