 window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             
            let element = document.createElement("li");
            element.innerText = task;
            /*Task Done */
            var endTask = document.createElement("input");
            endTask.setAttribute("type", "submit");
            endTask.setAttribute("value", "Done");
            element.appendChild(endTask);
            endTask.addEventListener('click', function(){
                if(this.click){
                   element.style.textDecoration= "line-through";
                   element.removeChild(endTask);
                }
             });
             /*element.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });*/
            /* element.addEventListener("click", function(){
                console.log(this);
                let parent = this.parentNode;
                if(parent){
                    parent.removeChild(this);
                }
             });*/
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista
            var dropTask = document.createElement("input");
            dropTask.setAttribute("type", "submit");
            dropTask.setAttribute("value", "Drop");
            element.appendChild(dropTask);
            
            dropTask.addEventListener('click', function(){
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            })
            if (priority) {
                this.listTask.unshift({
                    element,
                    task,
                    endTask
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0] );
            } else {
                this.listTask.push({
                    element,
                    task,
                    endTask
                });
                this.listHTML.appendChild(element);
            }
        }
    }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }








