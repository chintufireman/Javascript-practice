const createTodo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = p.json();
  return response;
};

const gettingTodo = async (id) => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
  let r = await response.json();
  return r;
};

const mainFunc = async () => {
  let todo = {
    title: "Harsh",
    body: "Shetty",
    userId: 1,
  };
  let todor = await createTodo(todo);
  console.log(todor);
  console.log(await gettingTodo(2))
};
mainFunc();
