
export let todoList = {
    listHTML: document.getElementById("todoList"),
    listTask: [],
    add(task, priority = false) {
        let element = document.createElement("li");
        element.innerText = task;

        //Check finalizada
        var Check = document.createElement("input");
        Check.setAttribute("type", "checkbox");
        element.appendChild(Check);
        Check.addEventListener('change', function () {
            if (this.checked) {
                element.style.color = "#842929";
                element.style.textDecoration = "line-through";

                
            } else {
                element.style.textDecoration = "none";
            }
        });
        // Delete de la lista
        var deleteEle = document.createElement("input");
        deleteEle.setAttribute("type", "submit");
        deleteEle.setAttribute("value", "Eliminar");
        element.appendChild(deleteEle);
        deleteEle.addEventListener('click', function () {
            let parent = element.parentNode;
            if (parent) {
                parent.removeChild(element);
            }
        })

        if (priority) {
            this.listTask.unshift({
                element,
                task,
                finalizada
            });
            this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
        } else {
            this.listTask.push({
                element,
                task,
                finalizada
            });
            this.listHTML.appendChild(element);
        }
    }
}
