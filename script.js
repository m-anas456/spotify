console.log("welcome");
//var

let masterplayer=document.getElementById('masterplay');
let songindex=0;
let bar=document.getElementById('bar');
let audioElement = new Audio('songs/1.mp3');

let pause=document.getElementById('pause');
let gif=document.getElementById('gif');
let songsitems=Array.from(document.getElementsByClassName("songitem"))


// array 
let songs=[
    
        {filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
        {filepath:"song/2.mp3",coverpath:"covers/2.jpg"},
        {filepath:"song/3.mp3",coverpath:"covers/3.jpg"},
        {filepath:"song/4.mp3",coverpath:"covers/4.jpg"},
        {filepath:"song/5.mp3",coverpath:"covers/5.jpg"},
    
]
// audioElement.play();





masterplayer.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        gif.style.opacity=0
    }
})

audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    bar.value=progress

})

bar.addEventListener('change',()=>{
    audioElement.currentTime=(bar.value*audioElement.duration)/100;
})

let p1=document.getElementById('play1');
let p2=document.getElementById('play2');
let p3=document.getElementById('play3');
let p4=document.getElementById('play4');
let p5=document.getElementById('play5');
p1.addEventListener('click',()=>{
    
    audioElement.play();
})
p2.addEventListener('click',()=>{
    let audioElement = new Audio('songs/2.mp3');
    audioElement.play();
    
    
})
p3.addEventListener('click',()=>{
    let audioElement = new Audio('songs/3.mp3');
    audioElement.play();
})
p4.addEventListener('click',()=>{
    let audioElement = new Audio('songs/4.mp3');
    audioElement.play();
})
p5.addEventListener('click',()=>{
    let audioElement = new Audio('songs/5.mp3');
    audioElement.play();
})


 
