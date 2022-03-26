let model = document.querySelector(".model");
let sectionTodo = document.querySelector("#section");
let title = document.querySelector(".title-input-class");
let description = document.querySelector(".description-input-class");
let message = document.querySelector(".message h4");

function openModel() {
    model.style.display = "block";
}

function closeModel() {
    model.style.display = "none";
    title.value = "";
    description.value = "";
    message.style.display="none";
}


function addNewTodo() {
    if (title.value != "" && description.value != "") {

        sectionTodo.innerHTML = sectionTodo.innerHTML + `
        <div class="mainbox" >
        <div class="head">
        <div class="name">
        ${title.value}
        </div>
        <div class="right">
        <div class="minimize">
        <button class="minimizebtn">-</button>
        </div>
        <div class="close">
        <button class="closebtn">x</button>
        </div>
        </div>
        </div>
        <div class="body" id="todoDesc">
            <h3>
                ${description.value}
            </h3>
        </div>
        </div>
        `;
        closeModel();
        message.style.display="none";
    } else {
        message.style.display = "block";
    }

    closeTodo();
    minimize();
}


function closeTodo(){
    let TodoClose = document.querySelectorAll(".closebtn");
    for(let i=0; i<TodoClose.length; i++){
        TodoClose[i].addEventListener('click', closeFunction);
    }
    function closeFunction(e){
        let closebox = e.target.closest('.mainbox');
        closebox.style.display="none";
    }
}


function minimize() {
    let minimizeBtn = document.querySelectorAll(".minimizebtn")
    for(let j = 0; j<minimizeBtn.length; j++){
        minimizeBtn[j].addEventListener('click', minimizeFunc);
    }

    function minimizeFunc(e){
        let closebox = e.target.closest('.mainbox');
        let todoDesc = closebox.querySelector("#todoDesc");
        if(todoDesc.style.display != "none")
        {
            todoDesc.style.display = "none";
        }else{
            todoDesc.style.display = "block";
        }
    }  
}
