let addMessage = document.querySelector('.message')
let addButton = document.querySelector('.add')
let todoList = document.querySelector('.todo')
let doingList = document.querySelector('.doing')
let doneList = document.querySelector('.done')

let todoArr = [];
let countTodo = 0;
let countDoing = 0;
let countDone = 0;
//количество заявок в разных статусах

let todoTitle = document.querySelector('.todo-title');
let doingTitle = document.querySelector('.doing-title')
let doneTitle = document.querySelector('.done-title')

// Добавление новой задачи в список

addButton.addEventListener('click', () => {
    let addedMessage = `${addMessage.value}`;


    let newToDo = {
        value: addMessage.value,
        checked: false,
        important: false
    };

    todoArr.push(newToDo);


    //увеличение новых элементов
    countTodo++;

    // Вывод количества активных тасков
    
    todoTitle.textContent = countTodo;

    //добавление li в 1 блок
    let liTodo = document.createElement('li');
    liTodo.classList.add('todo-li');

    liTodo.innerHTML = `<div class='start'><button class='left-icon-button'><i class="fas fa-times fa-lg"></i></button><span class='text'><b>${addedMessage}</b>
    </span><button class='icon-button'><i class="forward fas fa-arrow-circle-right fa-lg"></i>
    </button>
    </div>`;

    todoList.append(liTodo);

    // addMessages();

   
});

//Перевод задачи в статус "в процессе" - doing

todoList.addEventListener('click', function (event){
    if (event.target.classList.contains('forward')) {
        let li = event.target.closest('li');
        console.log(li);
        li.className = 'doing-li';
        doingList.append(li);
    
        // количество задач в todo
        countTodo--;
        todoTitle.textContent = countTodo;

        //количество задач в doing
        countDoing++;
        doingTitle.textContent = countDoing;  
    }  
})

//Удаление задачи

document.addEventListener('click', function (event) {
    let li = event.target.closest('li');
    if (event.target.classList.contains('fa-times')) {
        console.log(li);
        if (li.classList.contains('todo-li')) {
            countTodo--;
            todoTitle.textContent = countTodo;
        } else if (li.classList.contains('doing-li')) {
            countDoing--;
            doingTitle.textContent = countDoing;  
        } else {
            countDone--;
            doneTitle.textContent = countDone;
        }

        
        li.remove();   
    }
    //Уменьшение количества активных, в процессе и сделанных задач

})

//Перевод задачи в статус Done

doingList.addEventListener('click', function (event) {

    if (event.target.classList.contains('forward')) {
        let li = event.target.closest('li');
        li.className = 'done-li';
        let value = li.querySelector('b');
        li.innerHTML= `<div class='start'><button class='left-icon-button'><i class="fas fa-times fa-lg"></i></button><span class='text'>
        <b>${value.textContent}</b></span></div>`;

        doneList.append(li);
        //количество задач в doing
        countDoing--;
        doingTitle.textContent = countDoing; 
        
        //количество задач в done
        countDone++;
        doneTitle.textContent = countDone; 
    }
})