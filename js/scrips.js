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