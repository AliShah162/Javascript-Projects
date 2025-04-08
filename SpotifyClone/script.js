console.log("Welcome to spotify");
// initialize Variables
let masterPlay=document.getElementById('MasterPlay');
let mastersongname=document.getElementById('mastersongname');
let myprogressbar=document.getElementById('myprogressbar')
let audioElement = new Audio('songs/1.mp3');
let songitems=Array.from(document.getElementsByClassName('songitem'))
let songs=[
    {songName:"Two Feet-Call Out My Name",FilePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Two Feet-Blame Me",FilePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Two Feet-Call Me, I Still Love You",FilePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Two Feet-Caviar",FilePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Two Feet-Ella",FilePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Two Feet-Felt Like Playing Guitar",FilePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Two Feet-Fire",FilePath:"songs/7.mp3",coverPath:"covers/7.jpg"}
]

songitems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        makeAllPlays();
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        makeAllPlays();
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        const currentIcon = e.target; //clicked icon a jaye ga
        const isPlaying = currentIcon.classList.contains('fa-pause'); //Check if it's currently playing

        if (isPlaying) {
            //If its currently playing, pause the audio and change the icon to play
            audioElement.pause();
            currentIcon.classList.remove('fa-pause');
            currentIcon.classList.add('fa-play');
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
        } else {
            //If its not playing, play the selected song
            makeAllPlays(); //Reset all icons to play
            Index = parseInt(currentIcon.id);
            currentIcon.classList.remove('fa-play');
            currentIcon.classList.add('fa-pause');
            audioElement.src = `songs/${Index}.mp3`;
            mastersongname.innerText = songs[Index].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
        }
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(Index>=6){
        Index = 0
    }
    else{
        Index += 1;
    }
    audioElement.src = `songs/${Index}.mp3`;
    mastersongname.innerText = songs[Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(Index<=0){
        Index = 0
    }
    else{
        Index -= 1;
    }
    audioElement.src = `songs/${Index+1}.mp3`;
    mastersongname.innerText = songs[Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})