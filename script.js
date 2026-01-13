// Typing effect
const roles = ["Frontend Developer", "Web Designer", "Engineering Student"];
let i = 0, j = 0;
const roleEl = document.querySelector(".role");

function type() {
    if (j < roles[i].length) {
        roleEl.textContent += roles[i][j++];
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (j > 0) {
        roleEl.textContent = roles[i].substring(0, --j);
        setTimeout(erase, 50);
    } else {
        i = (i + 1) % roles.length;
        setTimeout(type, 500);
    }
}
type();

// Modal
function openModal(title) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
