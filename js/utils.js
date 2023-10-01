async function animateText(text, delay = 0, newline = false, playaudio = false) {
    var p = document.getElementById("text");
    var span = document.createElement('span');
  
    p.appendChild(span);
    for (let i = 0; i < text.length; i++) {
        if (playaudio && allow_audio) { 
          new Audio("type.wav").play();
        }
        span.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, delay));
    }
  
  
    if (newline) {
        p.appendChild(document.createElement('br')); // Add a new line in HTML
    }
    document.getElementById("text").lastChild.scrollIntoViewIfNeeded();
  }
  
  function newLine(){
    document.getElementById("text").appendChild(document.createElement('br'));
  }
  
  function ExitPage() {
    return new Promise((resolve) => {
      document.addEventListener('keydown', onKeyHandler);
      function onKeyHandler(e) {
        if (e.keyCode) {
          document.removeEventListener('keydown', onKeyHandler);
          window.location.href = "https://github.com/Flopflak"
          resolve();
        }
      }
    });
}

async function getPublicRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    const repoNames = data.map(repo => repo.name);
    return repoNames;
}