(function(back) {
  var FILE = "hidtoolkit.json";
  // Load settings
  var settings = require('Storage').readJSON(FILE, true) || {};

  function writeSettings() {
    require('Storage').writeJSON(FILE, settings);
  }
  
  // Show the menu
  E.showMenu({
    "" : {
      "title" : "HID Toolkit"
    },
    "< Back" : () => back(),
    "Target OS" : {
      value : (settings.targetos===undefined)?true:settings.targetos,
      format : v => v?"Win10":"Linux",
      onchange : v => {
        settings.targetos = v;
        writeSettings();
      }
    },
    "WIN+R Delay" : {
      value : (settings.typedelay===undefined)?0.5:settings.typedelay,
      min:0,max:10,step:0.1,
      onchange : v => {
        settings.typedelay = v;
        writeSettings();
      }
    },
  });
})
