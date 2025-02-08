function checkAll() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var sub = document.getElementById("sub").value;
    var mes = document.getElementById("mes").value;

    if (name.length < 1) {
        document.getElementById("misname").innerHTML = "Please fill out your name.";
    } else if (name.length > 100) {
        document.getElementById("misname").innerHTML = "Your name should not exceed 100 characters.";
    } else {
        document.getElementById("misname").innerHTML = "";
    }

    if (mail.length < 1) {
        document.getElementById("mismail").innerHTML = "Please fill out your email.";
    } else if (mail.length > 100) {
        document.getElementById("mismail").innerHTML = "Your email should not exceed 100 characters.";
    } else {
        document.getElementById("mismail").innerHTML = "";
    }

    if (sub.length < 50) {
        document.getElementById("missub").innerHTML = "Subject should not shorter than 50 characters.";
    } else if (sub.length > 250) {
        document.getElementById("missub").innerHTML = "Subject should not exceed 250 characters.";
    } else {
        document.getElementById("missub").innerHTML = "";
    }

    if (mes.length < 1) {
        document.getElementById("mismes").innerHTML = "Please fill out your message";
    } else if (mes.length > 500) {
        document.getElementById("mismes").innerHTML = "Message should not exceed 500 characters.";
    } else {
        document.getElementById("mismes").innerHTML = "";
    }
}