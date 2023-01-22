console.log(document.cookie);
document.cookie="name=harry131312123";
document.cookie="name2=harsh";
console.log(document.cookie)

/* 
an assignment to document cookie is treated specifically in such a way
that a write operation does not touch other cookies
and appends the new cookies
*/


/* document.cookie="name3=harry131312123";
console.log(document.cookie)
document.cookie="name3=harsh";
console.log(document.cookie) */
//this shit will get updated again if we are using same cookie name

let key = prompt("enter key");
let value = prompt("enter value");
// document.cookie = `${key}=${value}`; 
//this shit will fell if u use any special characters inside the key value like
//*0&%&*)$
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
//this will store everything in encoded format and to get value use decodeURIComponent
console.log(document.cookie)

/* 
document.cookie is equal to a set call it means we used a set call

if u are giving cookie values like 
document.cookie="harsh=shetty;harshwardhan=shetty"
then this doesnot mean u are setting mulitple cookies at the same time separated
by ';' semicolon.

we use semicolon to add more options like /a for path and expire time of cookie,etc

Notes
1.the name=value can have max limit of 4kb after encodeURIComponent should not
exceed 4kb

2.total no.of cookies per domain is limited to around 20+
{exact number is browser dependant}
*/