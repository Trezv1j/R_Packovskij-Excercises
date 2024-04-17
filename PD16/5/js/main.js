function countCharacters(sentence) {
    let text = sentence.split(" ").join("");
    return text.length;
}

console.log(countCharacters("aa aa aa"));