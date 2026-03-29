
let  datapayer= ['Maroc', 'Mauritanie', 'Algérie', 'Tunisie', 'Libye', 'Egypte']
let txt = ""
data.forEach(function (nav) {
    txt += `<li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                 ${nav}
            </a>
            </li>`
}
)
document.getElementById("container").innerHTML = txt








