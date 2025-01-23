const setofwords = ["Mango, often called the \'King of Fruits,\' is a tropical delight cherished across the globe.",
    "Its golden-yellow flesh is juicy, sweet, and packed with flavor, making it a favorite in desserts, smoothies, and salads.",
    "Originating in South Asia, the mango tree is revered not just for its fruit but also for its shade-providing canopy.",
    "There are hundreds of mango varieties, from the Alphonso with its rich aroma to the Kent, known for its smooth, fiberless texture.",
    "Beyond its taste, mangoes are a powerhouse of nutrients.",
    "Rich in vitamins A and C, they boost immunity and promote healthy skin.",
    "In many cultures, mangoes hold cultural significance, often symbolizing prosperity and love.",
    "Whether sliced, diced, or blended, mangoes always add a tropical touch to any dish.",
    "So, the next time you bite into this luscious fruit, remember you're savoring a piece of nature's sweetest artistry!",
    ];

const msg = document.getElementById("message");
const userwords = document.getElementById("mywords");
const btn = document.getElementById("button");
let startTime, endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setofwords.length);
    //console.log(randomNumber);
    msg.innerText = setofwords[randomNumber];
    let date = new Date();
    startTime = new Date().getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    //console.log(totalTime);

    let totalStr = userwords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);
    let finalmsg = " You can type total "+speed+" words per minute.";
    finalmsg += comparedWords(msg.innerText, totalStr);
    msg.innerHTML = finalmsg;


}

const comparedWords = (correctWords, userWords) =>{
    let words1 = correctWords.split(" ");
    let words2 = userWords.split(" ");
    let cnt = 0;

    words1.forEach(function(item, index){
        if(item == words2[index]){
            cnt++;
        }
    })

    let errorWords = ( words1.length - cnt);
    return (cnt + " correct out of " + words1.length+ " words and the total number of error are "+ errorWords+".");
}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    //console.log(response);
    return response;


}
btn.addEventListener("click", function(){
    //console.log(this);
    if(this.innerText == 'Start'){
        userwords.disabled = false;
        playGame();
    }else if(this.innerText == 'Done'){
        userwords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }

})


