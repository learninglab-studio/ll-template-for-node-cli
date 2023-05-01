const figlet = require('figlet')

const ansiColors = {
    black: `\u001b[30m`,
    red: `\u001b[31m`,
    green: `\u001b[32m`,
    yellow: `\u001b[33m`,
    blue: `\u001b[34m`,
    magenta: `\u001b[35m`,
    cyan: `\u001b[36m`,
    white: `\u001b[37m`,
    brightBlack: `\u001b[90m`,
    brightRed: `\u001b[91m`,
    brightGreen: `\u001b[92m`,
    brightYellow: `\u001b[93m`,
    brightBlue: `\u001b[94m`,
    brightMagenta: `\u001b[95m`,
    brightCyan: `\u001b[96m`,
    brightWhite: `\u001b[97m`,
    reset: `\u001b[0m`,
    gray: `\u001b[38;5;245m`,
    darkgray: `\u001b[38;5;239m`,
    bgBlack: `\u001b[40m`,
    bgRed: `\u001b[41m`,
    bgGreen: `\u001b[42m`,
    bgYellow: `\u001b[43m`,
    bgBlue: `\u001b[44m`,
    bgMagenta: `\u001b[45m`,
    bgCyan: `\u001b[46m`,
    bgWhite: `\u001b[47m`,
    bold: `\u001b[1m`,
    italic: `\u001b[3m`,
    underline: `\u001b[4m`,
    strikethrough: `\u001b[9m`,
  };
  
  function myTypeOfLog(things, color) {
    things.forEach(thing => {
      if (typeof thing == "string") {
        console.log(`${ansiColors[color]}${thing}${ansiColors.reset}`);
      } else {
        console.log(`${ansiColors[color]}${JSON.stringify(thing, null, 4)}${ansiColors.reset}`);
      }
    });
  }
  
  // Dynamically create export statements for each color
  Object.keys(ansiColors).forEach(color => {
    if (color !== "reset") {
      module.exports[color] = (...things) => {
        myTypeOfLog(things, color);
      };
    }
  });
  
  module.exports.divider = `#########################################################\n#########################################################`;
  
  module.exports.big = (word) => {
    console.log(figlet.textSync(word, {
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      }));
  }