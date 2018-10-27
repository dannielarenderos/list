import {todoList} from './modulo.js'


(function() {
     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         console.log("HOLA");
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(form.task.value, form.important.checked);

     });
})();
 