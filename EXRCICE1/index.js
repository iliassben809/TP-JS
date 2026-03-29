function Calculer(){
    let mnt = Numberber(document.getElementById("nbr").value)

    let res = " "
    if (mnt > 500){
        res =mnt * 0.9
    }
    else {
        res = mnt
    } 
    document.getElementById("resultat").innerHTML = `le montant à payer: <b> ${res} Dhs </b> `
}

