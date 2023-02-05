const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // input의 값을 newTodo라는 변수에 복사
    console.log(toDoInput.value);
    toDoInput.value = ""; // input의 값 초기화

    console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
