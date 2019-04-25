function addHtmlTableRow(){
    //get the table by Id
    var table = document.getElementById("table"),
    //create a new row
        newRow = table.insertRow(table.length);

        //create a new cell
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),

        //get value from input text
        tname = document.getElementById("tname").value,
        dname = document.getElementById("dname").value,
        frequency = document.getElementById("frequency").value,
        narrival = document.getElementById("narrival").value,
        maway = document.getElementById("maway").value;

        // clear input text
     document.getElementById("tname").value = "";
     document.getElementById("dname").value = "";
     document.getElementById("frequency").value = "";
     document.getElementById("narrival").value = "";
     document.getElementById("maway").value = "";

        //cell the value in to raw cell
        cell1.innerHTML = tname;
        cell2.innerHTML = dname;
        cell3.innerHTML = frequency;
        cell4.innerHTML = narrival;
        cell5.innerHTML = maway;
        
        

}

