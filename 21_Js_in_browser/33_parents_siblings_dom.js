//$0 is used to get the element in console on which you have 
//clicked your cursor on in elements section same for $1 but it gives previous element which you clicked on

 /*    1.Dom collections are readonly there refernce might get updated but element does not get interchanged or changed
    2. they are live element child nodes, variables (reference) will automatically get updated if childnodes
    of element is changed.
    3.they are iterable using for of loop */

    console.log(document.body.firstChild)
    let a=document.body.firstChild;

    console.log(a.parentNode); 
    /* (document) in this case if there is no parent element
     then it will return node document or text element 
     or comment anything can be returned */


    console.log(a.parentElement); 
    /* (null) this should be actual element like 
    parent tag if does not exist then returns 
    null but it should be valid element */

    console.log(a.firstChild);
    console.log(a.firstChild.nextSibling);