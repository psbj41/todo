let addButton = document.getElementById('addBtn');
let closeButton = document.getElementById('close');
let submitButton = document.getElementById('submitBtn');

addButton.addEventListener("click", function () {
    dialogBox.style.display = "block";
})

closeButton.addEventListener('click', function () {
    dialogBox.style.display = "none";
})

submitButton.addEventListener('click', addTask)

function addTask() {
    let todo_text = `<div class="box">
                <div class="box-header">
                    <div class="title">
                    <h4>Todo</h4>
                    </div>
                    <div class="icons">
                        <div>-</div>
                        <div>x</div>
                    </div>
                </div>
                <div class="box-content">
                    <textarea></textarea>
                </div>
            </div>`
    content.innerHTML = content.innerHTML + todo_text;
    dialogBox.style.display = "none";
}