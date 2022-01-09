function compute()
{
   var principal = document.getElementById("principal").value;
   //check if number is positive 
   if(principal>0){
    

               
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest = principal*rate*years/100;

      var year = new Date().getFullYear()+parseInt(years);
  //to print the result into web page
      document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
 }  
else{
alert("Enter the positive number"); // to open an alert dialog box
document.getElementById("principal").focus();// focus on text box
} 
}
function updateRate()// for uodating the slider
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval; 
    }




   
        