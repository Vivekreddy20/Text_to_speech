let speach =new SpeechSynthesisUtterance();
console.log(speach);
let voices=[];
let voiceselect=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    voices.forEach((voice,i)=> 
    (voiceselect.options[i]=new Option(voice.name,i)));
    
}
voiceselect.addEventListener('change',()=>{
    speach.voice=voices[voiceselect.value]
});


document.querySelector("button").addEventListener('click',()=>{
    speach.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speach);
}) 