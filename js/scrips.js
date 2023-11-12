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
    let textArray = text.split(" ");
    textArray.forEach(function (element, index) {
        if (word === element) {
            const bold = document.createElement("strong");
            bold.append(element);
            p.prepend(bold);
        } else {
            p.append(element);
        }
        if (index !== (textArray.length - 1)) {
            p.append(" ");
        }
    });
    return p;
}