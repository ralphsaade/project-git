function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = `<b>${principal}</b> if you deposit ${principal.getElementById()}`;
    document.getElementById("result").innerHTML = `<b>${rate}</b> at interest rate of ${updateRate.getElementById()}`;
    document.getElementById("result").innerHTML = `<b>${interest}</b> You will receive an amount of ${rateval.getFullYear()}`;
    document.getElementById("result").innerHTML = `<b>${years}</b> in the year ${year.getElementById()}`;

}    

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    document.getElementById("slider").onchange = rangeSliderVal;
}
