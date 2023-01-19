
  var test = document.getElementById("button");
  
  var n = document.getElementById("numberOne").value;
  var nTwo = document.getElementById("numberTwo").value; 
  var r = document.getElementById("result");
  
  

test.onclick = function (){


  var n = document.getElementById("numberOne").value;
  var nTwo = document.getElementById("numberTwo").value; 
  var r = document.getElementById("result");

    
    
/*
    for(var i = 0;i<10;i++){

        

        var calc = n * i;
    
       
       r.innerHTML=" "+n+" X "+nTwo+" = "+calc;
       

    
    }
    

*/    

var calc = n * nTwo;
    
       
r.innerHTML=" "+n+" X "+nTwo+" = "+calc;

}



for(var i = 0;i<11;i++){
var calc= 30 * i;
console.log("30 x "+i+" = "+calc);

}
