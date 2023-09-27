// alert("De link ligt goed")
function showTafel()
{
    let uitkomst = 0
    let teller = 1
    //om te displayen heb ik de volgende variabele nodig
    let tekst = ""
    //haal de waarde op van het veld 'inputTafelvan' dat de gebruiker ingevuld heeft
    let tafelvan = document.getElementById("inputTafelvan").value
    //haal de waarde op van het veld 'inputTafeltot' dat de gebruiker ingevuld heeft
    let tafeltot = document.getElementById("inputTafeltot").value
    while(teller <= tafeltot)
    {
        uitkomst = teller * tafelvan
        tekst += teller + " x " + tafelvan + " = " + uitkomst + "<br>"
        //de teller met 1 ophogen
        teller++
    }
//nu moet de inhoud van tekst nog in mijn html gepusht worden
document.getElementById("tafel").innerHTML = tekst
document.getElementById("tafelheader").innerHTML = "Tafel van " + tafelvan
}