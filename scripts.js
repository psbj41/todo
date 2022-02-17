let addButton = document.getElementById('addBtn');
let closeButton = document.getElementById('close');
let submitButton = document.getElementById('submitBtn');
let title = document.getElementById('modal-title');
let desc = document.getElementById('modal-desc');
let error = document.querySelector(".error-message");

addButton.addEventListener("click", function () {
    dialogBox.style.display = "block";
})

closeButton.addEventListener('click', function () {
    dialogBox.style.display = "none";
})

submitButton.addEventListener('click', addTask)

function addTask() {
    if (title.value == "" && desc.value == "") {
        error.style.display="block";
        error.style.color="red";
    } else {
        let todo_text = `<div class="box">
        <div class="box-header">
            <div class="title">
            <h4>${title.value}</h4>
            </div>
            <div class="icons">
                <div class="minimize">-</div>
                <div class="cross-box">x</div>
            </div>
        </div>
        <div class="box-content">
            <textarea id="textArea">${desc.value}</textarea>
        </div>
    </div>`
        content.innerHTML = content.innerHTML + todo_text;
        title.value="";
        desc.value="";
        dialogBox.style.display = "none";
        error.style.display="none";

        deleteBox();
        minimize();
    }
    
    
}


function deleteBox(){
let closebtn = document.querySelectorAll('.cross-box');
for(let i = 0; i<closebtn.length; i++ )
{
    closebtn[i].addEventListener('click', (e)=>{
        let todobox = e.target.closest('.box')
        todobox.remove();
    })
}
}


function minimize(){
let minimizebtn = document.querySelectorAll('.minimize');
for(let i =0; i<minimizebtn.length; i++)
{
    minimizebtn[i].addEventListener('click', (e)=>{
        let box = e.target.closest('.box');
        let text = box.querySelector('.box-content');
        console.log(text);
        if(text.style.display !== 'none'){
            text.style.display = 'none';
        }
        else{
            text.style.display ='block';
        }
    })
}

}






