interface TodoItemList {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: TodoItemList[];

// api
function fetchTodoItems(): TodoItemList[] {
  const todos: TodoItemList[] = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo) {
  todoItems.push(todo);
}

function deleteTodo(index) {
  todoItems.splice(index, 1);
}

function completeTodo(index, todo) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() {
  return todoItems[0];
}

function showCompleted() {
  return todoItems.filter((item) => item.done);
}

/**
 * @TODO addTodo()를 이용해 2개의 할 일 추가
 */

function addTwoTodoItems() {}

// Utils
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
