document.getElementById("btnListener").addEventListener('click',function(){
  var charCode=64;
  var table=document.createElement("table");
  for(let i=0;i<9;i++){
    var tr=document.createElement("tr");     
    table.appendChild(tr);
    for (let j = 0; j < 9; j++) {
      var td=document.createElement("td");  
      charCode=64;
      const charPrint=String.fromCharCode(charCode+i)
      td.appendChild(document.createTextNode(charPrint  + " " + j));  
      tr.appendChild(td);
    }
  document.getElementById("show").appendChild(table); 
  }
   
  var cell = table.getElementsByTagName("td")
  for (let index = 1 ; index < 81; index++) {
    if(index % 2 == 0){ 
    cell[index].className = "even";  
    }else{    
    cell[index].className = "odd";     
    }        
  }
  for (let i = 1; i < 9  ; i++) {
    const k=9;
    cell[i].className = "none";  
    cell[k*i].className="none";
    cell[0].innerText="";
    cell[k*i].innerText=String.fromCharCode(charCode+i);      
    cell[i].innerText=i;
  }

});
