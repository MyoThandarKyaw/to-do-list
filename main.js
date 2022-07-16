window.addEventListener("load", () => {
    const form = document.querySelector(".task-form");
    const input = document.querySelector(".task-input");
    const list_el = document.querySelector(".tasks");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please Fill Out A Task!");
            return;
        } 

        const task_element = document.createElement("div");
        task_element.classList.add("task");

        const task_content_element = document.createElement("div");
        task_content_element.classList.add("content");

        task_element.appendChild(task_content_element);

        const task_input = document.createElement("input");
        task_input.classList.add("input-task")
        task_input.type = "text";
        task_input.value = task;
        task_input.setAttribute("readonly", "readonly");

        task_content_element.appendChild(task_input);

        const task_button_element = document.createElement("div");
        task_button_element.classList.add("btn-container");

        const task_edit_element = document.createElement("button");
        task_edit_element.classList.add("edit");
        task_edit_element.innerText = "EDIT";

        const task_delete_element = document.createElement("button");
        task_delete_element.classList.add("delete");
        task_delete_element.innerText = "DELETE";

        task_button_element.appendChild(task_edit_element);
        task_button_element.appendChild(task_delete_element);

        task_element.appendChild(task_button_element);

        list_el.appendChild(task_element);
        input.value = "";
        task_edit_element.addEventListener("click", function () {
            if (
                task_edit_element.innerText.toLowerCase() == "edit") {
                task_edit_element.innerText = "SAVE";
                task_input.removeAttribute("readonly");
                task_input.focus();
                task_input.style.color = "#EC4899";
            } else {
                task_edit_element.innerText = "EDIT";
                task_input.style.color = "#fff";
                task_input.setAttribute("readonly","readonly");
            }
        })
        task_delete_element.addEventListener("click", function () {
            list_el.removeChild(task_element);
        })
    })
})