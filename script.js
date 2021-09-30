const songs = [
          "bensound-ukulele.mp3",
          "bensound-hey.mp3",
          "bensound-inspire.mp3",
          "bensound-sweet.mp3",
          "bensoudn-anewbeginning.mp3"
]

const palyer  = document.getElementById("player")


function createSonglist() {
  const list =  document.createElement("ol");
  for(let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item)
  }
  return list;
}


const songList = document.getElementById("songlist");
songList.appendChild(createSonglist())



const links = document.querySelectorAll("li")

for(const link of links) {
  link.addEventListener("click", setSong );

}


 function setSong(e) {
  document.getElementById("headphones").classList.remove("pulse")

  // console.log(e)
  const source = document.getElementById("source")
  source.src = "songs/" + e.target.innerText;



  document.getElementById("currentSong").innerText = `Now Playing ${e.target}`



  
  player.load();
  player.play();
  document.getElementById("headphones").classList.add("pulse")
}

function playAudio() {
  if(palyer.readyState) {
    palyer.play();
  }
}

function pauseAudio() {
  palyer.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
  const volume  = e.target.value;
  palyer.volume = volume
}

    function updateProgress() {

    if( palyer.currentTime > 0) {
      const progressBar = document.getElementById("progress");

      progressBar.value =(palyer.currentTime / palyer.duration) * 100
    }
    }
