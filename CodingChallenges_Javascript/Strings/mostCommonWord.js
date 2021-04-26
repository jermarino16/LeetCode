/**
 * Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned.
 * It is guaranteed there is at least one word that is not banned, and that the answer is unique.
 * The words in paragraph are case-insensitive and the answer should be returned in lowercase.
 */
function mostCommonWord(paragraph, banned) {
    let notDigitWordOrWhiteSpaceRegex = new RegExp(/[!?',;.]/g);
    let twoOrMoreWhiteSpacesRegex = new RegExp(/\s{2,}/g);

    //Trim the sentence to only words with one space in between.
    paragraph = paragraph.replace(notDigitWordOrWhiteSpaceRegex, " ").replace(twoOrMoreWhiteSpacesRegex, " ").toLowerCase();

    const words = paragraph.split(" ");

    //iterate through words and get a map of count of occurrences.
    let wordCount = new Map();

    for (let i = 0; i < words.length; i++){
        if (wordCount.has(words[i])){
            wordCount.set(words[i], wordCount.get(words[i]) + 1);
        }else{
            wordCount.set(words[i], 1);
        }
    }

    //now that we have counted words that appeared, find most frequent word
    let response = null;
    let mostFrequentCount = 0;

    for (let i = 0; i < words.length; i++){
        if (!banned.includes(words[i]) && wordCount.get(words[i]) > mostFrequentCount){
            response = words[i];
            mostFrequentCount = wordCount.get(words[i]);
        }
    }

    return response;
}

module.exports = mostCommonWord;