function convertToUppercase() {
    var inputText = document.getElementById("inputString").value;
    var uppercaseText = inputText.toUpperCase();
    document.getElementById("outputResult").innerText = "THANKS FOR COMING TO MY WEBSITE " + uppercaseText;
}