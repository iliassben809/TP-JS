let data = [
    ["ilias", 12 , 16.5 ,15, 18],
    ["mounib", 15 , 10.5 ,10, 20]
]

let ajouter = () => {

    let name = document.getElementById("namestg").value
    let cc1 = Number(document.getElementById("cc1").value)
    let cc2 = Number(document.getElementById("cc2").value)
    let cc3 = Number(document.getElementById("cc3").value)
    let efm = Number(document.getElementById("efm").value)

    data.push([name, cc1, cc2 , cc3 , efm])

    afficher()
}

function afficher(){

    let txt =""

    data.forEach(function(stg , i){

        let moy = ((stg[1] + stg[2] + stg[3])/3)*0.33 + stg[4]*0.67

        txt += `
        <div class="card ${moy>=10 ? "vert" : "red"}">

            <div class="num">${i+1}</div>

            <div class="stagaire">
                <p>${stg[0]}</p>
                <p>${moy.toFixed(2)}</p>
            </div>

            <div>
                <button onclick="supprimer(${i})">X</button>
            </div>

        </div>
        `
    })

    document.getElementById("cards").innerHTML =txt
}

let supprimer = idx => {
    data.splice(idx, 1)
    afficher()
}

afficher()