/**
 * For this algorithm gou given a sentece a nd you need to count how often the word repeat
 */
let text = "Hola. que tal mi nombre es Miguel Maza Fernandez tengo 23 años! y vivo en la ciudad de cartagena, espero que es podemos todos entender lo que trato de decirle y aportarles"


function wordRepetitions(text:string){
    let dict:{[key:string]:number} = {}
    let separateWords = text.split(" ");
    for (const word of separateWords) {
        if(normalice(word) in dict){
            ++dict[normalice(word)]
        }else{
            dict[normalice(word)] = 1 
        }
    }
    console.log(dict)
}

function normalice(word:string){
    return word.toLocaleLowerCase().replace(/[,.!]/g,"")
}

wordRepetitions(text);