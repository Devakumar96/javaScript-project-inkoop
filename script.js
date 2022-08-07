const value = document.getElementById("demo");
const error = document.getElementById('res');

function decisionDemo() {
    if (value.value < 0) {
        error.innerHTML = 'enter a positive value';
    } else if (value.value > 0) {
        if (parseInt(value.value) % 2 === 0) {
            error.innerHTML = `${parseInt(value.value)+2}, ${parseInt(value.value)+4}, ${parseInt(value.value)+6}`;

        } else { error.innerHTML = `${parseInt(value.value)+2}, ${parseInt(value.value)+4}, ${parseInt(value.value)+6}`; }
    }
}