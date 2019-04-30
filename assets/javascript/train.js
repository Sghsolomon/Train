

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBZm2iyM4aVE4Dn48F6Tew1hYqK6P7I3NY",
    authDomain: "traintime-f08e6.firebaseapp.com",
    databaseURL: "https://traintime-f08e6.firebaseio.com",
    projectId: "traintime-f08e6",
    storageBucket: "traintime-f08e6.appspot.com",
    messagingSenderId: "576870577693"
  };
  firebase.initializeApp(config);
   document.querySelector("#add-table").addEventListener("click", function(){
    var trainName = document.querySelector("#tname").value;
    var destination = document.getElementById("dname").value;
    var frequency = document.getElementById("frequency").value;
    var trainStart = document.getElementById("tstart").value;
    // clear input text
         document.getElementById("tname").value = "";
         document.getElementById("dname").value = "";
         document.getElementById("frequency").value = "";
     
     var obj = {
       trainName: trainName,
       destination: destination,
       frequency: frequency,
       trainStart: trainStart

       
     }
     
  
     firebase.database().ref().push(obj);
  
   })
   //var t,d,f;
   firebase.database().ref().on("child_added", function(snapshot){
       var snapsh = snapshot.val();
    let t = snapsh.trainName;
     let d = snapsh.destination;
    let f = snapsh.frequency;
    addHtmlTableRow(t,d,f);
})
  

function addHtmlTableRow(a,b,c){
      //get the table by Id
    var table = document.getElementById("table"),
    //create a new row
        newRow = table.insertRow(table.length);

        //create a new cell
        cell1 = newRow.insertCell(0),
        cell1.innerHTML = a;

        cell2 = newRow.insertCell(1),
        cell2.innerHTML = b;
        cell3 = newRow.insertCell(2),
        cell3.innerHTML =c;
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4);

         
        
        

        
     
     

        //cell the value in to raw cel
        
        
        

}
//function calculate(){
//var now = moment();
//var 

//}



