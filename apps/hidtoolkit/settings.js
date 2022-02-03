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
    "WIN+R Delay" : {
      value : settings.typedelay || 0.5,
      min:0,max:10,step:0.1,
      onchange : v => {
        settings.typedelay = v;
        writeSettings();
      }
    },
  });
})