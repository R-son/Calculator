function solve() {
    let x = eval(document.getElementById("result").value);
    document.getElementById("result").value = x;
}

function add_to_expression(char) {
    document.getElementById("result").value += char;
}

function clear_input() {
    document.getElementById("result").value = "";
}
