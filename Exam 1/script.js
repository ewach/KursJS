toDoList = {};
window.onload = function () {
    var id = 0;
    var input = document.querySelector('#inputTask'); 
    input.addEventListener('change', function () {
        createNewItem(document.querySelector('#inputTask').value);
    });

    createNewItem = function(text) {
        var taskId = 'task' + id++;
        // alert(taskId)
        todoList[taskId] = {'name': text, 'done': false};

        var newElement = document.createElement('div');
        newElement.id = taskId;
        newElement.setAttribute('class', 'undone');

        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.addEventListener('change', function () {
            var elementToChange = document.querySelector('#' + taskId); 
            if (todoList[taskId].done){
                elementToChange.setAttribute('class', 'undone');
                todoList[taskId].done = false;
            } else {
                todoList[taskId].done = true;
                elementToChange.setAttribute('class', 'done');
            }
        })
        newElement.appendChild(checkbox);

        var name = document.createElement('input');
        name.value = text;
        name.addEventListener('change', function () {
            todoList[taskId].name = name.value;
        });
        newElement.appendChild(name);


        var button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', function() {
            var elementToDelete = document.querySelector('#' + taskId); 
            todoList.removeChild(elementToDelete);
            delete(todoList[taskId]);
        });
        newElement.appendChild(button);

        todoList = document.querySelector('#todoList');
        todoList.appendChild(newElement);
    };

    actualise = function() {

    }
};