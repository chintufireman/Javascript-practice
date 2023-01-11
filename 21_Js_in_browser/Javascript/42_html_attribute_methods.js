let first = document.getElementById("first");
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)

/* game and player are two user defined attributes which is created
by using this syntax (data-game and data-player) which will create user 
definde attribute now if u want to fetch all user defined attributes
get id by elements and use dataset as above example.
and to get particular attribute value just use dataset.attribute_name excluding data */