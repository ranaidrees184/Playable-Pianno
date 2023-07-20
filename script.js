let keyPress=document.querySelectorAll(".piano-buttons .key");
let volume=document.querySelector(".slider");

let audio =new Audio("tunes/a.wav")
let playtunes= function playtunes(key){
    audio.src=`tunes/${key}.wav`
    audio.play();
   }
   
keyPress.forEach(key =>{

key.addEventListener("click",()=>playtunes(key.dataset.key));
    // console.log(key.dataset.key);
});

const handlevolume=function handlevolume(e){
  audio.volume = e.target.value;
}

volume.addEventListener("input",handlevolume)
