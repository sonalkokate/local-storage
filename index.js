var todoArray = [];

function saveTodo() {
    var title = document.getElementById("title").value;
    todoArray.push(title);
    localStorage.setItem("todos", todoArray.toString());
    document.getElementById("title").value = " ";
    fetchTodos();
}

function fetchTodos() {
    var str = localStorage.getItem("todos");
    todoArray = str.split(",");
    var htmlString = `
   <tr>
     <th> Sr.no. </th>
     <th> Name </th>
     <th> Action </th>
</tr>
   `;

    var counter = 0;
    todoArray.forEach((ele) => {
        counter++;
        htmlString += `
    <tr>
    <td> ${counter}</td>
    <td> ${ele}</td>
    <td>
    <button class="btn btn-outline-warning" onclick= "editTodo(${counter - 1})"> Edit </button>
        <button class="btn btn-outline-danger" onclick= "deleteTodo(${counter - 1})"> Delete </button>
        </td>
        </tr>
    `
    });
    document.getElementById("Todo-Table").innerHTML = htmlString;
}

function editTodo(index) {
    var newValue = prompt("Do you want to edit?", todoArray[index]);
    if (newValue != null) {
        todoArray[index] = newValue;
        localStorage.setItem("todos", todoArray.toString());
        fetchTodos();
    }
}

function deleteTodo(index) {
    if (confirm(`Do you really want to delete ${todoArray[index]}?`)) {
        todoArray.splice(index, 1);
        localStorage.setItem("todos", todoArray.toString());
        fetchTodos();
    }
}