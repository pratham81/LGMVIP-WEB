document.querySelector('#but').onclick = function(){
    if(document.querySelector("#test input").value.length == 0){
        alert("Please Enter a Task");
    }
    else{
        document.querySelector("#doit").innerHTML
        +=`<div class="task"><span id="taskname">
        ${document.querySelector('#test input').
        value} </span>
        <button class="delete">X</button>
        </div>`;
        
        var current_task = document.querySelectorAll('.delete');
        for(var i=0;i<current_task.length;i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll('#taskname');
        for(var i=0;i<tasks.length;i++){
            tasks[i].onclick=function(){
                this.classList.toggle('done');
            }
        }
        document.querySelector('#test input').value = "";
    }
}
