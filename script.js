function compute()
{
    var principalObj = document.getElementById("principal");
    var principal = principalObj.value;
    if(principal <= 0)
    {
        alert("Enter a positive number.");
        principalObj.focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100.0;
    var year = new Date().getFullYear() + parseInt(years);
    var out = 'If you deposit <span class="hitext">' + principal + '</span>,<br/>'
        + 'at an interest rate of <span class="hitext">' + rate + '%</span>.<br/>'
        + 'You will receive an amount of <span class="hitext">' + interest + '</span>,<br/>'
        + 'in the year <span class="hitext">' + year + '</span><br/>';
    document.getElementById("result").innerHTML = out;
        
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
