function getClickId(dati){ 
    document.getElementById("digit").value += dati;
    return dati;
 }
 function operazione() { 
    const approx = eval(document.getElementById("digit").value);
    document.getElementById("digit").value = approx.toFixed(2); 
 }
 function cancella() { 
    document.getElementById("digit").value = ""; 
 }