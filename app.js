window.onload = function() {
  run();
}

async function animateText(text, delay = 0, newline = false, playaudio = false) {
  var p = document.getElementById("text");
  var span = document.createElement('span');

  p.appendChild(span);
  for (let i = 0; i < text.length; i++) {
      if (playaudio) { 
        new Audio("type.wav").play();
      }
      span.textContent += text[i];
      await new Promise(resolve => setTimeout(resolve, delay));
  }


  if (newline) {
      p.appendChild(document.createElement('br')); // Add a new line in HTML
  }
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

async function commandPrompt() {
  await animateText("flopflak@FlopflaksLaptop: ~ % ")
  await animateText("  ", 200)
}

async function writeTexts() {
  await commandPrompt();
  await animateText("ls", 100, true, true)
  await animateText("aboutme.txt", 0, true)
  await commandPrompt();
  await animateText("cat aboutme.txt", 200, true, true)
  await animateText(`Hi! I'm Flopflak. I'm still studying, and programming is just a hobby of mine.
  I know Python, C#, a little bit of C, and Assembly. However, I mainly write in Python.
  If you want to reach out to me for any reason, from asking about my projects to telling me that
  my code is trash, you can email me at flopflak1@proton.me, or add me on Discord. My
  username is flopflak. I also have a Twitter account, @flopflak, where you can message
  me. I must point out that you'll get a response fastest on Discord, since I do not
  check my email and Twitter daily.`, 0, true)
  await animateText("", 0, true)
  await animateText(`Currently, there are only two public projects on my Github: Surveyer and PrivateOffice.
  Surveyer will not receive any more updates, but PrivateOffice might. (I'm not promising, though! :D) I don't have
  anything more to say at the moment, so have a great day and thanks for visiting!`, 0, true)
  await animateText("", 0, true)
  await commandPrompt();
  await animateText("shutdown -h now", 100, true, true)
  await animateText("Press enter to proceed!", 0)
  await ExitPage();
}



function run(){
  writeTexts().then(()=>{return;});
}
