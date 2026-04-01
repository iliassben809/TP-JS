let data = JSON.parse(localStorage.getItem("contacts")) || [
    { nom: "Abbid Karami", num_tel: "+212 2344665" },
    { nom: "Badr Kobaa", num_tel: "+212 886890" },
    { nom: "Bahia Soeur", num_tel: "+212 908078" }
]

let ajouter = () => {
    let nom = document.getElementById("nom").value
    let num_tel = document.getElementById("phone").value
    data.push({
        nom,
        num_tel
    })

    localStorage.setItem("contacts", JSON.stringify(data));
    afficher()
    console.log(data)
}

function afficher() {
    let filtre = document.getElementById("search").value;
    let txt = "";

    let resultats = data.filter(contact => contact.nom.includes(filtre));
    resultats.forEach(function (contact, i) {
        txt += `
            <div class="contact">
                <div class="left">
                    <a href="contact.html" onclick="affiche_infos(${i})">
                        <img src="images/utilisateur.png" alt="contact">
                    </a>
                    <span class="name">${contact.nom}</span>
                </div>
                <span class="supp" onclick="supprimer(${i})">X</span>
            </div>
        `
    })
    document.getElementById("infos").innerHTML = txt
}

function supprimer(index) {
    data.splice(index, 1)
    localStorage.setItem("contacts", JSON.stringify(data));
    afficher()
}

let affiche_infos = (index) => {
    localStorage.setItem("contactChoisi", JSON.stringify(data[index]));
}
let contact = JSON.parse(localStorage.getItem("contactChoisi"));

if (contact && document.getElementById("nom_contact")) {
    document.getElementById("nom_contact").innerText = contact.nom;
    document.getElementById("num_contact").innerText = contact.num_tel;
}

afficher()