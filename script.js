// Show a different fact each time the button is clicked.
const facts = [
    "A bit is a binary digit. Its value can be either 0 or 1.",
    "HTML structures a webpage, while CSS controls its appearance.",
    "Java and JavaScript are different programming languages.",
    "An algorithm is a sequence of steps used to solve a problem.",
    "Debugging means finding and fixing errors in a program.",
    "JavaScript can update parts of a webpage without reloading it."
];

const factButton = document.getElementById("fact-button");
const factText = document.getElementById("fact-text");
let factIndex = 0;

if (factButton && factText) {
    factButton.addEventListener("click", function () {
        factText.textContent = facts[factIndex];
        factIndex = (factIndex + 1) % facts.length;
        factButton.textContent = "Show Another Fact";
    });
}