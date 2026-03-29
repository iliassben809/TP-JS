let connexion = () => {
    let email = document.getElementById("InputEmail1").value
    let pwd = document.getElementById("InputPassword1").value

    if(email === "iliaspes971@gmail.com" && pwd === "12345678"){
        document.getElementById("success").style.display="block"
        document.getElementById("error").style.display="none"

    }
    else{
       document.getElementById("error").style.display="block"
       document.getElementById("success").style.display="none"

    }
}