// Utility Logic

function isEmpty(testString) {
    return (testString.trim().length === 0);
}

//Business Logic

function wordCounter(text) {
    if (isEmpty(text)) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function (word) {
        if (!Number(word))
            wordCount++;
    });
    return wordCount;
}

function numberOfOccurrencesInText(word, text) {
    if (isEmpty(text)) {
        return 0;
    }
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++;
        }
    });
    return wordCount;

}

function boldPassage(word, text) {
    if ((isEmpty(text)) || (isEmpty(text))) {
        return null;
    }
    const p = document.createElement("p");
    let textArray = text.split(/\b/);
    textArray.forEach(function (element, index) {
        const bold = document.createElement("strong");

        if (word.toLowerCase() === element.toLowerCase()) {

            bold.innerText = element;
            p.append(bold);
        } else {
            p.append(element);
        }
        if (index !== (textArray.length - 1)) {
            p.append(" ");
        }
    });
    return p;
}


function handleFormSubmission(event) {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);

    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;

    let boldedPassage = boldPassage(word, passage);
    if (boldedPassage) {
        document.querySelector("div#bolded-passage").append(boldedPassage);
    } else {
        document.querySelector("div#bolded-passage").innerText = null;
    }

    document.getElementById("btn-reset").removeAttribute("id");
}

function handleReset() {
    document.getElementById("total-count").innerText = "";
    document.getElementById("selected-count").innerText = "";
    document.getElementById("bolded-passage").innerText = "";
    document.getElementById("form-reset").reset();
    document.getElementById("btn-reset").getAttribute("id");

}

window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", handleFormSubmission);
    document.getElementById("btn-reset").addEventListener("click", handleReset);
});