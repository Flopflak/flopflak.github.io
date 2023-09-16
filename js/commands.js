function handleKeypress(e){
  console.log(e.key);
  if ("-.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ".includes(e.key)) {
    prompt += e.key;
  }
  if (e.key === "Backspace") {
    prompt = prompt.slice(0,-1);
  }
  if (e.key === "Enter") {
    handleCommand(prompt);
    prompt = "";
  }
  document.getElementById("text").lastChild.textContent = prompt;
}

async function handleCommand(command) {
    newLine();

    if (command === "fortune") {
        const fortunes = [
          "The early bird might get the worm, but the second mouse gets the cheese.",
          "You will find joy in unexpected places today.",
          "Don't look back, always move forward.",
          "Your code is poetic, even if compilers don't appreciate poetry."
        ];
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        await animateText(" " + randomFortune, 0, true);
    } 
    else if (command.startsWith("cowsay ")) {
        let message = command.split("cowsay ")[1];
        await animateText(" " + message, 0, true);
        await animateText("   \\   ^__^", 0, true);
        await animateText("    \\  (oo)\\_______", 0, true);
        await animateText("       (__)\\       )\\/\\", 0, true);
        await animateText("           ||----w |", 0, true);
        await animateText("           ||     ||", 0, true);
    }
    else if (command === "joke") {
        const jokes = [
          "Why did the programmer quit his job? Because he didn't get arrays.",
          "Why do programmers prefer dark mode? Because the light attracts bugs.",
          "How do you comfort a JavaScript bug? You console it!"
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        await animateText(" " + randomJoke, 0, true);
    }
    else if (command === "date") {
        const currentDate = new Date().toLocaleString();
        await animateText(" " + currentDate, 0, true);
    }
    else if (command === "hello") {
        await animateText(" Hello, world!", 0, true);
    }
    else if (command.startsWith("magicball ")) {
        const answers = [
          "Yes.", "No.", "Maybe.", "Signs point to yes.", "Ask again later.",
          "Cannot predict now.", "Outlook not so good.", "It is certain."
        ];
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        await animateText(" " + randomAnswer, 0, true);
    }
    else if (command.startsWith("roll ")) {
        const sides = parseInt(command.split("roll ")[1], 10) || 6;
        const rollResult = Math.floor(Math.random() * sides) + 1;
        await animateText(` Rolled a d${sides}: ${rollResult}`, 0, true);
    }
    else if (command === "weather") {
        await animateText(" Weather in the terminal: Cloudy with a chance of ASCII rain.", 0, true);
    }
    else if (command === "coffee") {
        await animateText(" Error: Coffee machine not found!", 0, true);
    }
    else if (command === "help") {
      await animateText(" ");
      await animateText("Available commands:", 0, true);
      await animateText("help - List available commands", 0, true);
      await animateText("ls - List files", 0, true);
      await animateText("cat [filename] - Display file content", 0, true);
      await animateText("pwd - Print working directory", 0, true);
      await animateText("echo [text] - Print text", 0, true);
      await animateText("clear - Clear the terminal screen", 0, true);
      await animateText("shutdown -h now - Exit the webpage", 0, true);
    } 
    else if (command.startsWith("cat ")) {
      let filename = command.split(" ")[1];
      switch(filename) {
        case "aboutme.txt":
          await animateText(" ");
          await animateText("This is Flopflak's professional bio...", 0, true);
          break;
        case "projects.txt":
          await animateText(" ");
          await animateText("List of professional projects...", 0, true);
          break;
        default:
          await animateText(" ");
          await animateText("File not found: " + filename, 0, true);
      }
    }
    else if (command === "ls") {
      await animateText(" ");
      await animateText("aboutme.txt  projects.txt", 0, true);
    }
    else if (command === "pwd") {
      await animateText(" ");
      await animateText("/home/flopflak", 0, true);
    }
    else if (command.startsWith("echo ")) {
      let textToEcho = command.split("echo ")[1];
      await animateText(" ");
      await animateText(textToEcho, 0, true);
    }
    else if (command === "clear") {
      document.getElementById("text").innerHTML = "";
      await animateText(" ");
      await commandPrompt();
      return;
    }
    else if (command === "shutdown -h now") {
      await animateText(" ");
      await animateText("Shutting down...", 0, true);
      await ExitPage();
    }
    else {
      await animateText(" ");
      await animateText("Command not found: " + command, 0, true); 
    }
    
    await commandPrompt();
}  

function becomeInteractive(){
    document.addEventListener("keydown", handleKeypress)
}
