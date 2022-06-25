document.querySelector(".user-link").addEventListener("click", linkClick);

function linkClick() {
    document.querySelector(".user-heading").innerHTML = "Formerly Jane Doe"
}


document.querySelector(".accept-button1").addEventListener("click", acceptClick1);
document.querySelector(".accept-button2").addEventListener("click", acceptClick2);

document.querySelector(".reject-button1").addEventListener("click", rejectClick1);
document.querySelector(".reject-button2").addEventListener("click", rejectClick2);


function acceptClick1() {
    this.parentElement.parentElement.remove();
    document.getElementById("connection-requests").innerHTML--;
    document.getElementById("your-connections").innerHTML++;
}

function acceptClick2() {
    this.parentElement.parentElement.remove();
    document.getElementById("connection-requests").innerHTML--;
    document.getElementById("your-connections").innerHTML++;
}

function rejectClick1() {
    this.parentElement.parentElement.remove();
    document.getElementById("connection-requests").innerHTML--;
}

function rejectClick2() {
    this.parentElement.parentElement.remove();
    document.getElementById("connection-requests").innerHTML--;
}