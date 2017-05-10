exports.words = (string) =>{
    string = string.replace(/\s+/g, ' ');

    let wordCount = {};

    let stringArray; //An array to store the split string
   
    if (string.includes("\t")){
        stringArray = string.split("\t"); //this block checks if the string contains a tab and Splits into an array using tab as a separator
    }
    
    else if(string.includes("\n")){
        stringArray = string.split("\n"); //this block checks if the string contains a newline symbol and Splits into an array using \t as a separator
    }
    else{
        
        stringArray = string.split(" "); //this block checks for a whitespace and Splits the into an array using the whitespace as a separator
    }

    
    stringArray.map(function(word){ // the built in  map function in javaScript is used to iterate over an array and implement a function
        if(wordCount.hasOwnProperty(word)){
            wordCount[word] = wordCount[word] + 1;
        }

        else{
            wordCount[word] = 1;
        }
    });
    return wordCount;
};
