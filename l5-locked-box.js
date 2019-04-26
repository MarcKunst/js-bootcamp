// function promptDirection(question) {
//   let result = prompt(question);
//   if (result.toLowerCase() == "left") return "L";
//   if (result.toLowerCase() == "right") return "R";
//   throw new Error("Invalid direction: " + result);
// }

// function look() {
//   if (promptDirection("Which way?") == "L") {
//     return "a house";
//   } else {
//     return "two angry bears";
//   }
// }

// try {
//   console.log("You see", look());
// } catch (error) {
//   console.log("Something went wrong: " + error);
// }

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked() {
    if (box.locked === true) {
        box.unlock();
        box.content.push("gold piece");
        console.log(box.locked);
    }
  }
  
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  console.log(box.content);
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }

  finally {
    if (box.locked === false) {
        box.lock();
    }
  }
  
  console.log(box.locked);