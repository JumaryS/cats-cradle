function callChallengeBanner(num){
    num=num+1
    console.log("######"+ " " + "challenge" + num + " " + "######")
}
callChallengeBanner(0)


function getVowels(str){
    // let i = str[i]
    let i= 0
    let vowels= 'aeiou'
    while(i<str.length){
        if (vowels.includes(str[i])){
            console.log(str[i])
        }i++
    } 
    
}

getVowels("regular expressions are for term 2")
callChallengeBanner(1)


function firstFive(str){
    const vowels = 'aeiou'

    let count = 0
    let i=0

    while(i<str.length){
        if(vowels.includes(str[i]) && count <5){
            console.log(str[i])
            count=count +1
        }
        i= i+1
    }
}

firstFive("Hello!")
callChallengeBanner(2)


function everyThird(str){
let i = 2
while(i <str.length){
    console.log(str[i])
 i = i +3
} 
}
everyThird("I am the alfalfa and the omelette.")
callChallengeBanner(3)


function firstFourChars(str){
    let i = 0
    while(i<str.length && i<4){
        console.log(str[i])
        i++ 
    }
}
firstFourChars()