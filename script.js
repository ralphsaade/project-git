function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years)
    result = document.getElementById("result");
    result.innerHTML=
    "If you deposite" + " " + (principal) + " <br> " + 
    "At an interest rate of" + " " + (rate) + " <br> "+ 
    "You will recieve an amount of" + " " + (principal * years * rate / 100) + " <br>" + 
    "In the year" + " " + (year);
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function validation() {
    var num = /^[0]+$/;
    if (principal.value.match(num))  {
    alert("Enter Positive Number");
    }else{null;
         }
}
