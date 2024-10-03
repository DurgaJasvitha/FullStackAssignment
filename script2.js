let task = document.getElementById("taskname");
let deadline = document.getElementById("deadline");
let alert_class = document.getElementById("alert-class")
let dl_class = document.getElementById("deadline-class")
function function1(){
    if (task.value.length==0){
        console.log("n");
        alert_class.style.color="red";
        alert_class.style.fontSize=1;
        alert_class.innerHTML= "Field can't be null";

    }

    if(!deadline.value){
        console.log("no");
        dl_class.style.color="red";
        dl_class.style.fontSize=1;
        dl_class.innerHTML= "Please set a deadline";
    }


    else{
        hello();
        addRow(task.value, deadline.value);
        console.log(task.value);
        console.log(deadline.value);
        
    }

}

function hello(){
    console.log("helloworld")
}
function addRow(t_value, d_value){
    console.log("adding")
    let table = document.getElementById("myTable");
    let row = table.insertRow(-1);
    console.log(t_value);
    console.log(d_value);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    c1.innerHTML= t_value;
    c2.innerHTML= d_value;
    c3.innerHTML= " <input type='text' id='taskname'class='delete-completed' name='fname' placeholder='Enter the status'></input>";
    c4.innerHTML = "<input type='checkbox' class='delete-checkbox' name='vehicle1' value='Bike'>";

}

function deleteSelectedRows(){
    const checkboxes = document.querySelectorAll('.delete-checkbox');

            // Iterate over checkboxes in reverse order to avoid issues when removing rows
            for (let i = checkboxes.length - 1; i >= 0; i--) {
                if (checkboxes[i].checked) {
                    // Get the parent row of the checkbox and remove it
                    checkboxes[i].closest('tr').remove();
                }
            }

}

function deleteCompleted(){
    const checkboxes = document.querySelectorAll('.delete-completed');

            // Iterate over checkboxes in reverse order to avoid issues when removing rows
            for (let i = checkboxes.length - 1; i >= 0; i--) {
                if (checkboxes[i].value=="Completed" || checkboxes[i].value=="completed") {
                    // Get the parent row of the checkbox and remove it
                    checkboxes[i].closest('tr').remove();
                }
            }

}

 function filterItems(value1) {
    console.log(value1);
    const checkboxes = document.querySelectorAll('.delete-completed');

    // If "All" is selected, show all rows
    if (value1 === "All") {
        checkboxes.forEach(checkbox => {
            checkbox.closest('tr').classList.remove('hidden');
        });
    } else {
        // Iterate over all checkboxes and filter rows based on checkbox value
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest('tr');
            console.log(checkbox.value);
            
            if (checkbox.value == value1) {
               
                row.classList.remove('hidden');  // Show the row if value matches
            } else {
                row.classList.add('hidden');  // Hide the row if value doesn't match
            }
        });
    }


}


