
// TYPEWRITER
const text = "Ethical hacking = testing security with permission.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    }
}

if (document.getElementById("typewriter")) {
    typeWriter();
}

// DARK MODE TOGGLE
function toggleMode() {
    document.body.classList.toggle("light");
}
}
