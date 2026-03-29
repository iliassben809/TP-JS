let data = [];

function Ajouter() {
    let name = document.getElementById("ajouterName");

    if (name.value.trim() === "") return;

    data.push(name.value);
    name.value = "";

    afficher();
}

function afficher() {

    let txt = "";

    if (data.length > 0) {

        document.getElementById("table").style.display = "table";
        document.getElementById("empty").style.display = "none";

        data.forEach(function (stagiaire, i) {

            txt += `
            <tr>
                <td>${i + 1}</td>
                <td class="space">
                    <p>${stagiaire}</p>
                    <p><button onclick="supprimer(${i})">X</button></p>
                </td>
            </tr>
            `;

        });

        document.getElementById("tableBody").innerHTML = txt;

    } else {

        document.getElementById("table").style.display = "none";
        document.getElementById("empty").style.display = "block";

    }
}

function supprimer(index) {

    data.splice(index, 1);
    afficher();

}

afficher();