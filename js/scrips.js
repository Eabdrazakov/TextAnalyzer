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
    if ((isEmpty(text)) || (isEmpty(word))) {
        return null;
    }
    const p = document.createElement("p");
    let textArray = text.split(" ");
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

function wordFrequency(text) {
    if (isEmpty(text)) {
        return 0;
    }

    const textArray = text.split(" ");
    let resultArray = [];
    textArray.forEach(function (word) {
        let isFound = false;
        resultArray.forEach(function (element) {
            if (element[0].toLowerCase() === word.toLowerCase()) {
                element[1] += 1;
                isFound = true;
            }
        });
        if ((!isFound) && (word != "")) {
            resultArray.push([word.toLowerCase(), 1]);
        }
    });
    resultArray.sort(function (a, b) {
        return b[1] - a[1];
    });


    return resultArray;
}



//UI Logic

function handleFormSubmission(event) {
    document.getElementById("btn-reset").setAttribute("id", "hidden");
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

    const resultArray = wordFrequency(passage);
    console.log(resultArray);


}


function handleReset() {
    document.getElementById("total-count").innerText = "";
    document.getElementById("selected-count").innerText = "";
    document.getElementById("bolded-passage").innerText = "";
    document.getElementById("form-reset").reset();
    document.getElementById("btn-reset").setAttribute("id");

}

window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", handleFormSubmission);
    document.getElementById("btn-reset").addEventListener("click", handleReset);
});