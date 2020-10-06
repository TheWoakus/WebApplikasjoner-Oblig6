window.onload = startup;

function startup() {

    // Det er ikke vakkert men det fungerer...

    var modal = document.getElementById("todoModal");

    var todoBtn = document.getElementById("todoBtn");
    
    var closeBtn = document.getElementsByClassName("close")[0];

    var createBtn = document.getElementById("modalCreate");

    var todos = document.getElementById("todoContainer");

    var ttable = document.getElementById("todoTable");

    var tittle = document.getElementById("mTitle");
    var desc = document.getElementById("mDescription");
    var author = document.getElementById("mAuthor");

    var charsLeft = document.getElementById("charLeft");

    var todoArray = [];
    var completedTodoArray = [];

    todoBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    desc.onkeyup = function() {

        if(30 - desc.value.length < 0) {
            desc.value = desc.value.substring(0, desc.value.length-1);
        }

        charsLeft.innerHTML = 30 - desc.value.length;

    }

    createBtn.onclick = addTodoCardToArray;


    function addTodoCardToArray() {
        modal.style.display = "none";
        
        todoArray.push([tittle.value, desc.value, author.value]);

        tittle.value = "";
        desc.value = "";
        author.value = "";

        generateTodoCards();
    }

    function generateTodoCards() {

        var i = todoArray.length-1;

        var newCard = document.createElement("div");
        newCard.className = "todo-card";
        newCard.id = i;

        var cardHeader = document.createElement("h1");
        cardHeader.className = "card-tittle";
        cardHeader.appendChild(document.createTextNode(todoArray[i][0]));
        newCard.appendChild(cardHeader);

        var cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.appendChild(document.createTextNode(todoArray[i][1]));
        newCard.appendChild(cardText);

        var btnDiv = document.createElement("div");
        btnDiv.className = "card-button-box";
        newCard.appendChild(btnDiv);

        var btnDel = document.createElement("button");
        btnDel.className = "card-delete";
        btnDel.appendChild(document.createTextNode("Delete"));
        btnDel.addEventListener("click",DeleteCard);
        btnDiv.appendChild(btnDel);

        var btnCom = document.createElement("button");
        btnCom.className = "card-complete";
        btnCom.appendChild(document.createTextNode("Complete"));
        btnCom.addEventListener("click",CompleteCard);
        btnDiv.appendChild(btnCom);

        todos.appendChild(newCard);
    
    }


    function DeleteCard() {
        var parent = event.target.parentElement.parentElement;

        delete todoArray[parent.id];
        parent.parentNode.removeChild(parent);
    }

    function CompleteCard() {
        var parent = event.target.parentElement.parentElement;
        var parentID = event.target.parentElement.parentElement.id;

        var d = new Date();

        var month = d.getMonth() + 1;

        var todayDate = d.getDate() + "." + month + "." + d.getFullYear();
        
        completedTodoArray.push([
            todoArray[parentID][0], 
            todoArray[parentID][2], 
            todoArray[parentID][1],
            todayDate]);

        delete todoArray[parentID];
        parent.parentNode.removeChild(parent);

        GenerateTodoHistory();
    }

    function GenerateTodoHistory() {

        var i = completedTodoArray.length-1;

        var newRow = ttable.insertRow(ttable.rows.length);

        var cellTitle = newRow.insertCell(0);
        var cellAuthor = newRow.insertCell(1);
        var cellDesc = newRow.insertCell(2);
        var cellDate = newRow.insertCell(3);

        cellTitle.innerHTML = completedTodoArray[i][0];
        cellAuthor.innerHTML = completedTodoArray[i][1];
        cellDesc.innerHTML = completedTodoArray[i][2];
        cellDate.innerHTML = completedTodoArray[i][3];
        
    }
}