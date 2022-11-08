function compute()
{
    var principal=document.getElementById("principal").value;
    if (principal <= 0) {
    alert("Enter a positive number");
    window.location.reload();
	  }



    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var amount=principal*years*rate/100;
    var year=new Date().getFullYear()+parseInt(years);
    const tagopen="<mark>";
    const tagclose="</mark>";
    document.getElementById("result").innerHTML=
    "If you deposit "+tagopen+principal+tagclose+",\<br\>at an interest rate of "
    +tagopen+rate+tagclose+"%\<br\>You will receive an amount of "
    +tagopen+amount+tagclose+",\<br\>in the year "+tagopen+year+tagclose+"\<br\>";
        
}

function updateRate()
{
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
   
