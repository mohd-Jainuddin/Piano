let allkey = document.querySelectorAll(".piano .key");

allkey.forEach((key,i)=>{
    key.onclick = ()=>{
        const music_url = `piano-sound/key${i+1}.mp3`;
        const audio = new Audio(music_url);
        audio.play(audio)
    }
})