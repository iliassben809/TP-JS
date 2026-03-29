
let data = [
    {
        nom : "Ahmed",
        cc : [12, 14, 11],
        efm : 13.5
    },
    {
        nom : "Samia",
        cc : [11, 18, 10],
        efm : 6
    }
]

function remplirInputs(val){
    document.getElementById("nom").value = val === "" ? "" : val.nom
    document.getElementById("cc1").value = val === "" ? "" : val.cc[0]
    document.getElementById("cc2").value = val === "" ? "" : val.cc[1]
    document.getElementById("cc3").value = val === "" ? "" : val.cc[2]
    document.getElementById("efm").value = val === "" ? "" : val.efm
}

function getInputValue(){
    let nom = document.getElementById("nom").value
    let cc1 = Number(document.getElementById("cc1").value)
    let cc2 = Number(document.getElementById("cc2").value)
    let cc3 = Number(document.getElementById("cc3").value)
    let efm = Number(document.getElementById("efm").value)

    if(nom==""|| cc1==0|| cc2==0|| cc3==0|| efm==0){
        alert("Vous devez remplir tous les champs")
        return 0
    }else{
        let stg = {
            nom,
            cc : [cc1, cc2, cc3],
            efm
        }

        return stg
    }
    
}

function Ajouter(){
    let res = getInputValue()
    if(res !== 0){
        data.push(res)
        afficher()
        remplirInputs("")
    }
}

function afficher(){
    let txt = ""
    let totalNotes = 0
    let nbrValide = 0
data.forEach(function (stg, i){

    stg.moy = ((stg.cc[0]+stg.cc[1]+stg.cc[2])/3)*0.33 + stg.efm*0.67 
    totalNotes += stg.moy
    if (stg.moy>=10){
        nbrValide++
    }

    txt += `
        <tr>
            <td>${stg.nom}</td>
            <td>${stg.cc[0]}</td>
            <td>${stg.cc[1]}</td>
            <td>${stg.cc[2]}</td>
            <td>${stg.efm}</td>
            <td>${stg.moy.toFixed(2)}</td>
            <td>${stg.moy >= 10 ? "V":"NV"}</td>
            <td>
                <button type="button" onclick="modifier(${i})" class="btn btn-warning">Modifier</button>
                <button type="button" onclick="supprimer(${i})" class="btn btn-danger">Supprimer</button>
            </td>
        </tr>
    `
})
document.getElementById("tbody").innerHTML = txt


let nbrStg = data.length
let moyClasse = totalNotes/nbrStg
let pr = (nbrValide/nbrStg)*100
let statistic = `
    <p>Nbr de stagiaire: <span>${nbrStg}</span></p>
    <p>Moyenne de la classe: <span>${moyClasse.toFixed(2)}</span></p>
    <p>Nbr valide: <span>${nbrValide}</span></p>
    <p>Nbr non valide: <span>${nbrStg-nbrValide}</span></p>
    <p>Pourcentage: <span>${pr.toFixed(2)}%</span></p>
`
document.getElementById("statistic").innerHTML = statistic
}

afficher()

function supprimer(idx){
    data.splice(idx, 1)
    afficher()
}

let update = document.getElementById("update")
let add = document.getElementById("add")
let pos

function modifier(idx){
    update.style.display ="block"
    add.style.display ="none"
    
    remplirInputs(data[idx])

    pos = idx
}


function confirmer(){
    update.style.display ="none"
    add.style.display ="block"

    let stg = getInputValue()

    data[pos].nom = stg.nom
    data[pos].cc[0] = stg.cc[0]
    data[pos].cc[1] = stg.cc[1]
    data[pos].cc[2] = stg.cc[2]
    data[pos].efm = stg.efm

    afficher()
    remplirInputs("")
}

// CRUD : C = Create, R = Read, U = Update, D= Delete

