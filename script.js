// alert("De link ligt goed")
let uitkomst = 0
let teller = 1
//om te displayen heb ik de volgende variabele nodig
let tekst = ""

while(teller < 11)
{
    uitkomst = teller * 9
    tekst += "<div class='row'><div class='col-1 text-end'>" + teller + "</div>" + 
    "<div class='col-2'> x 9 =</div>"+
    "<div class='col-1 text-end'>" + uitkomst + "</div></div>"
    //de teller met 1 ophogen
    teller++
}
//nu moet de inhoud van tekst nog in mijn html gepusht worden
document.getElementById("tafel").innerHTML = tekst