function fun() {
    let number = document.getElementById('id').value;
    var randomButton = Math.ceil(Math.random() * number);
    for (let i = 1; i <= number; ++i) {
        button = document.createElement("button");
        button.innerHTML = 'Button';
        document.getElementById("display").appendChild(button);
        button.onclick = function () {
            if (randomButton == i) {
                paragraf.textContent = "YOU WON";
            } else {
                paragraf.textContent = "YOU LOST";
            }
        };
    }
}
