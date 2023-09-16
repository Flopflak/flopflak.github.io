window.onload = function() {
  run();
}

const delay = 200;
const allow_audio = true 

var prompt = "";

async function commandPrompt() {
  await animateText("flopflak@FlopflaksLaptop: ~ % ")
  await animateText("  ", delay)
}

async function writeTexts() {
  await commandPrompt();
  await animateText("ls", delay, true, true)
  await animateText("aboutme.txt", 0, true)
  await commandPrompt();
  await animateText("cat aboutme.txt", delay, true, true)
  await animateText(`Hi! I'm Flopflak. I'm still studying, and programming is just a hobby of mine. I know Python, C#, a little bit of C, and Assembly. However, I mainly write in Python. If you want to reach out to me for any reason, from asking about my projects to telling me that my code is trash, you can email me at flopflak1@proton.me, or add me on Discord. My username is flopflak. I also have a Twitter account, @flopflak, where you can message me. I must point out that you'll get a response faster on Discord, since I do not check my email and Twitter daily.`, 0, true)
  await animateText("", 0, true)
  await animateText(`Currently, there are only two public projects on my Github: Surveyer and PrivateOffice. Surveyer will not receive any more updates, but PrivateOffice might. (I'm not promising, though! :D) I don't have anything more to say at the moment, so have a great day and thanks for visiting! Also, if you want to get redirected to my Github Profile, just "turn off" the machine. (shutdown -h now)`, 0, true)
  await commandPrompt();
  becomeInteractive();
}

function run(){
  writeTexts().then(()=>{return;});
}
