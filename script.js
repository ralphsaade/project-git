function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = `<b>${interest}</b> to be paid by year ${year.getFullYear()}`;
}
function rangeSliderVal(e) {
    e.preventDefault();
    let rangeSliderValue = e.target.value;
    document.getElementById("rangeOutput").innerHTML = `${rangeSliderValue}`;
}     
document.getElementById("slider").onchange = rangeSliderVal;
